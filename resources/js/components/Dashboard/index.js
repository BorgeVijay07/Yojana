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
                                        <span>Annual Income</span>
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
                                <h1>Child Care</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Occupation</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>District</span>
                                    </div>
                                    <div className='form-item'>
                                        <select name='gender' id='gender'>
                                            <option>Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Child Development</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <select name='gender' id='gender'>
                                            <option>Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Education</h1>
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
                                        <span>State</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Degree</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Percentage of disability</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Current education year status</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Current year of pursuing</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Valid Gate score</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Degree CGPA</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='no-school' name='no-school' value='1'></input>
                                        <label for='no-school'>No nearby school facility</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='certificate' name='certificate' value='1'></input>
                                        <label for='certificate'>Degree Certificate</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='experience' name='experience' value='1'></input>
                                        <label for='experience'>Work Experience</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='employed' name='employed' value='1'></input>
                                        <label for='employed'>Self Employed</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='trained' name='trained' value='1'></input>
                                        <label for='trained'>Previously trained in an government program</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='disability' name='disability' value='1'></input>
                                        <label for='disability'>Disability</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='marks' name='marks' value='1'></input>
                                        <label for='marks'>Specific standard marks</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='master-course' name='master-course' value='1'></input>
                                        <label for='master-course'>Taken admission in master courses</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='aicte' name='aicte' value='1'></input>
                                        <label for='aicte'>Recognise by AICTE</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='gate-qualified' name='gate-qualified' value='1'></input>
                                        <label for='gate-qualified'>Qualified gate/gpat in last 5 years</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='research-scholar' name='research-scholar' value='1'></input>
                                        <label for='research-scholar'>Research Scholar</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='12th-passed' name='12th-passed' value='1'></input>
                                        <label for='12th-passed'>Passed 12th</label>
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
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Employment</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Occupation</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>LIN number</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='bank-account' name='bank-account' value='1'></input>
                                        <label for='bank-account'>Bank Account</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='income-tax' name='income-tax' value='1'></input>
                                        <label for='income-tax'>Income tax assessee</label>
                                    </div>
                                    <div className='form-item'>
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Financial Inclusion</h1>
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
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='10-year-policy' name='10-year-policy' value='1'></input>
                                        <label for='10-year-policy'>Ready for 10 years policy terms</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='bank-account-aadhar' name='bank-account-aadhar' value='1'></input>
                                        <label for='bank-account-aadhar'>Bank Account with Aadhar link</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='no-criminal' name='no-criminal' value='1'></input>
                                        <label for='no-criminal'>No criminal record</label>
                                    </div>
                                    <div className='form-item'></div>
                                    <div className='form-item'>
                                        <select name='gender' id='gender'>
                                            <option>Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-item'>
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Generic Medicine</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='checkbox' id='shopkeeper' name='shopkeeper' value='1'></input>
                                        <label for='shopkeeper'>For shopkeeper having area more than 120sq and follow proper dimensions.</label>
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
                                        <span>Annual Income</span>
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
                            <div className='scheme-form'>
                                <h1>Insurance</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='bank-account' name='bank-account' value='1'></input>
                                        <label for='bank-account'>Bank Account</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='aadhar-link' name='aadhar-link' value='1'></input>
                                        <label for='aadhar-link'>Aadhar card linked</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='in-government-poverty-list' name='in-government-poverty-list' value='1'></input>
                                        <label for='in-government-poverty-list'>In list of government's poverty line list</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='10-year-policy' name='10-year-policy' value='1'></input>
                                        <label for='10-year-policy'>Ready to avail policy term of 10 years</label>
                                    </div>
                                    <div className='form-item'>
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Model Village</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='checkbox' id='village-funding' name='village-funding' value='1'></input>
                                        <label for='village-funding'>For Village Funding</label>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Mother Care</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Employment status before pregnent</span>
                                    </div>
                                    <div className='form-item'></div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='wager-loss' name='wager-loss' value='1'></input>
                                        <label for='wager-loss'>Wager loss due to pregnancy</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='no-other-scheme' name='no-other-scheme' value='1'></input>
                                        <label for='no-other-scheme'>No other ongoing scheme</label>
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
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Pension</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Employment Status</span>
                                    </div>
                                    <div className='form-item'></div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='no-nps-account' name='no-nps-account' value='1'></input>
                                        <label for='no-nps-account'>Not having existing NPS account</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='10-year-policy' name='10-year-policy' value='1'></input>
                                        <label for='10-year-policy'>Ready to avail policy term of 10 years</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='family-earning-member' name='family-earning-member' value='1'></input>
                                        <label for='family-earning-member'>Any other family member earning money</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='epfo-member' name='epfo-member' value='1'></input>
                                        <label for='epfo-member'>EPFO member</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='10-year-service' name='10-year-service' value='1'></input>
                                        <label for='10-year-service'>Minimum 10 years of service towards Employee Pension Scheme</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='no-other-scheme' name='no-other-scheme' value='1'></input>
                                        <label for='no-other-scheme'>No other pension schemes</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='farmer' name='farmer' value='1'></input>
                                        <label for='farmer'>Farmer</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='owns-land' name='owns-land' value='1'></input>
                                        <label for='owns-land'>Owns land</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='nps-account' name='nps-account' value='1'></input>
                                        <label for='nps-account'>Have NPS Account</label>
                                    </div>
                                    <div className='form-item'>
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Rural Development</h1>
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
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>City</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='pwd' name='pwd' value='1'></input>
                                        <label for='pwd'>PWD</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='owns-land' name='owns-land' value='1'></input>
                                        <label for='owns-land'>Owns a land</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='pwd' name='pwd' value='1'></input>
                                        <label for='pwd'>Have ownership certificate.</label>
                                    </div>
                                    <div className='form-item'></div>
                                    <div className='form-item'>
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-item'>
                                        <select name='gender' id='gender'>
                                            <option>Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Rural Electrification</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Caste</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Skill Development</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Age</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Employment status</span>
                                    </div>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Educational qualification</span>
                                    </div>
                                    <div className='form-item'></div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='dropout-status' name='dropout-status' value='1'></input>
                                        <label for='dropout-status'>School/college dropout status</label>
                                    </div>
                                    <div className='form-item'>
                                        <select name='nationality' id='nationality'>
                                            <option>Nationality</option>
                                            <option value='indian'>Indian</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Urban Development</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>Annual Income</span>
                                    </div>
                                    <div className='form-item'></div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='no-prior-ownership' name='no-prior-ownership' value='1'></input>
                                        <label for='no-prior-ownership'>No prior ownership</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='no-pucca-house' name='no-pucca-house' value='1'></input>
                                        <label for='no-pucca-house'>No pucca house in country by any family member</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='female-ownership' name='female-ownership' value='1'></input>
                                        <label for='female-ownership'>Female ownership/co-ownership</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='carpet-area' name='carpet-area' value='1'></input>
                                        <label for='carpet-area'>Carpet area in specified limit</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='city-authority' name='city-authority' value='1'></input>
                                        <label for='city-authority'>Urban city authority</label>
                                    </div>
                                    <div className='form-button'>
                                        <input type='submit' value='Submit'></input>
                                    </div>
                                </form>
                            </div>
                            <div className='scheme-form'>
                                <h1>Urban Housing</h1>
                                <form>
                                    <div className='form-item'>
                                        <input type='text' required></input>
                                        <span>House type</span>
                                    </div>
                                    <div className='form-item'></div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='not-housing-scheme' name='not-housing-scheme' value='1'></input>
                                        <label for='not-housing-scheme'>Previously not availed any housing scheme</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='female-membership' name='female-membership' value='1'></input>
                                        <label for='female-membership'>Adult female membership</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='city-authority' name='city-authority' value='1'></input>
                                        <label for='city-authority'>Location of property under 2011 statutory towns</label>
                                    </div>
                                    <div className='form-item'>
                                        <input type='checkbox' id='development-authority' name='development-authority' value='1'></input>
                                        <label for='development-authority'>Urban development authority</label>
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


