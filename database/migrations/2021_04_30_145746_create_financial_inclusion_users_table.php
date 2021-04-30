<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFinancialInclusionUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('financial_inclusion_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('fi_age', 50);
            $table->string('fi_income', 50);
            $table->string('fi_caste', 50);
            $table->string('fi_occupation', 100);
            $table->boolean('fi_10_year_policy')->nullable();
            $table->boolean('fi_account_aadhar_link')->nullable();
            $table->boolean('fi_no_criminal')->nullable();
            $table->string('fi_gender');
            $table->string('fi_nationality');
            $table->boolean('fi_eligible')->nullable();
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
        Schema::dropIfExists('financial_inclusion_users');
    }
}
