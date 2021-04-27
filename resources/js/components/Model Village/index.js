import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/village.jpg'
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
import { SchemeContainer } from './VillageElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/model village/sagy.png'

const ModelVillage = () => {

    const [scheme1, setScheme1] = useState(true);
   
    const showScheme1 = () =>{
        setScheme1(true);
    }

    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>MODEL VILLAGE</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Saansad Adarsh Gram Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Saansad Adarsh Gram Yojana</SchemeH2>
                            <Schemeh4>Key objectives of the Yojana include:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>The development of model villages, called Adarsh Grams, through the implementation of existing schemes, and certain new initiatives to be designed for the local context, which may vary from village to village.</SchemeItem>
                                <SchemeItem>Creating models of local development which can be replicated in other villages.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Identification of villages</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>MPs can select any gram panchayat, other than their own village or that of their spouse, to be developed as an Adarsh Gram.  The village must have a population of 3000-5000 people if it is located in the plains, or 1000-3000 people if located in hilly areas.</SchemeItem>
                                <SchemeItem>Lok Sabha MPs can choose a village from their constituency, and Rajya Sabha MPs from the state from which they are elected.  Nominated members can choose a village from any district of the country.  MPs which represent urban constituencies can identify a village from a neighbouring rural constituency.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Funding</Schemeh4>
                            <SchemeP>No new funds have been allocated for the Yojana. Resources may be raised through:</SchemeP>
                            <SchemeUList>
                                <SchemeItem>Funds from existing schemes, such as the Indira Awas Yojana, Pradhan Mantri Gram Sadak Yojana, Mahatma Gandhi National Rural Employment Guarantee Scheme, and Backward Regions Grant Fund, etc.,</SchemeItem>
                                <SchemeItem>The Member of Parliament Local Area Development Scheme (MPLADS)</SchemeItem>
                                <SchemeItem>The gram panchayat’s own revenue</SchemeItem>
                                <SchemeItem>Central and State Finance Commission Grants</SchemeItem>
                                <SchemeItem>Corporate Social Responsibility funds</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Implementation</Schemeh4>
                            <SchemeP>A Village Development Plan must be created for each Adarsh Gram.  While each village will develop a list of activities to be carried out, based on its own resources and requirements, possible activities have been listed in the guidelines for the scheme.  For example, Adarsh Grams can work towards providing universal access to basic healthcare facilities, promoting diversified livelihoods through agriculture related livelihoods and skill development, providing pension for all eligible families, housing for all, and promoting social forestry.</SchemeP>
                            <SchemeP>The table below outlines key functionaries at the national, state, district, and village level and their responsibilities.</SchemeP>
                            <SchemeP>Table 1: Roles and responsibilities of key functionaries</SchemeP>
                            <SchemeTable>
                                <SchemeTableR>
                                    <SchemeTableH>Level</SchemeTableH>
                                    <SchemeTableH>Functionary</SchemeTableH>
                                    <SchemeTableH>Key roles and responsibilities</SchemeTableH>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>National</SchemeTableD>
                                    <SchemeTableD>Member of Parliament</SchemeTableD>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Identify the Adarsh Gram</SchemeItem>
                                            <SchemeItem>Facilitate the planning process</SchemeItem>
                                            <SchemeItem>Mobilise additional funds</SchemeItem>
                                            <SchemeItem>Monitor the scheme</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD> </SchemeTableD>
                                    <SchemeTableD>Two committees, headed by the Minister of Rural Development, and Secretary, Rural Development, respectively.*</SchemeTableD>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Monitor the process of identification and planning</SchemeItem>
                                            <SchemeItem>Review the implementation of the scheme</SchemeItem>
                                            <SchemeItem>Identify bottlenecks in the scheme</SchemeItem>
                                            <SchemeItem>Issue operational guidelines</SchemeItem>
                                            <SchemeItem>Indicate specific resource support which each Ministry can provide</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>State</SchemeTableD>
                                    <SchemeTableD>A committee headed by the Chief Secretary</SchemeTableD>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Supplement central guidelines for the scheme</SchemeItem>
                                            <SchemeItem>Review Village Development Plans</SchemeItem>
                                            <SchemeItem>Review implementation</SchemeItem>
                                            <SchemeItem>Outline monitoring mechanisms</SchemeItem>
                                            <SchemeItem>Design a grievance redressal mechanism for the scheme</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>District</SchemeTableD>
                                    <SchemeTableD>District Collector</SchemeTableD>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Conduct the baseline survey</SchemeItem>
                                            <SchemeItem>Facilitate the preparation of the Village Development Plan</SchemeItem>
                                            <SchemeItem>Converge relevant schemes</SchemeItem>
                                            <SchemeItem>Ensure grievance redressal</SchemeItem>
                                            <SchemeItem>Monthly progress review of the scheme</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                </SchemeTableR>
                                <SchemeTableR>
                                    <SchemeTableD>Village</SchemeTableD>
                                    <SchemeTableD>Gram Panchayat and functionaries of schemes (at various levels)</SchemeTableD>
                                    <SchemeTableD>
                                        <SchemeUList>
                                            <SchemeItem>Implement of the scheme</SchemeItem>
                                            <SchemeItem>Identify common needs of the village</SchemeItem>
                                            <SchemeItem>Leverage resources from various programmes</SchemeItem>
                                            <SchemeItem>Ensure participation in the scheme</SchemeItem>
                                        </SchemeUList>
                                    </SchemeTableD>
                                </SchemeTableR>
                            </SchemeTable>
                            <SchemeP>Note: *These committees will include members from other Ministries.</SchemeP>
                            <SchemeP>Sources: Saansad Adarsh Gram Yojana Guidelines, Ministry of Rural Development; PRS</SchemeP>
                            <Schemeh4>Monitoring</Schemeh4>
                            <SchemeP>A web based monitoring system will be established to enable the MP and other stakeholders to monitor the scheme.  Outputs relating to physical and financial targets will be measured each quarter.  A mid-term evaluation and post-project evaluation will be conducted through an independent agency.</SchemeP>
                            <SchemeP>More information on the scheme is available in the guidelines for the scheme, </SchemeP>
                        </Scheme>
                    :
                    null}
                </SchemeDetails>
            </MainSec>
            <Footer />
        </>
    )
}

export default ModelVillage
