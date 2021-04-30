<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmploymentUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employment_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('emp_age', 50);
            $table->string('emp_income', 50);
            $table->string('emp_occupation', 100);
            $table->string('emp_LIN_number', 100);
            $table->boolean('emp_bank_account')->nullable();
            $table->boolean('emp_income_tax')->nullable();
            $table->boolean('emp_eligible')->nullable();
            $table->string('emp_nationality');
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
        Schema::dropIfExists('employment_users');
    }
}
