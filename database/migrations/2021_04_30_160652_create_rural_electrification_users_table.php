<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRuralElectrificationUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rural_electrification_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('re_caste', 100);
            $table->string('re_income', 50);
            $table->boolean('re_eligible')->nullable();
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
        Schema::dropIfExists('rural_electrification_users');
    }
}
