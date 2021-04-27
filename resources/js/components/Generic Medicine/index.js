import React, {useState} from 'react'
import Category from '../Category'
import crowd from './../Images/medicine.jpg'
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
         SchemeUList,
         SchemeItem,
         SchemeTable,
         SchemeTableR,
         SchemeTableH,
         SchemeTableD,
         SchemeP
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './MedicineElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/generic medicine/pmjas.png'

const GenericMedicine = () => {

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
                    <Heading>GENERIC MEDICINE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Jan Aushadhi Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Jan Aushadhi Scheme</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Individual</SchemeTableH>
                                    <SchemeTableH>Institutions/NGO/Charitable Institute/Hospital etc.</SchemeTableH>
                                    <SchemeTableH>Government/Govt Nominated Agency</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Aadhar Card</SchemeItem>
                                            <SchemeItem>Pan Card</SchemeItem>
                                            <SchemeItem>Certificate of Disability(Only for Disabled Person)</SchemeItem>
                                            <SchemeItem>Pharmacist Registration Certificate</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Aadhar Card</SchemeItem>
                                            <SchemeItem>Pan Card</SchemeItem>
                                            <SchemeItem>Certificate for Incorporation</SchemeItem>
                                            <SchemeItem>Registration Certificate</SchemeItem>
                                            <SchemeItem>Pharmacist Registration Certificate</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Details of Department who has Allocated the space, along with supporting Documents/sanction order</SchemeItem>
                                            <SchemeItem>Pan Card</SchemeItem>
                                            <SchemeItem>Aadhar Card</SchemeItem>
                                            <SchemeItem>Pharmacist Registration Certificate</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                            <SchemeP><b><center>IMPORTANT INSTRUCTIONS FOR FILLING ONLINE APPLICATION FORM</center></b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Only online application submitted before the closing date will be accepted. Application form sent in any other form will be rejected.</SchemeItem>
                                <SchemeItem>The Applications complete in all respects will be accepted and Application submitted without photograph/signature or resumes will be summarily rejected.</SchemeItem>
                                <SchemeItem>It is the responsibility of the applicant to ensure that all the details are successfully submitted online before the closing date. BPPI will not be responsible for any of the unforeseen circumstances. 4. Applicants, in their own interest, should check their eligibility for specific post before applying. PROCEDURE FOR ONLINE SUBMISSION OF APPLICATION The Application can be submitted online through the URL http://www.bppi.in/careers.aspx Applicants are advised to read the instructions and steps carefully before submitting application form</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>A. STEPS FOR SUBMITTING THE APPLICATION FORM </SchemeP>
                            <SchemeP>The complete Application can be submitted in following 3 steps: </SchemeP>
                            <SchemeUList>
                                <SchemeItem>STEP 1: Submission of Applicant’s Details</SchemeItem>
                                <SchemeItem>STEP 2: Uploading of scanned Photograph/signature (Image Size – 50KB, Sign Size – 20KB) </SchemeItem>
                                <SchemeItem>STEP 3: Uploading of Resume/CV (Size – 100KB) </SchemeItem>
                            </SchemeUList>
                            <SchemeP>B. PROCESS FOR SUBMISSION OF APPLICATION FORM </SchemeP>
                            <SchemeUList>
                                <SchemeItem>Applicant has to read through the instructions and check the “I Agree” check box provided at the bottom of the form after declaration if applicant is sure that he /she meets the prescribed eligibility details for the posts for which he/she wants to apply. </SchemeItem>
                                <SchemeItem>Applicant can then start the process for submission of Application form by clicking “Proceed to Apply Online” button. Applicant is required to provide all the mandatory information [Marked with * (asterisk) sign] in the application form.</SchemeItem>
                                <SchemeItem>After specifying all the mandatory information as required in STEP 1 of submission of Application Form, Applicants will have to check the “I Agree” check box to agree to the specified declarations and also to the fact that the information furnished by him/her is correct to the best their knowledge and in case any of the furnished information is found wrong later on, his/her candidature is liable to be cancelled.</SchemeItem>
                                <SchemeItem>Applicant can also complete STEP 2 and STEP 3 of submission of Application Form on by clicking on “Upload Images/Signatures and Updated Resume”.</SchemeItem>
                                <SchemeItem>On clicking the “Submit Application” button and Unique Application Number will be generated after registering the Applicant for this recruitment.</SchemeItem>
                                <SchemeItem>Applicant can view the main Application details entered earlier by clicking the View/Print Application menu option available on the home page. Applicant can print these details by clicking on Print button. </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>1.3 The minimum area required for opening Pradhan Mantri Bhartiya Jan aushadhi Kendra should be 120 Sq. </SchemeItem>
                                <SchemeItem>Ft. 1.4 The inside area of Pradhan Mantri Bhartiya Jan aushadhi Kendra premises being utilized for storage and sale transaction of medicines should be in “U” or in “C” shape, for better visibility to customer & visitor.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Easy accessibility: Because of the PMBJP scheme the generic medicines can be easily availed from more than 7,400 stores covering all the districts of the country under the scheme.</SchemeItem>
                                <SchemeItem>Cost reduction: The medicines are made available at less cost that is below the market price under this scheme.</SchemeItem>
                                <SchemeItem>Savings: According to the data available, sales in the financial year 2020-21 (up to 4th March 2021) led to total savings of approximately Rs 3,600 Crore for common citizens as the medicines are cheaper by 50 percent to 90 percent than the market rates.</SchemeItem>
                                <SchemeItem>Employment: With permanent and regular earning through PMBJP the source of self-employment is also increasing.</SchemeItem>
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

export default GenericMedicine
