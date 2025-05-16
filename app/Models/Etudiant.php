<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Etudiant extends Model
{

    use HasFactory;

    protected $fillable = ["nom", "prenom", "sexe", "age", "niveau_scolaire_id"];

    public function niveau_scolaire()
    {

        return $this->belongsTo(NiveauScolaire::class);
    }
}
