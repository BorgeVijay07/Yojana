import React from 'react'
import { MainSec, 
    SchemeButton, 
         SchemeCard, 
         SchemeH3, 
         SchemeIcon, 
         SchemeIconCard, 
         SchemesContainer, 
         SchemesH1, 
         SchemesWrapper
        } from './SchemesElements'

import Icon1 from './../Images/farmer.png'
import Icon2 from './../Images/protect.png'
import Icon3 from './../Images/student.png'
import Icon4 from './../Images/graduated.png'
import Icon5 from './../Images/businessman.png'
import Icon6 from './../Images/drugs.png'
import Icon7 from './../Images/contract.png'
import Icon8 from './../Images/retirement.png'
import Icon9 from './../Images/mother.png'
import Icon10 from './../Images/logical-thinking.png'

const Schemes = () => {
    return (
        <>
            <MainSec id='schemes' className='schemes'>
                <SchemesContainer>
                    <SchemesH1>Schemes</SchemesH1>
                    <SchemesWrapper>
                        <SchemeCard to='/agriculture'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Agriculture</SchemeH3>
                        </SchemeCard>
                        <SchemeCard to='/child-care'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Child Care</SchemeH3>
                        </SchemeCard>
                        {/* <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Child Development</SchemeH3>
                        </SchemeCard> */}
                        <SchemeCard to='/education'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Education</SchemeH3>
                        </SchemeCard>
                        <SchemeCard to='/employment'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Employment</SchemeH3>
                        </SchemeCard>
                    </SchemesWrapper>
                    <SchemesWrapper>
                        <SchemeCard to='/generic-medicine'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>Generic Medicine</SchemeH3>
                        </SchemeCard>
                        {/* <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon7}/>
                            </SchemeIconCard>
                            <SchemeH3>Insurance</SchemeH3>
                        </SchemeCard> */}
                        <SchemeCard to='/pension'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon8}/>
                            </SchemeIconCard>
                            <SchemeH3>Pension</SchemeH3>
                        </SchemeCard>
                        <SchemeCard to='/mother-care'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon9}/>
                            </SchemeIconCard>
                            <SchemeH3>Mother Care</SchemeH3>
                        </SchemeCard>
                        <SchemeCard to='/skill-development'>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon10}/>
                            </SchemeIconCard>
                            <SchemeH3>Skill Development</SchemeH3>
                        </SchemeCard>
                    </SchemesWrapper>
                    <SchemeButton to='/scheme-page'>View More</SchemeButton>
                </SchemesContainer>
            </MainSec>
        </>
    )
}

export default Schemes
