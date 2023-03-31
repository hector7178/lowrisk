<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class trabajanosotros extends Model
{
    use HasFactory;
    
    /**
    * @var array<int, string>
    */
   protected $fillable = [
    'name',
    'apellido',
    'numero',
    'email',
    'mensaje',
    'file-names',
    'file-paths'
       
   ];
}
