import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/farm.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading,
         SchemeContainer,
         SchemeWrapper,
         SchemeCard,
         SchemeIconCard,
         SchemeIcon,
         SchemeH3,
         SchemeDetails,
         Scheme,
         Schemeh4,
         SchemeUList,
         SchemeItem,
         SchemeH2,
         SchemeSubItem,
         SchemeP,
         SchemeItemHead,
         SchemeTableR,
         SchemeTableH,
         SchemeTableD,
         SchemeTable
        } from './AgricultureElements'
import Footer from '../Footer';
import Icon1 from './../Images/pics/Agriculture/ci.jpg'
import Icon2 from './../Images/pics/Agriculture/gby.png'
import Icon3 from './../Images/pics/Agriculture/nmsa.png'
import Icon4 from './../Images/pics/Agriculture/pkvy.jpg'
import Icon5 from './../Images/pics/Agriculture/pmfby.png'
import Icon6 from './../Images/pics/Agriculture/nswf.jpg'

const Agriculture = () => {

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
                    <Heading>AGRICULTURE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Cattle Insurance Scheme</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Gramin Bhandaran Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
                            </SchemeIconCard>
                            <SchemeH3>National Mission For Sustainable Agriculture</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme4}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon4}/>
                            </SchemeIconCard>
                            <SchemeH3>Paramparagat Krishi Vikas Yojana ( PKVY )</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme5}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon5}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Fasal Bima Yojana (PMFBY)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme6}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon6}/>
                            </SchemeIconCard>
                            <SchemeH3>National Scheme on Welfare of Fisherman</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Cattle Insurance Scheme</SchemeH2>
                            <Schemeh4>Required Document :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>A duly filled & signed proposal form</SchemeItem>
                                <SchemeItem>Certificate by veterinary doctor in the prescribed form 
                                    confirming the health status and market value of the animal</SchemeItem>
                                <SchemeItem>Receipt of payment made while purchasing the animal</SchemeItem>
                                <SchemeItem>Photograph of the animal</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The owner should immediately intimate the insurer about the 
                                    death/injury on the 24*7 toll free customer care number of the provider</SchemeItem>
                                <SchemeItem>Get the death certificate or the certificate of disability from a veterinary 
                                    practitioner</SchemeItem>
                                <SchemeItem>The beneficiary should also submit the duly filled in claim form along with 
                                    the death/disability certificate</SchemeItem>
                                <SchemeItem>An authorised member from the insurance company will visit the site and verify 
                                    the submitted details</SchemeItem>
                                <SchemeItem>If the claim is found to be genuine, the amount is paid to the beneficiary, else 
                                    it is rejected</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria :</Schemeh4>
                            <SchemeP>Cattle Insurance Policy covers people who have:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Cows, bullocks or buffaloes of either sex</SchemeItem>
                                <SchemeItem>Cross-breed and exotic cattle owned by private owners, military dairy farms, 
                                    co- operative dairies and corporate dairies</SchemeItem>
                                <SchemeItem>Both schemed and non-schemed animals fall under this policy Schemed animals 
                                    refer to cattle subsidised under National Livestock Development Board (NLDB) and 
                                    State Livestock Development Board (SLDB)</SchemeItem>
                            </SchemeUList>
                            <SchemeP>The policy seekers need to ensure that at the time of buying insurance, the cattle 
                                should not be injured or suffering from some disease. The health condition needs to be 
                                certified by a veterinary surgeon. Animals under the following age group are eligible 
                                for the insurance cover.</SchemeP>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Sr No.</SchemeTableH>
                                    <SchemeTableH>Animal Type</SchemeTableH>
                                    <SchemeTableH>Animal Age</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>1</SchemeTableD>
                                    <SchemeTableD>Milch Cows</SchemeTableD>
                                    <SchemeTableD>2 yrs/or age at 1st calving – 10 yrs</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>2</SchemeTableD>
                                    <SchemeTableD>Milch Buffaloes</SchemeTableD>
                                    <SchemeTableD>3 yrs/or age at 1st calving – 12 yrs</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>3</SchemeTableD>
                                    <SchemeTableD>Stud Bulls</SchemeTableD>
                                    <SchemeTableD>3 yrs – 8 yrs</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>4</SchemeTableD>
                                    <SchemeTableD>Bullocks & Male Buffaloes</SchemeTableD>
                                    <SchemeTableD>3 yrs – 12 yrs</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>5</SchemeTableD>
                                    <SchemeTableD>Female Calves/ Heifers</SchemeTableD>
                                    <SchemeTableD>From age of 4 months – 2 yrs/ 1st calving age, whichever is lower</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>6</SchemeTableD>
                                    <SchemeTableD>Milch Cow’s offspring</SchemeTableD>
                                    <SchemeTableD>From age of 4 months – 2 yrs/ 1st calving age, whichever is lower</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>7</SchemeTableD>
                                    <SchemeTableD>Milch Buffaloes offspring</SchemeTableD>
                                    <SchemeTableD>Up to 3 yrs/1st calving age, whichever is lower</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Cattle Insurance pays for the market value of the animal prior to the accident or the 
                                    sum insured whichever is less.</SchemeItem>
                                <SchemeItem>A certificate from the veterinary surgeon will be necessary to claim the amount in 
                                    the case of death of the cattle.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null
                    }
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Gramin Bhandaran Yojana</SchemeH2>
                            <Schemeh4>Document Required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card</SchemeItem>
                                <SchemeItem>Ration card</SchemeItem>
                                <SchemeItem>Bank account details</SchemeItem>
                                <SchemeItem>mobile number</SchemeItem>
                                <SchemeItem>Passport size photo</SchemeItem>
                                <SchemeItem>residence certificate</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the Official Website of Gramin Bhandaran Yojana i.e. www.nabard.org.</SchemeItem>
                                <SchemeItem>On the Homepage, Click on the Option Apply Online button.</SchemeItem>
                                <SchemeItem>The Registration Form page will be displayed on the screen.</SchemeItem>
                                <SchemeItem>Enter the required Farmer detail such as,
                                    <SchemeSubItem>Name</SchemeSubItem>
                                    <SchemeSubItem>Father name</SchemeSubItem>
                                    <SchemeSubItem>Date of birth</SchemeSubItem>
                                    <SchemeSubItem>Residence Address</SchemeSubItem>
                                    <SchemeSubItem>Bank details</SchemeSubItem>
                                    <SchemeSubItem>Aadhar No.</SchemeSubItem>
                                </SchemeItem>
                                <SchemeItem>Upload the Required Documents.</SchemeItem>
                                <SchemeItem>Submit the Form.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Marketing Boards</SchemeItem>
                                <SchemeItem>Agro-processing co-operative societies</SchemeItem>
                                <SchemeItem>Agro-processing corporations</SchemeItem>
                                <SchemeItem>Agro-industrial corporations</SchemeItem>
                                <SchemeItem>Other corporations</SchemeItem>
                                <SchemeItem>Quality testing laboratories</SchemeItem>
                                <SchemeItem>Partnership firms</SchemeItem>
                                <SchemeItem>Companies</SchemeItem>
                                <SchemeItem>Agricultural Produce Marketing Committees</SchemeItem>
                                <SchemeItem>Farmers</SchemeItem>
                                <SchemeItem>Proprietary firms</SchemeItem>
                                <SchemeItem>Co-operatives</SchemeItem>
                                <SchemeItem>Non-Governmental Organizations</SchemeItem>
                                <SchemeItem>Farmers’ groups</SchemeItem>
                                <SchemeItem>Self-help groups</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits :</Schemeh4>
                            <SchemeP>The entrepreneur is free to decide on the capacity of a warehouse. The disbursal of subsidies, 
                                however, would be restricted to a capacity of between 100 tonnes and 30,000 tonnes. Smaller-size rural 
                                warehouses of up to 50 tonnes capacity are also considered based on viability analysis/topography of 
                                the region. Rural warehouses located in hilly areas qualify if their capacity is not more than 25 
                                tonnes. The rates of subsidy are as tabulated below:</SchemeP>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Sr No.</SchemeTableH>
                                    <SchemeTableH>Category of Applicant</SchemeTableH>
                                    <SchemeTableH>Rate of Subsidy</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>1</SchemeTableD>
                                    <SchemeTableD>SC/ST entrepreneurs and their cooperatives</SchemeTableD>
                                    <SchemeTableD>33.33% of the capital cost of the project, subject to a maximum of INR 3 crores</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>2</SchemeTableD>
                                    <SchemeTableD>Farmers, agricultural graduates and cooperatives</SchemeTableD>
                                    <SchemeTableD>25% of the capital cost of the project, subject to a maximum of Rs. 2.25 crores</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>3</SchemeTableD>
                                    <SchemeTableD>Individuals, companies and corporations</SchemeTableD>
                                    <SchemeTableD>15% of the capital cost of the project, subject to a maximum of INR 1.35 crores</SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>4</SchemeTableD>
                                    <SchemeTableD>Renovation of warehouses of cooperatives with the aid of NCDC</SchemeTableD>
                                    <SchemeTableD>25% of the capital cost of the project.</SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                        </Scheme>
                    :
                    null
                    }
                    {scheme3?
                        <Scheme>
                        <SchemeH2>National Mission For Sustainable Agriculture</SchemeH2>
                        <Schemeh4>Document Required :</Schemeh4>
                        <SchemeUList>
                            <SchemeItem>Applicant’s Aadhar Card</SchemeItem>
                            <SchemeItem>identity card</SchemeItem>
                            <SchemeItem>Housing Certificated</SchemeItem>
                            <SchemeItem>Farm papers</SchemeItem>
                            <SchemeItem>Bank Account Passbook</SchemeItem>
                            <SchemeItem>mobile number</SchemeItem>
                            <SchemeItem>Passport Size Photo</SchemeItem>
                        </SchemeUList>
                        <Schemeh4>Procedure :</Schemeh4>
                        <SchemeUList>
                            <SchemeItem>First Login With Your Email id and Password</SchemeItem>
                            <SchemeItem>Click on the Create User</SchemeItem>
                            <SchemeItem>Fill the User Details :
                                <SchemeSubItem>Level (State wise / District Wise)</SchemeSubItem>
                                <SchemeSubItem>Add your Name and DOB</SchemeSubItem>
                                <SchemeSubItem>Add your Destination, Mobile no. Email Id  and Password</SchemeSubItem>
                                <SchemeSubItem>If User Create As Nodal State  then Select the checkbox</SchemeSubItem>
                                <SchemeSubItem>Submit the Registration Form</SchemeSubItem>
                            </SchemeItem>
                        </SchemeUList>
                        <Schemeh4>Eligibility Criteria :</Schemeh4>
                        <SchemeUList>
                            <SchemeItem>Farmers of any category, category are eligible to avail this scheme.</SchemeItem>
                            <SchemeItem>It is mandatory for all the applicant farmers to have their own agricultural land.</SchemeItem>
                            <SchemeItem>In this scheme, members of Self Help Groups, Trusts, Cooperative Societies, Incorporated 
                                        Companies, Producer Farmers’ Groups are eligible to take benefit by registering.</SchemeItem>
                            <SchemeItem>Farmers who have been cultivating the land under the Lease Agreement for the last seven 
                                        years will also be able to take advantage of the PM Krishi Irrigation Scheme.</SchemeItem>
                            <SchemeItem>Only citizens (farmer brothers) residing in India are eligible to take advantage of this 
                                        Prime Minister Agricultural Irrigation Scheme.</SchemeItem>
                        </SchemeUList>
                        <Schemeh4>Benefits :</Schemeh4>
                        <SchemeP>
                        PMKSY has been formulated amalgamating ongoing schemes viz. Accelerated Irrigation Benefit Programme 
                        (AIBP) of the Ministry of Water Resources, River Development & Ganga Rejuvenation (MoWR,RD&GR), Integrated 
                        Watershed Management Programme (IWMP) of Department of Land Resources (DoLR) and the On Farm Water Management 
                        (OFWM) of Department of Agriculture and Cooperation (DAC).
                        </SchemeP>
                    </Scheme>
                    :
                    null
                    }
                    {scheme4?
                        <Scheme>
                            <SchemeH2>Paramparagat Krishi Vikas Yojana ( PKVY )</SchemeH2>
                            <Schemeh4>Document Required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Applicant’s Aadhaar card</SchemeItem>
                                <SchemeItem>Applicant’s 7/12</SchemeItem>
                                <SchemeItem>Applicant’s bank account details</SchemeItem>
                                <SchemeItem>Applicant’s passport size photos if required</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>farmers contact agriculture department of Maharashtra for enrolling Paramparagat 
                                            Krishi Vikas Yojana</SchemeItem>
                                <SchemeItem>farmers also contact district or taluka level agriculture officer in the state</SchemeItem>
                                <SchemeItem>farmers contact Zilla Parishad or gram panchayat for more application 
                                            procedure details</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria : </Schemeh4>
                            <SchemeUList>
                                <SchemeItem>All farmers eligible for this scheme</SchemeItem>
                                <SchemeItem>A group or cluster of farmers also eligible for this scheme</SchemeItem>
                                <SchemeItem>Each cluster or group must have 50 farmers willing to take up organic 
                                            farming are eligible for Paramparagat Krishi Vikas Yojana PKVY</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Benefits of INR 20,000 for each farmers enrolling for this scheme</SchemeItem>
                                <SchemeItem>Benefits of doing organic farming</SchemeItem>
                                <SchemeItem>Benefits of organic farming without using chemical help for consumer</SchemeItem>
                                <SchemeItem>Benefits of preservation of soil health by organic farming method</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null
                    }
                    {scheme5?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Fasal Bima Yojana (PMFBY)</SchemeH2>
                            <Schemeh4>Document Required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Identity proof of the farmer such as PAN card, driving license, voter ID card, passport, 
                                            Aadhaar card</SchemeItem>
                                <SchemeItem>Address proof like driving license, voter ID card, passport or Aadhaar card</SchemeItem>
                                <SchemeItem>Photo copy of field Khasra number / account number is required</SchemeItem>
                                <SchemeItem>You have to provide proof of sowing of crop in the field</SchemeItem>
                                <SchemeItem>A cancelled cheque is required along with all the papers</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Login with your Mobile number and if you don’t have an Account then Login as Guest 
                                            Farmer</SchemeItem>
                                <SchemeItem>Enter all required details like name, address, age, state</SchemeItem>
                                <SchemeItem>Finally click the submit button</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>All farmers including sharecroppers and tenant farmers growing the notified crops in 
                                    the notified areas are eligible for coverage. However, farmers should have insurable interest 
                                    for the notified/ insured crops. The non-loanee farmers are required to submit necessary documentary 
                                    evidence of land records prevailing in the State (Records of Right (RoR), Land possession Certificate 
                                    (LPC) etc.) and/ or applicable contract/ agreement details/ other documents notified/ permitted by 
                                    concerned State Government (in case of sharecroppers/ tenant farmers).</SchemeItem>
                                <SchemeItem>
                                    <SchemeItemHead>Compulsory Component</SchemeItemHead>
                                    All farmers availing Seasonal Agricultural Operations (SAO) loans from Financial 
                                    Institutions (i.e. loanee farmers) for the notified crop(s) would be covered compulsorily.</SchemeItem>
                                <SchemeItem>
                                    <SchemeItemHead>Voluntary Component</SchemeItemHead>
                                    The Scheme would be optional for the non-loanee farmers.
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits : </Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Farmers need to pay a uniform premium of only 2% for all Kharif crops and 1.5% for all 
                                    rabi crops. And, in case of annual commercial and horticultural crops, only a 5% premium will 
                                    have to be paid as per the rules.</SchemeItem>
                                <SchemeItem>The rates of premium paid by the farmers are very low and the remaining premium is 
                                    paid by the government to provide full sum insured to the farmers for crop loss in any kind 
                                    of natural calamities.</SchemeItem>
                                <SchemeItem>Moreover, there is no upper limit on government subsidy. Even if the remaining premium 
                                    is 90%, it is borne by the government.</SchemeItem>
                                <SchemeItem>Earlier, there was a provision of capping at the premium rate, which led to the 
                                    farmers paying fewer claims. Now it has been removed and the farmers can claim for the 
                                    entire sum insured without any deduction.</SchemeItem>
                                <SchemeItem>The use of technology has been encouraged to a great extent. Smartphones, remote 
                                    sensing drones, and GPS technology are being used to collect and upload crop harvesting 
                                    data to reduce delays in claim payments.</SchemeItem>
                                <SchemeItem>Moreover, the insurance scheme is regulated by a single insurance company, 
                                    the Agricultural Insurance Company of India (AIC).</SchemeItem>
                                <SchemeItem>PMFBY is a replacement scheme of the National Agricultural Insurance Scheme 
                                    (NAIS) and replaced as the revised National Agricultural Insurance Scheme (MNAIS) and 
                                    therefore it is exempted from the service tax.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null
                    }
                    {scheme6?
                        <Scheme>
                            <SchemeH2>National Scheme on Welfare of Fisherman</SchemeH2>
                            <Schemeh4>Document Required :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Aadhar Card.</SchemeItem>
                                <SchemeItem>Voter ID Card.</SchemeItem>
                                <SchemeItem>Income Certificate.</SchemeItem>
                                <SchemeItem>Registration as a fisherman under the State or Central Government.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure :</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>To apply for the scheme, potential beneficiaries need to apply to the nearest 
                                    FISHCOPFED office. The contribution is collected by the President or Secretary of the 
                                    Associations and forwarded to nationalised bank accounts held by the Director of Fisheries.</SchemeItem>
                                <SchemeItem>Once the funds are submitted to the Director of Fisheries, the State and Central Governments 
                                    match the contributions of the fishermen as part of their premiums. Upon maturity of the schemes, 
                                    the full investment is returned, along with any interest accrued</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria :</Schemeh4>
                            <SchemeP>Under the National Scheme of Welfare of Fisherman, the eligibility criteria for the fishermen are 
                                mentioned below:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Individuals who are into full-time fishing.</SchemeItem>
                                <SchemeItem>Individuals who are members of the Cooperative Society/Federation/Welfare Society.</SchemeItem>
                                <SchemeItem>Individuals who are below the age of 60 years old.</SchemeItem>
                                <SchemeItem>Individuals who live below the poverty line.</SchemeItem>
                            </SchemeUList>
                            <SchemeP>In case a member of the fishermen family has regular employment, or he/she receives a regular income, 
                                the family would not be considered as a beneficiary.</SchemeP>
                            <Schemeh4>Benefits :</Schemeh4>
                            <SchemeP>Under this component of the Centrally Sponsored National Scheme of Welfare of Fishermen, all fishermen 
                                who are registered with the State or UT government will receive Rs. 50,000 worth of insurance on death or 
                                permanent disability. An additional Rs. 25,000 is also allocated in case of partial disability.</SchemeP>
                        </Scheme>
                    :
                    null
                    }
                    </SchemeDetails>
            </MainSec>
            <Footer />
        </>
    )
}

export default Agriculture
