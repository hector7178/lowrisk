<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class rolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $role1 = Role::create(['name' => 'Usuario']);
       
        
        $role1->givePermissionTo('dashboard-user');
        $role1->givePermissionTo('ver-FP');
        $role1->givePermissionTo('crear-FP');
        $role1->givePermissionTo('editar-FP');

        $role2 = Role::create(['name' => 'Usuario-premium']);
        $role2->givePermissionTo('dashboard-user');
        $role2->givePermissionTo('ver-FP');
        $role2->givePermissionTo('crear-FP');
        $role2->givePermissionTo('editar-FP');
        $role2->givePermissionTo('usuario-premium');
        
    }
}
