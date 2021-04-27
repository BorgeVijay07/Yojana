import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/urban.jpg'
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
import { SchemeContainer } from './UDevelopmentElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/urban devlopment/pmay.png'
import Icon2 from './../Images/pics/urban devlopment/amrut.png'
import Icon3 from './../Images/pics/urban devlopment/jn.png'

const UrbanDevelopment = () => {

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
                    <Heading>URBAN DEVELOPMENT</Heading>
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
                            <SchemeH3>Atal Mission for Rejuvenation and Urban Transformation (AMRUT)</SchemeH3>
                        </SchemeCard>
                        <SchemeCard onClick = {showScheme3}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon3}/>
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
                            <SchemeH2>Atal Mission for Rejuvenation and Urban Transformation (AMRUT)</SchemeH2>
                            <Schemeh4>Thrust areas</Schemeh4>
                            <SchemeP>The Mission will focus on the following Thrust Areas:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>water supply,</SchemeItem>
                                <SchemeItem>sewerage facilities and septage management,</SchemeItem>
                                <SchemeItem>storm water drains to reduce flooding,</SchemeItem>
                                <SchemeItem>pedestrian, non-motorized and public transport facilities, parking spaces, and</SchemeItem>
                                <SchemeItem>enhancing amenity value of cities by creating and upgrading green spaces, parks and</SchemeItem>
                                <SchemeItem>recreation centers, especially for children.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Coverage</Schemeh4>
                            <SchemeP>Five hundred cities will be taken up under AMRUT. The list of cities will be notified at an
                                    appropriate time. The category of cities that will be covered in the AMRUT is given below:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>All Cities and Towns with a population of over one lakh with notified Municipalities,</SchemeItem>
                                <SchemeItem>including Cantonment Boards (Civilian areas),</SchemeItem>
                                <SchemeItem>All Capital Cities/Towns of States/ UTs, not covered in 2.1(i),</SchemeItem>
                                <SchemeItem>All Cities/ Towns classified as Heritage Cities by MoUD under the HRIDAY Scheme,</SchemeItem>
                                <SchemeItem>Thirteen Cities and Towns on the stem of the main rivers with a population above 75,000</SchemeItem>
                                <SchemeItem>and less than 1 lakh, and</SchemeItem>
                                <SchemeItem>Ten Cities from hill states, islands and tourist destinations (not more than one from each State).</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Mission Components</Schemeh4>
                            <SchemeP>The components of the AMRUT consist of capacity building, reform implementation, water
                                    supply, sewerage and septage management, storm water drainage, urban transport and
                                    development of green spaces and parks. During the process of planning, the Urban Local Bodies
                                    (ULBs) will strive to include some smart features in the physical infrastructure components.
                                    The details of the Mission components are given below.
                            </SchemeP>
                            <Schemeh4>Water Supply</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Water supply systems including augmentation of existing water supply, water
                                    treatment plants and universal metering.
                                </SchemeItem>
                                <SchemeItem>Rehabilitation of old water supply systems, including treatment plants.</SchemeItem>
                                <SchemeItem>Rejuvenation of water bodies specifically for drinking water supply and recharging of
                                            ground water.
                                </SchemeItem>
                                <SchemeItem>Special water supply arrangement for difficult areas, hill and coastal cities, including
                                            those having water quality problems (e.g. arsenic, fluoride)
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Sewerage</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Decentralised, networked underground sewerage systems, including augmentation
                                    of existing sewerage systems and sewage treatment plants.
                                </SchemeItem>
                                <SchemeItem>Rehabilitation of old sewerage system and treatment plants.</SchemeItem>
                                <SchemeItem>Recycling of water for beneficial purposes and reuse of wastewater.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Septage</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Faecal Sludge Management- cleaning, transportation and treatment in a cost-effective
                                            manner.
                                </SchemeItem>
                                <SchemeItem>Mechanical and biological cleaning of sewers and septic tanks and recovery of
                                            operational cost in full.
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Storm Water Drainage</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Construction and improvement of drains and storm water drains in order to reduce
                                            and eliminate flooding.
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Urban Transport</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Ferry vessels for inland waterways (excluding port/bay infrastructure) and buses.</SchemeItem>
                                <SchemeItem>Footpaths/walkways, sidewalks, foot over-bridges and facilities for non-motorised
                                            transport (e.g. bicycles).
                                </SchemeItem>
                                <SchemeItem>Multi-level parking.</SchemeItem>
                                <SchemeItem>Bus Rapid Transit System (BRTS).</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Green space and parks</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Development of green space and parks with special provision for child-friendly
                                            components.
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Reforms management & support</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Support structures, activities and funding support for reform implementation.</SchemeItem>
                                <SchemeItem>Independent Reform monitoring agencies.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Capacity Building</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>This has two components- individual and institutional capacity building.</SchemeItem>
                                <SchemeItem>The capacity building will not be limited to the Mission Cities, but will be extended to
                                            other ULBs as well.
                                </SchemeItem>
                                <SchemeItem>Continuation of the Comprehensive Capacity Building Programme (CCBP) after its
                                            realignment towards the new Missions.
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Indicative (not exhaustive) list of inadmissible component</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Purchase of land for projects or project related works,</SchemeItem>
                                <SchemeItem>Staff salaries of both the State Governments/ULBs,</SchemeItem>
                                <SchemeItem>Power</SchemeItem>
                                <SchemeItem>Telecom</SchemeItem>
                                <SchemeItem>Health</SchemeItem>
                                <SchemeItem>Education</SchemeItem>
                                <SchemeItem>Wage employment programme and staff component.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Fund Allocation</Schemeh4>
                            <SchemeP>The total outlay for AMRUT is Rs. 50,000 crore for five years from FY 2015-16 to FY 2019-20 and the Mission will be operated as a Centrally Sponsored Scheme. The AMRUT may be continued Mission. The Mission funds will consist of the following four parts:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Project fund - 80% of the annual budgetary allocation.</SchemeItem>
                                <SchemeItem>Incentive for Reforms - 10% of the annual budgetary allocation.</SchemeItem>
                                <SchemeItem>State funds for Administrative & Office Expenses (A&OE) - 8% of the annual budgetary</SchemeItem>
                                <SchemeItem>Allocation</SchemeItem>
                                <SchemeItem>MoUD funds for Administrative & Office Expenses (A&OE) - 2% of the annual budgetary allocation</SchemeItem>
                            </SchemeUList>
                            <SchemeP>However, for FY 2015-16 the project fund would be 90% of the annual budgetary allocation
                                    as incentive for Reforms will be given only from FY 2016-17 onwards. The Mission funds would be
                                    allocated to States/UTs based on the following principles.
                            </SchemeP>
                            <Schemeh4>Project Fund</Schemeh4>
                            <SchemeUList>
                                <SchemeP>The project fund will be divided among States/UTs at the beginning of each year. An equitable
                                formula will be used to distribute the annual budgetary allocation in which equal (50:50) weightage is
                                given to the urban population of each State/UT (Census 2011) and the number of statutory towns in
                                the State/UT. As the number of statutory towns are notified by States/UTs and will change during the
                                Mission period, the formula will take into account changes in this number every year. The amount of
                                project fund allocated will be informed to the States/UTs at the appropriate time. The Central Assistance
                                (CA) for the projects will be in three instalments of 20:40:40 of the approved cost (Refer para 9).
                                </SchemeP>
                            </SchemeUList>
                            <Schemeh4>Incentive for Reform</Schemeh4>
                            <SchemeP>One purpose of the Mission is to improve governance through a set of Reforms. During
                            the Mission period, 11 Reforms will be implemented. The list is given in Annexure 1. The following
                            principles will govern the grant of incentives to States.
                            </SchemeP>
                            <SchemeUList>
                                <SchemeItem>Past exprience shows that projects get delayed if release of project funds is linked
                                to non-completion of Reforms. Therefore, the AMRUT shifts from penalization to incentivization. Ten percent of the annual budget allocation shall be kept apart and
                                given to the States/UTs every year as incentive for achievement of Reforms. The Mission will give incentives for the previous year at the start of the succeeding Financial Year (FY). The States/UTs shall do the self-assessment in the prescribed procedure given in Table 5.5 of Annexure 2. The National Mission Directorate, on receipt of the self assessment, will announce the award of incentive to the States.
                                </SchemeItem>
                                <SchemeItem>The incentive fund is an additionality that will be provided by the MoUD and no
                                matching funds will be required to be given by the State/ULB
                                </SchemeItem>
                                <SchemeItem>The State High Power Steering Committee (SHPSC) will decide the use of the incentive amount. The incentive award will only be used in Mission cities on admissible components of the AMRUT, including new projects. The SHPSC will inform the MoUD of the use of incentive funds on projects.</SchemeItem>
                                <SchemeItem>The incentive cannot be used as the State share in project in the AMRUT, but can be
                                used by the ULBs for their project funding
                                </SchemeItem>
                                <SchemeItem>Unutilised funds for Reform incentives will be transferred to Project Fund every year.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>State Fund (Administrative & Office Expenses)</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The funds will be allocated to all States/UTs on the equitable formula given </SchemeItem>
                                <SchemeItem>The use of these funds will be recommended by the SHPSC and will form a part of the State Annual Action Plan (SAAP).</SchemeItem>
                                <SchemeItem>This fund will be utilised for capacity building programmes and will not be used for
                                purchase of vehicles, construction and maintenance of buildings, creation of posts,
                                payment of salary and purchase of furniture and fixtures, etc.
                                </SchemeItem>
                                <SchemeItem>Hiring of professionals and support teams on contract to support the implementation of Mission at all levels will be permissible as set out in the guidelines and after following fair and transparent procedures</SchemeItem>
                                <SchemeItem>The funds for capacity building will be released in similar instalments as given for
                                project funds above.
                                </SchemeItem>
                                <SchemeItem>Taking up activities connected to E-Municipality as a Service (E-MAAS).</SchemeItem>
                                <SchemeItem>Displaying the logo and tagline of AMRUT prominently on all projects.</SchemeItem>
                                <SchemeItem>Institutional arrangements that support Mission implementation will be eligible
                                to be funded from this fund, including ongoing Comprehensive Capacity Building Programme (CCBP) and Independent Review & Monitoring Agencies (IRMA).
                                </SchemeItem>
                            </SchemeUList>
                            <Schemeh4>MoUD Fund (Administrative & Office Expenses)</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The fund will be utilized at the National Mission Directorate level (including the Urban Transport Division) for capacity building, Mission Directorate, convening National & regional workshops, giving awards and recognition of best practices, up-scaling and replication of best practices and smart solutions, commissioning of research and applied studies through, say, Centres of Excellence and other institutions and international cooperation for capacity building and technology development.</SchemeItem>
                                <SchemeItem>Taking up activities connected to E-MAAS.</SchemeItem>
                                <SchemeItem>The Apex Committee will decide on the use of these funds for any other purpose.</SchemeItem>
                            </SchemeUList>
                        </Scheme>
                    :
                    null}
                    {scheme3?
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

export default UrbanDevelopment
