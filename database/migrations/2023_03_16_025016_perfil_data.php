<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
          Schema::create('perfil_datas', function (Blueprint $table) {
        $table->id();
        $table->string("CifNifNie");
        $table->string("EmpresaInversor");
        $table->string("direccionFacturacion");
        $table->string("telefono");
        $table->string("tipoDeVia");
        $table->string("numeroDeCalle");
        $table->string("CodigoPostal");
        $table->string("localidad");
        $table->string("Provincia");
        $table->string("pais"); 
        $table->string('NoFactelefono')->nullable();
        $table->string('NoFacTipoVia')->nullable();
        $table->string('NoFacDireccion')->nullable();
        $table->string('NoFacNumeroDeCalle')->nullable();
        $table->string('NoFacPostal')->nullable();
        $table->string('NoFacLocalidad')->nullable();
        $table->string('NoFacPais')->nullable();
        $table->string('NoFacProvincia')->nullable();
        $table->unsignedBigInteger('user_id')->nullable();
        $table->timestamps();

        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('perfil_datas');
    }
};
