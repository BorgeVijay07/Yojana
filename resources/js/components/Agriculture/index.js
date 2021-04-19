import React, {useState} from 'react'
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
         SchemeH3,
         SchemeDetails,
         Scheme,
         Schemeh4,
         SchemeUList,
         SchemeItem,
         SchemeH2,
         SchemeSubItem,
         SchemeP
        } from './AgricultureElements'
import Footer from '../Footer';
import Icon1 from './../Images/pics/Agriculture/ci.jpg'
import Icon2 from './../Images/pics/Agriculture/gby.png'
import Icon3 from './../Images/pics/Agriculture/nmsa.png'
import Icon4 from './../Images/pics/Agriculture/pkvy.jpg'
import Icon5 from './../Images/pics/Agriculture/pmfby.png'
import Icon6 from './../Images/pics/Agriculture/nswf.jpg'

const Agriculture = () => {

    const [scheme1, setScheme1] = useState(true);
    const [scheme2, setScheme2] = useState(false);
    const [scheme3, setScheme3] = useState(false);
    const [scheme4, setScheme4] = useState(false);
    const [scheme5, setScheme5] = useState(false);
    const [scheme6, setScheme6] = useState(false);

    const showScheme1 = () =>{
        setScheme1(true);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
    }

    const showScheme2 = () =>{
        setScheme1(false);
        setScheme2(true);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
    }

    const showScheme3 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(true);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
    }

    const showScheme4 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(true);
        setScheme5(false);
        setScheme6(false);
    }

    const showScheme5 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(true);
        setScheme6(false);
    }

    const showScheme6 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(true);
    }

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
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Cattle Insurance Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Gramin Bhandaran Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>National Mission For Sustainable Agriculture</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Paramparagat Krishi Vikas Yojana ( PKVY )</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme5}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Fasal Bima Yojana (PMFBY)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme6}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>National Scheme on Welfare of Fisherman</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Cattle Insurance Scheme</SchemeH2>
                        </Scheme>
                    :
                    null
                    }
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Gramin Bhandaran Yojana</SchemeH2>
                        </Scheme>
                    :
                    null
                    }
                    {scheme3?
                        <Scheme>
                        <SchemeH2>National Mission For Sustainable Agriculture</SchemeH2>
                        <Schemeh4>Document Required :</Schemeh4>
                        <SchemeUList>
                            <SchemeItem>Applicant’s Aadhar Card</SchemeItem>
                            <SchemeItem>identity card</SchemeItem>
                            <SchemeItem>Housing Certificated</SchemeItem>
                            <SchemeItem>Farm papers</SchemeItem>
                            <SchemeItem>Bank Account Passbook</SchemeItem>
                            <SchemeItem>mobile number</SchemeItem>
                            <SchemeItem>Passport Size Photo</SchemeItem>
                        </SchemeUList>
                        <Schemeh4>Procedure :</Schemeh4>
                        <SchemeUList>
                            <SchemeItem>First Login With Your Email id and Password</SchemeItem>
                            <SchemeItem>Click on the Create User</SchemeItem>
                            <SchemeItem>Fill the User Details :
                                <SchemeSubItem>Level (State wise / District Wise)</SchemeSubItem>
                                <SchemeSubItem>Add your Name and DOB</SchemeSubItem>
                                <SchemeSubItem>Add your Destination, Mobile no. Email Id  and Password</SchemeSubItem>
                                <SchemeSubItem>If User Create As Nodal State  then Select the checkbox</SchemeSubItem>
                                <SchemeSubItem>Submit the Registration Form</SchemeSubItem>
                            </SchemeItem>
                        </SchemeUList>
                        <Schemeh4>Eligibility Criteria :</Schemeh4>
                        <SchemeUList>
                            <SchemeItem>Farmers of any category, category are eligible to avail this scheme.</SchemeItem>
                            <SchemeItem>It is mandatory for all the applicant farmers to have their own agricultural land.</SchemeItem>
                            <SchemeItem>In this scheme, members of Self Help Groups, Trusts, Cooperative Societies, Incorporated 
                                        Companies, Producer Farmers’ Groups are eligible to take benefit by registering.</SchemeItem>
                            <SchemeItem>Farmers who have been cultivating the land under the Lease Agreement for the last seven 
                                        years will also be able to take advantage of the PM Krishi Irrigation Scheme.</SchemeItem>
                            <SchemeItem>Only citizens (farmer brothers) residing in India are eligible to take advantage of this 
                                        Prime Minister Agricultural Irrigation Scheme.</SchemeItem>
                        </SchemeUList>
                        <Schemeh4>Benefits :</Schemeh4>
                        <SchemeP>
                        PMKSY has been formulated amalgamating ongoing schemes viz. Accelerated Irrigation Benefit Programme 
                        (AIBP) of the Ministry of Water Resources, River Development & Ganga Rejuvenation (MoWR,RD&GR), Integrated 
                        Watershed Management Programme (IWMP) of Department of Land Resources (DoLR) and the On Farm Water Management 
                        (OFWM) of Department of Agriculture and Cooperation (DAC).
                        </SchemeP>
                    </Scheme>
                    :
                    null
                    }
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Paramparagat Krishi Vikas Yojana ( PKVY )</SchemeH2>
                        </Scheme>
                    :
                    null
                    }
                    {scheme5?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Fasal Bima Yojana (PMFBY)</SchemeH2>
                        </Scheme>
                    :
                    null
                    }
                    {scheme6?
                        <Scheme>
                            <SchemeH2>National Scheme on Welfare of Fisherman</SchemeH2>
                        </Scheme>
                    :
                    null
                    }
                    </SchemeDetails>
            </MainSec>
            <Footer />
        </>
    )
}

export default Agriculture
