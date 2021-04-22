import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/child.jpg'
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
         Schemeh4,
         SchemeItem,
         SchemeP,
         SchemeTable,
         SchemeTableR,
         SchemeTableH,
         SchemeTableD
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './ChildCareElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/child care/bsy.png'
import Icon2 from './../Images/pics/child care/ksy.png'

const ChildCare = () => {

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
                    <Heading>CHILD CARE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                    <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Balika Samridhi Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Kishori Shakti Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Balika Samridhi Yojana</SchemeH2>
                            <Schemeh4>Document required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Identity Proof: PAN Card, Aadhar, Driving License, Voter ID Card, etc.</SchemeItem>
                                <SchemeItem>Address Proof: Aadhar, Valid Passport, Utility bill, Property tax bill, etc.</SchemeItem>
                                <SchemeItem>Income Certificate</SchemeItem>
                                <SchemeItem>Resident Document</SchemeItem>
                                <SchemeItem>Recent passport size photographs</SchemeItem>
                                <SchemeItem>Financial background of applicants (BPL Certificate)</SchemeItem>
                                <SchemeItem>School Admission documents/Final examination mark sheets</SchemeItem>
                                <SchemeItem>Adoption certificate of guardian</SchemeItem>
                                <SchemeItem>Bank passbook or parent/guardian’s bank passbook</SchemeItem>
                                <SchemeItem>Any other documents (if required)</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeP>The implementation partner for Balika Samridhi Yojana is Integrated Child Development 
                                Services (ICDS) in rural areas and the Health Department functionaries in the urban areas. 
                                The candidates fulfilling the eligibility conditions can apply for the scheme offline by 
                                adopting the below-given steps.</SchemeP>
                            <SchemeP><b>Step 1:</b> Obtain the application form from Anganwadi workers (in rural areas) or Health 
                                functionaries (in urban areas).</SchemeP>
                            <SchemeP>OR</SchemeP>
                            <SchemeP>The candidates can download the application form online from the official website. 
                                (Note: There are separate application forms available for urban areas and rural areas).</SchemeP>
                            <SchemeP><b>Step 2:</b> Fill in all required details in the form.</SchemeP>
                            <SchemeP><b>Step 3:</b> Submit the completed application form to respective functionaries from where the 
                                application forms are obtained.</SchemeP>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>BSY covers both the rural and urban areas in all the districts of India.</SchemeItem>
                                <SchemeItem>For the residents of rural areas, families identified to be below the poverty line 
                                    according to the criteria specified under Swarnajayanti Gram Swarozgar Yojana, will be taken 
                                    as the target group.</SchemeItem>
                                <SchemeItem>For the residents of urban areas, the families living in urban slums irrespective of 
                                    their recognition, will be covered under Balika Samridhi Yojana. Also, families working as 
                                    rag-pickers, vegetables & fruit sellers, payment vendors etc. are covered under the scheme. 
                                    Moreover, according to the instructions of the Government of India, there are surveys conducted 
                                    to check for the families BPL and lists are prepared under the Targeted Public Distribution System 
                                    (TPDS) which can be followed to keep a record of the target groups.</SchemeItem>
                                <SchemeItem>The Balika Samridhi Yojana benefits the girl children born on or after 15th August 
                                    1997, who belong to families under the poverty line.</SchemeItem>
                                <SchemeItem>All the benefits of this scheme are provided to only two girl children from every 
                                    family irrespective of the number of children in the family.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Terms and Conditions:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The amount of financial assistance is directly deposited into the account of the 
                                    beneficiary. (Note: The beneficiary is the girl child in the name of whom an interest-bearing 
                                    account has to be opened).</SchemeItem>
                                <SchemeItem>It is preferable that the amount earns the maximum interest possible. Thus, it is 
                                    advisable to the candidates to look up for schemes like Public Provident Fund or National 
                                    Saving Certificate.</SchemeItem>
                                <SchemeItem>The candidates can utilise a part of the grant or the scholarship amount towards 
                                    paying the premium of the insurance policy under the Bhagyashri Balika Kalyan Bima Yojana 
                                    in the girl’s name.</SchemeItem>
                                <SchemeItem>The candidates can also utilise the scholarship amount for the purchasing the 
                                    textbook or the uniform for the girl.</SchemeItem>
                                <SchemeItem>There is also a provision of withdrawing the standing amount in the name of 
                                    the child one her completion of 18 years subject to the production of a certificate 
                                    issued by the Municipality/ Gram Panchayat stating that the girl is unmarried.</SchemeItem>
                                <SchemeItem>In case the girl gets married before 18 years of age, she shall have to forego 
                                    the scholarship amount and the interest accrued on it and shall be entitled to receive 
                                    the post-birth grant and the interest accrued on it only.</SchemeItem>
                                <SchemeItem>In the event of girl’s death before completing 18 years of age, the total 
                                    accumulated amount available in her account can be withdrawn.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Scholarship amount:</Schemeh4>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Sr No.</SchemeTableH>
                                    <SchemeTableH>Class</SchemeTableH>
                                    <SchemeTableH>Amount of Annual Scholarship</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>1</SchemeTableD>
                                    <SchemeTableD>I – II</SchemeTableD>
                                    <SchemeTableD>Rs.300/- per annum for each class</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>2</SchemeTableD>
                                    <SchemeTableD>IV</SchemeTableD>
                                    <SchemeTableD>Rs.500/- per annum</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>3</SchemeTableD>
                                    <SchemeTableD>V</SchemeTableD>
                                    <SchemeTableD>Rs.600/- per annum</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>4</SchemeTableD>
                                    <SchemeTableD>VI – VII</SchemeTableD>
                                    <SchemeTableD>Rs.700/- per annum for each class</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>5</SchemeTableD>
                                    <SchemeTableD>VIII</SchemeTableD>
                                    <SchemeTableD>Rs.800/- per annum</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>6</SchemeTableD>
                                    <SchemeTableD>IX-X</SchemeTableD>
                                    <SchemeTableD>Rs.1,000/- per annum for each class</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Under this scheme, financial assistance is provided by the government 
                                    for the education of the daughter from the birth of her daughter (Scheme for Girl Child).</SchemeItem>
                                <SchemeItem>In this, after the delivery in the rural and urban areas by the government, the mother 
                                    is given a gift of 500 rupees from the government.</SchemeItem>
                                <SchemeItem>At the same time, under this scheme, Girl Child is also given scholarship every year during 
                                    schooling.</SchemeItem>
                                <SchemeItem>Only two daughters get the benefit of this scheme.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Kishori Shakti Yojana</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Copy of aadhaar card.</SchemeItem>
                                <SchemeItem>Copy of Income certificate</SchemeItem>
                                <SchemeItem>Copy of Birth Certificate</SchemeItem>
                                <SchemeItem>Copy of Domicile Certificate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeP><b>Approach Anganwadi Center</b></SchemeP>
                                <SchemeItem>The Adolescent Girls will have to access the Anganwadi centre/Ministry of 
                                    Labour/Anganwadi Medical Officer depends upon the services availed by the 
                                    beneficiaries.</SchemeItem>
                                <SchemeP><b>Receive Application Form</b></SchemeP>
                                <SchemeItem>The applicant has to fill the application form, which is obtained from the 
                                    concerned office.</SchemeItem>
                                <SchemeP><b>Fill out the Application Form</b></SchemeP>
                                <SchemeItem>Now, submit your duly filled application form to the representatives for 
                                    verification.</SchemeItem>
                                <SchemeP><b>Verification Process</b></SchemeP>
                                <SchemeItem>The verification will be done periodically to assess the scheme and take 
                                    corrective measures. Also, evaluations will also be carried out by the States 
                                    periodically. The survey and situational analysis will also be made by the States 
                                    for the selection of beneficiaries so that the end evaluation would indicate the 
                                    results.</SchemeItem>
                                <SchemeP><b>Processing of Applications</b></SchemeP>
                                <SchemeItem>The register will be maintained at the Anganwadi centre by the AWW with the 
                                    financial assistance amount of Saheli/Sakhi. Project wise, financial/physical 
                                    progress report and records on the annual or quarterly basis in specified formats 
                                    will be linked by the CDPO and forwarded to the State Government which will later 
                                    be forwarded to the Ministry by the Governments. Then the supervisor will ensure 
                                    that accurate records of Adolescent Girls are maintained at the AWC, compiled and 
                                    reported in the prescribed format.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeP>To get the benefits of this scheme the age of the girls must be between the 11 to 
                                18 years under the Integrated Child Development Services (ICDS) Projects. The girls 
                                must be from the selected 200 districts initially all over India on a pilot basis.</SchemeP>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Unmarried adolescence girls (11-18 age) belonging to below poverty line 
                                    and school drop-outs are selected and attached to Anganwadi Centres for 6 monthly 
                                    stints of learning and training activities.</SchemeItem>
                                <SchemeItem>Improving nutritional and health status of adolescent girls 
                                    (age group 11-18 years)</SchemeItem>
                                <SchemeItem>Providing required literacy and numeracy skills through non-formal stream of 
                                    education</SchemeItem>
                                <SchemeItem>Train and equip adolescent girls to improve /upgrade home based and vocational skills</SchemeItem>
                                <SchemeItem>Promote awareness of health, hygiene, nutrition and family welfare</SchemeItem>
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

export default ChildCare
