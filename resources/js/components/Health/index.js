import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/health.jpg'
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
         SchemeSubItem,
         SchemeTable,
         SchemeTableR,
         SchemeTableH,
         SchemeTableD,
         SchemeP
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './HealthElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/Health/aby.png'
import Icon2 from './../Images/pics/Health/pmsby.png'
import Icon3 from './../Images/pics/Health/mjpjay.png'
import Icon4 from './../Images/pics/Health/may.png'
import Icon5 from './../Images/pics/Health/ahis.png'
import Icon6 from './../Images/pics/Health/rsby.png'
import Icon7 from './../Images/pics/Health/uhis.png'
import Icon8 from './../Images/pics/Health/yhis.png'

const Health = () => {

    const [scheme1, setScheme1] = useState(true);
    const [scheme2, setScheme2] = useState(false);
    const [scheme3, setScheme3] = useState(false);
    const [scheme4, setScheme4] = useState(false);
    const [scheme5, setScheme5] = useState(false);
    const [scheme6, setScheme6] = useState(false);
    const [scheme7, setScheme7] = useState(false);
    const [scheme8, setScheme8] = useState(false);

    const showScheme1 = () =>{
        setScheme1(true);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
        setScheme8(false);
    }

    const showScheme2 = () =>{
        setScheme1(false);
        setScheme2(true);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
        setScheme8(false);
    }

    const showScheme3 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(true);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
        setScheme8(false);
    }

    const showScheme4 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(true);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
        setScheme8(false);
    }

    const showScheme5 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(true);
        setScheme6(false);
        setScheme7(false);
        setScheme8(false);
    }

    const showScheme6 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(true);
        setScheme7(false);
        setScheme8(false);
    }

    const showScheme7 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(true);
        setScheme8(false);
    }

    const showScheme8 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
        setScheme8(true);
    }

    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>HEALTH</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Ayushyaman Bharat Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Suraksha Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Mahatma Jyotiba Phule Jan Arogya Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Mukhyamantri Amrutam Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme5}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Awaz Health Insurance Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme6}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>Rashtriya Swastha Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme7}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon7}/>
                            </SchemeIconCard>
                            <SchemeH3>Universal Health Insurance Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme8}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon8}/>
                            </SchemeIconCard>
                            <SchemeH3>Yashasvini Health Insurance Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Ayushyaman Bharat Yojana</SchemeH2>
                            <Schemeh4>Requirement :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Mobile No. For Registration</SchemeItem>
                                <SchemeItem>Aadhar Card of Applicant</SchemeItem>
                                <SchemeItem>Ration Card</SchemeItem>
                                <SchemeItem>Passport Size Photograph</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>First you have to head over to the official PMJAY website.</SchemeItem>
                                <SchemeItem>Click on the Button which is labelled as Am I Eligible.</SchemeItem>
                                <SchemeItem>Enter Your Mobile no. and the captcha code as shown in the image.</SchemeItem>
                                <SchemeItem>Generate the OTP</SchemeItem>
                                <SchemeItem>On Registered Mobile no. You will Receive the OTP code</SchemeItem>
                                <SchemeItem>Enter the OTP.</SchemeItem>
                                <SchemeItem>Enter your State.</SchemeItem>
                                <SchemeItem>There is a multiple option like
                                    <SchemeSubItem>By Mobile no.</SchemeSubItem>
                                    <SchemeSubItem>By Name</SchemeSubItem>
                                    <SchemeSubItem>By Ration Card</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>You have to choose the Appropriate Option.</SchemeItem>
                                <SchemeItem>Answer all the Question ,which is Asked there.</SchemeItem>
                                <SchemeItem>Then the result will shown on your screen.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria :</Schemeh4>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Rural</SchemeTableH>
                                    <SchemeTableH>Urban</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Households that belong to one of the SIX (6) deprivation criteria as per SECC<br></br>
                                                    1. Only one room with kucha walls and kucha roof<br></br>
                                                    2. No adult member between age 16 to 59<br></br>
                                                    3. Female headed households with no adult male member between age 16 to 59<br></br>
                                                    4. Disabled member and no able-bodied adult member<br></br>
                                                    5. SC/ST households<br></br>
                                                    6. Landless households deriving major part of their income from manual casual labourThe following categories are automatically included<br></br>
                                                    1. Households without shelter<br></br>
                                                    2. Destitute/ living on alms<br></br>
                                                    3. Manual scavenger families<br></br>
                                                    4. Primitive tribal groups<br></br>
                                                    5. Legally released bonded labour
                                    </SchemeTableD>
                                    <SchemeTableD>Households should belong to one of the following occupational categories<br></br>
                                                    1. Rag picker<br></br>
                                                    2. Beggar<br></br>
                                                    3. Domestic worker<br></br>
                                                    4. Street vendor/ Cobbler/hawker / Other service provider working on streets<br></br>
                                                    5. Construction worker/ Plumber/ Mason/ Labour/ Painter/ Welder/ Security guard/
                                                    Coolie and another head-load worker<br></br>
                                                    6. Sweeper/ Sanitation worker / Mali<br></br>
                                                    7. Home-based worker/ Artisan/ Handicrafts worker / Tailor<br></br>
                                                    8. Transport worker/ Driver/ Conductor/ Helper to drivers and conductors/ Cart
                                                    puller/ Rickshaw puller<br></br>
                                                    9. Shop worker/ Assistant/ Peon in small establishment/ Helper/Delivery assistant /
                                                    Attendant/ Waiter<br></br>
                                                    10. Electrician/ Mechanic/ Assembler/ Repair worker<br></br>
                                                    11. Washer-man/ Chowkidar
                                    </SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                            <Schemeh4>Benefits :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Medical Examination ,treatment and consultation.</SchemeItem>
                                <SchemeItem>Pre-hospitalization Expenses</SchemeItem>
                                <SchemeItem>Post-hospitalization follow-up care up to 15 days</SchemeItem>
                                <SchemeItem>Diagnostic Procedures and lab investigation Charges.</SchemeItem>
                                <SchemeItem>Cost of medicine and medical consumables expenses are covered</SchemeItem>
                                <SchemeItem>Non intensive and intensive care services.</SchemeItem>
                                <SchemeItem>Accommodation benefits</SchemeItem>
                                <SchemeItem>Medical Implantation services (where necessary)</SchemeItem>
                                <SchemeItem>Food services</SchemeItem>
                                <SchemeItem>Treatment resulting in Complications</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Suraksha Bima Yojana</SchemeH2>
                            <Schemeh4>Requirement :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Name</SchemeItem>
                                <SchemeItem>Aadhaar number</SchemeItem>
                                <SchemeItem>Contact information</SchemeItem>
                                <SchemeItem>Nominee details</SchemeItem>
                                <SchemeItem>The application form is available in English, Hindi, Bengali, Marathi, Oriya, Telugu, Tamil 
                                    and Gujarati.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>If you wish to apply For PMSBY You have to go to Bank where you have your Bank account.</SchemeItem>
                                <SchemeItem>Ask the Branch manager to apply for this Scheme with Sufficient Documents ask by the Bank to you.</SchemeItem>
                                <SchemeItem>Fill up the Application form with appropriate details.</SchemeItem>
                                <SchemeItem>Then Submit the Application form to the Branch Manager.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria :</Schemeh4>
                            <SchemeP>The eligibility criteria for subscribing for Pradhan Mantri Suraksha Bima Yojana is as follows:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>The minimum age requirement is 18 years.</SchemeItem>
                                <SchemeItem>The maximum age requirement is 70 years.</SchemeItem>
                                <SchemeItem>Those having a savings bank account and falling under the age group of 18 – 70 years are eligible to subscribe 
                                    to the policy.</SchemeItem>
                                <SchemeItem>The bank account must be linked with the Aadhaar card.</SchemeItem>
                                <SchemeItem>If the bank account is not linked with the Aadhaar card, then the Aadhaar card copy must be attached with the 
                                    application form.</SchemeItem>
                                <SchemeItem>If the individual has more than one savings account, he or she is only eligible to join the scheme through a 
                                    single bank account.</SchemeItem>
                                <SchemeItem>Premium to be paid is Rs.12 yearly.</SchemeItem>
                                <SchemeItem>The premium amount is auto debited from the insured’s bank account.</SchemeItem>
                                <SchemeItem>The scheme is valid for a year and it can be renewed at the end of the year.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableD>If accident causes the subscriber’s death</SchemeTableD>
                                    <SchemeTableD>Rs.2 lakh is paid to the nominee.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>If an accident leads to total and irrecoverable loss of use if both hands or feet, 
                                        loss of eyes or loss of sight in one year and loss of use of a hand or foot</SchemeTableD>
                                    <SchemeTableD>Rs.2 lakh is paid.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>If accident causes irrecoverable and total loss of sight of one eye and loss of use of 
                                        one hand or foot</SchemeTableD>
                                    <SchemeTableD>Rs.1 lakh is paid.</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                        </Scheme>
                    :
                    null}
                    {scheme3?
                        <Scheme>
                            <SchemeH2>Mahatma Jyotiba Phule Jan Arogya Yojana</SchemeH2>
                            <Schemeh4>Requirement:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>For the identity verification process the candidate has to submit a ration card (Orange/Yellow/White), 
                                    as well as KYC documents like Pan Card, Driving License, Aadhaar Card, Voter ID, Handicap Certificate, 
                                    Nationalized Bank Passbook with Photograph, School/College ID, etc.</SchemeItem>
                                <SchemeItem>The urban areas people have to submit the Government Local bodies or Tahsildar’s stamps as well as 
                                    signatures on the applicant’s photo.</SchemeItem>
                                <SchemeItem>The rural areas people have to submit Tahsildar’s stamp as well as signature on the applicant’s photograph.</SchemeItem>
                                <SchemeItem>Passport photocopy</SchemeItem>
                                <SchemeItem>Freedom Fighter ID card</SchemeItem>
                                <SchemeItem>Senior citizen card that is issued by central and state government of India</SchemeItem>
                                <SchemeItem>Defence ex-service card issued by Army board</SchemeItem>
                                <SchemeItem>Any photo ID proof issued by Govt. of Maharashtra</SchemeItem>
                                <SchemeItem>Marine Fishers Identity card</SchemeItem>
                                <SchemeItem>In the case of a newborn child if you do not have the photo of the child on the valid Yellow or Orange Ration card, 
                                    then you can submit the picture of the child along with either of the parents along with White/Orange/Yellow ration card 
                                    as well as the child’s birth certificate.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The individuals, as well as families who want to apply for the scheme, have to visit nearby Network/District/Women/General 
                                    hospital and meet Arogyamitra to start the application process.</SchemeItem>
                                <SchemeItem>A referral card will be provided to you if you visit a Government Health Facility. This referral card will represent the 
                                    Network Hospital along with the preliminary verdict by the doctors.You can also be able to get the referral card by attending 
                                    Health Camps organized by the Network Hospital.</SchemeItem>
                                <SchemeItem>The beneficiary is mandatory to provide a referral card with his Yellow or Orange Card. The candidates have an option 
                                    to provide Antyodaya or Annapurna Card on the place of a ration card.</SchemeItem>
                                <SchemeItem>Once you complete this process, then the diagnosis, as well as check-ups, will be started.</SchemeItem>
                                <SchemeItem>You will be admitted to the Network Hospital based on the diagnosis of disease.</SchemeItem>
                                <SchemeItem>After this, an E-authorization request will be sent to the insurance company as well as the same request will be reviewed 
                                    by the MJPJAY as well.</SchemeItem>
                                <SchemeItem>Medical Specialists of the insurance company, as well as MJPJAY, will monitor the request for authorization. Then if 
                                    all the conditions will meet your request will be approved.</SchemeItem>
                                <SchemeItem>The authorization process will be completed within the 24 hours by Medical Specialists of the insurance company as 
                                    well as MJPJAY. This process can be completed immediately in case of an emergency.</SchemeItem>
                                <SchemeItem>After the authorization process completion, cashless treatment or hospitalization will be extended to the beneficiary.</SchemeItem>
                                <SchemeItem>The insurance company will get the entire original bills, diagnostic reports, discharge summary, and other relevant documents 
                                    by the hospital.</SchemeItem>
                                <SchemeItem>After this, the insurance company will check the documents as well as approve the claim and clear the expense to the hospital.</SchemeItem>
                                <SchemeItem>The network hospital will provide free consultations, medicines as well as diagnostics for up to 10 days after discharge of the 
                                    patient under this scheme.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The families who are part of the identified distressed districts of the state of Maharashtra are eligible to apply under the scheme.</SchemeItem>
                                <SchemeItem>The beneficiary should have a White/Orange/Yellow Ration Card, Antyodaya Anna Yojana Card (AAY), or Annapurna Card.</SchemeItem>
                                <SchemeItem>The farmers who belong to various districts like Amaravati, Aurangabad, Akola, Buldhana, Hingoli, Beed, Jalna, Latur, Nanded, 
                                    Osmanabad, Wardha, Parbhani , Yavatmal, and Washim can also apply under this scheme.</SchemeItem>
                                <SchemeItem>The identification of the farmers from these districts will be made based on their White Ration Card or the head of the 
                                    family or certificate from the concerned Patwari or Talathi.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>The MJPJAY scheme offers several benefits to people belonging to the BPL and APL families. Below are the benefits of the scheme:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>It covers about 971 types of surgeries/therapies/procedures in 30 specialised categories.</SchemeItem>
                                <SchemeItem>It covers about 121 types of follow-up procedures in 30 specialised categories.</SchemeItem>
                                <SchemeItem>Only empanelled government hospitals and medical colleges will perform 132 government 
                                    reserved procedures.</SchemeItem>
                                <SchemeItem>Renal transplant upper ceiling is at Rs.2,50,000.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Mukhyamantri Amrutam Yojana</SchemeH2>
                            <Schemeh4>Requirement:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Proof of residence</SchemeItem>
                                <SchemeItem>Proof of identity</SchemeItem>
                                <SchemeItem>Income certificate</SchemeItem>
                                <SchemeItem>BPL certificate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The eligible beneficiaries must visit the Kiosks at Taluka or Civic 
                                    Centres in their area. Mobile kiosks are also available at a local level.</SchemeItem>
                                <SchemeItem>The authorities are well equipped with the needed hardware for enrolment.</SchemeItem>
                                <SchemeItem>The hardware is used to capture biometric such as fingerprint, iris scan, and photo of 
                                    the beneficiaries.</SchemeItem>
                                <SchemeItem>The beneficiaries might even have to fill out the MA Card application form in Gujarati 
                                    with appropriate details.</SchemeItem>
                                <SchemeItem>Once the details are verified, the MA health card is issued to the beneficiaries and 
                                    the enrolment process is complete.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The total annual income of the beneficiary must be less than Rs.2.5 lakh.</SchemeItem>
                                <SchemeItem>It is a must to have an income certificate before subscribing to this scheme.</SchemeItem>
                                <SchemeItem>This cover can be taken for self, spouse, and three dependent children.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>This Scheme is Cashless, do there is no chance of beneficiary falling into debt and 
                                    unexpected expenditure of medical emergencies.</SchemeItem>
                                <SchemeItem>Paperless claim processing for early claim settlement.</SchemeItem>
                                <SchemeItem>All the hospitals are accredited by one or more authorized Govt Bodies 
                                    approved by the international Society for Quality in Healthcare.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme5?
                        <Scheme>
                            <SchemeH2>Awaz Health Insurance Scheme</SchemeH2>
                            <Schemeh4>User Data Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhaar Card Number</SchemeItem>
                                <SchemeItem>Name of the migrant worker</SchemeItem>
                                <SchemeItem>Age of the migrant worker</SchemeItem>
                                <SchemeItem>Mobile number</SchemeItem>
                                <SchemeItem>Mother Tongue</SchemeItem>
                                <SchemeItem>marital status</SchemeItem>
                                <SchemeItem>Work experience in Kerala (in years/months)</SchemeItem>
                                <SchemeItem>Languages Known</SchemeItem>
                                <SchemeItem>Current Address in Kerala</SchemeItem>
                                <SchemeItem>Bank Account Number</SchemeItem>
                                <SchemeItem>Bank Name</SchemeItem>
                                <SchemeItem>IFSC Code</SchemeItem>
                                <SchemeItem>Branch Name</SchemeItem>
                                <SchemeItem>Mother name</SchemeItem>
                                <SchemeItem>Father name</SchemeItem>
                                <SchemeItem>Spouse name</SchemeItem>
                                <SchemeItem>Name of children (If children study in Kerala, mention their school name)</SchemeItem>
                                <SchemeItem>Type of Job</SchemeItem>
                                <SchemeItem>Designation</SchemeItem>
                                <SchemeItem>Wage Type (Per day/ Weekly/Monthly)</SchemeItem>
                                <SchemeItem>Wage Amount</SchemeItem>
                                <SchemeItem>Presently working or not</SchemeItem>
                                <SchemeItem>Documents such as Ration Card, Voter ID Card, etc.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Migrant Worker age is between 18-60 years</SchemeItem>
                                <SchemeItem>Identification Card recognized by the central or Kerala government such as Aadhaar Card, 
                                    Election Card, Passport, Driving Licence, etc. These ID proofs should be produced at the time of 
                                    getting enrolled in the Scheme.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>In order to get the health treatment benefits under this scheme, the insured labourer will have 
                                to present his Awaz smart card to the healthcare facility i.e. respective government hospital or 
                                empanelled private network hospital. Here are the details of medical expenses incurred on providing 
                                treatment to him/her which will be covered by the government</SchemeP>
                                <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Benefits</SchemeTableH>
                                    <SchemeTableH>Extent of coverage</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Health insurance</SchemeTableD>
                                    <SchemeTableD>Up to Rs.15,000</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Accidental death coverage</SchemeTableD>
                                    <SchemeTableD>Up to Rs.2 lakh</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                        </Scheme>
                    :
                    null}
                    {scheme6?
                        <Scheme>
                            <SchemeH2>Rashtriya Swastha Bima Yojana</SchemeH2>
                            <Schemeh4>Requirement:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Ration Card</SchemeItem>
                                <SchemeItem>Identity Proof</SchemeItem>
                                <SchemeItem>Residence Proof</SchemeItem>
                                <SchemeItem>Medical Report</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>First, an electronic list of eligible BPL households will be provided to the insurer.</SchemeItem>
                                <SchemeItem>The company will then prepare an enrollment schedule for each village, along with dates.</SchemeItem>
                                <SchemeItem>The BPL list including important dates will be then posted in each village at the enrollment station.</SchemeItem>
                                <SchemeItem>Finally, mobile enrollment stations will be set up at local centers in each village.</SchemeItem>
                                <SchemeItem>The enrollment stations will collect all of the details of the beneficiaries.</SchemeItem>
                                <SchemeItem>The beneficiary will have to pay the fee of Rs. 30</SchemeItem>
                                <SchemeItem>The smart card along with important information will be provided on the spot.</SchemeItem>
                                <SchemeItem>The list of households that have been issued smart cards will be sent to the state nodal agency.</SchemeItem>
                                <SchemeItem>This list of enrolled households is maintained centrally and is the basis for financial transfers from the 
                                    Government of India to the state governments.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The applicant must belong to a below poverty line (BPL) category household.</SchemeItem>
                                <SchemeItem>The applicant must include in the district BPL list created by the government.</SchemeItem>
                                <SchemeItem>Applicant must be an unorganized worker.</SchemeItem>
                                <SchemeItem>You can apply for the scheme if you are a-
                                    <SchemeSubItem>Construction worker (registered with the Welfare Boards)</SchemeSubItem>
                                    <SchemeSubItem>Railway porter</SchemeSubItem>
                                    <SchemeSubItem>Sanitation worker</SchemeSubItem>
                                    <SchemeSubItem>Domestic worker</SchemeSubItem>
                                    <SchemeSubItem>MNREGA worker</SchemeSubItem>
                                    <SchemeSubItem>Rickshaw puller</SchemeSubItem>
                                    <SchemeSubItem>Ragpicker</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>There is no age limit.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                            <SchemeItem><b>Sum Insured :</b> One can claim up to Rs. 30000 for various expenses that are covered under the policy.</SchemeItem>
                            <SchemeItem><b>Coverage for Family :</b> A typical Indian family of five members can benefit from this plan. The head of 
                                the family, spouse and three dependents are covered under the plan. A newborn baby can become an additional 
                                beneficiary until the expiry of the policy.</SchemeItem>
                            <SchemeItem><b>No Waiting Period :</b>A waiting period is a time when a policyholder cannot make a claim against certain 
                                conditions as specified by the insurance company. One needs to bear the cost of treatment from their own 
                                pocket during the waiting period. However, the RSBY does not have any such clause.</SchemeItem>
                            <SchemeItem><b>Pre Existing Diseases :</b> As the name suggests, a pre-existing diseases is any 
                                ailment suffered by the policyholder or the beneficiaries before purchasing the policy. 
                                This includes the diseases that the policyholder may not be aware of when purchasing the policy.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>Usually, in health insurance policies a waiting period of 2 to 4 years is imposed on pre-existing 
                                diseases. However, these are covered under RSBY irrespective of the age of a beneficiary from the 
                                date of purchase.</SchemeP>
                        </Scheme>
                    :
                    null}
                    {scheme7?
                        <Scheme>
                            <SchemeH2>Universal Health Insurance Scheme</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem><b>Age proof -</b> Birth Certificate, PAN Card, Voter's ID, Driving License, Passport, etc.</SchemeItem>
                                <SchemeItem><b>Address Proof -</b> Ration Card, Bank A/C Statement, Telephone Bill, Electricity Bill, Passport, Voter's ID, etc.</SchemeItem>
                                <SchemeItem><b>Medical Report -</b> These medical reports help you decide what health insurance policy is most suitable for Applicant.</SchemeItem>
                                <SchemeItem><b>Identity Proof -</b> Birth Certificate, PAN Card, Voter's ID, Driving License, Passport, etc.</SchemeItem>
                                <SchemeItem><b>Income Proof -</b> Your salary slips act as Income Proof. An Income Proof is required to confirm if you can pay the premium 
                                regularly and to fix on the insurance amount.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeP>To enrol in the UHIS, you need to approach the concerned insurance provider who will help in applying for the scheme</SchemeP>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP><center><b>APL (Above Poverty Line)</b></center></SchemeP>
                            <SchemeP><b>APL:</b> The family’s income is expected to be over the amount, making them eligible to be an APL family.</SchemeP>
                            <SchemeP><b>Age Eligibility:</b> This insurance scheme is available to people between the ages of 5 to 65 years. Children who are 
                            aged between the age of 3 months and 5 years can be covered as long as both parents are covered at the time.</SchemeP>
                            <SchemeP><center><b>BPL (Below Poverty Line)</b></center></SchemeP>
                            <SchemeP><b>BPL:</b> The family’s income is expected to be less than the amount, making them eligible to be a BPL family. 
                            A certificate as proof thereof issued by an official not below the rank of B.D.O. / Tehsildar of Revenue Department of 
                            the concerned State Government has to be attached.</SchemeP>
                            <SchemeP><b>Age Eligibility:</b> This insurance scheme is available to people between the ages of 5 to 70 years. Children who are aged between 
                            the age of 3 months and 5 years can be covered as long as both parents are covered at the time.</SchemeP>
                            <Schemeh4>Benefits :</Schemeh4>
                            <SchemeP><center><b>APL (Above Poverty Line)</b></center></SchemeP>
                            <SchemeP>It is essential to note that the expenses incurred in total for any single illness is restricted to Rs. 15,000 maximum. Also, the 
                                insurance company's liability when it comes to Company's liability in claims admitted during the period of Insurance shall not be more 
                                than the Sum Insured of Rs.30000/- per person or family as mentioned in the Schedule:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>The scheme covers up to 0.5% of Sum Insured per day for Room, Boarding expenses as provided by the Hospital or Nursing Home.</SchemeItem>
                                <SchemeItem>If the individual is admitted in the Intensive Care Unit (ICU) up to 1% of the sum insured per day can be claimed.</SchemeItem>
                                <SchemeItem>Costs incurred for Surgeon, Anaesthetist, Medical Practitioner, Consultants, Specialists Fees, Nursing Expenses will be 
                                    reimbursed for up to Rs.15% of Sum Insured per illness or Injury.</SchemeItem>
                                <SchemeItem>Other costs that include Anaesthesia, Blood, Oxygen, OT charges, Surgical appliances, Medicines, drugs, Diagnostic material & X-Ray, Dialysis, 
                                    Chemotherapy, Radiotherapy, cost of pacemaker, artificial limbs will be covered with up to 15% of Sum Insured per illness/Injury.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><center><b>BPL (Below Poverty Line)</b></center></SchemeP>
                            <SchemeP>For families who fall under the BPL category, the families would get either health care or hospitalization benefits along with death through 
                                accident benefit of the head earner, through this policy. You also have added maternity benefits:</SchemeP>
                            <SchemeP><b>Hospitalization Coverage/ Benefits:</b> The scheme covers the reimbursement of Hospitalisation expenses for illness or diseases suffered or injury 
                                sustained by the Insured Person. It is essential to note that the expenses incurred in total for any single illness is restricted to Rs. 15,000 maximum. 
                                Also, the insurance company's liability when it comes to Company's liability in claims admitted during the period of Insurance shall not be more than 
                                the Sum Insured of Rs.30000/- per person or family as mentioned in the Schedule:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>The scheme covers Upto to 0.5% of Sum Insured per day for Room, Boarding expenses as provided by the Hospital or Nursing Home.</SchemeItem>
                                <SchemeItem>If the individual is admitted in the Intensive Care Unit (ICU) up to 1% of the sum insured per day can be claimed.</SchemeItem>
                                <SchemeItem>Costs incurred for Surgeon, Anaesthetist, Medical Practitioner, Consultants, Specialists Fees, Nursing Expenses will be 
                                    reimbursed for Upto Rs.15% of Sum Insured per illness or Injury.</SchemeItem>
                                <SchemeItem>Other costs that include Anesthesia, Blood, Oxygen, OT charges, Surgical appliances, Medicines, drugs, Diagnostic material 
                                    & X-Ray, Dialysis, Chemotherapy, Radiotherapy, cost of pacemaker, artificial limbs will be covered with up to 15% of Sum Insured per illness/Injury.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme8?
                        <Scheme>
                            <SchemeH2>Yashasvini Health Insurance Scheme</SchemeH2> 
                            <SchemeP>730 network hospitals having a tie-up with the trust are involved in the implementation of Yeshasvini Health Insurance Scheme. It includes 
                                private as well as government hospitals. According to the empanelment criteria, the network hospitals are given approval by the trust to offer 
                                medical facilities. The Management Support Service Provider (MSP) arranges for cashless hospitalisation through these 730 network hospitals.</SchemeP>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The applicant’s Residence Certificate</SchemeItem>
                                <SchemeItem>Co-operative Society membership certificate</SchemeItem>
                                <SchemeItem>Government ID proof</SchemeItem>
                                <SchemeItem>Bank account details</SchemeItem>
                                <SchemeItem>Income Certificate</SchemeItem>
                                <SchemeItem>Recent Passport Size photo of the candidate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The Yeshasvini beneficiary visits a network hospital that the trust recognises and approves of.</SchemeItem>
                                <SchemeItem>A coordinating officer of the network hospital will examine the beneficiary’ UHID card.</SchemeItem>
                                <SchemeItem>Beneficiary must pay an enrollment fee.</SchemeItem>
                                <SchemeItem>Then the patient has to undergo initial diagnosis and few basic medical tests.</SchemeItem>
                                <SchemeItem>Depending on the initial diagnosis, the network hospital will send a pre-authorisation request online with 
                                    supporting documents to the MSP.</SchemeItem>
                                <SchemeItem>Doctors appointed by the MSP will examine the request and approval will be given within a day.</SchemeItem>
                                <SchemeItem>Making note of the limits specified under the scheme, cashless treatment will be provided to the beneficiary 
                                    by the network hospital.</SchemeItem>
                                <SchemeItem>After discharge, the network hospital will submit the original bills, discharge summary, and other medical 
                                    documents to the MSP for settling the claim.</SchemeItem>
                                <SchemeItem>The trust will settle the claim to the network hospital through the MSP within 45 days of receipt of the 
                                    documents.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>An individual can become a member of a cooperative society prior to six months to the commencement of the scheme 
                                Rural co-operative society members Members of Weavers, Cooperative Societies Self-help groups dealing with cooperative 
                                society Members of Beedi Workers Cooperative Societies Members of Fisherman Cooperative Societies.</SchemeP>
                            <SchemeP>Upper Age Limit : 75 Years</SchemeP>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Surgical procedures of 823 types specified by the Yeshasvini Trust is covered under the scheme at 
                                    rates pre-negotiated with the partner hospitals.</SchemeItem>
                                <SchemeItem>Medical emergencies like snake bite, dog bite, bull gore injuries, electric shocks, accidents, 
                                    and drowning occurring when using agricultural implements are covered under the scheme.</SchemeItem>
                                <SchemeItem>Normal delivery, angioplasty procedures, and neonatal care are covered under the scheme.</SchemeItem>
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

export default Health
