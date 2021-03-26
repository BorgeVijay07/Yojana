import React from 'react'
import { Nav, NavbarContainer, NavLogo } from '../Navbar/NavbarElements'
import { MainSec, SchemePageContainer, NavBtnLink } from './SchemePageElements'
import Footer from '../Footer';

const SchemePage = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>YOJANA</NavLogo>
                    <NavBtnLink to='/sign-up'>
                        SIGN UP
                    </NavBtnLink>
                </NavbarContainer>
            </Nav>
            <MainSec>
                <SchemePageContainer>
                    <h1>Hii</h1>
                </SchemePageContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default SchemePage
