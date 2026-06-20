<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\ArtistApiController;
use App\Http\Controllers\ArtistStudioController;
use App\Http\Controllers\SuperAdminController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/super-admin');

Route::prefix('api/artist')->name('artist-api.')->group(function () {
    Route::get('/csrf', fn () => response()->json(['token' => csrf_token()]))->name('csrf');
    Route::post('/check-email', [ArtistApiController::class, 'checkEmail'])->name('check-email');
    Route::post('/login', [ArtistApiController::class, 'login'])->name('login');

    Route::middleware('auth')->group(function () {
        Route::get('/me', [ArtistApiController::class, 'me'])->name('me');
        Route::post('/logout', [ArtistApiController::class, 'logout'])->name('logout');
        Route::get('/releases', [ArtistApiController::class, 'releases'])->name('releases');
        Route::post('/releases', [ArtistApiController::class, 'storeRelease'])->name('releases.store');
        Route::post('/releases/{asset}/tracks/{track}/sample-played', [ArtistApiController::class, 'samplePlayed'])->whereNumber('track')->name('sample-played');
    });
});

Route::prefix('super-admin')->name('super-admin.')->group(function () {
    Route::controller(SuperAdminController::class)->group(function () {
        Route::get('/',            'dashboard')->name('dashboard');
        Route::get('/redemptions', 'redemptions')->name('redemptions');
        Route::get('/users',       'users')->name('users');
        Route::get('/revenue',     'revenue')->name('revenue');
        Route::get('/system',      'system')->name('system');
        Route::get('/audit',       'audit')->name('audit');
        Route::get('/settings',    'settings')->name('settings');
    });

    Route::resource('assets', AssetController::class);
});

Route::prefix('artist-studio')->name('artist-studio.')->group(function () {
    Route::get('login',  [ArtistStudioController::class, 'showLogin'])->name('login');
    Route::post('login', [ArtistStudioController::class, 'login'])->name('login.submit');

    Route::middleware(['auth', 'artist'])->group(function () {
        Route::post('logout', [ArtistStudioController::class, 'logout'])->name('logout');

        Route::get('/',           [ArtistStudioController::class, 'dashboard'])->name('dashboard');
        Route::get('analytics',   [ArtistStudioController::class, 'analytics'])->name('analytics');
        Route::get('payments',    [ArtistStudioController::class, 'payments'])->name('payments');
        Route::get('settings',    [ArtistStudioController::class, 'settings'])->name('settings');

        Route::get('releases',                 [ArtistStudioController::class, 'releases'])->name('releases.index');
        Route::get('releases/create',          [ArtistStudioController::class, 'createRelease'])->name('releases.create');
        Route::post('releases',                [ArtistStudioController::class, 'storeRelease'])->name('releases.store');
        Route::get('releases/{asset}/edit',    [ArtistStudioController::class, 'editRelease'])->name('releases.edit');
        Route::put('releases/{asset}',         [ArtistStudioController::class, 'updateRelease'])->name('releases.update');
        Route::delete('releases/{asset}',      [ArtistStudioController::class, 'destroyRelease'])->name('releases.destroy');
    });
});
