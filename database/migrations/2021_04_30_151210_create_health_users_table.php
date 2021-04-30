<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHealthUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('hea_age', 50);
            $table->string('hea_income', 50);
            $table->string('hea_caste', 50);
            $table->string('hea_occupation', 50);
            $table->boolean('hea_disability')->nullable();
            $table->boolean('hea_landless')->nullable();
            $table->boolean('hea_female_head')->nullable();
            $table->boolean('hea_saving_account')->nullable();
            $table->boolean('hea_aadhar_link')->nullable();
            $table->boolean('hea_ration_card')->nullable();
            $table->boolean('hea_income_certificate')->nullable();
            $table->boolean('hea_migrant')->nullable();
            $table->boolean('hea_doc_verified')->nullable();
            $table->boolean('hea_bpl')->nullable();
            $table->string('hea_gender');
            $table->string('hea_state');
            $table->boolean('hea_eligible')->nullable();
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
        Schema::dropIfExists('health_users');
    }
}
