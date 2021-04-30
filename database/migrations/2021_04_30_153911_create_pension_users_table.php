<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePensionUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pension_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('pen_age', 50);
            $table->string('pen_income', 50);
            $table->string('pen_employment_status', 100);
            $table->boolean('pen_no_NPS_account')->nullable();
            $table->boolean('pen_avail_10_years')->nullable();
            $table->boolean('pen_family_member_earning')->nullable();
            $table->boolean('pen_EPFO_member')->nullable();
            $table->boolean('pen_10_year_EPS_service')->nullable();
            $table->boolean('pen_no_other_scheme')->nullable();
            $table->boolean('pen_farmer')->nullable();
            $table->boolean('pen_owns_land')->nullable();
            $table->boolean('pen_NPS_account')->nullable();
            $table->string('pen_nationality');
            $table->boolean('pen_eligible')->nullable();
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
        Schema::dropIfExists('pension_users');
    }
}
