<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRuralDevelopmentUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rural_development_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('rd_age', 50);
            $table->string('rd_income', 50);
            $table->string('rd_caste', 100);
            $table->string('rd_city', 100);
            $table->boolean('rd_pwd')->nullable();
            $table->boolean('rd_owns_land')->nullable();
            $table->boolean('rd_ownership_certificate')->nullable();
            $table->string('rd_nationality');
            $table->string('rd_gender');
            $table->boolean('rd_eligible')->nullable();
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
        Schema::dropIfExists('rural_development_users');
    }
}
