<?php

use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\NiveauScolaireController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
})->name("home");


Route::get('etudiant', [EtudiantController::class, "index"])->name("etudiant.index");
Route::get('etudiant/create', [EtudiantController::class, "create"])->name("etudiant.create");

Route::get('niveauscolaire', [NiveauScolaireController::class, "index"])->name("niveauscolaire.index");
Route::get('niveauscolaire/create', [NiveauScolaireController::class, "create"])->name("niveauscolaire.create");


