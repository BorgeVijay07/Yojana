import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/electricity.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading,
         SchemeWrapper,
         SchemeCard,
         SchemeIconCard,
         SchemeIcon,
         SchemeH3,
         SchemeDetails,
         Scheme,
         SchemeH2
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './RElectrificationElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/rural electrification/rg.png'

const RuralElectrification = () => {

    const [scheme1, setScheme1] = useState(true);

    const showScheme1 = () =>{
        setScheme1(true);
    }

    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>RURAL ELECTRIFICATION</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Rajiv Gandhi Grameen Vidyutikaran Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Rajiv Gandhi Grameen Vidyutikaran Yojana</SchemeH2>
                        </Scheme>
                    :
                    null}
                </SchemeDetails>
            </MainSec>
            <Footer />
        </>
    )
}

export default RuralElectrification
