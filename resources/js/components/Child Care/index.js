import React from 'react'
import Category from './../Category'
import crowd from './../Images/child.jpg'
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
import { SchemeContainer } from './ChildCareElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/child care/bsy.png'
import Icon2 from './../Images/pics/child care/ksy.png'

const ChildCare = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>CHILD CARE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                    <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Balika Samridhi Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Kishori Shakti Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default ChildCare
