<?php

namespace App\Http\Controllers;

use App\Models\NiveauScolaire;
use Illuminate\Http\Request;

class NiveauScolaireController extends Controller
{
       public function index() {

        $niveaux_scolaires = NiveauScolaire::orderBy("nom", "ASC")->get();


        return inertia("NiveauScolaire/Index", [

            "niveauScolaires" => $niveaux_scolaires
        ]);

    }

        public function create() {

        
        return inertia("NiveauScolaire/CreateNiveau");

    }
}
