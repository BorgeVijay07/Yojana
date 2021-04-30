<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUrbanHousingUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('urban_housing_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('user_data');
            $table->string('uh_house_type', 100);
            $table->boolean('uh_no_availed_housing_scheme')->nullable();
            $table->boolean('uh_female_membership')->nullable();
            $table->boolean('uh_under_statutary_town')->nullable();
            $table->boolean('uh_development_authority')->nullable();
            $table->boolean('uh_eligible')->nullable();
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
        Schema::dropIfExists('urban_housing_users');
    }
}
