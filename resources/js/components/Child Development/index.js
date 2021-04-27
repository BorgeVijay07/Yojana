import React, {useState} from 'react'
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
         SchemeH3,
         SchemeDetails,
         Scheme,
         SchemeH2,
         Schemeh4,
         SchemeUList,
         SchemeItem,
         SchemeP,
         SchemeTable,
         SchemeTableR,
         SchemeTableH,
         SchemeTableD,
         SchemeSubItem
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './ChildDevelopmentElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/child devlopment/ass.png'
import Icon2 from './../Images/pics/child devlopment/pmmvy.png'
import Icon3 from './../Images/pics/child devlopment/ncs.png'
import Icon4 from './../Images/pics/child devlopment/sy.png'

const ChildDevelopment = () => {

    const [scheme1, setScheme1] = useState(true);
    const [scheme2, setScheme2] = useState(false);
    const [scheme3, setScheme3] = useState(false);
    const [scheme4, setScheme4] = useState(false);

    const showScheme1 = () =>{
        setScheme1(true);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
    }

    const showScheme2 = () =>{
        setScheme1(false);
        setScheme2(true);
        setScheme3(false);
        setScheme4(false);
    }

    const showScheme3 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(true);
        setScheme4(false);
    }

    const showScheme4 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(true);
    }

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
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Anganwadi Service scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Matru Vandana Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>National Creche Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Sabla Yojana (Adolescent Girls)</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Anganwadi Service scheme</SchemeH2>
                            <Schemeh4>Document Required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Birth Location</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP><b>Apply Online through aaplesarkar :</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>The applicant needs to register on the website Create User Id</SchemeItem>
                                <SchemeItem>The applicant can login using the credentials and fill the form as instructed.</SchemeItem>
                                <SchemeItem>The applicant can fill the online application form for “Application form for Enrolment of 
                                    Children (6 months – 3 yrs) at Anganwadis” in the citizen login section: Online Application</SchemeItem>
                                <SchemeItem>Submit the application.</SchemeItem>
                                <SchemeItem>After submitting the application, user will get a reference slip or number which should be 
                                    kept for future reference.</SchemeItem>
                                <SchemeItem>Status of the application can be tracked by the user in “Track your Application” section. 
                                    For tracking the application, application id or reference number will be required.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Apply in Person:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>All the eligible and the needy adolescent girls can contact any of the person mentioned below 
                                    to apply for the scheme in order to avail the benefits of the scheme.</SchemeItem>
                                <SchemeItem>Anganwadi Workers at village level</SchemeItem>
                                <SchemeItem>Supervisor at circle level</SchemeItem>
                                <SchemeItem>Child Development Project Officers at the block level</SchemeItem>
                                <SchemeItem>Concerned District programme officer</SchemeItem>
                                <SchemeItem>Applications can also be made in-person through the Women 
                                    and Child Development Department (Government of Maharashtra) offices and sub-offices.</SchemeItem>
                                <SchemeItem>You will be able to find the office location information and contact information under the 
                                    following link :Contacts</SchemeItem>
                                <SchemeItem>Please make sure you have all the documents (if any) that are listed under the “Required Documents” 
                                    section of this page.</SchemeItem>
                                <SchemeItem>Fill the application form with the required information</SchemeItem>
                                <SchemeItem>Submit the form in person to Women and Child Development Department Maharashtra.</SchemeItem>
                                <SchemeItem>After the authorities validate your application and the documents that are submitted they will 
                                    allow for enrolment of Children (6 months-3 yrs) at Anganwadis.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>All children (6 months-3 yrs of Age) are eligible.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Health Check-up</SchemeItem>
                                <SchemeItem>Referral services</SchemeItem>
                                <SchemeItem>Nutrition & Health Education</SchemeItem>
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
                    {scheme3?
                        <Scheme>
                            <SchemeH2>National Creche Scheme</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Audited accounts for the last 3 years along with a copy of their certified balance sheet for 
                                    the previous year</SchemeItem>
                                <SchemeItem>A statement giving details such as year, purpose, amount etc. of assistance that is received 
                                    during the last 3 years from the Central and State Government, Central Social Welfare Board, local 
                                    bodies or any other quasi-Government foundations including the requests made thereof to any one of 
                                    these or any other organization for the project under the consideration or for any other projects.</SchemeItem>
                                <SchemeItem>A copy of the registration certificate duly attested by a Gazetted Officer</SchemeItem>
                                <SchemeItem>A copy of Memorandum of Association (MOA)/Bye-Laws of the Organisation duly signed/attested 
                                    by the application.</SchemeItem>
                                <SchemeItem>List of members of the managing committee with their qualifications and occupations.</SchemeItem>
                                <SchemeItem>Copies of the annual report and audited statements of accounts for the last two years duly 
                                    signed/attested by the applicant.</SchemeItem>
                                <SchemeItem>Qualification of Creche Worker and helper</SchemeItem>
                                <SchemeItem>Certificate of Training of Creche Worker and helper.</SchemeItem>
                                <SchemeItem>Any other documents if required</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>To apply under the National Creche Scheme, the implementing agency/Mother NGOs will forward the 
                                application form of National Creche Scheme for the opening of a creche to the Ministry duly recommended 
                                by their State Units. It will be open to the Central Social Welfare Board (CSWB) to entertain an 
                                application directly from an organization/institution of an All India character and then, send the 
                                application form to the Ministry. No crèche will be relocated/opened without the approval of the Ministry. 
                                However, new crèche would be opened or relocated with the approval of the Ministry only in lieu of the 
                                closed creches, where the Anganwadi Centre-cum-Creche under ICDS does not exist or is not proposed to be 
                                established. In case implementing Agency or Mother, NGOs decide to close any of its crèches due to 
                                malfunctioning or else, a report of the same to be sent to the Ministry.</SchemeP>
                            <Schemeh4>User Charges:</Schemeh4>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Sr No.</SchemeTableH>
                                    <SchemeTableH>Families Type</SchemeTableH>
                                    <SchemeTableH>Charges</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>1</SchemeTableD>
                                    <SchemeTableD>BPL families</SchemeTableD>
                                    <SchemeTableD>Rs.20/- per child per month.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>2</SchemeTableD>
                                    <SchemeTableD>Families with the monthly income (Both Parents) of up to Rs.12,000/-</SchemeTableD>
                                    <SchemeTableD>Rs.100/- per child per month</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>3</SchemeTableD>
                                    <SchemeTableD>Families with the monthly income (Both Parents) of above Rs.12,000/-</SchemeTableD>
                                    <SchemeTableD>Rs.200/- per child per month</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>The State Government, Voluntary Institutions, Mahila Mandals with the know report of service in 
                                the field of child welfare department and registered under the Societies Registration Act, 1860 or 
                                registered as a Public Trust at least for the period for last 2 years are eligible for applying for 
                                the financial assistance from the fund.</SchemeP>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Daycare facilities including sleeping facilities.</SchemeItem>
                                <SchemeItem>Early stimulation for children below 3 years and pre-school education for 3 to 6 years old children.</SchemeItem>
                                <SchemeItem>Supplementary nutrition (to be locally sourced)</SchemeItem>
                                <SchemeItem>Growth monitoring.</SchemeItem>
                                <SchemeItem>Health check-up and immunization.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Sabla Yojana (Adolescent Girls)</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Birth Place</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP><b>Apply Online through aaplesarkar :</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>The applicant needs to register on the website Create User Id</SchemeItem>
                                <SchemeItem>The applicant can login using the credentials and fill the form as instructed</SchemeItem>
                                <SchemeItem>The applicant can fill the online application form for “Application form for Sabla Yojna: 
                                    Enrolment of Adolescent Girls” in the citizen login section: Online Application</SchemeItem>
                                <SchemeItem>Submit the application</SchemeItem>
                                <SchemeItem>After submitting the application, user will get a reference slip or number which 
                                    should be kept for future reference.</SchemeItem>
                                <SchemeItem>Status of the application can be tracked by the user in “Track your Application” section. 
                                    For tracking the application, application id or reference number will be required.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Apply in Person:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>All the eligible and the needy adolescent girls can contact any of the person mentioned 
                                    below to apply for the scheme in order to avail the benefits of the scheme.
                                    <SchemeSubItem>Anganwadi Workers at village level</SchemeSubItem>
                                    <SchemeSubItem>Supervisor at circle level</SchemeSubItem>
                                    <SchemeSubItem>Child Development Project Officers at the block level</SchemeSubItem>
                                    <SchemeSubItem>Concerned District programme officer</SchemeSubItem>
                                    </SchemeItem>
                                <SchemeItem>Applications can also be made in-person through the Women and Child Development 
                                    Department (Government of Maharashtra) offices and sub-offices.</SchemeItem>
                                <SchemeItem>You will be able to find the office location information and contact information 
                                    under the following link :Office Locations</SchemeItem>
                                <SchemeItem>Please make sure you have all the documents (if any) that are listed under the 
                                    “Required Documents” section of this page.</SchemeItem>
                                <SchemeItem>Fill the application form with the required information</SchemeItem>
                                <SchemeItem>Submit the form in person to Women and Child Development Department Maharashtra.</SchemeItem>
                                <SchemeItem>After the authorities validate your application and the documents that are submitted they will 
                                    allow for enrolment of adolescent girls under sabla yojna.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>Adolescent girls of 11-18 years of age group are eligible for the scheme.</SchemeP>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Health check-up and referral services.</SchemeItem>
                                <SchemeItem>Nutrition and health education (NHE) Counseling/guidance on family welfare, ARSH, 
                                    child care practices and home management.</SchemeItem>
                                <SchemeItem>Life skills education and accessing public services.</SchemeItem>
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

export default ChildDevelopment
