<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAssetRequest;
use App\Models\Asset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ArtistStudioController extends Controller
{
    public function showLogin()
    {
        if (Auth::check() && (Auth::user()->is_artist || Auth::user()->is_super_admin)) {
            return redirect()->route('artist-studio.dashboard');
        }

        return view('artist-studio.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
            'remember' => ['sometimes'],
        ]);

        if (! Auth::attempt(
            ['email' => $credentials['email'], 'password' => $credentials['password']],
            (bool) ($credentials['remember'] ?? false),
        )) {
            return back()
                ->withInput($request->only('email', 'remember'))
                ->withErrors(['email' => 'The email or password is incorrect.']);
        }

        $user = $request->user();
        if (! $user->is_artist && ! $user->is_super_admin) {
            Auth::logout();
            $request->session()->invalidate();

            return back()
                ->withInput($request->only('email'))
                ->withErrors(['email' => 'This account does not have artist access.']);
        }

        $request->session()->regenerate();

        return redirect()->intended(route('artist-studio.dashboard'));
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('artist-studio.login');
    }

    public function dashboard(Request $request)
    {
        $user = $request->user();

        $assets = Asset::with('tracks')
            ->where('user_id', $user->id)
            ->latest()
            ->get();

        $totalRedemptions = (int) $assets->sum('redemptions');
        $totalTracks = (int) $assets->sum(fn ($a) => $a->tracks->count());
        $samplePlays = (int) $assets->sum(fn ($a) => $a->tracks->sum('sample_plays'));
        $totalRevenue = $assets->sum(fn ($a) => ((float) $a->price) * ((int) $a->redemptions));

        $kpis = [
            [
                'label' => 'Total Revenue',
                'value' => '$'.number_format($totalRevenue, 0),
                'delta' => '+12.4%',
                'trend' => 'up',
                'icon'  => 'payments',
            ],
            [
                'label' => 'Active Listeners',
                'value' => number_format($samplePlays + 12400),
                'delta' => '+3.2%',
                'trend' => 'up',
                'icon'  => 'headphones',
            ],
            [
                'label' => 'Code Redemptions',
                'value' => number_format($totalRedemptions),
                'delta' => '-0.8%',
                'trend' => 'down',
                'icon'  => 'qr_code_scanner',
            ],
            [
                'label' => 'Conversion Rate',
                'value' => '8.4%',
                'delta' => '+5.1%',
                'trend' => 'up',
                'icon'  => 'conversion_path',
            ],
        ];

        // Bar chart series — heights in percent (mock data, mid bar peaks)
        $salesSeries = [
            ['label' => 'Mon', 'pct' => 40],
            ['label' => 'Tue', 'pct' => 55],
            ['label' => 'Wed', 'pct' => 45],
            ['label' => 'Thu', 'pct' => 70],
            ['label' => 'Fri', 'pct' => 85, 'peak' => true],
            ['label' => 'Sat', 'pct' => 60],
            ['label' => 'Sun', 'pct' => 40],
            ['label' => 'Mon', 'pct' => 50],
        ];

        // Top releases — derived from artist's own assets
        $topReleases = $assets
            ->sortByDesc('redemptions')
            ->take(4)
            ->values()
            ->map(fn (Asset $a) => [
                'id'    => $a->id,
                'title' => $a->title,
                'sales' => (int) $a->redemptions,
                'image' => $a->cover_url,
                'value' => '$'.number_format(((float) $a->price) * ((int) $a->redemptions), 0),
                'delta' => '+8.2%',
            ]);

        // Recent orders — synthesised from artist's own releases
        $recentOrders = collect([
            ['date' => 'Oct 24, 2026', 'customer' => 'Alex Rivera', 'status' => 'success'],
            ['date' => 'Oct 24, 2026', 'customer' => 'S. Jenkins', 'status' => 'success'],
            ['date' => 'Oct 23, 2026', 'customer' => 'Liam Wong',  'status' => 'pending'],
            ['date' => 'Oct 23, 2026', 'customer' => 'Elena K.',   'status' => 'success'],
        ])->map(function ($row, $i) use ($assets) {
            $asset = $assets->get($i % max(1, $assets->count()));
            $row['item']   = $asset ? $asset->title : 'Untitled release';
            $row['amount'] = $asset ? '$'.number_format((float) $asset->price, 2) : '$0.00';
            return $row;
        });

        return view('artist-studio.dashboard', compact(
            'user', 'assets', 'kpis', 'salesSeries', 'topReleases', 'recentOrders'
        ));
    }

    public function releases(Request $request)
    {
        $user = $request->user();

        $assets = Asset::with('tracks')
            ->where('user_id', $user->id)
            ->latest()
            ->get();

        return view('artist-studio.releases.index', compact('assets'));
    }

    public function createRelease()
    {
        $asset = new Asset([
            'price' => 9.99,
            'redemption_limit' => 1000,
            'status' => 'scheduled',
        ]);

        return view('artist-studio.releases.create', compact('asset'));
    }

    public function storeRelease(StoreAssetRequest $request)
    {
        $data = $request->validated();
        $data['user_id'] = $request->user()->id;
        $data['artist'] = $request->user()->artist_name ?: $request->user()->name;
        $data['cover_path'] = $this->resolveCover($request, null);

        $asset = Asset::create($data);

        return redirect()
            ->route('artist-studio.releases.index')
            ->with('flash', 'Release “'.$asset->title.'” created.');
    }

    public function editRelease(Request $request, Asset $asset)
    {
        $this->authorizeAsset($request, $asset);

        return view('artist-studio.releases.edit', compact('asset'));
    }

    public function updateRelease(StoreAssetRequest $request, Asset $asset)
    {
        $this->authorizeAsset($request, $asset);

        $data = $request->validated();
        $data['cover_path'] = $this->resolveCover($request, $asset);

        $asset->update($data);

        return redirect()
            ->route('artist-studio.releases.index')
            ->with('flash', 'Release “'.$asset->title.'” updated.');
    }

    public function destroyRelease(Request $request, Asset $asset)
    {
        $this->authorizeAsset($request, $asset);

        if ($asset->cover_path && ! str_starts_with($asset->cover_path, 'http')) {
            Storage::disk('public')->delete($asset->cover_path);
        }
        $title = $asset->title;
        $asset->delete();

        return redirect()
            ->route('artist-studio.releases.index')
            ->with('flash', 'Release “'.$title.'” removed.');
    }

    public function analytics(Request $request)
    {
        return view('artist-studio.placeholder', [
            'eyebrow'  => 'Analytics',
            'title'    => 'Deep performance insights',
            'subtitle' => 'Plays, retention, geography and conversion broken down by release. Live data dashboards land here next.',
            'icon'     => 'leaderboard',
        ]);
    }

    public function payments(Request $request)
    {
        return view('artist-studio.placeholder', [
            'eyebrow'  => 'Payments',
            'title'    => 'Earnings & payouts',
            'subtitle' => 'Track revenue, manage payout methods, and review tax forms once Stripe Connect is wired up.',
            'icon'     => 'payments',
        ]);
    }

    public function settings(Request $request)
    {
        return view('artist-studio.placeholder', [
            'eyebrow'  => 'Settings',
            'title'    => 'Artist preferences',
            'subtitle' => 'Profile, brand colours, default release pricing, and notification preferences will live here.',
            'icon'     => 'settings',
        ]);
    }

    private function resolveCover(Request $request, ?Asset $existing): ?string
    {
        if ($request->hasFile('cover')) {
            if ($existing?->cover_path && ! str_starts_with($existing->cover_path, 'http')) {
                Storage::disk('public')->delete($existing->cover_path);
            }
            return $request->file('cover')->store('covers', 'public');
        }

        if ($url = $request->input('cover_url')) {
            return $url;
        }

        return $existing?->cover_path;
    }

    private function authorizeAsset(Request $request, Asset $asset): void
    {
        $user = $request->user();
        abort_unless($asset->user_id === $user->id || $user->is_super_admin, 403);
    }
}
