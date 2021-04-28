import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Dashboard.css'
import logo from './../Images/avatar.svg'
import Icon1 from './../Images/farmer.png'
import Icon2 from './../Images/protect.png'
import Icon4 from './../Images/graduated.png'
import Icon5 from './../Images/businessman.png'
import Icon6 from './../Images/drugs.png'
import Icon8 from './../Images/retirement.png'
import Icon9 from './../Images/mother.png'
import Icon10 from './../Images/logical-thinking.png'
import Footer from '../Footer';

const Dashboard = () => {

    const history = useHistory();
    const user= JSON.parse(localStorage.getItem('user_info'));
    const [dashboard, setDashboard] = useState(true);
    const [profile, setProfile] = useState(false);
    const [editProfile, setEditProfile] = useState(true);

    function logout() {
        localStorage.clear();
        window.location.reload();
        history.push('/');
    }

    useEffect(() => {
        if(!localStorage.getItem('user_info'))
        {
            history.push('/sign-up');
        }
    }, [])

    const showDashboard = () => {
        setDashboard(true);
        setProfile(false);
    }

    const showProfile = () => {
        setDashboard(false);
        setProfile(true);
    }

    const hideEditProfile = () => {
        setEditProfile(false);
    }

    return (
        <>
             <input type='checkbox' id='nav-toggle'></input>
             
             
             <div className='sidebar'>
                 <a href='/'>
                 <div className='sidebar-brand'>
                     <h2><span className='las la-globe-asia'></span><span>YOJANA</span></h2>
                 </div>
                 </a>
                 <div className='sidebar-menu'>
                     <ul>
                         <li><label for='dashboard' onClick={showDashboard}><span className='las la-stream'>
                                        </span><span>DashBoard</span>
                         </label></li>
                         <li><label for='profile' onClick={showProfile}><span className='las la-user'>
                                        </span><span>My Profile</span>
                         </label></li>
                         <li><label for='' onClick={logout}><span className='las la-sign-out-alt'>
                                        </span><span>Logout</span>
                         </label></li>
                     </ul>
                 </div>
             </div>

             <div className='main-content'>
                 <header>
                     <div className='header-title'>
                         <h2>
                             <label for='nav-toggle'>
                                 <span className='las la-bars'></span>
                             </label>
                             <span>Dashboard</span>
                         </h2>
                         <div className='user-wrapper'>
                             <img src={logo} alt='img' width='40px' height='40px'/>
                             <div>
                                 <h4>{user.user_full_name}</h4>
                                 <small>Super User</small>
                             </div>
                         </div>
                     </div>
                 </header>

                 <main>
                     {dashboard?
                        <div className='dashboard'>
                            {
                                editProfile?
                                    <div className='complete-profile'>
                                        <div className='warning'>
                                            Please complete your profile to get more applicable schemes.
                                            <span className='las la-times' onClick={hideEditProfile}></span>
                                        </div>
                                    </div>
                                    :
                                    null
                            }                        
                        <div className='cards'>
                            <a href='/scheme-page'>
                            <div className='card-single'>
                                <div>
                                    <h1>17</h1>
                                    <span>Available Categories</span>
                                </div>
                                <div>
                                    <span className='las la-list'></span>
                                </div>
                            </div>
                            </a>
                            <a href='/agriculture'>
                            <div className='card-single'>
                                <div>
                                    <h1>72</h1>
                                    <span>Available Schemes</span>
                                </div>
                                <div>
                                    <span className='las la-clipboard-list'></span>
                                </div>
                            </div>
                            </a>
                            <a href='#'>
                            <div className='card-single'>
                                <div>
                                    <h1>0</h1>
                                    <span>Applicable Schemes</span>
                                </div>
                                <div>
                                    <span className='las la-list-alt'></span>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className='available'>
                            <h1>Scheme Categories</h1>
                            <div className='scheme-wrapper'>
                                <a href='/agriculture'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon1} alt='farmer'></img>
                                        </div>
                                        <h3>Agriculture</h3>
                                    </div>
                                </a>
                                
                                <a href='/child-care'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon2} alt='farmer'></img>
                                        </div>
                                        <h3>Child Care</h3>
                                    </div>
                                </a>
                                
                                <a href='/education'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon4} alt='farmer'></img>
                                        </div>
                                        <h3>Education</h3>
                                    </div>
                                </a>
                                
                                <a href='/employment'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon5} alt='farmer'></img>
                                        </div>
                                        <h3>Employment</h3>
                                    </div>
                                </a>
                                
                            </div>
                            <div className='scheme-wrapper'>
                                <a href='/generic-medicine'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon6} alt='farmer'></img>
                                        </div>
                                        <h3>Generic Medicine</h3>
                                    </div>
                                </a>
                               
                                <a href='/pension'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon8} alt='farmer'></img>
                                        </div>
                                        <h3>Pension</h3>
                                    </div>
                                </a>
                                
                                <a href='/mother-care'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon9} alt='farmer'></img>
                                        </div>
                                        <h3>Mother Care</h3>
                                    </div>
                                </a>
                                
                                <a href='/skill-development'>
                                    <div className='scheme-card'>
                                        <div className='img-card'>
                                            <img src={Icon10} alt='farmer'></img>
                                        </div>
                                        <h3>Skill Development</h3>
                                    </div>
                                </a>
                                
                            </div>
                            <a href='/scheme-page'><button>View More</button></a>
                        </div>
                    </div> 
                    :
                    null
                    }
                    {
                        profile?
                        <div className='profile'>
                        <h1>My Profile :</h1>
                        <div className='scheme-form'>
                            <h1>Agriculture</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='india' name='india' value='1'></input>
                                        <label for='india'>Country : India</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='maharashtra' name='maharashtra' value='1'></input>
                                        <label for='maharashtra'>State : Maharashtra</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='agriculture-land' name='agriculture-land' value='1'></input>
                                        <label for='agriculture-land'>Owns agriculture land</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='animal' name='animal' value='1'></input>
                                        <label for='animal'>Owns Animal</label>
                                    </div>
                                    <div className='form-item'>
                                        <select name='occupation' id='gender'>
                                            <option>Occupation</option>
                                            <option value='farmer'>Farmer</option>
                                            <option value='fisherman'>Fisherman</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Health</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Caste</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Occupation</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='disability' name='disability' value='1'></input>
                                        <label for='disability'>Disability</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='landless' name='landless' value='1'></input>
                                        <label for='landless'>Landless</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='female-head' name='female-head' value='1'></input>
                                        <label for='female-head'>Female head with no adult male</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='saving-account' name='saving-account' value='1'></input>
                                        <label for='saving-account'>Saving account</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='adhar-link' name='adhar-link' value='1'></input>
                                        <label for='adhar-link'>Adhar card link</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='ration-card' name='ration-card' value='1'></input>
                                        <label for='ration-card'>Ration card</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='income-certificate' name='income-certificate' value='1'></input>
                                        <label for='income-certificate'>Income Certificate</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='migrant' name='migrant' value='1'></input>
                                        <label for='migrant'>Migrant</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='document-verified' name='document-verified' value='1'></input>
                                        <label for='document-verified'>Document verified</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='bpl' name='bpl' value='1'></input>
                                        <label for='bpl'>Below Poverty Line</label>
                                    </div>
                                    <div className='form-item'>
                                        <select name='gender' id='gender'>
                                            <option>Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-item'>
                                        <select name='state' id='gender'>
                                            <option>State</option>
                                            <option value='maharashtra'>Maharashtra</option>
                                            <option value='kerala'>Kerala</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                        :
                        null
                    } 
                     <Footer />
                 </main>
             </div>
         </>
    )
}

export default Dashboard


