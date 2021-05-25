<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $req) {
        $user = new User;
        $user-> user_full_name = $req->input('name');
        $user-> user_email = $req->input('email');
        $user-> user_password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $req) {
        $user = User:: where('user_email', $req->user_email)->first();
        if(!$user || !Hash::check($req->user_password, $user->user_password))
        {
            return response([
                'error'=>["Email or password is not matched"]
            ]);
        }
        return $user;
    }

    public function __construct()
    {
        $this->middleware('auth'); //ensures user is logged in
    }

}
