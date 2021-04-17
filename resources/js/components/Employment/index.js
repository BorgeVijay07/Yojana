import React from 'react'
import Category from './../Category'
import crowd from './../Images/emp.jpg'
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
import { SchemeContainer } from './EmploymentElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/Agriculture/ci.jpg'
import Icon2 from './../Images/pics/Agriculture/gby.png'
import Icon3 from './../Images/pics/Agriculture/nmsa.png'
import Icon4 from './../Images/pics/Agriculture/pkvy.jpg'
import Icon5 from './../Images/pics/Agriculture/pmfby.png'

const Employment = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>EMPLOYMENT</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>National Pension Scheme for Traders and Self Employed Persons</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>National Pension Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri  Suraksha Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Employee State Insurance Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Mudra Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Rojgar Protsahan Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default Employment
