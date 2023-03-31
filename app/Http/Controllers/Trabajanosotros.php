<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Mail\workMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rules\File;
use Illuminate\Support\Facades\Storage;


class trabajanosotros extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $msj)
    {
        //
        $enviado=$msj->success;

        return Inertia::render('TrabajaCN', compact('enviado'));
    }

    
    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): RedirectResponse
    {
        //
        
        $request->validate([
            'nombre'=>'string|required',
            'apellido'=>'string|required',
            'correo'=>'required|email',
            'carta'=>'string|required',
            'telefono'=>'required|digits_between:1,12',
            
            
        
        ]);
    
        $files = $request->Archivos;
        if(!empty($files))
    foreach ( $files as $key => $file) {
                $fileName='archivo'.$file[$key]->getClientOriginalName();
                $file[$key]->storeAs('Archivos/',$fileName,'public');
        

        }
    
    
        
            
        


        $mailData = [
            'title' => 'Correo...',
            'body' => 'prueba',
            'nombre'=>$request->nombre,
            'apellido'=>$request->apellido,
            'correo'=>$request->correo,
            'mensaje'=>$request->carta,
            'telefono'=>$request->telefono,
           
        ];
         
        Mail::to('hjgrimanmarcano@gmail.com')->send(new workMail($mailData));
        
        
        
        return redirect()->route('workwithus.index')->with(['success'=>'Enviado']);

       

    }
}
