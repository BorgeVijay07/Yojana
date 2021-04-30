<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEducationUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('edu_age', 50);
            $table->string('edu_caste', 100);
            $table->string('edu_state', 100);
            $table->string('edu_income', 100);
            $table->string('edu_degree', 100);
            $table->string('edu_disability_percentage', 50);
            $table->string('edu_year_status', 50);
            $table->string('edu_pursuing_year', 50);
            $table->string('edu_gatescore', 50);
            $table->string('edu_cgpa', 50);
            $table->boolean('edu_no_school_facility')->nullable();
            $table->boolean('edu_degree_certificate')->nullable();
            $table->boolean('edu_work_experience')->nullable();
            $table->boolean('edu_self_employed')->nullable();
            $table->boolean('edu_trained_government_program')->nullable();
            $table->boolean('edu_disability')->nullable();
            $table->boolean('edu_marks')->nullable();
            $table->boolean('edu_admission_master')->nullable();
            $table->boolean('edu_aicte')->nullable();
            $table->boolean('edu_qalified_gate/gpat')->nullable();
            $table->boolean('edu_research_scholar')->nullable();
            $table->boolean('edu_12_passed')->nullable();
            $table->string('edu_gender');
            $table->string('edu_nationality');
            $table->boolean('edu_eligible')->nullable();
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
        Schema::dropIfExists('education_users');
    }
}
