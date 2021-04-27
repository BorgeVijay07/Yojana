import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/rural.jpg'
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
         SchemeP,
         Schemeh4
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './RDevelopmentElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/rural devlopment/ddugky.jpg'
import Icon2 from './../Images/pics/rural devlopment/dduay.png'
import Icon3 from './../Images/pics/rural devlopment/sy1.png'

const RuralDevelopment = () => {

    const [scheme1, setScheme1] = useState(true);
    const [scheme2, setScheme2] = useState(false);
    const [scheme3, setScheme3] = useState(false);

    const showScheme1 = () =>{
        setScheme1(true);
        setScheme2(false);
        setScheme3(false);
    }

    const showScheme2 = () =>{
        setScheme1(false);
        setScheme2(true);
        setScheme3(false);
    }

    const showScheme3 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(true);
    }

    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>RURAL DEVELOPMENT</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Deen Dayal Upadhyaya Grameen Kaushalya Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Deen Dayal Upadhyaya Antyodaya Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Swamitva Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Deen Dayal Upadhyaya Grameen Kaushalya Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Voter’s ID card</SchemeItem>
                                <SchemeItem>Aadhaar Card or Photo ID card issued by Govt. of India</SchemeItem>
                                <SchemeItem>BPL Card of self or your household (with names mentioned)</SchemeItem>
                                <SchemeItem>Rashtriya Swasthya Bima Yojana (RSBY) card</SchemeItem>
                                <SchemeItem>Antyodaya Anna Yojana (AAY) or BPL PDS card</SchemeItem>
                                <SchemeItem>NRLM-Self Help Group identification or certificate for any member of your household</SchemeItem>
                                <SchemeItem>MGNREGA worker card of any member of your household, with a minimum of 15 days of completed work</SchemeItem>
                                <SchemeItem>Age Limit reservation or relaxation proof</SchemeItem>
                                <SchemeItem>SC/ST Certificate issued by competent authority</SchemeItem>
                                <SchemeItem>Disability Certificate issued by Registered Medical Practitioner</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Firstly, the applicants need to get enrolled with his/her Gram Panchayat or Gram Rozgar Sewak, further they will get recommendations regarding nearby training centres.</SchemeItem>
                                <SchemeItem>Secondly, the applicants need to find and contact a nearby training centre.</SchemeItem>
                                <SchemeItem>Thirdly, applicants need to find a trade that he/she wants to learn and the contact information of the training centre teaching that trade.</SchemeItem>
                                <SchemeItem>Lastly, applicants can register by visiting the official website of Kaushal Panjee or by clicking here and further clicking on candidate registration.</SchemeItem>
                                <SchemeItem>Under this section there are three categories that can be accessed by the applicants for various purposes, such as Fresh/New Registrations, Incomplete registration form and registered candidate.</SchemeItem>
                                <SchemeItem>By selecting Fresh/New Registration and clicking on below tab ‘Next’ a new page will open that will require all related information.</SchemeItem>
                                <SchemeItem>Applicants are required to fill in all the information which should be correct as per their knowledge and click on ‘Save and Proceed’. In this way the applicant can register under DDU-GKY.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant’s age should be between 15 – 35 years</SchemeItem>
                                <SchemeItem>All Indian Women are eligible</SchemeItem>
                                <SchemeItem>Persons with disabilities (PWDs)</SchemeItem>
                                <SchemeItem>Transgender and other special groups</SchemeItem>
                                <SchemeItem>50% funds reserved for SCs and STs</SchemeItem>
                                <SchemeItem>15% for Minority Groups</SchemeItem>
                                <SchemeItem>3% for people with Disabilities</SchemeItem>
                                <SchemeItem>33% to be women in each training programs</SchemeItem>
                                <SchemeItem>People belonging to Particularly Vulnerable Tribal Groups (PVTGs)</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>DDU-GKY works with skill partners, regulating organizations, educations institutions, and private and public organizations to ensure positive change for rural youth and their families</SchemeItem>
                                <SchemeItem>Offers dedicated training hours for basic computers, spoken English and soft skills in residential and non-residential campuses with adequate technology matching the industry standards</SchemeItem>
                                <SchemeItem>Efforts to place at least 70% of project target trainees with minimum monthly salary of Rs. 6000</SchemeItem>
                                <SchemeItem>Maintains minimum training on soft skills for at least 160 hours</SchemeItem>
                                <SchemeItem>Organizes work readiness training program to ensure that candidates start performing, as soon as they join any organization</SchemeItem>
                                <SchemeItem>Trainee’s benefits include free uniform, course material, and even lodging and boarding in case of residential program</SchemeItem>
                                <SchemeItem>Post placement salary top-ups every month for 2-6 months depending on location of placement</SchemeItem>
                                <SchemeItem>Provides a Tablet PC per candidate at training centres</SchemeItem>
                                <SchemeItem>Manages computer labs and provides e-learning at training centres</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Deen Dayal Upadhyaya Antyodaya Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Identification card</SchemeItem>
                                <SchemeItem>residence certificate</SchemeItem>
                                <SchemeItem>Voter ID Card</SchemeItem>
                                <SchemeItem>mobile number</SchemeItem>
                                <SchemeItem>Passport size photo</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website of Deendayal Antydaya Yojana i.e. https://aajeevika.gov.in/</SchemeItem>
                                <SchemeItem>On the Homepage, Click on the Option “login” link.</SchemeItem>
                                <SchemeItem>On this page you will see the login form, you will see the option of Register under this login form</SchemeItem>
                                <SchemeItem>Registration Form page will be displayed on the screen.</SchemeItem>
                                <SchemeItem> Now enter the required details (Mention all the details such as name, username, email address, password, Contact Number, Secure Code etc.) and upload documents.</SchemeItem>
                                <SchemeItem>After filling all the information, you have to click on Create New Account.</SchemeItem>
                                <SchemeItem>After this you can now apply for the job in this login and apply for the incentives given under the Aajeevika Grameen Express scheme.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant must be resident of India.</SchemeItem>
                                <SchemeItem>Applicant must be poor.</SchemeItem>
                                <SchemeItem>Poor people from rural and urban areas can join this scheme.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The National Livelihood Mission 2020 aims to generate employment opportunities for poor citizens.</SchemeItem>
                                <SchemeItem>A provision of Rs 500 crore has been made for this scheme by the Government of India.</SchemeItem>
                                <SchemeItem>Under this scheme, all the poor people in Jammu & Kashmir and North East get 18 thousand rupees for this scheme.</SchemeItem>
                                <SchemeItem>An initial support of Rs 10,000 will be given to each group from the government and Rs 50,000 will be provided to the level federations in the registered areas.</SchemeItem>
                                <SchemeItem>Under the mission, a provision of Rs 15,000 has been made to train the urban poor and make them efficient, which is Rs 18 thousand per person for Northeast and Jammu and Kashmir.</SchemeItem>
                                <SchemeItem>The cost of building shelters for urban homeless is fully funded under the scheme.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme3?
                        <Scheme>
                            <SchemeH2>Swamitva Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeP>Required Only Basic detail like,</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Name</SchemeItem>
                                <SchemeItem>Address</SchemeItem>
                                <SchemeItem>DOB</SchemeItem>
                                <SchemeItem>Aadhar card</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Go to the Official Website of egramswaraj - https://egramswaraj.gov.in/</SchemeItem>
                                <SchemeItem>On the Home Page, click the New User Registration link.</SchemeItem>
                                <SchemeItem>Registration Form page will be displayed on the screen. Now enter your basic details like name, address, mobile number & mail id and the land related details in the application form.</SchemeItem>
                                <SchemeItem>Verify all the details and submit the online application form. After completion you will get an acknowledgement slip.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Rural people will be given ownership records as proof of owning the land.</SchemeItem>
                                <SchemeItem>Those who are using populated land on or after September 25, 2018, will be allotted the following land, for which they will be eligible to get land ownership records.</SchemeItem>
                                <SchemeItem>Under this scheme, Villagers will get records and ownership certificates of possession of their property.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The scheme will enable rapid development of rural areas by mapping all the village properties.</SchemeItem>
                                <SchemeItem>The drones will draw the digital map of every property falling in geographical limit of each Indian village.</SchemeItem>
                                <SchemeItem>Property Cards will be prepared and given to respective owners.</SchemeItem>
                                <SchemeItem>The scheme would help in reducing the disputes over property.</SchemeItem>
                                <SchemeItem>It will make it easier for villagers to avail of the bank loans.</SchemeItem>
                                <SchemeItem>It will enable government in effectively planning for the infrastructural programs in villages.</SchemeItem>
                                <SchemeItem>Under this scheme, the demarcated areas of the village will be demarcated with the help of drone survey technique.</SchemeItem>
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

export default RuralDevelopment
