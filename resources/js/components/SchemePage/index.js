import React from 'react'
import { Nav, NavbarContainer, NavLogo } from '../Navbar/NavbarElements'
import { MainSec, 
         SchemePageContainer, 
         NavBtnLink, 
         SchemePageH1, 
         SchemePageWrapper, 
         SchemePageIconCard,
         SchemePageCard,
         SchemePageIcon,
         SchemePageH3
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
                    <SchemePageH1>Scheme Categories</SchemePageH1>
                    <SchemePageWrapper>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon1}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Agriculture</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon2}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Child Care</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon3}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Child Development</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon4}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Education</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon5}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Employement</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon6}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Financial Inclusion</SchemePageH3>
                        </SchemePageCard>
                    </SchemePageWrapper>
                    <SchemePageWrapper>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon7}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Generic Medicine</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon8}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Health</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon9}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Insurance</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon10}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Model Village</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon11}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Mother Care</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon12}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Pension</SchemePageH3>
                        </SchemePageCard>
                    </SchemePageWrapper>
                    <SchemePageWrapper>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon13}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Rural Electrification</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon14}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Rural Development</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon15}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Skill Development</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon16}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Social Justice</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
                            <SchemePageIconCard>
                                <SchemePageIcon src={Icon17}/>
                            </SchemePageIconCard>
                            <SchemePageH3>Urban Development</SchemePageH3>
                        </SchemePageCard>
                        <SchemePageCard>
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
