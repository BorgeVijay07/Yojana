import React from 'react'
import Category from './../Category'
import crowd from './../Images/edu.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading,
         SchemeWrapper,
         SchemeCard,
         SchemeIconCard,
         SchemeIcon,
         SchemeH3
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './EducationElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/education/nss.png'
import Icon2 from './../Images/pics/education/pdrf.png'
import Icon3 from './../Images/pics/education/aicte.png'
import Icon4 from './../Images/pics/education/aicte.png'
import Icon5 from './../Images/pics/education/aicte.png'
import Icon6 from './../Images/pics/education/aicte.png'
import Icon7 from './../Images/pics/education/aicte.png'
import Icon8 from './../Images/pics/education/natp.png'
import Icon9 from './../Images/pics/education/kg.png'

const Education = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>EDUCATION</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>National Scholarship Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Post-Doctoral Research Fellow (Scheme)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Saksham Scholarship Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>AICTE Pragati Scholarship for Girls</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                    <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>AICTE PG (GATE/GPAT) Scholarship</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>AICTE-National Doctoral Fellowship Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon7}/>
                            </SchemeIconCard>
                            <SchemeH3>Prime Minister's Special Scholarship Scheme (PMSSS)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon8}/>
                            </SchemeIconCard>
                            <SchemeH3>National Apprenticeship Training Program</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                    <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon9}/>
                            </SchemeIconCard>
                            <SchemeH3>Kasturba Gandhi Balika Vidyalaya Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default Education
