<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsuranceUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurance_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('ins_age', 50);
            $table->string('ins_income', 50);
            $table->boolean('ins_bank_account')->nullable();
            $table->boolean('ins_aadhar_link')->nullable();
            $table->boolean('ins_govern_poverty_list')->nullable();
            $table->boolean('ins_avail_10_years')->nullable();
            $table->string('ins_nationality');
            $table->boolean('ins_eligible')->nullable();
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
        Schema::dropIfExists('insurance_users');
    }
}
