<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\ArtistApiController;
use App\Http\Controllers\SuperAdminController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/super-admin');

Route::prefix('api/artist')->name('artist-api.')->group(function () {
    Route::get('/csrf', fn () => response()->json(['token' => csrf_token()]))->name('csrf');
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
