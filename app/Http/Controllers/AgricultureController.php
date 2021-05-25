<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Agriculture_user;
use Auth;
// use Illuminate\Support\Facades\Auth;
class AgricultureController extends Controller
{
    //
    
    function agriculture_record(Request $req)
    {
        $agri = new Agriculture_user;
        $agri->user_id= Auth::id();
        $agri->agr_age= $req->input('agr_age');
        $agri->agr_income= $req->input('agr_income');
        $agri->agr_country= $req->input('agr_country');
        $agri->agr_state= $req->input('agr_state');
        $agri->agr_owns_land= $req->input('agr_owns_land');
        $agri->agr_owns_animal= $req->input('agr_owns_animal');
        $agri->agr_occupation= $req->input('agr_occupation');
        $agri->agr_eligible= $req->input('agr_eligible');
        $agri->save();
        return $agri;
    }

}

?>
