<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\SuperAdminController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/super-admin');

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
