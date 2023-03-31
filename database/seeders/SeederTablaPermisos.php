<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
//spatie
use Spatie\Permission\Models\Permission;

class SeederTablaPermisos extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $permisos=[
            'ver-roles',
            'crear-rol',
            'editar-rol',
            'borrar-rol',
            'ver-usuarios',
            'dashboard',
            'dashboard-user',
            'usuario-premium',
            'ver-FP',
            'crear-FP',
            'editar-FP',
            'borrar-FP',

        ];
        foreach($permisos as $permiso){
            Permission::create(['name'=>$permiso]);
        }

    }
}
