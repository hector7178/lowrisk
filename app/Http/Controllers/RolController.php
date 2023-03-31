<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;

use Inertia\Inertia;

class RolController extends Controller
{

    function __construct(){
         $this-> middleware('permission: ver-rol|crear-rol|borrar-rol', ['only'=>['index']]);
         $this-> middleware('permission: crear-rol', ['only'=>['store', 'create']]);
         $this-> middleware('permission: editar-rol', ['only'=>['edit', 'update']]);
         $this-> middleware('permission: borrar-rol', ['only'=>['destroy']]);
         
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $roles = Role::all();
        return Inertia::render('roles/index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $permission= Permission::get();
        return Inertia::render('roles/Create');
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
        $this -> validate($request, ['name'=>'required', 'permission'=>'required']);
        $role=Role::create(['name'=>[$request-> input('name')]]);
        $role ->syncPermission($request -> input('permission'));
        return redirect()->route('Roles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    public function edit($id)
    {
        //
        $role= Role::find($id);
        $permission= Permission::get();
        $rolePermission= DB::table('role_has_permission')->where('role_has_permission.roles_id', $id)->pluck('role_has_permission.permission.id', 'role_has_permission.permission.id')->all();
    return Inertia::render('roles/edit', compact('role', 'permission' , 'rolePermission'));


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $this -> validate($request, ['name'=>'required', 'permission'=>'required']);
       $role= Role::find($id);
       $role->name=$request->input ('name');
       $role->save();
       $role-> syncPermission($request-> input('permission'));
       return redirect()->route('roles.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        DB::table('roles')-> where('id', $id)-> delete();
        return redirect()-> route('roles.index');

    }
}
