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
                            <div className='card-single'>
                                <div>
                                    <h1>54</h1>
                                    <span>Available Schemes</span>
                                </div>
                                <div>
                                    <span className='las la-list'></span>
                                </div>
                            </div>
                            <div className='card-single'>
                                <div>
                                    <h1>0</h1>
                                    <span>Applicable Schemes</span>
                                </div>
                                <div>
                                    <span className='las la-clipboard-list'></span>
                                </div>
                            </div>
                            <div className='card-single'>
                                <div>
                                    <h1>0</h1>
                                    <span>Applied Schemes</span>
                                </div>
                                <div>
                                    <span className='las la-list-alt'></span>
                                </div>
                            </div>
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
                            <h1>Profile</h1>
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


