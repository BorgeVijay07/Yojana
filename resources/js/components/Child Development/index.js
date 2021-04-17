import React from 'react'
import Category from './../Category'
import crowd from './../Images/child2.jpg'
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
import { SchemeContainer } from './ChildDevelopmentElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/child devlopment/ass.png'
import Icon2 from './../Images/pics/child devlopment/pmmvy.png'
import Icon3 from './../Images/pics/child devlopment/ncs.png'
import Icon4 from './../Images/pics/child devlopment/sy.png'

const ChildDevelopment = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>CHILD DEVELOPMENT</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Anganwadi Service scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Matru Vandana Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>National Creche Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Sabla Yojana (Adolescent Girls)</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default ChildDevelopment
