import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/edu.jpg'
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
         SchemeUList,
         SchemeItem,
         Schemeh4,
         SchemeP,
         SchemeSubItem
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './EducationElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/education/nss.png'
import Icon2 from './../Images/pics/education/pdrf.png'
import Icon3 from './../Images/pics/education/aicte.png'
import Icon4 from './../Images/pics/education/aicte.png'
import Icon5 from './../Images/pics/education/aicte.png'
import Icon6 from './../Images/pics/education/aicte.png'
import Icon7 from './../Images/pics/education/aicte.png'
import Icon8 from './../Images/pics/education/natp.png'
import Icon9 from './../Images/pics/education/kg.png'

const Education = () => {

    const [scheme1, setScheme1] = useState(true);
    const [scheme2, setScheme2] = useState(false);
    const [scheme3, setScheme3] = useState(false);
    const [scheme4, setScheme4] = useState(false);
    const [scheme5, setScheme5] = useState(false);
    const [scheme6, setScheme6] = useState(false);
    const [scheme7, setScheme7] = useState(false);
    const [scheme8, setScheme8] = useState(false);
    const [scheme9, setScheme9] = useState(false);

    const showScheme1 = () =>{
        setScheme1(true);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
        setScheme8(false);
        setScheme9(false);
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
        setScheme9(false);
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
        setScheme9(false);
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
        setScheme9(false);
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
        setScheme9(false);
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
        setScheme9(false);
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
        setScheme9(false);
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
        setScheme9(false);
    }

    const showScheme9 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
        setScheme8(false);
        setScheme9(true);
    }

    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>EDUCATION</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>National Scholarship Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Post-Doctoral Research Fellow (Scheme)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Saksham Scholarship Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>AICTE Pragati Scholarship for Girls</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme5}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>AICTE PG (GATE/GPAT) Scholarship</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme6}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>AICTE-National Doctoral Fellowship Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme7}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon7}/>
                            </SchemeIconCard>
                            <SchemeH3>Prime Minister's Special Scholarship Scheme (PMSSS)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme8}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon8}/>
                            </SchemeIconCard>
                            <SchemeH3>National Apprenticeship Training Program</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme9}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon9}/>
                            </SchemeIconCard>
                            <SchemeH3>Kasturba Gandhi Balika Vidyalaya Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>National Scholarship Scheme</SchemeH2>
                            <Schemeh4>Document required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Bank account Passbook.</SchemeItem>
                                <SchemeItem>Caste Certificate if you belong to a special category.</SchemeItem>
                                <SchemeItem>Income certificate as per your scholarship type.</SchemeItem>
                                <SchemeItem>Mobile Number</SchemeItem>
                                <SchemeItem>Passport Size Photograph</SchemeItem>
                                <SchemeItem>Previous Year Education Qualification certificate.</SchemeItem>
                                <SchemeItem>Self-declaration certificate.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP><b>First Step of registration:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>To register yourself you need to go to the National Scholarship</SchemeItem>
                                <SchemeItem>From the home page of the website you need to click “new registration”</SchemeItem>
                                <SchemeItem>Read the instructions appears on the screen, tick the checkbox and click “continue” option</SchemeItem>
                                <SchemeItem>Enter the details as asked on the screen such as name, date of birth, mobile number, gender, email ID, bank details etc.</SchemeItem>
                                <SchemeItem>Enter the captcha code and click the “Register” option</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Second Step “LOGIN”:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Log in through your “Student Registration ID”</SchemeItem>
                                <SchemeItem>Click on “Application Form” Icon</SchemeItem>
                                <SchemeItem>NSP Portal 2020</SchemeItem>
                                <SchemeItem>The application form will be displayed on the screen</SchemeItem>
                                <SchemeItem>Fill in the asked details i.e State of Domicile, Name of the student, Date of Birth, Community/ Category, Father’s Name, Aadhaar card Number, Mobile Number, Scholarship Category, Gender, Religion, Mother’s Name, Annual Family Income, Email ID etc.</SchemeItem>
                                <SchemeItem>Click on “Save & Continue”, next page appeared.</SchemeItem>
                                <SchemeItem>Upload the scanned copies of the documents.</SchemeItem>
                                <SchemeItem>Click on “Final Submission’’</SchemeItem>
                                <SchemeItem>Thus, Application is finally submitted.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure to check application Status:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>First of all, go to the official website of the national scholarship portal</SchemeItem>
                                <SchemeItem>The home page will open in front of you</SchemeItem>
                                <SchemeItem>On the home page, you need to click on the login link and select your year</SchemeItem>
                                <SchemeItem>Now you have to enter your application ID and password</SchemeItem>
                                <SchemeItem>After that, you are required to click on check your status</SchemeItem>
                                <SchemeItem>The application status will be on your screen</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure to check Scheme Wise Scholarship Sanctioned List</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>To check you need to go to the Official Website</SchemeItem>
                                <SchemeItem>From the home page of the website you need to click “new registration”</SchemeItem>
                                <SchemeItem>Now click “Scheme Wise Scholarship Sanctioned List”.</SchemeItem>
                                <SchemeItem>Choose an academic year, application type, ministry, scheme, state and district</SchemeItem>
                                <SchemeItem>Enter captcha code and click submit option</SchemeItem>
                                <SchemeItem>The list will appear on the screen</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure to apply for Renewal</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>To check you need to go to the Official Website</SchemeItem>
                                <SchemeItem>From the home page of the website you need to click “Login”</SchemeItem>
                                <SchemeItem>Now enter application ID, password and captcha appears on the screen</SchemeItem>
                                <SchemeItem>Click the “login” option and apply for renewal of the application</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure to Search Institute/School/ITI</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>To check you need to go to the Official Website</SchemeItem>
                                <SchemeItem>From the home page of the website you need to click “Search for Institute/ School/ ITI”</SchemeItem>
                                <SchemeItem>Enter the details Institution State, Institution District, Institute /College/ITI and School/College/ITI Name(Optional) </SchemeItem>
                                <SchemeItem>Now click “Get  Institution list” option and information will appear</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure To Check Eligibility At NSP 2.0</b></SchemeP>
                            <SchemeP>Any applicants who want to apply for a scholarship under NSP have to check their eligibility by following a few easy steps:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>To check eligibility you need to go to the National Scholarship Website</SchemeItem>
                                <SchemeItem>From the home page of the website you need to go “services” option</SchemeItem>
                                <SchemeItem>Click “scheme eligibility” from drop-down options</SchemeItem>
                                <SchemeItem>Enter the details such as Domicile State/UT, Course Level, Religion, Caste/Community Category, Gender, Parent Annual Income, Whether Disabled and captcha code</SchemeItem>
                                <SchemeItem>Click the “check eligibility” option</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure to search district wise nodal officer</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Go to the Official Website</SchemeItem>
                                <SchemeItem>From the home page of the website you need to click “services”</SchemeItem>
                                <SchemeItem>Click “Search Nodal Officer Detail” option</SchemeItem>
                                <SchemeItem>Select ministry, state, district and scheme</SchemeItem>
                                <SchemeItem>Enter captcha code appears in the image</SchemeItem>
                                <SchemeItem>Click “submit” option and information will appear on the screen</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Check List of Ministry Coordinators</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Go to the official website of the national scholarship portal</SchemeItem>
                                <SchemeItem>A Home page will be open in front of you</SchemeItem>
                                <SchemeItem>On the homepage click on the services link</SchemeItem>
                                <SchemeItem>From the services link select check the list of ministry coordinators</SchemeItem>
                                <SchemeItem>A new window will be open in front of you with the list of all we ministry officers along with their contact details</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Know Your AISHE Code</b></SchemeP>
                            <SchemeP>To know your AISHE Code applicants have to follow few easy steps as mentioned further:-</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Go to the National Scholarship</SchemeItem>
                                <SchemeItem>From the home page of the website you need to click “services”</SchemeItem>
                                <SchemeItem>Click “know your AISHE Code” from the drop-down list</SchemeItem>
                                <SchemeItem>Select your institution type, state, district, university type and name</SchemeItem>
                                <SchemeItem>Click submit option and list of colleges with AISHE code appears</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Know Your Payment-NSP</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>To know your payment information you have to go to the official website</SchemeItem>
                                <SchemeItem>From the home page click the “know your payment” option.</SchemeItem>
                                <SchemeItem>Know Your Payment Status</SchemeItem>
                                <SchemeItem>Now enter the asked details such as
                                    <SchemeSubItem>Bank</SchemeSubItem>
                                    <SchemeSubItem>Account no</SchemeSubItem>
                                    <SchemeSubItem>Confirm account number</SchemeSubItem>
                                    <SchemeSubItem>Verification code</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Click search option and information will display</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Track NSP Payment Status Online</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>To track NSP payment information you have to go to the official website</SchemeItem>
                                <SchemeItem>From the home page click the “Track NSP payments” option</SchemeItem>
                                <SchemeItem>Now enter the asked details such as
                                    <SchemeSubItem>Bank</SchemeSubItem>
                                    <SchemeSubItem>Account no or NSP application ID</SchemeSubItem>
                                    <SchemeSubItem>Verification code</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Click the search option and information will display</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure To Fill Institute’s Registration Form</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit the official website of the national scholarship portal</SchemeItem>
                                <SchemeItem>A home page will be open in front of you</SchemeItem>
                                <SchemeItem>On the homepage, you need to click on Institute login</SchemeItem>
                                <SchemeItem>Login: Now a login form will be open in front of you where you have to:-
                                    <SchemeSubItem>Select academic year</SchemeSubItem>
                                    <SchemeSubItem>Enter user ID</SchemeSubItem>
                                    <SchemeSubItem>Now Enter password</SchemeSubItem>
                                    <SchemeSubItem>Enter captcha code</SchemeSubItem>
                                    <SchemeSubItem>Click to login into the NSP profile</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Now a dialogue box will appear on your screen which will ask you to click on the ok option. You need to click on the ok option.</SchemeItem>
                                <SchemeItem><b>Registration form:</b> Now a registration form will be open in front of you.</SchemeItem>
                                <SchemeItem>On the registration form, first of all, you have to upload the identity proof of the institute’s Nodal officer. For this purpose, you need to click on choose file and select the image. Keep in mind that the image should be in PDF or JPEG format and not more than 200 KB in size. After that, you need to click on upload identity proof.</SchemeItem>
                                <SchemeItem>Now you need to enter all the required details in the registration form like:
                                    <SchemeSubItem>AISHE/DISE/NCVT code</SchemeSubItem>
                                    <SchemeSubItem>Name of Institute</SchemeSubItem>
                                    <SchemeSubItem>Do you want to change the name as per AISHE/DISE directory in NSP?</SchemeSubItem>
                                    <SchemeSubItem>Institute nature</SchemeSubItem>
                                    <SchemeSubItem>Affiliated board/university name</SchemeSubItem>
                                    <SchemeSubItem>Total student strength in the institute</SchemeSubItem>
                                    <SchemeSubItem>Institute address</SchemeSubItem>
                                    <SchemeSubItem>Institute state</SchemeSubItem>
                                    <SchemeSubItem>District</SchemeSubItem>
                                    <SchemeSubItem>URL of the institute’s website</SchemeSubItem>
                                    <SchemeSubItem>Head of institution detail</SchemeSubItem>
                                    <SchemeSubItem>Details of designated Institute Nodal officer for NSP</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>OTP: </b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>An OTP will be sent on the registered mobile number of the Nodal officer of the Institute. You need to enter the OTP in the OTP box and fill all other relevant information</SchemeItem>
                                <SchemeItem>You need to fill in all this information very carefully and before finally submitting the form you have to save the entered information by clicking the save form option after that you need to click on the final submit</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Reference ID:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>After finally submitting the form a reference ID will be generated and the form will be transferred to district Nodal officer</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Print Out: </b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>You need to take the printout of this form and submit it to the district Nodal officer. The form should be duly signed and stamped.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure To Update Profile Of The Institute</b></SchemeP>
                            <SchemeP>If the registration form is approved by the district Nodal officer then the new password will be sent on the registered mobile number of the Institute Nodal officer. In order to make the profile functional the institute Nodal officer is required to to login with new password and follow the steps given below:-</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit the official website of the national scholarship portal</SchemeItem>
                                <SchemeItem>A home page will be open in front of you</SchemeItem>
                                <SchemeItem>On the homepage, you need to click on Institute login</SchemeItem>
                                <SchemeItem>Profile Of The Institute</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Login:</b></SchemeP>
                            <SchemeP>Now a login page will appear before you where you have to:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Select academic year</SchemeItem>
                                <SchemeItem>Enter password</SchemeItem>
                                <SchemeItem>Now enter the user ID</SchemeItem>
                                <SchemeItem>Enter captcha code</SchemeItem>
                                <SchemeItem>Click to login into the NSG profile</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>OTP: </b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Now OTP will be sent to the institute Nodal officer’s registered mobile number. You are required to enter the OTP and click on confirm OTP</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Reset Password: </b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Now a new page will be open in front of you where you have to reset your password. After that, you are required to click on submit. Now you need to click on continue to login.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Update Profile: </b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Now the institute Nodal officer is required to update the profile. For this purpose click on administration. After that click on update profile.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>OTP:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Now OTP will be sent on the registered mobile number. You are required to enter the OTP and click on confirm OTP.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Institute profile update form:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Now a form will be open in front of you where you have to update information (if any):</SchemeItem>
                                <SchemeItem>Institute details:
                                    <SchemeSubItem>Name</SchemeSubItem>
                                    <SchemeSubItem>The institute nature</SchemeSubItem>
                                    <SchemeSubItem>Board or university name</SchemeSubItem>
                                    <SchemeSubItem>Course level offered</SchemeSubItem>
                                    <SchemeSubItem>Board state</SchemeSubItem>
                                    <SchemeSubItem>DISE/AISHE/NCVT code</SchemeSubItem>
                                    <SchemeSubItem>Institute address</SchemeSubItem>
                                    <SchemeSubItem>Institute state</SchemeSubItem>
                                    <SchemeSubItem>District</SchemeSubItem>
                                    <SchemeSubItem>Institute Pincode</SchemeSubItem>
                                    <SchemeSubItem>Institute taluka aur bloc</SchemeSubItem>
                                    <SchemeSubItem>Upload registered certificate</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Contact person details:
                                    <SchemeSubItem>Name</SchemeSubItem>
                                    <SchemeSubItem>Mobile number</SchemeSubItem>
                                    <SchemeSubItem>Phone</SchemeSubItem>
                                    <SchemeSubItem>Email</SchemeSubItem>
                                    <SchemeSubItem>OTP</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Bank details:
                                    <SchemeSubItem>IFSC code</SchemeSubItem>
                                    <SchemeSubItem>Bank account number</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Final Submit:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Now you need to click on final submit. After that, a message stating your profile has been updated successfully will be displayed on your screen.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Ishan Uday (for North Eastern region) – Student of graduation/ post-graduation, Family income less than 4.5 lakhs</SchemeItem>
                                <SchemeItem>National Means cum Merit Scholarship – Family income should not be more than 1.5 lakhs, Class 7th students having more than 55 percent can sit for the scholarship test.</SchemeItem>
                                <SchemeItem>Top Class Education Scheme for SC students – Must belong to SC category, Family income should be less than 6 lakhs.</SchemeItem>
                                <SchemeItem>PG Scholarship for University rank holders – 1st and 2nd rank holders, Must have at least 60 percent in undergraduate, Less than 30 years</SchemeItem>
                                <SchemeItem>Pragati Scholarship Schemes for Girls for Technical degree courses – Maximum 2 girls per family, Family income should be less than 8 lakhs.</SchemeItem>
                                <SchemeItem>Pre Matric Scholarship for Student with disabilities – Students must of 9th or 10th with 40 % or more disability, Family income should be less than 2.5 lakhs.</SchemeItem>
                                <SchemeItem>PG Indira Gandhi Scholarship for Single Girl Child – Must be of 30 years and admitted to PG course</SchemeItem>
                                <SchemeItem>Tracking Application and checking status</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Information about all the scholarship in one portal</SchemeItem>
                                <SchemeItem>Easy application procedure</SchemeItem>
                                <SchemeItem>Single integrated application</SchemeItem>
                                <SchemeItem>Suggest for the students about the best scholarship scheme to apply</SchemeItem>
                                <SchemeItem>No double applications</SchemeItem>
                                <SchemeItem>Transparent records.</SchemeItem>
                                <SchemeItem>Up to date data available</SchemeItem>
                                <SchemeItem>Help as a decision support system (DSS) for Ministries and departments</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Post-Doctoral Research Fellow (Scheme)</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Photograph of the applicant</SchemeItem>
                                <SchemeItem>Affidavit of carrying different name/surnames in the certificates (if applicable)</SchemeItem>
                                <SchemeItem>Attested copy of school leaving/high school/secondary school certificate (for the date of birth)</SchemeItem>
                                <SchemeItem>Attested copies of grade cards/mark sheets and degrees for BSc/MSc/MPhil/PhD/, BE/ME/PhD, B Pharm/M Pharm/PhD, MBBS/MD/MS</SchemeItem>
                                <SchemeItem>List of publications</SchemeItem>
                                <SchemeItem>Reprints of publications</SchemeItem>
                                <SchemeItem>One page summary of the PhD thesis (six copies)</SchemeItem>
                                <SchemeItem>Attested copies of letters of acceptance of papers accepted for publication and reprints</SchemeItem>
                                <SchemeItem>Seven copies of the detailed research proposal </SchemeItem>
                                <SchemeItem>Testimonials from 2 referees</SchemeItem>
                                <SchemeItem>Attested copy of the Caste Certificate (if applicable)</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Step 1: Visit the official fellowship notification.</SchemeItem>
                                <SchemeItem>Download the application form.</SchemeItem>
                                <SchemeItem>Fill in all required details.</SchemeItem>
                                <SchemeItem>Attach all supporting documents.</SchemeItem>
                                <SchemeItem>Send the completed application in all respect to the below-mentioned address with 'Application for ICMR CENTENARY - Post Doctoral Fellowship' written on top of the envelope.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Be up to 32 years of age as on the date of application (Relaxation of up to 5 years in age is given to SC/ST/OBC/PH and women candidates)</SchemeItem>
                                <SchemeItem>Be a new PhD/MS/MD degree holder within 3 years of completing his/her PhD/MS/MD or hold a provisional PhD/MS/MD degree</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Note:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The PDF guide should have a minimum designation of a Scientist-C grade. </SchemeItem>
                                <SchemeItem>Postgraduate medical students can also apply for the fellowship in MCI recognized postgraduate medical colleges wherein a minimum of three batches have obtained their postgraduate degree.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Consolidated fellowship grant of INR 50,000 per month</SchemeItem>
                                <SchemeItem>House rent allowance (if the fellows are receiving accommodation by the ICMR centers/institutes, the HRA will not be paid to them)</SchemeItem>
                                <SchemeItem>Non-Practicing Allowance (NPA) as admissible</SchemeItem>
                                <SchemeItem>A contingency grant of INR 3 lakhs per annum (25% of contingency grant can be used for travel including per diem expenses)</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme3?
                        <Scheme>
                            <SchemeH2>Saksham Scholarship Scheme</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Mark sheet of class 10 and 12 (as applicable)</SchemeItem>
                                <SchemeItem>Annual family Income certificate for the previous financial year in the prescribed format issued by an official, not below the rank of Tahsildar</SchemeItem>
                                <SchemeItem>Admission letter for getting admission in a degree/diploma course issued by the Directorate of Technical Education</SchemeItem>
                                <SchemeItem>Certificate issued by the Director/Principal/Head of the Institute</SchemeItem>
                                <SchemeItem>Disability certificate issued by the competent authority</SchemeItem>
                                <SchemeItem>Receipt of tuition fee</SchemeItem>
                                <SchemeItem>Bank account passbook seeded with the Aadhaar card indicating applicant's photograph, account number and IFSC code</SchemeItem>
                                <SchemeItem>Caste certificate (applicable for SC, ST or OBC candidates)</SchemeItem>
                                <SchemeItem>Aadhaar card</SchemeItem>
                                <SchemeItem>Duly signed declaration by the parents confirming the accuracy of information provided in the application form </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>Eligible candidates can apply for the scholarship through following steps -</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Step 1: Click on the 'Apply Now' button below.</SchemeItem>
                                <SchemeItem>Step 2: Read the guidelines carefully, select the undertaking and 'Continue'. </SchemeItem>
                                <SchemeItem>Step 3: Select the state of domicile, scholarship category, scheme type (scholarship scheme), gender, write the applicant's name, date of birth, mobile number, email ID.</SchemeItem>
                                <SchemeItem>Step 4: Provide the bank details (Bank name, IFSC Code, Account Number)</SchemeItem>
                                <SchemeItem>Step 5: Select Aadhaar or Bank Account Number as identification detail and click on the 'Register' button.</SchemeItem>
                                <SchemeItem>Step 6: The mobile number will be verified and an OTP will be generated.</SchemeItem>
                                <SchemeItem>Step 7: Now, log in using OTP and fill the form.</SchemeItem>
                                <SchemeItem>Step 8: An application ID and password will be generated. Use that for future references.</SchemeItem>
                                <SchemeItem>Note: All the applicants are advised to fill the form correctly, no changes can be made once submitted. The applicants are also advised to fill only one application as multiple applications will lead to the cancellation of the form.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>To be eligible, an applicant must:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Be a specially-abled student having not less than 40% disability</SchemeItem>
                                <SchemeItem>Be admitted to the first year of degree/diploma level course or second year of degree/diploma level course through lateral entry in any of the AICTE approved Institution of the respective year</SchemeItem>
                                <SchemeItem>Have a family income of less than INR 8 lakh per annum</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>All eligible specially-abled students will receive INR 50,000 per annum for every year of study as a lump sum amount towards payment of college fee, purchase of computer, books, stationeries, software, equipment, etc. No other additional grant will be payable in lieu of hostel charges and medical charges, etc.</SchemeP>
                        </Scheme>
                    :
                    null}
                    {scheme4?
                        <Scheme>
                            <SchemeH2>AICTE Pragati Scholarship for Girls</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Mark sheet of class 10 and 12 (as applicable)</SchemeItem>
                                <SchemeItem>Annual family income certificate for the previous financial year in the prescribed format issued by an official, not below the rank of Tahsildar</SchemeItem>
                                <SchemeItem>Admission letter for getting admission in a degree/diploma course issued by the Directorate of Technical Education</SchemeItem>
                                <SchemeItem>Certificate issued by the Director/Principal/Head of the Institute</SchemeItem>
                                <SchemeItem>Receipt of tuition fee</SchemeItem>
                                <SchemeItem>Bank account passbook seeded with the Aadhaar card indicating applicant's photograph, account number and IFSC code</SchemeItem>
                                <SchemeItem>Caste certificate (applicable for SC, ST or OBC candidates)</SchemeItem>
                                <SchemeItem>Aadhaar card</SchemeItem>
                                <SchemeItem>Duly signed declaration by parents confirming the accuracy of information provided in the application form</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>Eligible candidates can apply for the scholarship through following steps -</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Click on the 'Apply Now' button below.</SchemeItem>
                                <SchemeItem>Read the guidelines carefully, select the undertaking and 'Continue'. </SchemeItem>
                                <SchemeItem>Select the state of domicile, scholarship category, scheme type (scholarship scheme), gender, write the applicant's name, date of birth, mobile number, email ID.</SchemeItem>
                                <SchemeItem>Provide the bank details (Bank name, IFSC Code, Account Number)</SchemeItem>
                                <SchemeItem>Select Aadhaar or Bank Account Number as identification detail and click on the 'Register' button.</SchemeItem>
                                <SchemeItem>The mobile number will be verified and an OTP will be generated.</SchemeItem>
                                <SchemeItem> Now, log in using OTP and fill the form.</SchemeItem>
                                <SchemeItem>An application ID and password will be generated. Use that for future references.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Note:</b> All the applicants are advised to fill the form correctly, no changes can be made once submitted. The applicants are also advised to fill only one application as multiple applications will lead to the cancellation of the form.</SchemeP>
                            <Schemeh4>Eligibility:</Schemeh4>
                            <SchemeP>To be eligible, an applicant must:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Only for girl student</SchemeItem>
                                <SchemeItem>Be pursuing a technical degree/diploma course in the First year or Second year (through lateral entry only) on the basis of percentage of marks obtained in the 10+2/equivalent examination</SchemeItem>
                                <SchemeItem>Have a family income of less than INR 8 lakh per annum</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Note:</b> Up to two girls per family are eligible for this scholarship.</SchemeP>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>A total of 5,000 girl students are awarded this scholarship every year. The selected students will receive INR 50,000 per annum for every year of study as a lump sum amount towards payment of college fee, purchase of computer, books, stationery, equipment, software, etc. No other additional grant will be payable in lieu of hostel charges and medical charges etc.</SchemeP>
                        </Scheme>
                    :
                    null}
                    {scheme5?
                        <Scheme>
                            <SchemeH2>AICTE PG (GATE/GPAT) Scholarship</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeP>The following documents are required:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>GATE/GPAT scorecard (Scanned)</SchemeItem>
                                <SchemeItem>Bank passbook (Scanned)</SchemeItem>
                                <SchemeItem>Scanned copy of Aadhaar card (Students from J&K, Meghalaya and Assam are exempted) </SchemeItem>
                                <SchemeItem>Scanned copy of caste certificate</SchemeItem>
                                <SchemeItem>Scanned copy of the Non-Creamy Layer (NCL) certificate, not more than a year old (only for OBC candidates)</SchemeItem>
                                <SchemeItem>Note: All the documents uploaded must be in PDF format.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>Eligible candidates can apply for the scholarship online through following steps –</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Get the institute ID and student ID from the institute.</SchemeItem>
                                <SchemeItem>Click on the 'Apply Now' button below and provide the necessary details to validate student ID. </SchemeItem>
                                <SchemeItem>Fill in the application form for PG Scholarship GATE/GPAT. </SchemeItem>
                                <SchemeItem>Upload the required documents to the portal in PDF format only. </SchemeItem>
                                <SchemeItem>Click on "Submit Application" after completing all the steps.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>To be eligible, an applicant must-</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Have obtained a valid score in GATE/GPAT examination.</SchemeItem>
                                <SchemeItem>Have taken admission in the 1st year of M.Tech./M.E./M.Pharma/M.Arch. courses at an AICTE recognized institution in the academic year 2020-21.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>The selected students will get a monthly stipend of INR 12,400 per month for the duration of two years or the duration of the course, whichever is lower</SchemeP>
                        </Scheme>
                    :
                    null}
                    {scheme6?
                        <Scheme>
                            <SchemeH2>AICTE-National Doctoral Fellowship Scheme</SchemeH2>
                            <Schemeh4>Document required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Recent stamp size photograph of the applicant</SchemeItem>
                                <SchemeItem>Certificates of the qualifying examination (Bachelor and Master) and other degrees</SchemeItem>
                                <SchemeItem>Certificate of age proof</SchemeItem>
                                <SchemeItem>Mark lists of all years/semesters of qualifying examination (mark sheets clearly showing total marks obtained out of maximum marks according to semester or year)</SchemeItem>
                                <SchemeItem>Teaching experience</SchemeItem>
                                <SchemeItem>Certificates of industrial/research experience </SchemeItem>
                                <SchemeItem>Certificates of short-term courses attended.</SchemeItem>
                                <SchemeItem>All research publications</SchemeItem>
                                <SchemeItem>Any other academic qualifications/awards etc.</SchemeItem>
                                <SchemeItem>GATE/GPAT scorecard</SchemeItem>
                                <SchemeItem>Community certificate issued by a competent authority for applicants belonging to SC/ST/OBC category</SchemeItem>
                                <SchemeItem>Physically disabled certificate issued by competent authority (if necessary)</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant can click here to register as a new user. </SchemeItem>
                                <SchemeItem>An OTP will be sent to applicant's registered email id for verification.</SchemeItem>
                                <SchemeItem>Login to fill the application form. </SchemeItem>
                                <SchemeItem>Fill the application formcand pay the application fee online of INR 500 (for general/OBC) and INR 250 (for SC/ST/PH).</SchemeItem>
                                <SchemeItem>Upload the required documents. </SchemeItem>
                                <SchemeItem>Submit the application form. </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant must be a research scholar admitted in a research institute recognized by AICTE.</SchemeItem>
                                <SchemeItem>Applicant should have scored a CGPA of 7.5 on the scale of 10 or 75% or above or equivalent at both B.E/B.Tech/B.Pharm and M.E/M.Tech/M.Pharm. (For SC/ST/PH applicants CGPA requirement will be 7.0 on the scale of 10 or 70% or above or equivalent).</SchemeItem>
                                <SchemeItem>Applicant should have qualified GATE/GPAT during the last 5 years. </SchemeItem>
                                <SchemeItem>Applicant should be less than 30 years of age as on 31st August 2018. </SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Note:</b> Age relaxation of 5 years would be applicable to candidates belonging to SC/ST, women and physically challenged category.</SchemeP>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>AICTE-National Doctoral Fellowship Scheme 2018 provides a monthly stipend of INR 28,000, accommodation allowance (wherever hostel accommodation is not available) and a contingency grant of INR 15000 per annum.</SchemeP>
                        </Scheme>
                    :
                    null}
                    {scheme7?
                        <Scheme>
                            <SchemeH2>Prime Minister's Special Scholarship Scheme (PMSSS)</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Domicile certificate of J&K</SchemeItem>
                                <SchemeItem>Family Income Certificate (Issued by Tehsildar or equivalent)</SchemeItem>
                                <SchemeItem>Aadhaar card</SchemeItem>
                                <SchemeItem>Class 10th mark sheet</SchemeItem>
                                <SchemeItem>Class 12th mark sheet</SchemeItem>
                                <SchemeItem>Diploma Certificate (for lateral entry only)</SchemeItem>
                                <SchemeItem>Valid Caste certificate for SC/ST/SEBC for claiming the reservation as per State Govt. Policy</SchemeItem>
                                <SchemeItem>Valid disability certificate (if any)</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>Follow the below steps to apply for PMSSS 2019-20:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit the PMSSS 2019-20 registration portal.</SchemeItem>
                                <SchemeItem>Select the category: '12th Registration' or 'Diploma Registration'.</SchemeItem>
                                <SchemeItem>Fill the registration form with all the required details.</SchemeItem>
                                <SchemeItem>Submit and correct any possible errors in the form.</SchemeItem>
                                <SchemeItem>Verify the email through the link received on Email/SMS.</SchemeItem>
                                <SchemeItem>Complete the registration.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>The following are eligible for PMSSS:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Students who are the domiciles of the state of J&K</SchemeItem>
                                <SchemeItem>Students who have passed 10+2 exam from the J&K Board (JKBOSE) or CBSE affiliated schools located in J&K</SchemeItem>
                                <SchemeItem>Students who have passed 10+3 Diploma from the J&K State Polytechnic for admission directly in the second year in the prescribed list of Colleges against on the vacant seats of the previous year</SchemeItem>
                                <SchemeItem>Students having an annual family income of less than INR 8 lakh</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Note:</b> The following are not eligible for the scholarship-</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Students who do not apply through online registration on AICTE Portal</SchemeItem>
                                <SchemeItem>Students enrolled in courses offered by Open University</SchemeItem>
                                <SchemeItem>Students availing benefits from any other Govt./Non-Govt scheme</SchemeItem>
                                <SchemeItem>Students who joined a college other than those in AICTE Portal</SchemeItem>
                                <SchemeItem>Students taking admission through agents or NGOs</SchemeItem>
                                <SchemeItem>Students pursuing any postgraduate programme</SchemeItem>
                                <SchemeItem>Students absent during the counselling</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>A total of 5000 scholarships will be awarded for students pursuing courses in General Degree, Engineering Degree, and Medical Streams. Students selected for the scholarship will receive the following benefits:</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>For General Degree:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Up to INR 30,000 per annum for the academic fee (payable to the institution)</SchemeItem>
                                <SchemeItem>Maintenance charges of INR 1 lakh per annum (payable to the student)</SchemeItem>
                                <SchemeItem>A total of 2070 scholarships to be offered For Engineering Degree:</SchemeItem>
                                <SchemeItem>Up to INR 1.25 lakh per annum for the academic fee (payable to the institution)</SchemeItem>
                                <SchemeItem>Maintenance charges of INR 1 lakh per annum (payable to the student)</SchemeItem>
                                <SchemeItem>A total of 2830 scholarships to be offered For Medical/BDS or Equivalent Medical Streams:</SchemeItem>
                                <SchemeItem>Up to INR 3 lakh per annum for the academic fee (payable to the institution)</SchemeItem>
                                <SchemeItem>Maintenance charges of INR 1 lakh per annum (payable to the student)</SchemeItem>
                                <SchemeItem>A total of 100 scholarships to be offered</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme8?
                        <Scheme>
                            <SchemeH2>National Apprenticeship Training Program</SchemeH2>
                            <Schemeh4>Document required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>PAN Card</SchemeItem>
                                <SchemeItem>Aadhaar Card</SchemeItem>
                                <SchemeItem>Driving License</SchemeItem>
                                <SchemeItem>Voter ID Card</SchemeItem>
                                <SchemeItem>Valid Passport</SchemeItem>
                                <SchemeItem>Utility bill</SchemeItem>
                                <SchemeItem>Property tax bill</SchemeItem>
                                <SchemeItem>Telephone bill</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP><b>Registration Process:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>First, visit the official website</SchemeItem>
                                <SchemeItem>National Apprenticeship Training Program</SchemeItem>
                                <SchemeItem>On the homepage, click on the “Register” button</SchemeItem>
                                <SchemeItem>National Apprenticeship Training Program</SchemeItem>
                                <SchemeItem>The page appears with Eligibility Check, Questionnaire & Guidelines, Enrollment Form, and Preview & Confirm sections.</SchemeItem>
                                <SchemeItem>In the Eligibility Check section, in the drop-down list, click on I am a Student.</SchemeItem>
                                <SchemeItem>Other student-related questions will appear.</SchemeItem>
                                <SchemeItem>Type to answer the questions related to the eligibility check for the NATS programme.</SchemeItem>
                                <SchemeItem>If you are eligible for the training programme, the Congrats! You are eligible to enrol now the message will appear.</SchemeItem>
                                <SchemeItem>If you are not eligible for the training programme, Sorry! You are not eligible to enrol in this apprentice Program message will appears</SchemeItem>
                                <SchemeItem>Enter your details.</SchemeItem>
                                <SchemeItem>Click on Save and continue.</SchemeItem>
                                <SchemeItem>The Questionnaire & Guidelines section will appear.</SchemeItem>
                                <SchemeItem>Read the guidelines, required enrolment documents, and the terms and conditions</SchemeItem>
                                <SchemeItem>Select the By clicking this box I agree to the above Terms and Conditions checkbox.</SchemeItem>
                                <SchemeItem>Click on Agree and continue.</SchemeItem>
                                <SchemeItem>The Enrollment Form section will appear with Personal Information, Education Details, and Training Preferences tabs.</SchemeItem>
                                <SchemeItem>Select the required details</SchemeItem>
                                <SchemeItem>Click Save and Preview.</SchemeItem>
                                <SchemeItem>The Preview & Confirm section will appear.</SchemeItem>
                                <SchemeItem>Check all the entered details and click on Submit.</SchemeItem>
                                <SchemeItem>The complete page will appear with your Email ID, User ID, and Password details.</SchemeItem>
                                <SchemeItem>Click on Close & Continue.</SchemeItem>
                                <SchemeItem>Take a print out for future use.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure to Post a query</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>First of all, you have to go to the official website of the National Apprenticeship Training Program</SchemeItem>
                                <SchemeItem>The home page will open in front of you</SchemeItem>
                                <SchemeItem>On the homepage, you are required to click on post a query</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Post a query</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Now you will be redirected to a new page where you have to enter your name, email id, mobile number, and query</SchemeItem>
                                <SchemeItem>After that, you have to click on post a query</SchemeItem>
                                <SchemeItem>Login On The Portal- portal.mhrdnats.gov.in</SchemeItem>
                                <SchemeItem>Go to the official website of the National Apprenticeship Training Program</SchemeItem>
                                <SchemeItem>The home page will open in front of you</SchemeItem>
                                <SchemeItem>On the home page, you have to click on the login</SchemeItem>
                                <SchemeItem>A new page will open in front of you where you have to enter your login ID, password, and captcha code</SchemeItem>
                                <SchemeItem>After that, you are required to click on the login</SchemeItem>
                                <SchemeItem>By following this procedure you can the login on to the portal</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Search Institutions list</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit the website of the National Apprenticeship Training Scheme (NATS)Instituted by Boards of Apprenticeship Training / Practical Training Ministry of Human Resource Development, Government of India</SchemeItem>
                                <SchemeItem>Hit the institutions option and a new page shows where you should search the “list of institution” option which is available on the right-hand side under info corner</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Search Institutions list</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>The list will display on the screen. You can search the institute by name, course, district, state or type</SchemeItem>
                                <SchemeItem>There are various institutions across the country to provide National Apprenticeship Training. To check the list, you have to follow few steps as mentioned further:</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Procedure To View Contact Details</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>First of all, you have to go to the official website of the National Apprenticeship Training Program</SchemeItem>
                                <SchemeItem>The home page will open in front of you</SchemeItem>
                                <SchemeItem>On the homepage, you are required to click on the contact us link</SchemeItem>
                                <SchemeItem>Contact Details</SchemeItem>
                                <SchemeItem>As soon as you click on this link the contact details of all four regions will be on your computer screen</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>View Industries list</b></SchemeP>
                            <SchemeP>To check the list, you have to follow few steps as mentioned further:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit the Official website of the National Apprenticeship Training Scheme (NATS) Instituted by Boards of Apprenticeship Training / Practical Training Ministry of Human Resource Development, Government of India</SchemeItem>
                                <SchemeItem>Hit the industries option and a new page shows where you should search the “list of industries” option which is available on the right-hand side under the info corner</SchemeItem>
                                <SchemeItem>View Industries list</SchemeItem>
                                <SchemeItem>The list will display on the screen.</SchemeItem>
                                <SchemeItem>You can search the industries by name, category, district, state , or type</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>To apply for the national apprenticeship training program you must follow the following eligibility criteria mentioned below:-</SchemeP>
                            <SchemeUList>
                                <SchemeItem>An applicant should be above the age of 16 years.</SchemeItem>
                                <SchemeItem>The applicant must have a degree/diploma certificate.</SchemeItem>
                                <SchemeItem>The applicants who are already trained under any other Government training programme of skill development are not eligible under this scheme.</SchemeItem>
                                <SchemeItem>An Applicant should not be self-employed</SchemeItem>
                                <SchemeItem>The applicant must not be a Government employee.</SchemeItem>
                                <SchemeItem>The applicant should be an Indian citizen.</SchemeItem>
                                <SchemeItem>An applicant must not have work experience.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Sharing of 25% of prescribed stipend subject to a maximum of Rs. 1500/- per month per apprentice with the employers.</SchemeItem>
                                <SchemeItem>Sharing of basic training cost in respect of apprentices who come directly to apprenticeship training without any formal trade training.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme9?
                        <Scheme>
                            <SchemeH2>Kasturba Gandhi Balika Vidyalaya Scheme</SchemeH2>
                            <Schemeh4>Admissions and Enrollment: </Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The KGBVs are primarily meant for girls from disadvantaged communities such as SC, ST, OBC, and minorities from low female literacy mandals. While enrolling children in the KGBVs the following shall be given priority:
                                    <SchemeSubItem>Girls who have dropped out or never enrolled in school.</SchemeSubItem>
                                    <SchemeSubItem>Orphans and semi-orphans.</SchemeSubItem>
                                    <SchemeSubItem>Children from the BPL category.</SchemeSubItem>
                                    <SchemeSubItem>Each KGBV is permitted to enroll up to 200 children in classes 6 to 10. The following shall be ensured:</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Admissions into KGBVs are for classes 6 to 8 only. In exceptional cases such as orphans, single-parent children, etc., admissions may be made to classes 9 and 10.</SchemeItem>
                                <SchemeItem>Normally, admissions should not exceed 40 per class in classes 6 – 8.</SchemeItem>
                                <SchemeItem>If there is no vacancy in the KGBV in the same Mandal, i.e., if the number 40 per class has been achieved, the eligible girls should be taken to the neighboring Mandal where there is a vacancy.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Criteria for Enrollment of Girls</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Identification of girls for KGBV</SchemeItem>
                                <SchemeItem>Girls 10+ age group considered for KGBV.</SchemeItem>
                                <SchemeItem>Girls who have no primary schooling facility within 1 KM radius.</SchemeItem>
                                <SchemeItem>Overage girls from Residential Bridge courses.</SchemeItem>
                                <SchemeItem>Girls who have no upper primary education facility for further studies in their village own village.</SchemeItem>
                                <SchemeItem>Priority is given to SC/ST/OBC girls and those belonging to BPL families</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Reservation policy</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>In all 75% seats reserved for SC, ST, OBC, Minority</SchemeItem>
                                <SchemeItem>25% seats reserved for BPL families</SchemeItem>
                                <SchemeItem>Priority given to girls with special needs.</SchemeItem>
                                <SchemeItem>KGBV Admissions and  Enrollment Guidelines for the year 2014-15 in Kasturba Gandhi Balika Vidyalayas. Each KGBV is permitted to enroll up to 200 children in classes of 6th to 10th, but the following shall be ensured. The Girls already admitted in Govt Schools (In School Children) should not be enrolled in KGBVs As per Rc.353 KGBV Admissions and Enrollment Guidelines in AP and Telangana State</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>KGBV Admissions & Enrollment Guidelines:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>KGBV objective is to ensure the ‘Access’ and ‘Quality Education’ to Girls of ‘Disadvantaged Groups’ by setting up ‘Residential Pattern Schools’ at upper primary level, these Schools are primarily meant for Girls of ‘Disadvantaged Communities’ such as SC, ST, OBC, and Minorities in the jurisdictions of EBB/ LFL Mandals, however, while enrolling the Girl Children into the KGBVs certain procedural violations in ‘Admission and Enrolment’ process was observed by the ‘State Level Monitoring Officers’ which is highly objectionable and absolutely violating of the Govt of India norms.</SchemeItem>
                                <SchemeItem>While visiting the KGBVs ‘State Level Monitoring Officers’ they assessed that majority of the Children presently admitted in the KGBVs are seems like ‘In school Children’ its quiet contrast to the enrolment guidelines of KGBVs, this has to be arrested immediately for next future admissions, further it is felt there is a dire necessity to issue strict comprehensive instructions to the field functionaries of KGBVs (SOs & CRTs and other KGBV staff) whoever involves in the process of identification and admitting of the OSC girl children into the KGBVs.</SchemeItem>
                                <SchemeItem>The Special Officers and CRTs of KGBVs who basically involves in enrolment process by conducting special drives at the beginning of Academic year should have maintained well convergence with all concern local departmental officers like ‘MEOs’, ‘School HMs’, ‘Labour Department Officers’, ‘NCLP Officials’, ‘Anganwadi Workers’, and also with the ‘Local NGOs’ & ‘Village Elders’ in view of seeking their cooperation in enrolment process and mobilization.</SchemeItem>
                                <SchemeItem>KGBV team has to conduct their own survey and have to obtain the complete list of ‘OSC Girl Children’ of their jurisdiction and should have tally or cross-check with other available sources of OSC data like MRCS & Schools, finally, the teams should be ready with a final list of OSC girl children of their jurisdiction before reopening of the KGBV schools on 1st June 2014. Enrolment Criteria in KGBV Schools</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>After reopening of schools the teams of KGBV should conduct special drives in their jurisdiction for admitting Children into the KGBVs with the following categories</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Girls who have ‘Dropped out’ or never enrolled</SchemeItem>
                                <SchemeItem>Orphans, Semi-Orphans , Urban Deprived Girl Children</SchemeItem>
                                <SchemeItem>Children from BPL category</SchemeItem>
                                <SchemeItem>In Minority KGBVs, majority admissions should be done with minority girl children especially focus should be on the Muslim Minority Girl Children.</SchemeItem>
                                <SchemeItem>Any deviation from the above guidelines & instructions by the KGBV, SOs or CRTs will be treated as dereliction of ‘prime duty’ and action will be initiated immediately, ultimately it may leads to the removal/ termination of services from the KGBV by treating them inefficient staff, hence the SOs and CRTs together should ensure the team work while making process of enrolment drives, further it is strictly instructed that no ‘in school children’ should be admitted into the KGBV schools.</SchemeItem>
                                <SchemeItem>Each KGBV is permitted to enrol up to 200 children in classes of 6th to 10th, but the following shall be ensured.
                                    <SchemeSubItem>Admissions into KGBVs are for classes 6th to 8th only, in exceptional cases such as orphans, single parent children, etc, admissions may be made to classes of 9th & 10th but with prior approval of Project Officers, RVM (SSA). Normally admissions should not exceed 40 children per class in classes 6th to 8th.</SchemeSubItem>
                                    <SchemeSubItem>Enrolling 120 children in classes of 6th to 8th is inevitable, any gap in these classes in any KGBV that will be viewed as a serious laps and it can treated as inefficiency of the particular KGBV team and finally it will reflect on the individual performance appraisal of Special Officers and CRTs, if there is no vacancy in the KGBVs in the same mandal i.e., if the number 40 per class has been achieved, the eligible girls should be taken to the neighbouring mandal where there is vacancy.</SchemeSubItem>
                                    <SchemeSubItem>In the academic year 2013-14, there is a huge enrolment gap of 6147 children from 6th to 8th class in all KGBVs, however, we are communicating a list of KGBV wise enrolment gap to the all Secretaries of Societies and Project Officers, RVM (SSA) along with District wise, Category wise percentage of girls enrolled in KGBVs and District wise Category wise population share and also communicating the district wise Gap in enrollment as per the population share for taking immediate necessary action.</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Further, it is very crucial to mention that as per the population share there is a huge gap of 5623 Muslim minority girl children yet to be enrolled in KGBVs.</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Accordingly the Project Officers, RVM (SSA) shall hold the overall responsibility of admission procedures as per the guidelines communicated, he should initiate necessary instructions to the all field functionaries to ensure the 100% achievements at district level, deviation of instructions will be viewed seriously.</SchemeItem>
                                <SchemeItem>The District Level Monitoring Officers (Sectoral Officers of DPO) should thoroughly supervise the process of enrollment in their respective allotted KGBV.</SchemeItem>
                                <SchemeItem>Enrollment is a continue process and it should be started immediately and should be completed by 12th June 2014 in all the KGBVs as per the guidelines, however for the Special Cases like Orphans, Urban deprived children and other deprived categories the admission can open for some more time but with special permission of the Project Officers.</SchemeItem>
                                <SchemeItem>The District Level Monitoring Officers should prepare a detailed report in their respective KGBVs regarding number of children admitted, category wise children with certification that ensured the admissions with all out of School children.</SchemeItem>
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

export default Education
