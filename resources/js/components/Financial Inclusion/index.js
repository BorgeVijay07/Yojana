import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/finance.jpg'
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
         SchemeSubItem,
         SchemeTable,
         SchemeTableR,
         SchemeTableH,
         SchemeTableD
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './FinancialElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/finantial_inclusion/apy.png'
import Icon2 from './../Images/pics/finantial_inclusion/pmvvy3.png'
import Icon3 from './../Images/pics/finantial_inclusion/pmjdy.png'
import Icon4 from './../Images/pics/finantial_inclusion/suis.png'
import Icon5 from './../Images/pics/finantial_inclusion/pmmy.png'
import Icon6 from './../Images/pics/finantial_inclusion/pmsby.png'
import Icon7 from './../Images/pics/finantial_inclusion/ssy.png'

const FinancialInclusion = () => {

    const [scheme1, setScheme1] = useState(true);
    const [scheme2, setScheme2] = useState(false);
    const [scheme3, setScheme3] = useState(false);
    const [scheme4, setScheme4] = useState(false);
    const [scheme5, setScheme5] = useState(false);
    const [scheme6, setScheme6] = useState(false);
    const [scheme7, setScheme7] = useState(false);

    const showScheme1 = () =>{
        setScheme1(true);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
    }

    const showScheme2 = () =>{
        setScheme1(false);
        setScheme2(true);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
    }

    const showScheme3 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(true);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
    }

    const showScheme4 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(true);
        setScheme5(false);
        setScheme6(false);
        setScheme7(false);
    }

    const showScheme5 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(true);
        setScheme6(false);
        setScheme7(false);
    }

    const showScheme6 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(true);
        setScheme7(false);
    }

    const showScheme7 = () =>{
        setScheme1(false);
        setScheme2(false);
        setScheme3(false);
        setScheme4(false);
        setScheme5(false);
        setScheme6(false);
        setScheme7(true);
    }

    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>FINANCIAL INCLUSION</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Atal Pension Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Vaya Vandana Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Jan Dhan Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Stand up India Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme5}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Mudra Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme6}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Suraksha Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme7}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon7}/>
                            </SchemeIconCard>
                            <SchemeH3>Sukanya Samriddhi Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
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
                    {scheme2?
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
                    {scheme3?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Jan Dhan Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhaar Card/Aadhaar Number (In case address has changed, a self-certification of current address will be required)</SchemeItem>
                                <SchemeItem>If Aadhaar Card is not available, one of the following Officially Valid Documents (OVD) is required:
                                    <SchemeSubItem>Voter ID Card</SchemeSubItem>
                                    <SchemeSubItem>Driving License</SchemeSubItem>
                                    <SchemeSubItem>PAN Card</SchemeSubItem>
                                    <SchemeSubItem>Passport</SchemeSubItem>
                                    <SchemeSubItem>NREGA Card</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>These are applicable as 'Proof of Identity and Address' if address is mentioned</SchemeItem>
                                <SchemeItem>If Officially Valid Documents are not available, and individual is categorised as ‘low-risk’ by banks, one of the following documents is required:</SchemeItem>
                                <SchemeItem>Identity Card with applicant’s photograph issued by Central/State government departments, statutory/regulatory authorities, public sector undertakings, scheduled commercial banks and public financial institutions</SchemeItem>
                                <SchemeItem>Letter issued by a gazette officer, with a duly attested photograph of the person</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>To apply for the account, you will be required to download the application form in PDF format (available in Hindi and English) from the official website for the scheme. You can choose a file of either language, as per your convenience.</SchemeItem>
                                <SchemeItem>In the downloaded form, you have to fill in the name of the bank, along with the bank code. Also update the bank branch, name of the village and town, block name/sub district, district, state, ward number/SSA code, village code, and town code.</SchemeItem>
                                <SchemeItem>Enter your personal information, such as name, address, occupation, Aadhaar number, annual income, existing bank accounts of your family members, and details of your kisan credit card. You should also tick the checkbox in order to receive a Rupay debit card.</SchemeItem>
                                <SchemeItem>You should next enter the nomination details and submit the form to the nearest bank branch.</SchemeItem>
                                <SchemeItem>You should ensure that the form is filled in accurately. In case you have any queries, you can approach the bank officials for clarification before submitting the form.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Individuals with Indian nationality status are eligible to successfully open a Jan Dhan Yojana account.</SchemeItem>
                                <SchemeItem>An individual with no valid documents as proof for Indian nationality status can also open a Jan Dhan Yojana account, provided the concerned bank does the required background check on the individual and categorises him or her as ‘low risk’</SchemeItem>
                                <SchemeItem>Minors aged above 10 years are also eligible to have a Jan Dhan Yojana account in any bank across the country. However, minors will require the support of guardians to administer the Jan Dhan account. Minors can also use RuPay Cards through which they can withdraw money from ATMs</SchemeItem>
                                <SchemeItem>Individuals who already have a basic savings account in operation with a bank can easily transfer or link their accounts to Jan Dhan Yojana accounts to avail of various benefits offered by the latter</SchemeItem>
                                <SchemeItem>Individuals who can submit any form of identity proof which is duly authorized by gazette officers can open a Jan Dhan Yojana account</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem><b>Insurance Benefits:</b></SchemeItem>
                            </SchemeUList>
                            <SchemeP>The account holders under this scheme will get an accidental insurance cover of Rs 1 lakh (enhanced to 2 lakh for new accounts opened after 28.08.2012) and a life cover of Rs 30,000 (if the account is opened between 15.8.2014 to 31.1.2015) – payment on the death of the beneficiary (subject to conditions).</SchemeP>
                            <SchemeUList>
                                <SchemeItem><b>Loan Benefits:</b></SchemeItem>
                            </SchemeUList>
                            <SchemeP>The account holders under this scheme can avail an overdraft facility upto Rs 10,000. This is available against one account per household. The quantum of the loan may look small but definitely is a boon to those below the poverty line and would enable them to reinvest this in more profitable avenues.</SchemeP>
                            <SchemeUList>
                                <SchemeItem><b>Mobile Banking Facility:</b></SchemeItem>
                            </SchemeUList>
                            <SchemeP>Enabling carrying out transactions through a mobile phone facilitates such account holders in checking of balance and also transferring funds with ease across India. The other benefits being:</SchemeP>
                            <SchemeUList>
                                <SchemeSubItem>The account holders would be eligible for interest on their deposits</SchemeSubItem>
                                <SchemeSubItem>They are not mandated to have a minimum balance in the account</SchemeSubItem>
                                <SchemeSubItem>The scheme allows Direct Benefit Transfer for beneficiaries of Government Schemes.</SchemeSubItem>
                                <SchemeSubItem>Account-holders can get easy access to pension and other insurance products with the PMJDY scheme</SchemeSubItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Stand up India Scheme</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Passport-sized photographs</SchemeItem>
                                <SchemeItem>Identity Proof: Passport, driving license, voter’s ID card, PAN card, etc.</SchemeItem>
                                <SchemeItem>Residence Proof: Voter’s ID card, passport, latest electricity and telephone bills, property tax receipt, etc.</SchemeItem>
                                <SchemeItem>Business address proof</SchemeItem>
                                <SchemeItem>Memorandum and Articles of Association of the company</SchemeItem>
                                <SchemeItem>Partnership deed of the partners</SchemeItem>
                                <SchemeItem>Photocopies of lease deeds</SchemeItem>
                                <SchemeItem>Rent agreement</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit Stand-up India’s official website ‘https://www.standupmitra.in/Login/Register’</SchemeItem>
                                <SchemeItem>Fill in the registration form by firstly entering the business location that include business address, state, district, village, town, city and pin code.</SchemeItem>
                                <SchemeItem>Select whether promoter belongs to women category and holds 51% stake or higher and same applicable to SC/ST category.</SchemeItem>
                                <SchemeItem>Next applicant can select the nature of the business planned, desired loan amount, nature and description of business activity, status of space for business and select the drop down of first time entrepreneurs.</SchemeItem>
                                <SchemeItem>Further he/she needs to mention his/her past business experience by mentioning business activity, years of experience and nature of business.</SchemeItem>
                                <SchemeItem>Next one need to tick the desired hand holding support, as per the need and interest.</SchemeItem>
                                <SchemeItem>Last and final step of registration is regarding applicant’s personal information that is name, name of enterprise, user name, mobile number, email and type of constitution.</SchemeItem>
                                <SchemeItem>By clicking on register applicant will be able to apply for the Stand-up India scheme with the respective financial institution and their officials will contact for further formalities.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Minimum age of 18 years for SC/ST or women entrepreneur</SchemeItem>
                                <SchemeItem>Loan available only for Green Field Projects</SchemeItem>
                                <SchemeItem>At least 51% of shareholding stake to be held with either SC/ST or women entrepreneur, in case of non-individual enterprise</SchemeItem>
                                <SchemeItem>Applicant should not have defaulted in any previous loan(s)</SchemeItem>
                                <SchemeItem>Indian citizen with no criminal records</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem><b>Nature:</b> The Stand-Up India scheme is a composite loan that is inclusive of term loan and working capital loan.</SchemeItem>
                                <SchemeItem><b>Loan Amount:</b> The scheme will cover up to 75% of the project cost.</SchemeItem>
                                <SchemeItem><b>Interest Rate:</b> The scheme assures the lowest applicable interest rate of the bank for that category that is well within (base rate * MCLR + 3% + tenor premium).</SchemeItem>
                                <SchemeItem><b>Security:</b> Besides the primary security, you can secure the loan with collateral or guarantee of the Credit Guarantee Fund Scheme for Stand-Up India Loans (CGFSIL). The lender takes a call on this.</SchemeItem>
                                <SchemeItem><b>Repayment Period:</b> The loan can be repaid over seven years. Also, the scheme offers a moratorium period of up to 18 months.</SchemeItem>
                                <SchemeItem><b>Modes of Disbursement:</b> For a loan amount of up to Rs.10 lakh, the sum will be sanctioned by way of overdraft. A RuPay debit card will be issued to access the funds conveniently. For a loan amount above Rs.10 lakh, the sum will be sanctioned in the form of the cash credit limit.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme5?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Mudra Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeP>(1) For applying a Vehicle loan under MUDRA loan, the following documentation is to be submitted:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Duly filled Application Form of Pradhan Mantri Mudra Yojana</SchemeItem>
                                <SchemeItem>Duly filled application form for vehicle loan</SchemeItem>
                                <SchemeItem>Borrower’s passport size photos – 2 photos</SchemeItem>
                                <SchemeItem>Address Proof</SchemeItem>
                                <SchemeItem>Identity Proof</SchemeItem>
                                <SchemeItem>Income Proof</SchemeItem>
                                <SchemeItem>Bank statement for most recent past six months</SchemeItem>
                            </SchemeUList>
                            <SchemeP>(2) For applying a Business Instalment Loan, under PMMY scheme, the following MUDRA loan documents are required:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Duly filled Application Form of Pradhan Mantri Mudra Yojana</SchemeItem>
                                <SchemeItem>Duly filled application form of Business Instalment loan</SchemeItem>
                                <SchemeItem>Address Proof</SchemeItem>
                                <SchemeItem>Photo ID Proof</SchemeItem>
                                <SchemeItem>Proof for the establishment</SchemeItem>
                                <SchemeItem>Proof of ownership of office and/ or residence</SchemeItem>
                                <SchemeItem>Proof of business continuity</SchemeItem>
                                <SchemeItem>Trade references</SchemeItem>
                                <SchemeItem>Proof of qualification</SchemeItem>
                                <SchemeItem>Bank statement for most recent past six months</SchemeItem>
                            </SchemeUList>
                            <SchemeP>(3) For applying Business Loans, for Group and for Rural Business Credits, the following documents are needed:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Duly filled Application Form of Pradhan Mantri Mudra Yojana</SchemeItem>
                                <SchemeItem>Duly filled application form of Business Instalment loan</SchemeItem>
                                <SchemeItem>Duly filled application form for Rural Business credit</SchemeItem>
                                <SchemeItem>Address Proof</SchemeItem>
                                <SchemeItem>Photo ID Proof</SchemeItem>
                                <SchemeItem>Age proof</SchemeItem>
                                <SchemeItem>Proof of ownership of office or residence</SchemeItem>
                                <SchemeItem>Continuity of business proof</SchemeItem>
                                <SchemeItem>Bank statement for past 12 months</SchemeItem>
                                <SchemeItem>Income tax return documents for most recent 2 years</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>Offline procedure:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Applicants are required to visit their desired and nearest commercial or private sector bank</SchemeItem>
                                <SchemeItem>Put forth the self-written business plan</SchemeItem>
                                <SchemeItem>Submit the downloaded and duly filled loan application form</SchemeItem>
                                <SchemeItem>Along with the application form, also submit the passport-sized photographs and all the required documents, such as Identity proof, address proof, company’s address and identity proof, caste certificate, if applicable, balance sheets, IT returns, sales tax returns, and other machinery details</SchemeItem>
                                <SchemeItem>Complete all further bank’s formalities and procedures</SchemeItem>
                                <SchemeItem>Once all the documents are verified, loan shall get approved</SchemeItem>
                                <SchemeItem>After loan is approved, desired amount shall get disbursed to the mentioned bank account within specified working days</SchemeItem>
                            </SchemeUList>
                            <SchemeP>Online Procedure:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Download the loan application form from the bank’s official website</SchemeItem>
                                <SchemeItem>Fill in the application form with the required details</SchemeItem>
                                <SchemeItem>Submit the application form along with all the required documents</SchemeItem>
                                <SchemeItem>Wait for the bank’s representative to call and further proceed with loan formalities from the desired bank</SchemeItem>
                                <SchemeItem>Once the loan application form and attached documents are processed and verified, loan shall be approved and further disbursed by the bank</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility criteria:</Schemeh4>
                            <SchemeP>Mudra Loan can be availed by the following entities:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Individuals and MSMEs</SchemeItem>
                                <SchemeItem>Artisans, Vendors, Traders, Retailers, Manufacturers</SchemeItem>
                                <SchemeItem>Sole Proprietorship, Partnership Firms, Limited Liability Partnerships (LLPs), only engaged in trading, manufacturing and services sector</SchemeItem>
                                <SchemeItem>Small and Micro Manufacturing Units</SchemeItem>
                                <SchemeItem>Small Scale Industry (SSI) Units</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Micro Units Development and Refinance Agency Ltd., also referred to as MUDRA Bank is an initiative that was announced in the Union Budget of FY 2015-16. </SchemeItem>
                                <SchemeItem>The company was registered in March 2015 and became operational from 7 April 2015. Under this scheme, the development of small businesses and entrepreneurs were focused upon. </SchemeItem>
                                <SchemeItem>Several exceptions were made in order to satisfy client requirements by reaching areas where general banks were unable to reach.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme6?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Suraksha Bima Yojana</SchemeH2>
                            <Schemeh4>Document Required: </Schemeh4>
                            <SchemeUList>
                                <SchemeItem><b>Form –</b> Submission of the duly filled PMSBY application form containing details such as name, contact details, Aadhaar number, and details of the selected nominee. This form is available in several regional languages apart from English and Hindi. For example, the form is available in Marathi, Tamil, Oriya, etc.</SchemeItem>
                                <SchemeItem><b>Aadhar Card –</b> In case the applicant’s Aadhaar card details are not linked to the stated savings bank account, the applicant will have to submit a copy of the Aadhaar card. The same will have to be accompanied with the application form.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure: </Schemeh4>
                            <SchemeP>The registration process can be initiated via the respective internet banking facility or by sending a message on the onboarding organization’s toll-free number  ( 1800-180-1111/1800-110-001 ).</SchemeP>
                            <SchemeP><b>how you can activate the policy using the SMS facility.</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Receive activation SMS.</SchemeItem>
                                <SchemeItem>Reply to the activation SMS with ‘PMSBY Y’.</SchemeItem>
                                <SchemeItem>Receive a message acknowledging the receipt.</SchemeItem>
                                <SchemeItem>Bank will manage the processing information from the back-end of the savings account.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Here’s how you can activate the policy using the internet banking facility (PMSBY Online Apply).</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Login to the internet banking account.</SchemeItem>
                                <SchemeItem>Click on Insurance.</SchemeItem>
                                <SchemeItem>Identify the account to be used for paying the premium amount.</SchemeItem>
                                <SchemeItem>Check details and confirm.</SchemeItem>
                                <SchemeItem>Download receipt and note the stated reference number.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Claim Process: </Schemeh4>
                            <SchemeP>You can raise a claim against the PMSBY in case of partial or total disability. In case of death, your nominee can file a claim. If there is no nominee, then the claim amount shall be given to the legal heir of the deceased policyholder. Here’s the claim process.</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Policyholder/nominee should reach out to the bank or the insurance company from where the policy was purchased to raise a claim.</SchemeItem>
                                <SchemeItem>Obtain claim form and fill it. It will include details such as name, address, contact information, details of the hospital, etc. The PMSBY’s claim form can be downloaded from the Jansuraksha website for free. The form is available in multiple languages such as Punjabi, Telugu, etc.</SchemeItem>
                                <SchemeItem>Submit the filled form with the relevant supporting documentation such as disability certificate or death certificate in case the claim is raised by the nominee.</SchemeItem>
                                <SchemeItem>The insurance company will confirm the details.</SchemeItem>
                                <SchemeItem>If the documents turn out to be proper, the claim amount will be transferred to the specified bank account and the claim will be settled.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Check the Application Status: </Schemeh4>
                            <SchemeP>You can check PMSBY’s account status by following these steps.</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit your bank’s website.</SchemeItem>
                                <SchemeItem>Login using internet banking.</SchemeItem>
                                <SchemeItem>Visit the appropriate PMSBY section.</SchemeItem>
                                <SchemeItem>Enter the bank account number.</SchemeItem>
                                <SchemeItem>Enter PMSBY application number.</SchemeItem>
                                <SchemeItem>Click Submit.</SchemeItem>
                                <SchemeItem>Check status.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria: </Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The minimum age requirement for being part of the scheme is 18 years.</SchemeItem>
                                <SchemeItem>The maximum PMSBY age limit to avail this scheme is 70 years.</SchemeItem>
                                <SchemeItem>Interested potential policyholders must have an active savings bank account.</SchemeItem>
                                <SchemeItem>The applicant’s saving bank account should be integrated with the person’s Aadhaar card.</SchemeItem>
                                <SchemeItem>In case the Aadhaar details are not linked to the mentioned bank account, a copy of the card should be sent along with the application.</SchemeItem>
                                <SchemeItem>Payment of the premium of Rs. 12.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits: </Schemeh4>
                            <SchemeP>The PMSBY gives people from the lower-income group a chance to insure themselves against unfortunate events that can lead to death or disability. Here are the features and benefits of the government scheme.</SchemeP>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Features of PMSBY</SchemeTableH>
                                    <SchemeTableH>Benefits of PMSBY</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>A low-priced policy can be purchased for Rs. 12.</SchemeTableD>
                                    <SchemeTableD>Accident insurance cover without spending a lot as compared to other policies.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Money is given to the nominee in case of death.</SchemeTableD>
                                    <SchemeTableD>The welfare of the family in case of death, as the claim amount can be availed by the nominee.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Auto-debit of premium from the bank account.</SchemeTableD>
                                    <SchemeTableD>No regular payment formality worries due to auto-debit facility.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Option to choose a long-term policy or yearly renewability.</SchemeTableD>
                                    <SchemeTableD>Easy processing of continuous cover.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Easy exit and re-entry measures.</SchemeTableD>
                                    <SchemeTableD>Flexibility to continue or discontinue as per one’s wish.</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>It can help save tax.</SchemeTableD>
                                    <SchemeTableD>Deduction as per Section 80C and Sum Insured of Rs. 1 lakh is non-taxable as per Section 10(10D) of the Income Tax Act.</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                        </Scheme>
                    :
                    null}
                    {scheme7?
                        <Scheme>
                            <SchemeH2>Sukanya Samriddhi Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Birth certificate of the girl child</SchemeItem>
                                <SchemeItem>Photo ID of applicant parent or legal guardian</SchemeItem>
                                <SchemeItem>Address proof of applicant parent or legal guardian</SchemeItem>
                                <SchemeItem>Other KYC proofs such as PAN, Voter ID.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Download the application form from either RBI website, Indian Post website, participating public sector and private bank’s official website</SchemeItem>
                                <SchemeItem>Fill up the form with key details of the girl child and a parent or legal guardian. Following are the key mandatory fields to be filled in Sukanya Samriddhi Yojana scheme form</SchemeItem>
                                <SchemeItem>Primary Account Holder- Name of Girl Child</SchemeItem>
                                <SchemeItem>Joint Holder- Name of A parent or legal guardian</SchemeItem>
                                <SchemeItem>Initial deposit amount</SchemeItem>
                                <SchemeItem>Cheque/DD Number and Date for the initial deposit</SchemeItem>
                                <SchemeItem>Date of Birth of girl child along with Birth Certificate details</SchemeItem>
                                <SchemeItem>Identity of Parent or legal guardian such as Driving License, Aadhaar, etc.</SchemeItem>
                                <SchemeItem>Present and Permanent Address (as per ID document of the parent or legal guardian)</SchemeItem>
                                <SchemeItem>Details of other KYC proofs such as PAN, Voter ID card, etc</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The account can be opened by a parent or legal guardian of the girl child</SchemeItem>
                                <SchemeItem>The girl child must be below the age of 10 year</SchemeItem>
                                <SchemeItem>Only one account is allowed for a girl child.</SchemeItem>
                                <SchemeItem>A family can open only 2 SSY scheme account.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The account matures after 21 years of opening the account or in the event of the marriage of the girl child after she gains the age of 18 years</SchemeItem>
                                <SchemeItem>A premature withdraw up to 50% of investment is allowed after the child gains the age of 18 years even if she is not getting married.</SchemeItem>
                                <SchemeItem>Duration of investment- 21 years</SchemeItem>
                                <SchemeItem>Minimum Investment: Rs 1,000 per annum</SchemeItem>
                                <SchemeItem>Maximum Investment: Rs 1.5 lakh per annum</SchemeItem>
                                <SchemeItem>On Maturity of the account, the balance which is principal and interest earned is paid to the girl child on submitting an application along with proof of citizenship, residency and identity.</SchemeItem>
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

export default FinancialInclusion
