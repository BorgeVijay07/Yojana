import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './Dashboard.css'
import logo from './../Images/avatar.svg'
import Icon1 from './../Images/farmer.png'
import Footer from '../Footer';

const Dashboard = () => {

    useEffect(() => {
        if(!localStorage.getItem('user_info'))
        {
            history.push('/sign-up');
        }
    }, [])

    const history = useHistory();

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
                        <li><a href='' className='active'><span className='las la-stream'>
                                       </span><span>DashBoard</span>
                        </a></li>
                        <li><a href=''><span className='las la-user'>
                                       </span><span>My Profile</span>
                        </a></li>
                        <li><a href=''><span className='las la-sign-out-alt'>
                                       </span><span>Logout</span>
                        </a></li>
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
                                <h4>Vijay Borge</h4>
                                <small>Super admin</small>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <div className='complete-profile'>
                        <div className='warning'>
                            Please complete your profile to get more applicable schemes.
                            <span className='las la-times'></span>
                        </div>
                    </div>
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
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                        </div>
                        <div className='scheme-wrapper'>
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                            <div className='scheme-card'>
                                <div className='img-card'>
                                    <img src={Icon1} alt='farmer'></img>
                                </div>
                                <h3>Agriculture</h3>
                            </div>
                        </div>
                        <a href='/scheme-page'><button>View More</button></a>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Dashboard
