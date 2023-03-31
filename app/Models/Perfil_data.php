<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;

class Perfil_data extends Model
{
    use HasFactory;

    /**
    * @var array<int, string>
    */
   protected $fillable = [
    "CifNifNie",
    "EmpresaInversor",
    "direccionFacturacion",
    "telefono",
    "tipoDeVia",
    "numeroDeCalle",
    "CodigoPostal",
    "localidad",
    "Provincia",
    "pais",
    'NoFactelefono',
    'NoFacTipoVia',
    'NoFacDireccion',
    'NoFacNumeroDeCalle',
    'NoFacPostal',
    'NoFacLocalidad',
    'NoFacProvincia',
    'NoFacPais',
    'user_id'
       
   ];

   public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);

    }
}
