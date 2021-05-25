<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agriculture_user extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'agr_age',
        'user_id',
        'agr_income',
        'agr_country',
        'agr_state',
        'agr_owns_land',
        'agr_owns_animal',
        'agr_occupation',
        'agr_eligible'
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
