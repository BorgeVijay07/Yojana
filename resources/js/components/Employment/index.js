import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/emp.jpg'
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
         SchemeTableD
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './EmploymentElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/employment/nps.png'
import Icon2 from './../Images/pics/employment/npy.png'
import Icon3 from './../Images/pics/employment/pmsby.png'
import Icon4 from './../Images/pics/employment/esi.png'
import Icon5 from './../Images/pics/employment/pmmy.png'
import Icon6 from './../Images/pics/employment/pmrpy.png'

const Employment = () => {

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
                    <Heading>EMPLOYMENT</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>National Pension Scheme for Traders and Self Employed Persons</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>National Pension Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Suraksha Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Employee State Insurance Scheme</SchemeH3>
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
                            <SchemeH3>Pradhan Mantri Rojgar Protsahan Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>National Pension Scheme for Traders and Self Employed Persons</SchemeH2>
                            <Schemeh4>Document required: </Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Saving account/Jan Dhan Account Passbook</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the nearest Common Service Centre (CSC) with your Aadhaar Card and savings/Jan-Dhan account passbook</SchemeItem>
                                <SchemeItem>Your required contribution for the scheme will be calculated at the Centre based on your age</SchemeItem>
                                <SchemeItem>Pay your first contribution at the Centre in cash</SchemeItem>
                                <SchemeItem>Sign the nomination form and auto-debit mandate form</SchemeItem>
                                <SchemeItem>The Pension Card will be issued instantly and further contributions will be debited from your savings/Jan-Dhan account automatically from the next month</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Who will provide the Pension:</Schemeh4>
                            <SchemeP>The pension will be provided by the Life Insurance Corporation (LIC) of India, which currently has two annuity schemes – Jeevan Akshay and Jeevan Shanti. To get monthly pension of Rs 3,000 for life starting from the age of 60 years, the single premium needed under Jeevan Akshay is around Rs 4,18,000 (without GST). Assuming that the contribution will remain constant to get the monthly pension or Rs 3,000, the government need to generate around 13 per cent return on the combined contribution of Rs 400 (Rs 200 by the beneficiary and Rs 200 by the government) to accumulate Rs 4,18,000 for a beneficiary of 39 years 11 months old beneficiary in 20 years 1 month. Whereas, for a beneficiary, who joins just at the age of 18 years, the government need to generate just about 8 per cent return on the combined contribution of Rs 110 to accumulate Rs 4,18,000, which may be achieved by generating 10.38 per cent return even without making matching contribution by the government, i.e. just by investing Rs 55 per month.</SchemeP>
                            <SchemeP>So, it will be advantageous for government if more and more young traders and self employed persons join the scheme.</SchemeP>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The scheme is open to Laghu Vyaparis, who are self-employed and working as shop owners, retail traders, rice mill owners, oil mill owners, workshop owners, commission agents, brokers of real estate, owners of small hotels, restaurants and other Laghu Vyaparis. The operations of such small traders are generally characterized by family owned establishments, small scale of operations, labour intensive, inadequate financial aid, seasonal in nature and extensive unpaid family labour.</SchemeItem>
                                <SchemeItem>Age group of 18-40 years</SchemeItem>
                                <SchemeItem>Laghu Vyapari whose annual turnover does not exceed Rs 1.5 crore, based on self-declaration. GSTIN is required only for those with turnover above Rs. 40 lakhs.</SchemeItem>
                                <SchemeItem>Who has a savings bank account in his/her name and Aadhar number.</SchemeItem>
                                <SchemeItem>The following are not eligible to join the Scheme</SchemeItem>
                                <SchemeItem>If covered under National Pension Scheme contributed by the Central Government or Employees’ State Insurance Corporation Scheme under the Employees’ State Insurance Act, 1948 (34 of 1948) or Employees’ Provident Fund Scheme under the Employees’ Provident Fund and Miscellaneous Provisions Act, 1952 (19 of 1952) or</SchemeItem>
                                <SchemeItem>Is an income-tax assessee.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Each eligible subscriber under this Scheme shall receive assured minimum monthly pension of Rs 3000 after attaining the age of sixty years.</SchemeItem>
                                <SchemeItem>The Government of India will make matching contribution in the subscribers’ account. For example if a person with age of 29 years contributes Rs. 100/- month, then the Central Government also contributes the equal amount as subsidy into subscriber’s pension account every month.</SchemeItem>
                                <SchemeItem>Benefits on disablement.- If an eligible subscriber has given regular contributions and become permanently disabled due to any cause before attaining his age of 60 years, and is unable to continue to contribute under this Scheme, his spouse shall be entitled to continue with the Scheme subsequently by payment of regular contribution as applicable or exit the Scheme by receiving the share of contribution deposited by such subscriber, with interest as actually earned thereon by the Pension Fund or the interest at the savings bank interest rate thereon, whichever is higher.</SchemeItem>
                                <SchemeItem>Benefits to the family on death of an eligible subscriber.- During the receipt of pension, if an eligible subscriber dies, his spouse shall be only entitled to receive fifty per cent. of the pension received by such eligible subscriber, as family pension and such family pension shall be applicable only to the spouse.</SchemeItem>
                                <SchemeItem>Benefits on leaving the Pension Scheme</SchemeItem>
                                <SchemeItem>In case an eligible subscriber exits this Scheme within a period of less than ten years from the date of joining the Scheme by him, then the share of contribution by him only will be returned to him with savings bank rate of interest payable thereon</SchemeItem>
                                <SchemeItem>If an eligible subscriber exits after completion of a period of ten years or more from the date of joining the Scheme by him but before his age of sixty years, then his share of contribution only shall be returned to him along with accumulated interest thereon as actually earned by the Pension Fund or the interest at the savings bank interest rate thereon, whichever is higher.</SchemeItem>
                                <SchemeItem>If an eligible subscriber has given regular contributions and died due to any cause, his spouse shall be entitled to continue with the Scheme subsequently by payment of regular contribution as applicable or exit by receiving the share of contribution paid by such subscriber along with accumulated interest, as actually earned thereon by the Pension Fund or at the savings bank interest rate thereon, whichever is higher.</SchemeItem>
                                <SchemeItem>After death of subscriber and his or her spouse, the corpus shall be credited back to the fund.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
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
                    {scheme3?
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
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Employee State Insurance Scheme</SchemeH2>
                            <Schemeh4>Document required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The Registration Certificate acquired under the Shops and Establishment Act or Factories Act.</SchemeItem>
                                <SchemeItem>Certificate of Registration in case of a partnership or a company.</SchemeItem>
                                <SchemeItem>Articles of Association and Memorandum of Association of the company.</SchemeItem>
                                <SchemeItem>List of all employees working in the establishment.</SchemeItem>
                                <SchemeItem>Compensation details of all employees.</SchemeItem>
                                <SchemeItem>PAN Card details of the Business Entity and of all employees.</SchemeItem>
                                <SchemeItem>Cancelled cheque of the bank account of the company.</SchemeItem>
                                <SchemeItem>List of shareholders and directors of the company.</SchemeItem>
                                <SchemeItem>Register which includes the attendance details of the employees.</SchemeItem>
                                <SchemeItem>Employer’s Registration Form (Form No.1) which should be downloaded online, filled and uploaded on the ESIC website along with the above mentioned documents.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem><b>Step 1:</b> Visit the ESIC Portal and click on ‘Login’.</SchemeItem>
                                <SchemeItem><b>Step 2:</b> On the new page, click on ‘Sign Up’.</SchemeItem>
                                <SchemeItem><b>Step 3:</b> Enter your company name, employer name, state, region, email ID (which will be your username), and your phone number.</SchemeItem>
                                <SchemeItem><b>Step 4:</b> Click on the checkbox to confirm your establishment or factory is under an exclusive labour contract, manpower suppliers, security agencies or contractors supplying labour categories.</SchemeItem>
                                <SchemeItem><b>Step 5:</b> Click on ‘Submit’. An email will be sent with login credentials or details.</SchemeItem>
                                <SchemeItem><b>Step 6:</b> Now that you have signed up, you need to visit the ESIC Portal to login.</SchemeItem>
                                <SchemeItem><b>Step 7:</b> Enter the username and password received by email and click on ‘Login’.</SchemeItem>
                                <SchemeItem><b>Step 8:</b> Click on ‘New Employer Registration’.</SchemeItem>
                                <SchemeItem><b>Step 9:</b> Select the type of unit and click on submit.</SchemeItem>
                                <SchemeItem><b>Step 10:</b> On the new page, enter the name of the unit, complete postal address of the factory or the establishment and the police station under whose jurisdiction your unit is.</SchemeItem>
                                <SchemeItem><b>Step 11:</b> Enter if the building or the premises of the factory or the establishment is owned or hired and click on ‘Next’ to proceed.</SchemeItem>
                                <SchemeItem><b>Step 12:</b> Enter the nature of the business and category, PAN details, etc. and click on ‘Next’.</SchemeItem>
                                <SchemeItem><b>Step 13:</b> On the next page, enter the date of commencement of the factory or establishment and licence details (if any).</SchemeItem>
                                <SchemeItem><b>Step 14:</b> Now, select the constitution of ownership and details of owners and then click on ‘Save’ after entering all the designation of owners and then click on ‘Next’.</SchemeItem>
                                <SchemeItem><b>Step 15:</b> Here, enter the number of employees working in your establishment or factory and the number of employees earning less than Rs.21,000 and click on ‘Save’.</SchemeItem>
                                <SchemeItem><b>Step 16:</b> In the new page, enter the date when the first 10/20 employees were employed and then click on ‘Employee Declaration Form’.</SchemeItem>
                                <SchemeItem><b>Step 17:</b> Select ‘Yes’ if the insured person is already registered and enter IP number and date of joining. Select ‘No’ if IP is not registered and click on ‘Continue’.</SchemeItem>
                                <SchemeItem><b>Step 18:</b> Enter the name of the IP and father’s name, address, date of birth, gender, marital status, family details and date of joining.</SchemeItem>
                                <SchemeItem><b>Step 19:</b> Now, click on the checkbox and click on ‘Submit’.</SchemeItem>
                                <SchemeItem><b>Step 20:</b> Once all details are duly filled, click on ‘Close’ on the new page.</SchemeItem>
                                <SchemeItem><b>Step 21:</b> On the new page, select the respective ESI branch office and the inspection division.</SchemeItem>
                                <SchemeItem><b>Step 22:</b> Now, click on the checkbox to declare that information provided is correct and then click on ‘Submit’. You’ll be redirected to a new page.</SchemeItem>
                                <SchemeItem><b>Step 23:</b> On the new page, you will have to click on ‘Pay Initial Contribution’ and click on ‘Submit’. You will be provided with a Challan Number for future reference.</SchemeItem>
                                <SchemeItem><b>Step 24:</b> Click on ‘Continue’ to pay through the required payment gateway.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Steps to Apply for ESI Card:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the ESIC Portal and login with your username and password.</SchemeItem>
                                <SchemeItem>On the new page, under the ‘Employee’ section, click on ‘e-Pehchan Card’.</SchemeItem>
                                <SchemeItem>Select the unit details and click on view.</SchemeItem>
                                <SchemeItem>You can view details of all the employees; however, you also have the option to narrow down the search by entering the respective employees’ insurance number and name.</SchemeItem>
                                <SchemeItem>On the same page where you can see details of all the employees, select ‘View Counter Foil’ against the respective employee. This ‘Counter Foil’ is the ‘e-Pehchan’ card.</SchemeItem>
                                <SchemeItem>On the new page, scroll down and click on ‘Print’ which can be downloaded as a PDF document.</SchemeItem>
                                <SchemeItem>On the printout, the respective employee has to sign and affix family or dependents photographs. This photo has to be attested and stamped by the employer or the ESIC official.</SchemeItem>
                                <SchemeItem>Ensure to get either the signature and stamp of the employer or the ESIC office on the e-Pehchan Card.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Under Sec 2(12) of the ESI Act, 1948 any individual working in the non-seasonal factory with more than 10 employees.</SchemeItem>
                                <SchemeItem>Employees working in sectors such as hotels and restaurants, Newspaper establishments, Road-motor transport undertakings, Cinemas and preview theatres and Private Educational and Medical institutions with a strength of more than 20 employees.</SchemeItem>
                                <SchemeItem>The existing wage limit of the employee is ₹ 21,000 per month and if the employee has any disability, the wage limit for coverage is ₹ 25,000 per month.</SchemeItem>
                                <SchemeItem>To receive the social security benefits of the ESI scheme employees should draw wages up to ₹ 10,000 per month.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeP>Medical:</SchemeP>
                            <SchemeP>Under the scheme, the insured’s medical expenses are covered through affordable and reasonable health care facilities. Also, the worker or the employee is covered from day one of the person’s employment.</SchemeP>
                            <SchemeP>Maternity:</SchemeP>
                            <SchemeP>Under the scheme, the beneficiary can avail 100% of the daily wages for up to 26 weeks which can be extended to a further one month based on the medical advice. In the case of miscarriage, the benefit is 6 weeks, while in the case of adoption it is 12 weeks.</SchemeP>
                            <SchemeP>Disability:</SchemeP>
                            <SchemeP>In case of temporary disablement of the worker, they are eligible for a monthly wage of 90% until they recover. In the case of permanent disability, 90% of the monthly wage can be availed for the entire life.</SchemeP>
                            <SchemeP>Sickness:</SchemeP>
                            <SchemeP>During medical leave, the scheme offers cash flow during the said period. The worker can avail 70% of the daily wage for a maximum of 91 days. This can be availed in two consecutive periods.</SchemeP>
                            <SchemeP>Unemployment:</SchemeP>
                            <SchemeP>For a period of 24 months, the scheme offers a maximum of 50% of the average monthly wage in the case of involuntary loss of non-employment or due to permanent invalidity due to injury.</SchemeP>
                            <SchemeP>Dependents:</SchemeP>
                            <SchemeP>Through the scheme, dependents of the insured receive financial assistance in case of illnesses or injuries while at work. During such instances, dependents are eligible for monthly payments which are equally distributed among surviving dependents.</SchemeP>
                            <SchemeP>Coverage:</SchemeP>
                            <SchemeP>Under the scheme, workers or employees are covered from day one of their employment. This includes both the insured and their dependents</SchemeP>
                            <SchemeP>Funeral Costs:</SchemeP>
                            <SchemeP>The ESIC offers an amount of Rs.15,000 towards funeral costs. This is paid to the dependents or to the individual who does the last rites of the insured.</SchemeP>
                            <SchemeP>Confinement Costs:</SchemeP>
                            <SchemeP>In case of confinement occurs at a location where required medical care under the scheme is not available, the insured or the dependent can avail confinement costs.</SchemeP>
                            <SchemeP>Vocational Rehabilitation:</SchemeP>
                            <SchemeP>The ESIC provides this benefit based on the requirement of the insured. This is extended to those who are permanently disabled injured individuals for Vocational Rehabilitation (VR) training at VRS.</SchemeP>
                            <SchemeP>Physical Rehabilitation:</SchemeP>
                            <SchemeP>This benefit is also provided based on the need especially in the case of disability due to employment injury.</SchemeP>
                            <SchemeP>Old Age Medical Care:</SchemeP>
                            <SchemeP>When the insured person retires on attaining the retirement age or under VRS or ERS or when a person has to leave work due to permanent disability, the insured and spouse will receive Rs.120 per annum.</SchemeP>
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
                            <SchemeH2>Pradhan Mantri Rojgar Protsahan Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>LIN Number</SchemeItem>
                                <SchemeItem>Ration card</SchemeItem>
                                <SchemeItem>Birth certificate</SchemeItem>
                                <SchemeItem>residence certificate</SchemeItem>
                                <SchemeItem>Passport size photograph</SchemeItem>
                                <SchemeItem>mobile number</SchemeItem>
                                <SchemeItem>income certificate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website of Pradhanmantri Rojgar Protsahan Yojana i.e. pmrpy.gov.in.</SchemeItem>
                                <SchemeItem>On the Homepage, Click on the Option “Apply Online” button.</SchemeItem>
                                <SchemeItem>The application Form page will be displayed on the screen.</SchemeItem>
                                <SchemeItem>Now fill in the necessary details (Mention all the details such as name, father/ husband name, date of birth, gender, caste and other information) and attach documents.</SchemeItem>
                                <SchemeItem>Click on Submit Button for the final submission of the application.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>PMRPY Scheme Login Process:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website of Pradhanmantri Rojgar Protsahan Yojana i.e. pmrpy.gov.in.</SchemeItem>
                                <SchemeItem>On the Homepage, click on the login button.</SchemeItem>
                                <SchemeItem>The login page will be displayed on the screen.</SchemeItem>
                                <SchemeItem>Now, You have to enter your LIN / PF code and password on this page.</SchemeItem>
                                <SchemeItem>Click on the sign Button and this way you will be able to sign in.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Official login process:</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website of Pradhanmantri Rojgar Protsahan Yojana i.e. pmrpy.gov.in.</SchemeItem>
                                <SchemeItem>On the Homepage, click on the link for the official login.</SchemeItem>
                                <SchemeItem>The login page will be displayed on the screen.</SchemeItem>
                                <SchemeItem>Now, You have to enter your user name and password on this page.</SchemeItem>
                                <SchemeItem>Click on the sign Button and this way you will be able to officially login.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>All establishments registered with Employees’ Provident Fund Organisation (EPFO) under EPF Act 1952 can apply for availing benefits under the scheme. They need to have a valid Labour Identification Number (LIN) allotted to them under the ShramSuvidha Portal.</SchemeItem>
                                <SchemeItem>Applicant must be a permanent resident of India.</SchemeItem>
                                <SchemeItem>Under the scheme, the beneficiary establishment is required to be registered under the EPFO.</SchemeItem>
                                <SchemeItem>Establishments must have a LIN number.</SchemeItem>
                                <SchemeItem>It is mandatory for employees to link to Aadhaar UAN.</SchemeItem>
                                <SchemeItem>The salary of the employees should be at least 15000 or less.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The employer is incentivised for increasing the employment base of workers in the establishment.</SchemeItem>
                                <SchemeItem>A huge number of workers would find jobs in such establishments.</SchemeItem>
                                <SchemeItem>For new establishments to be registered with EPFO ​​after 1 April 2016, the reference base will be taken as NIL or NIL employees.</SchemeItem>
                                <SchemeItem>The employer is incentivised for increasing the employee base in the establishment through payment of EPF contribution of 12% of wage, which otherwise would have been borne by the employer.</SchemeItem>
                                <SchemeItem>The subsidy is available up to 15% under the Prime Minister’s Rozgar Yojana, which is limited to Rs 12,500 per person. Subsidy is limited to Rs 15,000 for the North East states, Himachal Pradesh, Uttaranchal and Jammu and Kashmir regions.</SchemeItem>
                                <SchemeItem>Self-help groups can avail subsidy up to Rs 15,000 per beneficiary, which is limited to Rs 0.25 lakh per group.</SchemeItem>
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

export default Employment
