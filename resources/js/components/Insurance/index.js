import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/insurance.jpg'
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
         SchemeP,
         SchemeSubItem
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './InsuranceElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/insurance/pmsby.png'
import Icon2 from './../Images/pics/insurance/pmjjby.png'
import Icon3 from './../Images/pics/insurance/rsby.png'
import Icon4 from './../Images/pics/insurance/vpby.png'
import Icon5 from './../Images/pics/insurance/pmvvy2.png'
import Icon6 from './../Images/pics/insurance/pmjdy.png'
import Icon7 from './../Images/pics/insurance/aaby.png'

const Insurance = () => {

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
                    <Heading>INSURANCE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Suraksha Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Jeevan Jyoti Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>Rashtriya Swasthya Bima Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Varishtha Pension Bima Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme5}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Vaya Vandana Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme6}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Jan Dhan Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme7}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon7}/>
                            </SchemeIconCard>
                            <SchemeH3>Aam Aadmi Bima Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
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
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Jeevan Jyoti Bima Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar card </SchemeItem>
                                <SchemeItem>Address proof </SchemeItem>
                                <SchemeItem>Bank Account details</SchemeItem>
                                <SchemeItem>Discharge Receipt</SchemeItem>
                                <SchemeItem>Properly filled claim form</SchemeItem>
                                <SchemeItem>Copied Cancelled cheque of the beneficiary</SchemeItem>
                                <SchemeItem>Death certificate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Claim process:</Schemeh4>
                            <SchemeP><b>Steps taken by Nominee/Beneficiary</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>If the insured person dies due to any unfortunate event the beneficiary will need to visit bank of the policyholder . the beneficiary will need to visit the same branch from where the saving account of the policyholder is linked to the insured person to the bank.</SchemeItem>
                                <SchemeItem>The nominee will be required to collect the claim form from the insurance company or bank .</SchemeItem>
                                <SchemeItem>Once, the beneficiary gets the claim form, he /she will need to thoroughly fill the form and submit it along with the important document like death certificate, Discharge Receipt , bank account details of the policyholder, Photocopy of cancelled Cheque and bank details of the nominee.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Steps Taken By Bank:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Once the claim form is submitted by the beneficiary along with the important document . the bank validates the documents and forms.</SchemeItem>
                                <SchemeItem>After validation, the filling documents are submitted by the bank to the designated insurance company.
                                    <SchemeSubItem>Discharge Receipt</SchemeSubItem>
                                    <SchemeSubItem>Properly filled claim form</SchemeSubItem>
                                    <SchemeSubItem>Copied Cancelled cheque of the beneficiary</SchemeSubItem>
                                    <SchemeSubItem>Death certificate</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Steps Taken by Insurance Company:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Once the insurance company receives the related documents and claim form from the bank , the files are verified by the insurance company too.</SchemeItem>
                                <SchemeItem>After the verification process to the claim filed is completed, the claim amount is transferred to the nominee bank account.</SchemeItem>
                                <SchemeItem>Once the claim is filled , the insurance company will have to approve and pay the claim within time peiod of 30 days .</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Any Individual between the age group of 18 years to 50 years having a saving bank account can subscribe to this scheme through Participating banks.</SchemeItem>
                                <SchemeItem>Even of the individual has more than one saving bank accounts, they are allowed to subscribe to the scheme only by one saving account .</SchemeItem>
                                <SchemeItem>It is compulsory to link the Aadhar card to the participatory bank account, to avail the benefits offered by the plan.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>Lets take a look at the details of the policy in the table mentioned below.</SchemeP>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableD>Entry Age</SchemeTableD>
                                    <SchemeTableD>18 years to 50 years</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Maximum maturity  age</SchemeTableD>
                                    <SchemeTableD>55 years</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Policy tenure</SchemeTableD>
                                    <SchemeTableD>1 years (Renewable Yearly)</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Sum Assured</SchemeTableD>
                                    <SchemeTableD>Rs 2,00,000</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Premium Amount</SchemeTableD>
                                    <SchemeTableD>Rs 330 (inclusive of Rs 41 towards administrative charges)</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Lien Period</SchemeTableD>
                                    <SchemeTableD>45 days from the enrolment date into the scheme</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>PMJJBY provides a death coverage of Rs2,00,000 to the beneficiary of the policy in the case of the sudden demise of the insured person.</SchemeItem>
                                <SchemeItem>As PMJJBY is a pure term insurance plan, it does not offer any maturity or surrender benefit.</SchemeItem>
                                <SchemeItem>The premium paid towards the policy is eligible for tax benefits as under section 80C of the Income Tax Act.</SchemeItem>
                                <SchemeItem>PMJJBY provides a risk coverage of 1 year. However, as this is renewable policy, it can be renewed yearly.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme3?
                        <Scheme>
                            <SchemeH2>Rashtriya Swasthya Bima Yojana</SchemeH2>
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
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Varishtha Pension Bima Yojana</SchemeH2>
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
                    {scheme5?
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
                    {scheme6?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Jan Dhan Yojana</SchemeH2>
                            <Schemeh4>Documents Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Ration card</SchemeItem>
                                <SchemeItem>Voter ID card</SchemeItem>
                                <SchemeItem>PAN card</SchemeItem>
                                <SchemeItem>Permanent/temporary address proof that could be an electricity bill, water bill, or gas connection bill.</SchemeItem>
                                <SchemeItem>Aadhaar card</SchemeItem>
                                <SchemeItem>Government ID proof</SchemeItem>
                                <SchemeItem>Any other documents as requested by the bank</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>To apply for the account, you will be required to download the application form in PDF format (available in Hindi and English) from the official website for the scheme. You can choose a file of either language, as per your convenience.</SchemeItem>
                                <SchemeItem>In the downloaded form, you have to fill in the name of the bank, along with the bank code. Also update the bank branch, name of the village and town, block name/sub district, district, state, ward number/SSA code, village code, and town code.</SchemeItem>
                                <SchemeItem>Enter your personal information, such as name, address, occupation, Aadhaar number, annual income, existing bank accounts of your family members, and details of your kisan credit card. You should also tick the checkbox in order to receive a Rupay debit card.</SchemeItem>
                                <SchemeItem>You should next enter the nomination details and submit the form to the nearest bank branch.</SchemeItem>
                                <SchemeItem>You should ensure that the form is filled in accurately. In case you have any queries, you can approach the bank officials for clarification before submitting the form.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Individual’s age should be between 18 years of age to 69 years.</SchemeItem>
                                <SchemeItem>Life insurance cover is provided only for the head of the family. If he or she is above 60, then the second eldest earning member is offered life cover. If there are joint account holders under this scheme, then the first one will get the life cover. If you are a part of another government scheme like ‘Aam Aadmi Bima Yojana’, you will not be eligible for the life cover offered by Pradhan Mantri Jan Dhan Yojana.</SchemeItem>
                                <SchemeItem>Minors more than 10 years old can also open an account under this scheme. However, this account will have to be run by their guardian.</SchemeItem>
                                <SchemeItem>Minors are also eligible for Rupay cards through which they can withdraw money.</SchemeItem>
                                <SchemeItem>To be entitled to the benefits that PMJDY offers, individuals can also transfer their normal savings account to a PMJDY account.</SchemeItem>
                                <SchemeItem>Even individuals that have no proof of Indian nationality are allowed to open PMJDY accounts provided they are marked as ‘low risk’ by the concerned bank after doing a thorough background check.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>There are many benefits under the PMJDY scheme for you as well as for the country as a whole. By making changes in the banking field along with making insurance and other services available to all people from all classes of the society, the country’s economy will certainly bloom. The remunerative benefits offered by this scheme is definite worth investing into.</SchemeItem>
                                <SchemeItem>Interest on deposits.</SchemeItem>
                                <SchemeItem>Nil minimum balance.</SchemeItem>
                                <SchemeItem>Rs. 1 lakh insurance cover for accidents.</SchemeItem>
                                <SchemeItem>Accounts opened after 28.8.18 will get accidental cover of Rs 2 lakh</SchemeItem>
                                <SchemeItem>Rs. 30,000 life cover provided by LIC.</SchemeItem>
                                <SchemeItem>Hassle-free transfer all around India.</SchemeItem>
                                <SchemeItem>Government scheme beneficiaries receive Direct Benefit Transfer in this account.</SchemeItem>
                                <SchemeItem>Overdraft service provided after 6 months of account operation.</SchemeItem>
                                <SchemeItem>Rs. 5000 of overdraft service is available to one person in each household. Most preferably a lady.</SchemeItem>
                                <SchemeItem>Insurance and pension products available.</SchemeItem>
                                <SchemeItem>The claim for Personal Accident Insurance under the PMJDY is to be paid only if the Rupay card holder has completed two financial transactions at any branch, bank, ATM, etc.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Death Benefit:</Schemeh4>
                            <SchemeP> The death benefit under Pradhan Mantri Jan Dhan Yojana is Rs. 30,000. This amount is offered to the nominee, when the insured i.e. the account holder passes away. In situations where the nominee is not present or the nominee has passed away before the insured’s death, or the nominee is not the spouse (husband/ wife), child or parent; then the legal heirs of the account holder (insured) must provide an indemnity bond for further procedures of the LIC. LIC’s Pension and Group Scheme offices are designated for the death benefit claim section. The nominee is legally entitled to receive Rs. 30,000 as death benefit, in case anything happens to the insurer and he dies.</SchemeP>
                        </Scheme>
                    :
                    null}
                    {scheme7?
                        <Scheme>
                            <SchemeH2>Aam Aadmi Bima Yojana</SchemeH2>
                            <Schemeh4>Document required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Application form</SchemeItem>
                                <SchemeItem>Identity proof</SchemeItem>
                                <SchemeItem>Address Proof</SchemeItem>
                                <SchemeItem>Nominee application form</SchemeItem>
                                <SchemeItem>Income certificate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP><b>Claim Procedure</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>P&GS Unit of LIC will settle the claims connected with death or disability. Payment will either be sent through NEFT or money will be directly transferred to the beneficiary’s bank account. Before getting the claim amount, the beneficiary should submit the approval from concerned authorities to the LIC.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Death Claim Procedure</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>The application will be submitted along with the death certificate to the official of Nodal Agency.</SchemeItem>
                                <SchemeItem>The designated official of concerned Nodal Agency will verify the claim papers.</SchemeItem>
                                <SchemeItem>The papers will be submitted by the officer that includes the application, death certificate, whether the beneficiary belongs to the BPL or Marginally above BPL family, and a statement on whether or not they are associated with the occupation group.</SchemeItem>
                                <SchemeItem>Finally, the Nodal Agency will submit the original certificate along with a copy duly attested.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Accident Claim Procedure</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Along with the death registration certificate, the following documents must be submitted to Nodal Agency.
                                    <SchemeSubItem>FIR Copy</SchemeSubItem>
                                    <SchemeSubItem>Post mortem Report</SchemeSubItem>
                                    <SchemeSubItem>Police Inquest Report</SchemeSubItem>
                                    <SchemeSubItem>Police Conclusion Report/ Final Report of Police</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Scholarship Claim Procedure</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Every six months, the application should be submitted to the Nodal Agency with the following documents.</SchemeItem>
                                <SchemeItem>The Nodal Agency will identify and verify the students.</SchemeItem>
                                <SchemeItem>The Nodal Agency official will submit the list of beneficiary students list to the P&GS unit along with the following details:
                                    <SchemeSubItem>Name of the student</SchemeSubItem>
                                    <SchemeSubItem>Class</SchemeSubItem>
                                    <SchemeSubItem>Member’s name</SchemeSubItem>
                                    <SchemeSubItem>Master policy no</SchemeSubItem>
                                    <SchemeSubItem>Membership no</SchemeSubItem>
                                    <SchemeSubItem>NEFT details for direct payment</SchemeSubItem>
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Entry Age: The entry age of Aam Admi Bima Yojana is between 18 years and 59 years</SchemeItem>
                                <SchemeItem>Income: The applicant should belong to a Below Poverty Line (BPL) family.</SchemeItem>
                                <SchemeItem>Slightly above poverty line families that are a part of any vocational group defined in the scheme. </SchemeItem>
                                <SchemeItem>A person belonging to a rural landless household.</SchemeItem>
                                <SchemeItem>Members covered: One member of the family will be eligible to get coverage. He/she should be the breadwinner of the family.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Coverage For Death From Natural Causes:
                                    <SchemeSubItem>The entry age for Aam Aadmi Bima Yojana is set between 18 and 59. If a member of this plan suffers death due to natural causes, LIC will settle a death claim for Rs.30,000.</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Coverage For Disability:
                                    <SchemeSubItem>Any type of disability suffered by a family member comes as a huge shock for the family members. This shock is magnified if the person suffering from disability was the sole breadwinner of the family. With the help of AABY, the family can use a helping hand in terms of finances. The disability claim under this plan is rupees 37500/- for permanent partial disability and rupees 75000/- for permanent total disability because of an accident.</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Coverage For Accidental Death:
                                    <SchemeSubItem>Accidents are highly unpredictable and can result in grave consequences. Thus, the Aam Aadmi Bima Yojana provides coverage for accidental death. Under this coverage an amount of Rs. 75000/- is paid to the nominee of the plan.</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Additional Benefit:
                                    <SchemeSubItem>The Aam Aadmi Bima Yojana does not only provide death and disability benefits but also ensures that at least two children in the family continue to receive education without a break. It offers a free scholarship of Rs. 100/- each month on a half-yearly basis to eligible children studying between 9th and 12th standard.</SchemeSubItem>
                                </SchemeItem>
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

export default Insurance
