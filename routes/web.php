<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RolController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FirstPluginsController;
use App\Http\Controllers\Trabajanosotros;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/faq', function () {
    return Inertia::render('Faq');
})->name('faq');

Route::get('/calculatemortgage', function () {
    return Inertia::render('CalcularHip');
})->middleware(['auth', 'verified'])->name('calculatemortgage');


Route::get('/workwithus', function(){
    Route::resource('workwithus', Trabajanosotros::class);
});
Route::get('/workwithus', [Trabajanosotros::class, 'index'] )->name('workwithus.index');

Route::post('/workwithus/form', [Trabajanosotros::class, 'store'] )->name('workwithus.store');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::group(['middleware' => ['auth']], function(){
    Route::resource('rols', RolController::class);
    Route::resource('users', UserController::class);
    Route::resource('firstplugins', FirstPluginsController::class);


});

require __DIR__.'/auth.php';
