import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLinksr,
    NavBtnLinkd,
    DashLink,
    DashBtn

} from './NavbarElements'
import { useHistory } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ toggle }) => {

    const history = useHistory();

    function logout() {
        localStorage.clear();
        window.location.reload();
        history.push('/');
    }

    const [dashbar, setDashbar] = useState(false)
    const showDashbar = () => setDashbar(!dashbar)

    const user= JSON.parse(localStorage.getItem('user_info'));
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        YOJANA
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='hero'>
                                HOME
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>
                                ABOUT
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>
                                SERVICES
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinksr to='/schemes'>
                                SCHEMES
                            </NavLinksr>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact-us'>
                                CONTACT US
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {
                            localStorage.getItem('user_info') ?
                                <>
                                    <NavBtnLinkd onClick={showDashbar}>
                                        Namaste {user.user_full_name} !!
                                    </NavBtnLinkd>
                                    <div className={dashbar ? 'dash-menu active' : 'dash-menu'} onClick={showDashbar}>
                                        <DashLink to='/dashboard1' onClick={showDashbar}>
                                            DASHBOARD
                                            </DashLink>
                                        <DashBtn onClick={logout}>
                                            LOGOUT
                                            </DashBtn>
                                    </div>
                                </>
                                :
                                <>
                                    <NavBtnLink to='/sign-up'>
                                        SIGN UP
                                    </NavBtnLink>
                                </>
                        }
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
