<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgricultureUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agriculture_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('agr_age', 50);
            $table->string('agr_income', 50);
            $table->boolean('agr_country')->nullable();
            $table->boolean('agr_state')->nullable();
            $table->boolean('agr_owns_land')->nullable();
            $table->boolean('agr_owns_animal')->nullable();
            $table->string('agr_occupation');
            $table->boolean('agr_eligible')->nullable();
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
        Schema::dropIfExists('agriculture_users');
    }
}
