import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DashBtn, DashLink, Nav, NavbarContainer, NavBtnLinkd, NavLogo } from '../Navbar/NavbarElements'
import { NavBtn, NavBtnLink } from '../SchemePage/SchemePageElements'
import { CategoryContainer, CategoryItem, CategoryWrapper } from './CategoryElements'

const Category = () => {

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
                    <NavLogo to='/'>YOJANA</NavLogo>
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
                <CategoryContainer>
                    <CategoryWrapper>
                        <CategoryItem to='/agriculture'>
                            Agriculture
                        </CategoryItem>
                        <CategoryItem to='/child-care'>
                            Child Care
                        </CategoryItem>
                        <CategoryItem to='/child-development'>
                            Child Development
                        </CategoryItem>
                        <CategoryItem to='/education'>
                            Education
                        </CategoryItem>
                        <CategoryItem to='/employment'>
                            Employment
                        </CategoryItem>
                        <CategoryItem to='/financial-inclusion'>
                            Financial Inclusion
                        </CategoryItem>
                        <CategoryItem to='/generic-medicine'>
                            Generic Medicine
                        </CategoryItem>
                        <CategoryItem to='/health'>
                            Health
                        </CategoryItem>
                        <CategoryItem to='/insurance'>
                            Insurance
                        </CategoryItem>
                        <CategoryItem to='/model-village'>
                            Model Village
                        </CategoryItem>
                        <CategoryItem to='/mother-care'>
                            Mother Care
                        </CategoryItem>
                        <CategoryItem to='/pension'>
                            Pension
                        </CategoryItem>
                        <CategoryItem to='/rural-development'>
                            Rural Development
                        </CategoryItem>
                        <CategoryItem to='/rural-electrification'>
                            Rular Electrification
                        </CategoryItem>
                        <CategoryItem to='/skill-development'>
                            Skill Development
                        </CategoryItem>
                        <CategoryItem to='/urban-development'>
                            Urban Development
                        </CategoryItem>
                        <CategoryItem to='/urban-housing'>
                            Urban Housing
                        </CategoryItem>
                    </CategoryWrapper>
                </CategoryContainer>
        </>
    )
}

export default Category
