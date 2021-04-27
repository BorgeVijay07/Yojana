import React, {useState} from 'react'
import Category from './../Category'
import crowd from './../Images/electricity.jpg'
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
         SchemeItem
        } from './../Agriculture/AgricultureElements'
import { SchemeContainer } from './RElectrificationElements';
import Footer from '../Footer';
import Icon1 from './../Images/pics/rural electrification/rg.png'

const RuralElectrification = () => {

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
                    <Heading>RURAL ELECTRIFICATION</Heading>
                </HeadingContainer>
                <SchemeContainer>
                    <SchemeWrapper>
                        <SchemeCard onClick = {showScheme1}>
                            <SchemeIconCard>
                                <SchemeIcon src={Icon1}/>
                            </SchemeIconCard>
                            <SchemeH3>Rajiv Gandhi Grameen Vidyutikaran Yojana</SchemeH3>
                        </SchemeCard>
                    </SchemeWrapper>
                </SchemeContainer>
                <SchemeDetails>
                    {scheme1?
                        <Scheme>
                            <SchemeH2>Rajiv Gandhi Grameen Vidyutikaran Yojana</SchemeH2>
                            <Schemeh4>Rural Electricity Distribution Backbone (REDB):</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Provision of 33/11 KV (or 66/11 KV) sub-stations of adequate capacity and lines in blocks where these do not exist.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Creation of Village Electrification Infrastructure (VEI):</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Electrification of un-electrified villages.</SchemeItem>
                                <SchemeItem>Electrification of un-electrified habitations with a population of above 100.</SchemeItem>
                                <SchemeItem>Provision of distribution transformers of appropriate capacity in electrified villages / habitation(s).</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Decentralized Distributed Generation (DDG) and Supply:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Decentralized distribution-cum-generation from conventional or renewable or non-conventional sources such as biomass, bio fuel, bio gas, mini hydro, geo thermal and solar etc. for villages where grid connectivity is either not feasible or not cost effective. The funding will be on the pattern of 90% subsidy from Government of India and 10% loan from REC or from own funds of the state/loan from financial institutions. The Monitoring Committee on RGGVY, while sanctioning DDG projects under RGGVY, shall coordinate with MNRE to avoid any overlap. The provision for subsidy requirement for DDG is Rs.540 crore.</SchemeItem>
                                <SchemeItem>REDB, VEI and DDG would indirectly facilitate power requirement of agriculture and other activities including irrigation pump sets, small and medium industries, khadi and village industries, cold chains, healthcare, education and IT etc. This would facilitate overall rural development, employment generation and poverty alleviation.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Rural Household Electrification of Below Poverty Line Households:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>BPL households will be provided free electricity connections. The rate of reimbursement for providing free connections to BPL households would be Rs.2200 per household.</SchemeItem>
                                <SchemeItem>Households above poverty line would be paying for their connections at prescribed connection charges and no subsidy would be available for this purpose.</SchemeItem>
                                <SchemeItem>Wherever SC/ST population exists amongst BPL households and subject to being eligible otherwise, they will be provided connection free of cost and a separate record will be kept for such connection.</SchemeItem>
                            </SchemeUList>
                            <Schemeh4>Salient features of RGGVY in Arunachal Pradesh:</Schemeh4>
                            <SchemeUList>
                                <SchemeItem>Electrification of 1798 unelectrified villages and 331 de- electrified villages</SchemeItem>
                                <SchemeItem>Intensive electrification of 1756 electrified villages.</SchemeItem>
                                <SchemeItem>Providing electricity connection to 40810 BPL households free of cost of service connection with single light point.</SchemeItem>
                                <SchemeItem>Total Project cost is Rs 92,554.37 Lakhs.</SchemeItem>
                                <SchemeItem>Total 33KV lines 604 KM</SchemeItem>
                                <SchemeItem>Total 11KV line 7978 KM</SchemeItem>
                                <SchemeItem>33/11 KV Sub-stations 22 Nos.</SchemeItem>
                                <SchemeItem>Total Distribution Transformers 3022 Nos.</SchemeItem>
                                <SchemeItem>Total numbers of packages 60</SchemeItem>
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

export default RuralElectrification
