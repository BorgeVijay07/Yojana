import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/mother.jpg'
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
         SchemeH2,
         Schemeh4,
         SchemeP,
         SchemeUList,
         SchemeItem
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './MotherElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/mother care/jsy.png'
import Icon2 from './../Images/pics/mother care/pmmvy1.png'

const MotherCare = () => {

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
                    <Heading>MOTHER CARE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Janani Suraksha Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Matru Vandana Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Janani Suraksha Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhaar card of Applicant</SchemeItem>
                                <SchemeItem>BPL Ration Card</SchemeItem>
                                <SchemeItem>Address proof</SchemeItem>
                                <SchemeItem>residence certificate</SchemeItem>
                                <SchemeItem>Janani Suraksha Card</SchemeItem>
                                <SchemeItem>Delivery certificate issued by government hospital</SchemeItem>
                                <SchemeItem>Bank account passbook</SchemeItem>
                                <SchemeItem>Mobile number</SchemeItem>
                                <SchemeItem>Passport size photo</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website Ministry of Health and Family Welfare, the Government of India i.e. https://nhm.gov.in/.</SchemeItem>
                                <SchemeItem>On Homepage, Under Janani Suraksha Yojana then Click on “Download Form Application PDF ” Button.</SchemeItem>
                                <SchemeItem>Application Form page will displayed on screen.</SchemeItem>
                                <SchemeItem>Now fill the required details (Mention all the details such as name of the woman, village name, address, etc.) and attach documents.</SchemeItem>
                                <SchemeItem>Finally, go to submit the application for Mako Anganwadi or Women’s Health Center.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The mother and the ASHA (wherever applicable) should get their entitled money at the heath centre immediately on arrival and registration for delivery.</SchemeItem>
                                <SchemeItem>Under this scheme, pregnant women from both rural and urban areas of the country can get themselves registered.</SchemeItem>
                                <SchemeItem>Under this scheme, women coming below the poverty line of the country will be provided benefits.</SchemeItem>
                                <SchemeItem>In LPS and HPS States, BPL pregnant women, aged 19 years and above, preferring to deliver at home is entitled to cash assistance of Rs. 500/- per delivery.</SchemeItem>
                                <SchemeItem>Such cash assistance would be available only upto 2 live births and the disbursement would be done at the time of delivery or around 7 days before the delivery by ANM/ASHA/ any other link worker.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Under Janani Suraksha Yojana, all investigations of the pregnant women and delivery of the child are free.</SchemeItem>
                                <SchemeItem>The government’s thinking is that if financial help is made available to pregnant women, it will help in improving the health of mother and child.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Matru Vandana Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeP><b>First Installment:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Documents to be submitted within 150 days from the last menstrual date:</SchemeItem>
                                <SchemeItem>Duly filled application Form 1A</SchemeItem>
                                <SchemeItem>Copy of MCP card</SchemeItem>
                                <SchemeItem>Copy of identity proof</SchemeItem>
                                <SchemeItem>Copy of bank or post office account passbook</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Second Installment:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Documents to be submitted within 180 days from the last menstrual date:</SchemeItem>
                                <SchemeItem>Duly filled application Form 1B</SchemeItem>
                                <SchemeItem>Copy of MCP Card</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Third Installment:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Documents to be submitted after registering childbirth.</SchemeItem>
                                <SchemeItem>Duly filled application Form 1C</SchemeItem>
                                <SchemeItem>Copy of MCP Card</SchemeItem>
                                <SchemeItem>Copy of Aadhaar ID</SchemeItem>
                                <SchemeItem>Copy of Child</SchemeItem>
                                <SchemeItem>Birth Registration Certificate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP><b>Offline procedure to avail Pradhan Mantri Matru Vandana Yojana:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Step 1: The first step is to register yourself under this scheme. You can register 
                                    yourself by visiting the nearby Anganwadi Centre (AWC)/ approved Health facility. 
                                    You must make sure that registration is done within 150 days of application 
                                    submission</SchemeItem>
                                <SchemeItem>Step 2: You have to fill an application form 1-A or PMMVY form which is 
                                    available at the Anganwadi Centre (AWC)/ approved Health facility. The application 
                                    form is available for free of cost, and you can also download it online from the 
                                    website of the Ministry of women and child development. You have to submit the 
                                    application form with required documents and undertaking/consent duly signed by 
                                    you and your husband. Now to claim the cash incentives, you will have to submit 
                                    the form at Anganwadi Centre (AWC)/ approved Health facility.</SchemeItem>
                                <SchemeItem>Step 3: You are eligible to claim the second installment after 180 days of pregnancy 
                                    after submitting Form 1-B with a copy of MCP card, which also shows at least one ANC.</SchemeItem>
                                <SchemeItem>Step 4: To claim the third installment, you ywill have to submit Form 1-C with a copy of 
                                    childbirth registration report, a copy of the MCP card which shows that child has received the 
                                    first cycle of immunization.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>For PMMVY online registration:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Step 1: Visit the website https://pmmvy-cas.nic.in.</SchemeItem>
                                <SchemeItem>Step 2: Using your login credentials login to the PMMVY software.</SchemeItem>
                                <SchemeItem>Step 3: To avail the scheme, fill all the details required in the Beneficiary 
                                    Registration Form ( Application Form 1-A). The form is available under the ‘New Beneficiary’ 
                                    tab. All the instructions are provided in PMMVY CAS User Manual.</SchemeItem>
                                <SchemeItem>Step 4: To avail the second installment in the second trimester, again 
                                    login to the PMMVY CAS software website and click on ‘Second Instalment’ tab and fill the form 1-B.</SchemeItem>
                                <SchemeItem>Step 5: To claim the third installment, which is made after the childbirth and completion of the 
                                    child's first cycle of immunization, log into PMMVY CAS Software and click on ‘Third Installment’ tab 
                                    and fill Form 1-C</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The woman is an Indian citizen.</SchemeItem>
                                <SchemeItem>The woman was employed before she conceived the pregnancy.</SchemeItem>
                                <SchemeItem>The woman conceived on or after 01.01.2017.</SchemeItem>
                                <SchemeItem>The woman has experienced a wage-loss due to the pregnancy.</SchemeItem>
                                <SchemeItem>The woman is not on a paid maternity scheme.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Cash incentives: Beneficiaries get cash incentives in three installments- first, second and 
                                    third- for ₹ 1,000, ₹ 2,000 and ₹ 2,000 respectively.</SchemeItem>
                                <SchemeItem>Added incentive: Beneficiaries will also receive the incentive under the Janani Suraksha 
                                    Yojana (JSY) for institutional delivery, therefore on an average woman gets a benefit of ₹ 6,000.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                </SchemeDetails>
            </MainSec>
            <Footer />
        </>
    )
}

export default MotherCare
