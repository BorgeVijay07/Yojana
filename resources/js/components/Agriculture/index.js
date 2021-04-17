import React from 'react'
import Category from './../Category'
import crowd from './../Images/farm.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading,
         SchemeContainer,
         SchemeWrapper,
         SchemeCard,
         SchemeIconCard,
         SchemeIcon,
         SchemeH3
        } from './AgricultureElements'
import Footer from '../Footer';
import Icon1 from './../Images/pics/Agriculture/ci.jpg'
import Icon2 from './../Images/pics/Agriculture/gby.png'
import Icon3 from './../Images/pics/Agriculture/nmsa.png'
import Icon4 from './../Images/pics/Agriculture/pkvy.jpg'
import Icon5 from './../Images/pics/Agriculture/pmfby.png'
import Icon6 from './../Images/pics/Agriculture/nswf.jpg'

const Agriculture = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>AGRICULTURE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Cattle Insurance Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Gramin Bhandaran Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>National Mission For Sustainable Agriculture</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Paramparagat Krishi Vikas Yojana ( PKVY )</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                    <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Fasal Bima Yojana (PMFBY)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>National Scheme on Welfare of Fisherman</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
            </MainSec>
            <Footer />
        </>
    )
}

export default Agriculture
