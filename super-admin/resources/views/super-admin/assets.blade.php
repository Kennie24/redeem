@extends('layouts.app')

@section('title', 'Assets · Super Admin')
@section('breadcrumb', 'Assets')

@php
    $statusClasses = [
        'Live'      => 'bg-primary/15 text-primary',
        'Scheduled' => 'bg-tertiary-container/40 text-tertiary',
        'Archived'  => 'bg-surface-container-high text-secondary',
    ];
@endphp

@section('content')
    @include('partials.page-header', [
        'eyebrow'  => 'Super Admin',
        'title'    => 'Assets',
        'subtitle' => 'Every EP, single, and limited-edition drop on SoundRedeem.',
        'actions'  => '
            <button class="flex items-center gap-xs px-md h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md">
                <span class="material-symbols-outlined text-[18px]">view_module</span> Grid
            </button>
            <button class="flex items-center gap-xs px-md h-10 rounded-full bg-primary-container text-on-primary-container font-bold text-label-md uppercase tracking-widest hover:scale-[1.02] transition">
                <span class="material-symbols-outlined text-[18px]">add</span> New Asset
            </button>
        ',
    ])

    {{-- Stats --}}
    <section class="grid grid-cols-2 xl:grid-cols-4 gap-gutter mb-lg">
        @foreach ($stats as $i => $s)
            <div class="reveal bento-card rounded-xl p-md border border-outline-variant/10" style="--reveal-delay: {{ $i * 60 }}ms">
                <div class="flex items-center gap-xs text-secondary mb-xs">
                    <span class="material-symbols-outlined text-[18px]">{{ $s['icon'] }}</span>
                    <span class="text-label-md uppercase tracking-widest">{{ $s['label'] }}</span>
                </div>
                <h3 class="text-headline-md font-black text-on-surface">{{ $s['value'] }}</h3>
                <p class="text-label-sm text-secondary mt-xs">{{ $s['delta'] }}</p>
            </div>
        @endforeach
    </section>

    {{-- Asset grid --}}
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter mb-lg">
        @foreach ($assets as $i => $a)
            @php
                $sold = (int) str_replace(',', '', $a['redemptions']);
                $pct = $a['limit'] > 0 ? min(100, round(($sold / $a['limit']) * 100)) : 0;
            @endphp
            <div class="reveal bento-card rounded-xl border border-outline-variant/10 overflow-hidden" style="--reveal-delay: {{ $i * 60 }}ms">
                <div class="relative aspect-[5/3] overflow-hidden">
                    <img src="{{ $a['img'] }}" alt="{{ $a['title'] }}" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    <div class="absolute top-md left-md flex items-center gap-xs">
                        <span class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-label-sm font-bold uppercase tracking-widest {{ $statusClasses[$a['status']] ?? '' }}">
                            <span class="w-2 h-2 rounded-full {{ $a['status'] === 'Live' ? 'bg-primary animate-pulse' : 'bg-current opacity-60' }}"></span>
                            {{ $a['status'] }}
                        </span>
                    </div>
                    <div class="absolute bottom-md left-md right-md">
                        <p class="text-label-sm text-secondary uppercase tracking-widest">{{ $a['artist'] }}</p>
                        <h3 class="text-headline-md font-black text-on-surface leading-tight">{{ $a['title'] }}</h3>
                    </div>
                </div>
                <div class="p-md space-y-sm">
                    <div class="flex items-center justify-between text-label-md">
                        <span class="text-secondary uppercase tracking-widest">Redemptions</span>
                        <span class="text-on-surface font-bold">{{ $a['redemptions'] }} / {{ number_format($a['limit']) }}</span>
                    </div>
                    <div class="h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                        <div class="h-full rounded-full bg-primary" style="width: {{ $pct }}%"></div>
                    </div>
                    <div class="flex items-center justify-between pt-xs">
                        <span class="text-label-md text-secondary uppercase tracking-widest">Price · <span class="text-on-surface">{{ $a['price'] }}</span></span>
                        <div class="flex gap-xs">
                            <button title="Edit" class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary hover:text-primary transition">
                                <span class="material-symbols-outlined text-[18px] align-middle">edit</span>
                            </button>
                            <button title="Stats" class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface transition">
                                <span class="material-symbols-outlined text-[18px] align-middle">analytics</span>
                            </button>
                            <button title="More" class="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface transition">
                                <span class="material-symbols-outlined text-[18px] align-middle">more_horiz</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </section>
@endsection
