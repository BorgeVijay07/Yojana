import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks,
        NavBtn,
        NavBtnLink
    
        } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        YOJAVA
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
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
                            <NavLinks to='schemes'>
                                SCHEMES
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact-us'>
                                CONTACT US
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/sign-up'>
                            SIGN UP
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
