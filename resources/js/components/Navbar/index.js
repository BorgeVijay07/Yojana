import React from 'react'
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
    NavLinksr

} from './NavbarElements'
import { useHistory } from 'react-router-dom'

const Navbar = ({ toggle }) => {

    const history = useHistory();

    function logout() {
        localStorage.clear();
        window.location.reload();
        history.push('/');
    }

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
                        {
                            localStorage.getItem('user_info') ?
                                <>
                                    <NavItem>
                                        <NavLinksr to='/'>
                                            HOME
                                        </NavLinksr>
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
                                    <NavItem>
                                        <NavLinksr to='./dashboard1'>
                                            DASHBOARD
                                        </NavLinksr>
                                    </NavItem>
                                </>
                                :
                                <>
                                    <NavItem>
                                        <NavLinksr to='/'>
                                            HOME
                                        </NavLinksr>
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
                                </>
                        }
                    </NavMenu>
                    <NavBtn>
                        {
                            localStorage.getItem('user_info') ?
                                <>
                                    <NavBtnLink onClick={logout}>
                                        LOGOUT
                                    </NavBtnLink>
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
