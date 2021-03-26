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
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const history = useHistory();

    function logout() {
        localStorage.clear();
        window.location.reload();
        history.push('/');
    }

    const [dashbar, setDashbar] = useState(false)
    const showDashbar = () => setDashbar(!dashbar)

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const user= JSON.parse(localStorage.getItem('user_info'));
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick = {toggleHome}>
                        YOJANA
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='hero' 
                                      smooth={true} 
                                      duration={500} 
                                      spy={true} 
                                      exact='true' 
                                      offset={-80}>
                                HOME
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                                      smooth={true} 
                                      duration={500} 
                                      spy={true} 
                                      exact='true' 
                                      offset={-80}>
                                ABOUT
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                      smooth={true} 
                                      duration={500} 
                                      spy={true} 
                                      exact='true' 
                                      offset={-110}>
                                SERVICES
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='schemes'
                                       smooth={true} 
                                       duration={500} 
                                       spy={true} 
                                       exact='true' 
                                       offset={-80}>
                                SCHEMES
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact-us'
                                      smooth={true} 
                                      duration={500} 
                                      spy={true} 
                                      exact='true' 
                                      offset={-80}>
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
