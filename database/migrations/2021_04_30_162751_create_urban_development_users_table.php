<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUrbanDevelopmentUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('urban_development_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('ud_income', 50);
            $table->boolean('ud_no_ownership')->nullable();
            $table->boolean('ud_no_pucca_house')->nullable();
            $table->boolean('ud_female_ownership')->nullable();
            $table->boolean('ud_carpet_limit')->nullable();
            $table->boolean('ud_city_authority')->nullable();
            $table->boolean('ud_eligible')->nullable();
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
        Schema::dropIfExists('urban_development_users');
    }
}
