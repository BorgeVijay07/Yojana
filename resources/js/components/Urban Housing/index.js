import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/city.jpg'
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
         SchemeH2,
         Scheme
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './UHousingElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/urban housing/pmay1.png'
import Icon2 from './../Images/pics/urban devlopment/jn.png'

const UrbanHousing = () => {

    const [scheme1, setScheme1] = useState(true);
    const [scheme2, setScheme2] = useState(false);

    const showScheme1 = () =>{
        setScheme1(true);
        setScheme2(false);
    }

    const showScheme2 = () =>{
        setScheme1(false);
        setScheme2(true);
    }

    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>URBAN HOUSING</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Awas Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Jawaharlal Nehru National Urban Renewal Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Awas Yojana</SchemeH2>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Jawaharlal Nehru National Urban Renewal Scheme</SchemeH2>
                        </Scheme>
                    :
                    null}
                </SchemeDetails>
            </MainSec>
            <Footer />
        </>
    )
}

export default UrbanHousing
