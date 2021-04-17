import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DashBtn, DashLink, Nav, NavbarContainer, NavBtnLinkd, NavLogo } from '../Navbar/NavbarElements'
import { MainSec, 
         SchemePageContainer, 
         NavBtnLink, 
         SchemePageH1, 
         SchemePageWrapper, 
         SchemePageIconCard,
         SchemePageCard,
         SchemePageIcon,
         SchemePageH3,
         NavBtn
        } from './SchemePageElements'

import Footer from '../Footer';
import Icon1 from './../Images/farmer.png'
import Icon2 from './../Images/protect.png'
import Icon3 from './../Images/student.png'
import Icon4 from './../Images/graduated.png'
import Icon5 from './../Images/businessman.png'
import Icon6 from './../Images/save-money.png'
import Icon7 from './../Images/drugs.png'
import Icon8 from './../Images/healthcare.png'
import Icon9 from './../Images/contract.png'
import Icon10 from './../Images/countryside.png'
import Icon11 from './../Images/mother.png'
import Icon12 from './../Images/retirement.png'
import Icon13 from './../Images/eco-house.png'
import Icon14 from './../Images/rural.png'
import Icon15 from './../Images/logical-thinking.png'
import Icon16 from './../Images/balance-scale.png'
import Icon17 from './../Images/city.png'
import Icon18 from './../Images/apartment.png'

const SchemePage = () => {

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
            <MainSec>
                <SchemePageContainer>
                    <SchemePageH1>Scheme Categories</SchemePageH1>
                    <SchemePageWrapper>
                        <SchemePageCard to='/agriculture'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon1}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Agriculture</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/child-care'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon2}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Child Care</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/child-development'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon3}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Child Development</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/education'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon4}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Education</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/employment'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon5}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Employement</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/financial-inclusion'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon6}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Financial Inclusion</SchemePageH3>
                        </SchemePageCard>
                    </SchemePageWrapper>
                    <SchemePageWrapper>
                        <SchemePageCard to='/generic-medicine'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon7}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Generic Medicine</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/health'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon8}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Health</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/insurance'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon9}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Insurance</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/model-village'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon10}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Model Village</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/mother-care'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon11}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Mother Care</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/pension'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon12}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Pension</SchemePageH3>
                        </SchemePageCard>
                    </SchemePageWrapper>
                    <SchemePageWrapper>
                        <SchemePageCard to='/rural-electrification'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon13}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Rural Electrification</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/rural-development'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon14}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Rural Development</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/skill-development'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon15}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Skill Development</SchemePageH3>
                        </SchemePageCard>
                        {/* <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon16}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Social Justice</SchemePageH3>
                        </SchemePageCard> */}
                        <SchemePageCard to='/urban-development'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon17}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Urban Development</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/urban-housing'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon18}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Urban Housing</SchemePageH3>
                        </SchemePageCard>
                    </SchemePageWrapper>
                </SchemePageContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default SchemePage
