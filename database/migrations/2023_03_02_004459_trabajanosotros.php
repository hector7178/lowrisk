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
        Schema::create('trabajanosotros', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('apellido');
            $table->string('numero');
            $table->string('email');
            $table->text('mensaje');
            $table->json('file-names');
            $table->json('file-paths');
            $table->timestamps();
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
        Schema::dropIfExists('trabajanosotros');
    }
};
