<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Perfil_data;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;




class RegisterProfile extends Controller
{
    //
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $msj )
    {
        $msjResult=$msj->msj;
        
       
        return Inertia::render('Auth/Register2', compact('msjResult'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $request->validate([
            
        'CifNifNie' => 'required|string|max:255',
        'EmpresaInversor' => 'required|string|max:255',
        'direccionFacturacion' => 'required|string|max:255',
        "telefono"=>'required|int',
        'tipoDeVia' => 'required|string|max:255',
        'numeroDeCalle' => 'string|max:255',
        'CodigoPostal' => 'required|int',
        "localidad"=>'required|string|max:255',
        'Provincia' => 'required|string|max:255',
        "pais"=>'required|string|max:255',
        'NoFactelefono'=>'max:255',
        'NoFacTipoVia'=>'max:255',
        'NoFacDireccion'=>'max:255',
        'NoFacNumeroDeCalle'=>'max:255',
        'NoFacPostal'=>'max:255',
        'NoFacLocalidad'=>'max:255',
        'NoFacProvincia'=>'max:255',
        'NoFacPais'=>'max:255'
        ]);

        $token= $request->token;

        

        $userId=DB::table('users')->where('token',  $token)->get()[0]->id;

        $user=User::find($userId);
       

       
        

        $userPerfil = Perfil_data::create([
            

            "CifNifNie"=>$request->CifNifNie,
            "EmpresaInversor"=>$request->EmpresaInversor,
            "direccionFacturacion"=>$request->direccionFacturacion,
            "telefono"=>$request->telefono,
            "tipoDeVia"=>$request->tipoDeVia,
            "numeroDeCalle"=>$request->numeroDeCalle,
            "CodigoPostal"=>$request->CodigoPostal,
            "localidad"=>$request->localidad,
            "Provincia"=>$request->Provincia,
            "pais"=>$request->pais,
            'NoFactelefono'=>$request->NoFactelefono,
            'NoFacTipoVia'=>$request->NoFacTipoVia,
            'NoFacDireccion'=>$request->NoFacDireccion,
            'NoFacNumeroDeCalle'=>$request->NoFacNumeroDeCalle,
            'NoFacPostal'=>$request->NoFacPostal,
            'NoFacLocalidad'=>$request->NoFacLocalidad,
            'NoFacProvincia'=>$request->NoFacProvincia,
            'NoFacPais'=>$request->NoFacPais,
            'user_id' => $userId,
        
        ]);
        event(new Registered($userPerfil));
      
      Auth::login($user);
       
        
        return redirect('/dashboard');
        
    }
}
