import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/city.jpg'
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
         SchemeH2,
         Scheme,
         Schemeh4,
         SchemeUList,
         SchemeItem,
         SchemeP
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './UHousingElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/urban housing/pmay1.png'
import Icon2 from './../Images/pics/urban devlopment/jn.png'

const UrbanHousing = () => {

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
                    <Heading>URBAN HOUSING</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Pradhan Mantri Awas Yojana</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme2}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon2}/>
                            </SchemeIconCard>
                            <SchemeH3>Jawaharlal Nehru National Urban Renewal Scheme</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Pradhan Mantri Awas Yojana</SchemeH2>
                            <Schemeh4>Document required:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Age Proof documents – copy of your Passport/Driving License/Life Insurance Policy/Birth Certificate/PAN Card/School Leaving Certificate</SchemeItem>
                                <SchemeItem>Affidavit cum Declaration that proves that the beneficiary family does not own any pucca house</SchemeItem>
                                <SchemeItem>Declaration for property under construction, if applicable – Construction Agreement with the developer or builder, Valuation Certificate for the property you intend to buy, Receipt of advance payment for the property you intend to purchase</SchemeItem>
                                <SchemeItem>Identity Proof documents – Aadhar Card/PAN Card/Driving License/Voters’ ID</SchemeItem>
                                <SchemeItem>Copy of Address Proof  - Bank Statements/Property Registration documents/Property Tax Receipt/Voter ID</SchemeItem>
                                <SchemeItem>Salary Proof documents (for each earning member of the household) - Copy of Salary slips for the last three months/Appointment Letter/Yearly Increment Letter/Certified true copy of Form 16</SchemeItem>
                                <SchemeItem>Income Proof documents  – copy of your Salary account bank statements for the last six months</SchemeItem>
                                <SchemeItem>Existing loan details – to be provided through bank statements</SchemeItem>
                                <SchemeItem>Processing Fee Cheque – To be issued from the salary account for salaried customers or the business account for self-employed customers</SchemeItem>
                                <SchemeItem>NOC from a Competent Authority or any Housing Society</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Procedure:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Visit the official PMAY registration website of CSC.</SchemeItem>
                                <SchemeItem>Click on ‘Apply Here’</SchemeItem>
                                <SchemeItem>Enter your Aadhar number, select the monthly household income, check the declaration box and click ‘Next’ button at the bottom of the page.</SchemeItem>
                                <SchemeItem>On the next page, you will be asked to select the verification method. You can choose any one of the option - Iris (Eye Scan), Fingerprint or OTP. Since you require an eye scanner machine for Iris and a fingerprint machine for fingerprint, choose the OTP option and click on ‘Proceed’.</SchemeItem>
                                <SchemeItem>Upon clicking ‘Proceed’, check the declaration box and click on ‘Generate OTP’ button, post which you will receive an OTP on your mobile number linked with Aadhar card. Now, enter the OTP and click ‘Validate OTP’ button.</SchemeItem>
                                <SchemeItem>On the next page, PMAY urban application form will open wherein, you are required to fill the details and submit the form. Upon completing the process, you will be given an ‘application number’ or ‘assessment ID’ through which, you can track the status of PMAY application at later stage.</SchemeItem>
                                <SchemeItem>The application acknowledgement receipt can be downloaded by entering the Aadhar and application number at this link.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Eligibility Criteria:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Income</SchemeItem>
                                <SchemeItem>The annual household income of the beneficiary must meet the criteria defined for the various categories as mentioned in the table below. One is eligible to avail the PMAY subsidy scheme provided they fall under any one of the four categories – Economically Weaker Section or EWS, Lower Income Group or LIG, Middle Income Group or MIG I, and Middle Income Group II or MIG II.</SchemeItem>
                                <SchemeItem>No Prior Ownership </SchemeItem>
                                <SchemeItem>The beneficiary or any other member of the beneficiary family must not own any pucca house in any part of the country.</SchemeItem>
                                <SchemeItem>No Central Assistance</SchemeItem>
                                <SchemeItem>The beneficiary or any other member from the beneficiary’s family must not have availed subsidy under the CLSS scheme.</SchemeItem>
                                <SchemeItem>Mandatory Female Ownership or Co-Ownership</SchemeItem>
                                <SchemeItem>The borrower’s family must have at least one female member appointed as the owner or co-owner of the property (applicable only for the EWS and LIG categories</SchemeItem>
                                <SchemeItem>Carpet Area</SchemeItem>
                                <SchemeItem>The carpet area of the property must be within the limits specified for the various categories, as mentioned in the table below.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Benefits:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The Government’s scheme comes with an intent to provide shelters to the homeless population in the country. To achieve this, the scheme offers several benefits to the identified beneficiaries.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Home Loan Subsidy</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>PMAY beneficiaries can easily avail the benefits of interest subsidy on the home loan. Under Credit-linked Subsidy Scheme (CLSS), homebuyers can get the subsidy depending on their income, ranging from EWS/LIG to MIG 1 and MIG 2.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>All homeless to get pucca houses</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Under PMAY, the Government aims to develop over a crore of houses in different parts of the country, including rural areas. Under PMAY (Rural), the beneficiaries would be identified as per the Socio-Economic and Caste Census (SECC) 2011.</SchemeItem>
                            </SchemeUList>
                            <SchemeP><b>Benefits for women and minorities</b></SchemeP>
                            <SchemeUList>
                                <SchemeItem>Under the scheme, the Government has mandated female homeownership in certain cases, even if she is not the one buying the property. Additionally, certain strata of the society including widows, transgenders, the disabled, minorities and seniors are given preference over the general public. In case, you are applying for a house under PMAY as a senior citizen, you can be assured of ground floor unit allotment.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme2?
                        <Scheme>
                            <SchemeH2>Jawaharlal Nehru National Urban Renewal Scheme</SchemeH2>
                            <SchemeP>Mission Statement: The aim is to encourage reforms and fast track planned development of identified cities. Focus is to be on efficiency in urban infrastructure and service delivery mechanisms, community participation, and accountability of ULBs/ Parastatal agencies towards citizens.</SchemeP>
                            <Schemeh4>Objectives Of The Mission</Schemeh4>
                            <SchemeP>The objectives of the JNNURM are to ensure that the following are achieved in the urban Sector;.</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Focussed attention to integrated development of infrastructure services in cities covered under the Mission;.</SchemeItem>
                                <SchemeItem>Establishment of linkages between asset-creation and asset-management through a slew of reforms for long-term project sustainability;.</SchemeItem>
                                <SchemeItem>Ensuring adequate funds to meet the deficiencies in urban infrastructural services;.</SchemeItem>
                                <SchemeItem>Planned development of identified cities including peri-urban areas, outgrowths and urban corridors leading to dispersed urbanisation;.</SchemeItem>
                                <SchemeItem>Scale-up delivery of civic amenities and provision of utilities with emphasis on universal access to the urban poor.</SchemeItem>
                                <SchemeItem>Special focus on urban renewal programme for the old city areas to reduce congestion; and Provision of basic services to the urban poor including security of tenure at affordable prices, improved housing, water supply and sanitation, and ensuring delivery of other existing universal services of the government for education, health and social security.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Scope Of The Mission</Schemeh4>
                            <SchemeP>The Mission shall comprise two Sub- Missions, namely:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Sub-Mission for Urban Infrastructure and Governance: This will be administered by the Ministry of Urban Development through the Sub- Mission Directorate for Urban</SchemeItem>
                                <SchemeItem>Infrastructure and Governance. The main thrust of the Sub-Mission will be on infrastructure projects relating to water supply and sanitation, sewerage, solid waste management, road network, urban transport and redevelopment of old city areas with a view to upgrading infrastructure therein, shifting industrial and commercial establishments to conforming areas, etc.</SchemeItem>
                                <SchemeItem>Sub-Mission for Basic Services to the Urban Poor: This will be administered by the Ministry of Urban Employment and Poverty Alleviation through the Sub-Mission Directorate for Basic Services to the Urban Poor. The main thrust of the Sub-Mission will be on integrated development of slums through projects for providing shelter, basic services and other related civic amenities with a view to providing utilities to the urban poor</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Strategy Of The Mission</Schemeh4>
                            <SchemeP>The objectives of the Mission shall be met through the adoption of the following strategy:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Preparing City Development Plan: Every city will be expected to formulate a City Development Plan (CDP) indicating policies, programmes and strategies, and financing plans.</SchemeItem>
                                <SchemeItem>Preparing Projects: The CDP would facilitate identification of projects. The Urban Local Bodies (ULBs) / parastatal agencies will be required to prepare Detailed Project Reports (DPRs) for undertaking projects in the identified spheres. It is essential that projects are planned in a manner that optimises the life-cycle cost of projects. The life-cycle cost of a project would cover the capital outlays and the attendant O&M costs to ensure that assets are in good working condition. A revolving fund would be created to meet the O&M requirements of assets created, over the planning horizon. In order to seek JNNURM assistance, projects would need to be developed in a manner that would ensure and demonstrate optimisation of the life-cycle costs over the planning horizon of the project.</SchemeItem>
                                <SchemeItem>Release and Leveraging of Funds: It is expected that the JNNURM assistance would serve to catalyse the flow of investment into the urban infrastructure sector across the country. Funds from the Central and State Government will flow directly to the nodal agency designated by the State, as grants-in-aid. The funds for identified projects across cities would be disbursed to the ULB/Parastatal agency through the designated State Level Nodal Agency (SLNA) as soft loan or grant-cum-loan or grant. The SLNA / ULBs in turn would leverage additional resources from other sources.</SchemeItem>
                                <SchemeItem>Incorporating Private Sector Efficiencies: In order to optimise the life-cycle costs over the planning horizon, private sector efficiencies can be inducted in development, management, implementation and financing of projects, through Public Private Partnership (PPP) arrangements.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Duration Of The Mission</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The duration of the Mission would be seven years beginning from the year 2005-06. Evaluation of the experience of implementation of the Mission would be undertaken before the commencement of Eleventh Five Year Plan and if necessary, the program calibrated suitably.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Expected Outcomes Of The JNNURM</Schemeh4>
                            <SchemeP>On completion of the Mission period, it is expected that ULBs and parastatal agencies will have achieved the following:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Modern and transparent budgeting, accounting, financial management systems, designed and adopted for all urban service and governance functions</SchemeItem>
                                <SchemeItem>City-wide framework for planning and governance will be established and become operational</SchemeItem>
                                <SchemeItem>All urban residents will be able to obtain access to a basic level of urban services</SchemeItem>
                                <SchemeItem>Financially self-sustaining agencies for urban governance and service delivery will be established, through reforms to major revenue instruments</SchemeItem>
                                <SchemeItem>Local services and governance will be conducted in a manner that is transparent and accountable to citizens</SchemeItem>
                                <SchemeItem>E-governance applications will be introduced in core functions of ULBs/Parastatal resulting in reduced cost and time of service delivery processes</SchemeItem>
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

export default UrbanHousing
