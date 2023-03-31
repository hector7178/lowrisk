<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FirstPlugins;
use Inertia\Inertia;

class FirstPluginsController extends Controller
{
    function __construct(){
        $this-> middleware('permission:ver-FP|crear-FP|borrar-FP', ['only'=>['index']]);
        $this-> middleware('permission: crear-FP', ['only'=>['store', 'create']]);
        $this-> middleware('permission: editar-FP', ['only'=>['edit', 'update']]);
        $this-> middleware('permission: borrar-FP', ['only'=>['destroy']]);
        
   }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $FP=FirstPlugins::all();
        return Inertia::render('FirstPlugin/index',compact('FP'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('FirstPlugin/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        request()->validate([
            'name'=>'required',
            'content'=>'required',
            'location'=>'required'
        ]);
        FirstPlugins::create($request->all());
        return redirect()->route('FirstPlugin.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(FirstPlugin $FirstPlugin)
    {

        //
        return  Inertia::render('FirstPlugin/edit', compact('FirstPlugin'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FirstPlugins $FirstPlugin)
    {
        //
        request()->validate([
            'name'=>'required',
            'content'=>'required',
            'location'=>'required'
        ]);
        $FirstPlugin->update($request->all());
        return redirect()->route('FirstPlugin.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy( FirstPlugins $FirstPlugin)
    {
        //
        $FirstPlugin->delete();
        return redirect()->route('FirstPlugin.index');
    }
}
