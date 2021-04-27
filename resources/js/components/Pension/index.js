import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/pension.jpg'
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
import { SchemeContainer } from './PensionElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/pension/npy.png'
import Icon2 from './../Images/pics/pension/apy1.png'
import Icon3 from './../Images/pics/pension/pmvvy1.png'
import Icon4 from './../Images/pics/pension/ig.jpg'
import Icon5 from './../Images/pics/pension/eps.png'
import Icon6 from './../Images/pics/pension/vpby.png'
import Icon7 from './../Images/pics/pension/spy.png'
import Icon8 from './../Images/pics/pension/pmkmdy.png'

const Pension = () => {

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
                    <Heading>PENSION</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>National Pension Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Atal Pension Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Vaya Vandana Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Indira Gandhi National Old Age Pension Scheme (IGNOAPS)</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme5}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Employee Pension Scheme (EPS)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme6}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>Varishtha Pension Bima Yojana (VPBY)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme7}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon7}/>
                            </SchemeIconCard>
                            <SchemeH3>Swavalamban Pension Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme8}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon8}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Kisan Maan Dhan Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>National Pension Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Subscriber registration form.</SchemeItem>
                                <SchemeItem>Photo ID proof</SchemeItem>
                                <SchemeItem>Proof of Date of Birth (DOB)</SchemeItem>
                                <SchemeItem>Proof of residence</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Obtain a Permanent Retirement Account Number (PRAN) application form. It is 
                                    available at any of the Point of Presence – Service Providers (POP-SP) and is available 
                                    online from the NPS official website . The applicant should make sure that the details 
                                    are filled correctly.</SchemeItem>
                                <SchemeItem>Submit PRAN application form At the nearest Point of Presence Services Provider (POP-SP)</SchemeItem>
                                <SchemeItem>Track the PRAN application using https://cra-nsdl.com/CRA/pranCardStatusInput.do</SchemeItem>
                                <SchemeItem>Submit the first contribution slip. A minimum of Rs. 500 should be contributed at the time of 
                                    applying for registration. In addition, an NCIS (instruction slip) should be submitted, stating the 
                                    details of the payment made towards the PRAN account.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Should be an Indian Citizen</SchemeItem>
                                <SchemeItem>The subscriber should be at least 18 years old and less than 65 years of age at the time of application.</SchemeItem>
                                <SchemeItem>Applicant should be a KYC complaint</SchemeItem>
                                <SchemeItem>Should not have a pre-existing NPS account.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>A part of the contribution made towards the NPS scheme is invested in equities. This means that the scheme offers 
                                    higher returns as compared to any other conventional tax-saving investment. The interest rate of this plan is 9%-12%, 
                                    making it the best pension plan in India for individuals who want to collect funds for the long-term, for a better 
                                    financial security after retirement</SchemeItem>
                                <SchemeItem>The NPS scheme requires to mandatorily invest until the age of 60. Partial withdrawals are permitted after 
                                    3 years from the date of opening the account, in case of an emergency such as – child’s education, purchasing a 
                                    house, or health related issues. The subscriber can withdraw up to 25% of the total contribution made, 3 
                                    times in the interval of 5 years</SchemeItem>
                                <SchemeItem>To earn a regular annuity from PFRDA registered insurance firm, it is mandatory to keep aside 
                                    40% of the accumulated fund. 60% of the remaining fund is tax-free</SchemeItem>
                                <SchemeItem>The subscribers can choose the option of investment and pension fund as per their needs</SchemeItem>
                                <SchemeItem>Offers regular monitoring and transparency in investment norms by the PFRDA</SchemeItem>
                                <SchemeItem>National pension system provides an advantage to investors over other fixed-income schemes 
                                    and also offers tax exemption under Section 80C and 80CCD of the Income Tax Act</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Atal Pension Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Pan Card</SchemeItem>
                                <SchemeItem>Mobile Number</SchemeItem>
                                <SchemeItem>Account Details</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>All nationalised banks offer the APY scheme. Individuals can visit these banks to open an APY account.</SchemeItem>
                                <SchemeItem>The account opening forms are available online on the bank websites as well. Individuals can download the application form.</SchemeItem>
                                <SchemeItem>The application form is available in English, Telugu, Tamil, Odia, Marathi, Kannada, Gujarati, and Bangla.</SchemeItem>
                                <SchemeItem>The application form must be filled and submitted at the bank.</SchemeItem>
                                <SchemeItem>A valid mobile number should be provided.</SchemeItem>
                                <SchemeItem>Aadhaar card photocopy must be submitted.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>How to fill APY form :</SchemeP>
                            <SchemeUList>
                                <SchemeItem><b>Addressing the form</b></SchemeItem>
                            </SchemeUList>
                            <SchemeP>You have to address the form to the Branch Manager. You can find out the name of your Branch Manager by calling or visiting the bank. Enter your bank name and branch.</SchemeP>
                            <SchemeUList>
                                <SchemeItem><b>Bank details</b></SchemeItem>
                            </SchemeUList>
                            <SchemeP>Fill the form in BLOCK letters. First, you are required to provide your bank details. Enter your bank account number, bank name and bank branch. This field is compulsory.</SchemeP>
                            <SchemeUList>
                                <SchemeItem><b>Personal details</b>
                                    <SchemeSubItem>Tick the box that is applicable that indicates whether you are “Shri”, “Smt” or “Kumari”. Tick “Shri” if you are a male applicant. Tick “Smt” if you are a married female applicant. Tick “Kumari” if you are a single female applicant.</SchemeSubItem>
                                    <SchemeSubItem>Married applicants must enter their spouse’s name.</SchemeSubItem>
                                    <SchemeSubItem>Enter your full name, date of birth, and age.</SchemeSubItem>
                                    <SchemeSubItem>Provide your mobile number, email address and Aadhaar number.</SchemeSubItem>
                                    <SchemeSubItem>You can then nominate someone and state their relationship to you. A nominee will receive your contribution in case of your death</SchemeSubItem>
                                    <SchemeSubItem>If the nominee is a minor, you need to provide their date of birth and guardian's name.</SchemeSubItem>
                                    <SchemeSubItem>You must also state if the nominee has any other statutory social security schemes and if they are income taxpayers.</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <SchemeUList>
                                <SchemeItem><b>Pension details</b>
                                    <SchemeSubItem>You can contribute towards your pension, between Rs.1,000 and Rs.5,000 with options in the form as Rs.1,000, Rs.2,000, Rs.3,000, Rs.4,000, and Rs.5,000. The box below titled, “Contribution Amount (Monthly)” is to be left blank as that will be filled in by the bank after calculating the amount you have to pay every month to receive the pension.</SchemeSubItem>
                                    <SchemeSubItem>The calculation will be based on your entry age. For example, for a pension of Rs.2,000, if your entry age is 25 years, you will have to pay Rs.151 per month.</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <SchemeUList>
                                <SchemeItem><b>Declaration and Authorisation</b></SchemeItem>
                            </SchemeUList>
                                <SchemeP>You need to fill in the date and place. You can either sign the document or put a thumb impression. By signing the document, you declare that you meet the Atal Pension Yojana eligibility criteria, and that you have read and understood the terms and conditions of the scheme. You declare that all the information you have written is correct as far as you know. If any changes have to be made to the information provided, you will contact the bank immediately. You also declare that you do not have any account under NPS (National Pension System). You will be held liable for any false or incorrect information knowingly provided.</SchemeP>
                            <SchemeUList>
                                <SchemeItem><b>To be filled in by the bank</b></SchemeItem>
                            </SchemeUList>
                            <SchemeP>The last section of the Atal Pension Scheme form, titled “Acknowledgement - Subscriber Registration for Atal Pension Yojana (APY)” is to be filled in by the bank. You should leave this box blank. It is an acknowledgment from the bank that they will subscribe to the Atal Pension Yojana Scheme for you. After you submit the form, the bank agent will fill it out.</SchemeP>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The applicant should come under the low-income group or should not come under the tax bracket</SchemeItem>
                                <SchemeItem>Suitable for all individuals between the age of 18 – 40 years</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>APY pension scheme is a social security scheme that enables workers from the unorganised sectors to save for their retirement by contributing a small amount every month</SchemeItem>
                                <SchemeItem>For every contribution made to the pension fund, the Central Government co-contributes 50% of the total contribution or Rs. 1,000 per annum, whichever is lower. The contribution will be made to each eligible applicant’s account for a minimum period of 5 years. Although, the subscriber needs to contribute for a period of 20 years or more</SchemeItem>
                                <SchemeItem>On cases such as the death of the contributor, the nominee of the Atal pension scheme can claim accumulated sum or pension money</SchemeItem>
                                <SchemeItem>APY scheme provides fixed monthly pension between Rs. 1,000 to Rs. 5,000 post retirement</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme3?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Vaya Vandana Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhaar card</SchemeItem>
                                <SchemeItem>Proof of age</SchemeItem>
                                <SchemeItem>Proof of address</SchemeItem>
                                <SchemeItem>Passport size photo of the applicant</SchemeItem>
                                <SchemeItem>Documents indicating that the applicant has retired from employment</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP><b>Online procedure:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Log onto the official website of LIC</SchemeItem>
                                <SchemeItem>Select ‘pension plans’ under products and proceed</SchemeItem>
                                <SchemeItem>Fill the relevant application form</SchemeItem>
                                <SchemeItem>Submit the online application and upload the documents as requested</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Offline Procedure:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Collect the application form at any of the LIC branches</SchemeItem>
                                <SchemeItem>Duly fill the application form</SchemeItem>
                                <SchemeItem>Submit the duly filled application form by attaching all relevant documents</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant must be an Indian citizen</SchemeItem>
                                <SchemeItem>Must be above 60 years of age</SchemeItem>
                                <SchemeItem>Should be ready to avail the policy term of 10 years</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The Pradhan Mantri Vaya Vandana LIC pension scheme offers the beneficiary an assured return of 8% per annum on the deposit</SchemeItem>
                                <SchemeItem>The pension or the return will be payable for a period of 10 years, the beneficiary can choose the tenure of payment</SchemeItem>
                                <SchemeItem>An individual can invest up to Rs. 15 lakhs maximum and Rs. 1000 minimum in this LIC pension scheme</SchemeItem>
                                <SchemeItem>In a case if the beneficiary dies before the completion of the tenure, the principal amount will be credited to the nominated beneficiary’s account</SchemeItem>
                                <SchemeItem>In case of critical illness, the beneficiary can opt for premature exit. In such cases 2 per cent penalty charge will be deducted.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Indira Gandhi National Old Age Pension Scheme (IGNOAPS)</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Application form for IGNOAP</SchemeItem>
                                <SchemeItem>Proof of age – The age certificate needs to be obtained from the concern medical officer and to be attested by the concerned Block medical officer.</SchemeItem>
                                <SchemeItem>Income certificate to be submitted</SchemeItem>
                                <SchemeItem>Below Poverty Line (BPL) card in the name of Applicant should be submitted.</SchemeItem>
                                <SchemeItem>Bank pass book or Post office passbook</SchemeItem>
                                <SchemeItem>Passport size photographs</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Get an application form from Social Welfare Department in the concerned area.</SchemeItem>
                                <SchemeItem>Fill all information in the Application form.
                                    <SchemeSubItem>State, District and Block details</SchemeSubItem>
                                    <SchemeSubItem>Name of the village Panchayat</SchemeSubItem>
                                    <SchemeSubItem>Name of Society, Beneficiary and Heirs</SchemeSubItem>
                                    <SchemeSubItem>House number</SchemeSubItem>
                                    <SchemeSubItem>Gender (Male / Female)</SchemeSubItem>
                                    <SchemeSubItem>Age and Date of Birth</SchemeSubItem>
                                    <SchemeSubItem>Birth certificate details</SchemeSubItem>
                                    <SchemeSubItem>Annual income and domicile certificate details.</SchemeSubItem>
                                    <SchemeSubItem>EPIC number (Voter ID number)</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Submit the application form along with all documents to the concerned Tehsil Social Welfare Officers. An applicant from urban area can directly submit the application to concern District Social Welfare Officer.</SchemeItem>
                                <SchemeItem>Application will be scrutinized or verified by officers</SchemeItem>
                                <SchemeItem>Social Welfare department will recommend the beneficiaries to District Social Welfare Officer.</SchemeItem>
                                <SchemeItem>The final sanction will be made by District Level Sanctioning Committee (DLSC).</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>To Track Your Application:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the home page of NASP.</SchemeItem>
                                <SchemeItem>Click on More reports from the main page.</SchemeItem>
                                <SchemeItem>Select the Application Track option from the next page</SchemeItem>
                                <SchemeItem>Enter your application number and click on search</SchemeItem>
                                <SchemeItem>Status of Application will be displayed.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant should be 60 years of age or higher</SchemeItem>
                                <SchemeItem>The applicant should come under the low-income or below poverty line grou</SchemeItem>
                                <SchemeItem>Must not have any regular source of financial support from family members or other sources</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The scheme aims at providing financial assistance to senior citizens, widows, and those with disabilities</SchemeItem>
                                <SchemeItem>IGNOAP scheme provides senior citizens of India a monthly pension</SchemeItem>
                                <SchemeItem>This scheme is a non-contribution government pension plan which means that the beneficiary does not have to contribute any amount to receive pension</SchemeItem>
                                <SchemeItem>A beneficiary between the age of 60-79 years will receive a monthly amount of Rs 200. In case the beneficiary is above 80 years of age, he/she will receive am amount of Rs 500</SchemeItem>
                                <SchemeItem>The pension amount will be credited to the beneficiary’s bank account or post office account</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme5?
                        <Scheme>
                            <SchemeH2>Employee Pension Scheme (EPS)</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeP><b>If an employee is married then claim should be sent by the wife and children of the deceased employee</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Form-20, 1 set, and Form 10D 3 set original signed by Employee’s wife (Nominee), not children.</SchemeItem>
                                <SchemeItem>Employee Id proof(Pan card, Aadhar card, Driving license, other ID proof.)</SchemeItem>
                                <SchemeItem>Original Death certificate. (Post mortem report and FIR copy.)</SchemeItem>
                                <SchemeItem>Wife(Nominee) ID proof (Pan card, Aadhar card, Driving license, other ID proof.)</SchemeItem>
                                <SchemeItem>Below 25year Children Birth certificate / 10th Mark sheet copy / School certificate copy for Age proof.</SchemeItem>
                                <SchemeItem>Affidavit copy (Pension can only be claimed by the Wife/Children of the claimant in case of death. Wife/Children needs to declare their dependency on employee stating that they are not getting any kind of monetary benefit from any other department and also need to share the work profile of employee’s last organization )</SchemeItem>
                                <SchemeItem>Joint family colored photograph 3 copy passport size.</SchemeItem>
                                <SchemeItem>Nominee’s mobile no. Height and Identification marks.</SchemeItem>
                                <SchemeItem>Original cancel cheque of State bank of India / Punjab National Bank. All family members’ bank account should be in the same branch and IFSC code will be the same.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>If an employee is non-married then the claim should be sent by the mother and father of the deceased employee. EPS Pension Form 10D</b></SchemeP>
                            <SchemeUList>
                            <SchemeItem></SchemeItem>
                                <SchemeItem>Form-20, 1 set and Form 10D 3 set original singed by Employee’s Father (Nominee) not Mother.</SchemeItem>
                                <SchemeItem>Employee Id (Pan card, Aadhar card, Driving license, other ID proof.)</SchemeItem>
                                <SchemeItem>Original Death certificate. (Post mortem report and FIR copy.)</SchemeItem>
                                <SchemeItem>Father and mother (Nominee) ID proof (Pan card, Aadhar card, Driving license, other ID proof.)</SchemeItem>
                                <SchemeItem>Age proof birth certificate / 10th Mark sheet copy / Declared by Village Sarpanch / MP/MLA On letterhead.</SchemeItem>
                                <SchemeItem>Affidavit copy (Pension can only be claimed by the Father and Mother of the claimant in case of death. Father and mother need to declare their dependency on employee stating they are not getting any kind of monetary benefit from any other department and before joining at organization employee was what to do.)</SchemeItem>
                                <SchemeItem>Joint family photograph color 3 copy passport size.</SchemeItem>
                                <SchemeItem>Nominee mobile no. Height and Identification marks.</SchemeItem>
                                <SchemeItem>Original cancel cheque of State bank of India / Punjab National Bank. All family members’ bank account should be the same branch and IFSC code will be the same.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>Types of EPS Scheme:</SchemeP>
                            <SchemeUList>
                                <SchemeItem><b>Widow pension –</b> Also known as Vridha pension where the widow of the deceased EPFO member is eligible for the pension</SchemeItem>
                                <SchemeItem><b>Child pension –</b> In case the EPF member is deceased, their surviving children become applicable to receive the monthly pension until the child turns 25 years old</SchemeItem>
                                <SchemeItem><b>Orphan pension –</b> In case the EPF member dies and does not have a surviving widow, the children of the member receive a pension under the orphan EPF pension scheme</SchemeItem>
                                <SchemeItem><b>Reduced pension –</b> The member of the EPF pension scheme can withdraw an early pension if he/she has attained the age of 50 but are less than 58 years old, only if they have made an active contribution for 10 years or more. In this case, the pension value is reduced to 4% rate per year</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Must be an EPFO member</SchemeItem>
                                <SchemeItem>Must complete 10 years of active service with equal years of active contribution towards the scheme</SchemeItem>
                                <SchemeItem>Should be 58 years or above</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Provides social security to the employees</SchemeItem>
                                <SchemeItem>Pension is provided to the employees working in the organized sectors during their retirement or after the age of 58 years</SchemeItem>
                                <SchemeItem>The EPS pension scheme allows certain arrangements for a member who wants to withdraw the pension funds early</SchemeItem>
                                <SchemeItem>EPFO account can be transferred to the widow or children of the member in case the beneficiary dies</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme6?
                        <Scheme>
                            <SchemeH2>Varishtha Pension Bima Yojana (VPBY)</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeP><b>On signing up </b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Address proof</SchemeItem>
                                <SchemeItem>Aadhar card</SchemeItem>
                                <SchemeItem>KYC document</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>On surrender</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Discharge form</SchemeItem>
                                <SchemeItem>Original Policy Document</SchemeItem>
                                <SchemeItem>Proof of medical treatment of pensioner or his /her spouse of the policy is surrendered within the lock in period of 15 years.</SchemeItem>
                                <SchemeItem>Proof of age if this detail has not been clarified earlier</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>For Payment of death benefits</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Claim form: These should be in format specified by LIC.</SchemeItem>
                                <SchemeItem>Original Policy Document.</SchemeItem>
                                <SchemeItem>NEFT mandate form: Claiment should provide all necessary bank details including bank name , account number, account type an IFSC code</SchemeItem>
                                <SchemeItem>Proof of death or proof of title: Claiment ca submit Whichever Document is applicable.</SchemeItem>
                                <SchemeItem>Proof of age : this is required if the proof of age of the pensioner is not mentioned under policy.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Download the form and fill it up with the mandatory information.</SchemeItem>
                                <SchemeItem>The form should be supported with the required documents, namely:
                                    <SchemeSubItem>Medical Reports</SchemeSubItem>
                                    <SchemeSubItem>Address Proof</SchemeSubItem>
                                    <SchemeSubItem>KYC documents</SchemeSubItem>
                                    <SchemeSubItem>Existence Certificate</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>The form should be duly filled up and submitted to the concerned Life Insurance Corporation of India(LIC).</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Available for citizens aged 60 years and above</SchemeItem>
                                <SchemeItem>No limit on the maximum age for this pension</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>All payments under this policy are made by NEFT or ECS</SchemeItem>
                                <SchemeItem>Offers an assured pension with a guaranteed interest rate of 8% per annum, which is higher than most of the other senior citizen pension schemes</SchemeItem>
                                <SchemeItem>Different pay-out modes available for receiving pension i.e. monthly, quarterly, semi-yearly or yearly</SchemeItem>
                                <SchemeItem>Free-look period of 15 days available from the date of receipt of the policy. In case the member wishes to withdraw from the scheme, the premium amount will be refunded (after deduction of stamp duty charges)</SchemeItem>
                                <SchemeItem>The premiums paid under this policy are tax exempted under Section 80C of the Income Tax Act</SchemeItem>
                                <SchemeItem>A member can apply for a loan against the LIC Varishtha Pension Bima Yojana after a period of 3 years. The amount of loan offered will be up to 75% of the policy amount</SchemeItem>
                                <SchemeItem>In case the policyholder dies, then the premium payment will be refunded to the spouse/nominee</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme7?
                        <Scheme>
                            <SchemeH2>Swavalamban Pension Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Address Proof</SchemeItem>
                                <SchemeItem>Aadhar card</SchemeItem>
                                <SchemeItem>KYC document</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>Interested individuals had to follow these following steps to complete the enrolment process for Swavalamban Pension Yojana –</SchemeP>
                            <SchemeUList>
                                <SchemeItem>They had to fill up the NPS-Swavalamban application form that was available both online and offline.</SchemeItem>
                                <SchemeItem>Applicants had to attach essential KYC documents serving as proof of identity and address.</SchemeItem>
                                <SchemeItem>Individuals were required to deposit a minimum amount of Rs. 100 at the time of registration.</SchemeItem>
                                <SchemeItem>Next, they had to submit their application form along with the required set of documents to the nearest aggregator.</SchemeItem>
                                <SchemeItem>They also had to make a minimum contribution to complete the registration process.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>Other than these, interested candidates also had the liberty to contact the aggregators through a toll-free number or via SMS to avail necessary Swavalamban Yojana Scheme details.</SchemeP>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>In a broad sense, the targeted beneficiaries of this pension scheme were individuals from the unorganised sector of the country. Nonetheless, to generate income from it, individuals were required to meet a few eligibility criteria like –
                                    <SchemeSubItem>Indian citizens between the age of 18 and 60 years.</SchemeSubItem>
                                    <SchemeSubItem>Not employed either by the State or the Central government frequently.</SchemeSubItem>
                                    <SchemeSubItem>Not employed by an autonomous body.</SchemeSubItem>
                                    <SchemeSubItem>Should not have been employed under either a state or the central government-owned public sector with enrolment to an employer-backed retirement scheme.</SchemeSubItem>
                                    <SchemeSubItem>Should not have been covered under any social security scheme that was formulated under the following laws –</SchemeSubItem>
                                    <SchemeSubItem>Employees’ Provident Fund and Miscellaneous Provisions Act, 1952</SchemeSubItem>
                                    <SchemeSubItem>The Jammu and Kashmir Employees’ Provident Fund Act, 1961</SchemeSubItem>
                                    <SchemeSubItem>The Seamen’s Provident Fund Act, 1966</SchemeSubItem>
                                    <SchemeSubItem>The Coal Mines Provident Fund and Miscellaneous Provisions Act, 1948</SchemeSubItem>
                                    <SchemeSubItem>The Assam Tea Plantations Provident Fund and Pension Fund Scheme Act, 1955</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>The Swavalamban Pension Yojana was replaced in the year 2016 with an improved and more effective pension scheme known as the Atal Pension Yojana. Existing account holders of the pension scheme were allowed to switch to Atal Pension Yojana to retain their contributions earned from the government. It further, promised to facilitate the process of building a retirement corpus, while reducing the age bracket of investors from the range of 18–60 years to 18–40 years. Other than these, both schemes tend to share several similarities. Regardless, interested investors can check the existing pension schemes to make a more informed decision.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem><b>Diversified risk factor:</b> This scheme was closely monitored by the PFRDA, which ensured transparency in dealings and adherence to investment-oriented norms. In turn, it extended assured returns and offered substantial scope to generate income. This aspect was considered to be one of the major factors that made Swavalamban Yojana a safe retirement-oriented investment plan.</SchemeItem>
                                <SchemeItem><b>Minimal investment amount:</b> Since there was no fixed monthly contribution and pre-decided investment frequency, it enabled individuals to contribute money towards the scheme as per their convenience.</SchemeItem>
                                <SchemeItem>Further, it allowed account holders to generate income from an investment of as little as Rs. 1000 per month. This minimal contribution requirement made it a favourable investment plan for individuals with limited means.</SchemeItem>
                                <SchemeItem><b>Tax benefits:</b> Also, the amount of money received on maturity was fully exempted from tax, thus helping maximise the returns. In turn, it protected individuals’ savings from eroding.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme8?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Kisan Maan Dhan Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhaar Card</SchemeItem>
                                <SchemeItem>Bank Passbook and Account Details</SchemeItem>
                                <SchemeItem>Birth Certificate</SchemeItem>
                                <SchemeItem>Address Proof</SchemeItem>
                                <SchemeItem>Particulars of the nominee</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Go to the nearest Common Service Centre along with the required documents</SchemeItem>
                                <SchemeItem>The Village Level Entrepreneur (VLE) available at the CSC will get the online registration done will help of documents like Name, DOB, Aadhaar card number and details of the spouse and nominee</SchemeItem>
                                <SchemeItem>The data is checked manually including the verification of bank and personal details from the supporting documents</SchemeItem>
                                <SchemeItem>The mobile number of the beneficiary is verified via OTP</SchemeItem>
                                <SchemeItem>Scanned, self-attested copies are collected from the beneficiary, attached with the registration form </SchemeItem>
                                <SchemeItem>The form along with the copies of supporting documents are sent for further processing</SchemeItem>
                                <SchemeItem>After the completion of the enrollment process, an auto-debit mandate form is generated by the bank of the beneficiary which is duly signed declaring the consent of the farmer for auto-debit of contributions every month</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Entry age of 18 to years</SchemeItem>
                                <SchemeItem>Small and Marginal Farmer (SMF) who owns cultivable land up to 2 hectare (according to the land records of the same state/UT)</SchemeItem>
                                <SchemeItem>SMFs enrolled under other saving schemes such as Nation Pension Scheme (NPS), Employees’ Provident Fund Organisation etc.</SchemeItem>
                                <SchemeItem>Farmers enrolled under Pradhan Mantri Shram Yogi Maan Dhan Yojana (PM-SYM), Pradhan Mantri Laghu Vyapari Maan-dhan Yojana (PM-LVM)</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>Under this scheme, a minimum fixed pension of Rs.3,000/- is provided to the small and marginal farmers, subject to certain exclusion criteria, on attaining the age of 60 years. It is a voluntary and contributory pension scheme. The eligible farmer is required to contribute to a Pension Fund between Rs.55 to Rs.200 per month depending on the entry age. The Central Government also contributes in equal amount to the Pension Fund.</SchemeP>
                        </Scheme>
                    :
                    null}
                </SchemeDetails>
            </MainSec>
            <Footer />
        </>
    )
}

export default Pension
