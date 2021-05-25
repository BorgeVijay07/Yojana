import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DashBtn, DashLink, Nav, NavbarContainer, NavBtnLinkd, NavLogo } from '../Navbar/NavbarElements'
import { MainSec, 
         NavBtnLink, 
         SchemePageH1, 
         SchemePageWrapper, 
         SchemePageIconCard,
         SchemePageCard,
         SchemePageIcon,
         SchemePageH3,
         NavBtn
        } from '../SchemePage/SchemePageElements'

import Footer from '../Footer';
import Icon1 from './../Images/pics/Agriculture/ci.jpg'
import Icon2 from './../Images/pics/child care/bsy.png'
import Icon3 from './../Images/pics/education/nss.png'
import Icon4 from './../Images/pics/employment/nps.png'
import Icon5 from './../Images/pics/generic medicine/pmjas.png'
import { SchemePageContainer } from './ApplicableSchemePageElements';

const ApplicableSchemePage = () => {

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
                    <SchemePageH1>Applicable Schemes</SchemePageH1>
                    <SchemePageWrapper>
                        <SchemePageCard to='/agriculture'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon1}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Cattle Insurance Scheme</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/child-care'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon2}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Balika Samridhi Yojana</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/child-development'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon3}/>
                            </SchemePageIconCard>
                            <SchemePageH3>National Scholarship Scheme</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/education'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon4}/>
                            </SchemePageIconCard>
                            <SchemePageH3>National Pension Scheme for Traders and Self Employed Persons</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard to='/employment'>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon5}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Pradhan Mantri Jan Aushadhi Scheme</SchemePageH3>
                        </SchemePageCard>
                    </SchemePageWrapper>
                </SchemePageContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default ApplicableSchemePage
