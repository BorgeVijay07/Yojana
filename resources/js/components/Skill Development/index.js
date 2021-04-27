import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/skill.jpg'
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
         SchemeP
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './SkillElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/skill devlopment/pmkvy.png'
import Icon2 from './../Images/pics/skill devlopment/rm.png'

const SkillDevelopment = () => {

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
                    <Heading>SKILL DEVELOPMENT</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Kaushal Vikas Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Rojgar Mela</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Kaushal Vikas Yojana</SchemeH2>
                            <Schemeh4>Document Required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant’s Aadhar Card</SchemeItem>
                                <SchemeItem>identity card</SchemeItem>
                                <SchemeItem>Voter ID Card</SchemeItem>
                                <SchemeItem>Bank account passbook</SchemeItem>
                                <SchemeItem>mobile number</SchemeItem>
                                <SchemeItem>Passport size photo</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website of Pradhan Mantri Kaushal Vikas Yojana i.e. pmkvyofficial.org.</SchemeItem>
                                <SchemeItem>On the Homepage, you will see the option of Quick Link.</SchemeItem>
                                <SchemeItem>Now, You will see the option of Skill India from this option. You have to click on this option.</SchemeItem>
                                <SchemeItem>After this, you will see the option of Register as a Candidate. You have to click on this option.</SchemeItem>
                                <SchemeItem>The application Form page will be displayed on the screen.</SchemeItem>
                                <SchemeItem> Now enter the required details (Mention all the details such as Basic Details, Second Location Details, Third Preferences of Training Sector, Fourth Associated Program and Fifth Interested In etc.</SchemeItem>
                                <SchemeItem>Click on Submit Button for the final submission of the application.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>After Registration:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>After the successful submission of the registration form, you will have to login.</SchemeItem>
                                <SchemeItem>To login, you have to click on the login option.</SchemeItem>
                                <SchemeItem>In this form, you will have to enter the username and password and you will have to click the login button.</SchemeItem>
                                <SchemeItem>In this way, your registration will be completed.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>Placement data search process:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>First of all you have to visit the official website of Pradhan Mantri Kaushal Vikas Yojana.</SchemeItem>
                                <SchemeItem>On the home page, you have to click on the Placements tab.</SchemeItem>
                                <SchemeItem>Now you have to select PMKVY in type and select your state.</SchemeItem>
                                <SchemeItem>As soon as you select your state, the placement data will come in front of you.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>Process of finding a training center:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>First of all you have to visit the official website of Pradhan Mantri Kaushal Vikas Yojana.</SchemeItem>
                                <SchemeItem>Now the home page will open in front of you.</SchemeItem>
                                <SchemeItem>On the home page you have to click on Find a Training Center tab.</SchemeItem>
                                <SchemeItem>After this, you will have to fill the information asked by selecting one of the search by sector, search by job role, search by location.</SchemeItem>
                                <SchemeItem>Now, you have to click on the submit button.</SchemeItem>
                                <SchemeItem>The information related to the training center will be displayed on the screen.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria: </Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Is an unemployed youth or, school/college dropouts</SchemeItem>
                                <SchemeItem>Possesses an Aadhaar card (for candidates from Aadhar region only)  and a bank account,</SchemeItem>
                                <SchemeItem>Has a verifiable alternate ID such as PAN or Voter ID (applicable only for the states of North-East region and J&K – Additional IDs may be added from time to time)</SchemeItem>
                                <SchemeItem>Any other criteria, as defined by the SSCs for the respective job roles.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>By taking advantage of this training, they can either start their own business or can get a job somewhere.</SchemeItem>
                                <SchemeItem>Apart from this, efforts are made to get skilled workers to get jobs at the government level also under this scheme.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Rojgar Mela</SchemeH2>
                            <Schemeh4>Document Required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Identity card</SchemeItem>
                                <SchemeItem>Address proof</SchemeItem>
                                <SchemeItem>Documents of merit</SchemeItem>
                                <SchemeItem>Mobile number</SchemeItem>
                                <SchemeItem>Passport size photo</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website of Uttar Pradesh Rojgar Mela under the Employment department UP i.e. sewayojan.up.nic.in.</SchemeItem>
                                <SchemeItem>On the Homepage, you have to click on the registration option.</SchemeItem>
                                <SchemeItem>The Registration Form page will be displayed on the screen.</SchemeItem>
                                <SchemeItem>In this form, you have to create your password by entering the details asked like- choose your category (jobseeker or employer), your name, mobile number, user id, password (8 digits), e-mail id etc., then submit Click on the button. After this your registration will be successful.</SchemeItem>
                                <SchemeItem>After you log in is to click on the sign by entering user IDs, passwords designed to button.</SchemeItem>
                                <SchemeItem>After logging in, you have to complete your profile by entering all your basic details, education qualification information and experience details. After this, you will start getting job notifications. According to your educational qualification, skills and experience have to be uploaded on the portal.</SchemeItem>
                                <SchemeItem>Based on this job notification, you can easily apply for the employment fair 2021.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria: </Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Educational Qualification: Candidate should have passed 8th, 10th, 12th, Diploma, ITI, Graduate and Post Graduate from a recognized Board / University / Institute.</SchemeItem>
                                <SchemeItem>Age Limit: The minimum and maximum age of the candidate should be between 18 and 40 years.</SchemeItem>
                                <SchemeItem>Nationality: The candidate should be a citizen of India.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>To provide job to unemployed youth of the state according to their educational qualifications and experience.</SchemeItem>
                                <SchemeItem>Unemployed youth of the state will have to register online to avail this scheme.</SchemeItem>
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

export default SkillDevelopment
