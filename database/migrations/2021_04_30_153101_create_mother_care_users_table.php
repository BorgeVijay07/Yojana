<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMotherCareUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mother_care_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('mc_age', 50);
            $table->string('mc_income', 50);
            $table->string('mc_employment_before_pregnent', 100);
            $table->boolean('mc_wager_loss')->nullable();
            $table->boolean('mc_no_other_scheme')->nullable();
            $table->string('mc_gender');
            $table->string('mc_nationality');
            $table->boolean('mc_eligible')->nullable();
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
        Schema::dropIfExists('mother_care_users');
    }
}
