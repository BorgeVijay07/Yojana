import React from 'react'
import { ServicesCard, 
        ServicesContainer, 
        ServicesH1, 
        ServicesH2, 
        ServicesIcon, 
        ServicesP, 
        ServicesWrapper,
        Mainsec 
        } from './ServicesElements'

import Icon1 from './../Images/list.svg'
import Icon2 from './../Images/process.svg'
import Icon3 from './../Images/bot.svg'

const Services = () => {
    return (
        <>
            <Mainsec>
                <ServicesContainer id='services'>
                    <ServicesH1>Our Services</ServicesH1>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>Categorised Schemes</ServicesH2>
                            <ServicesP>We provide categorised list of all the government schemes.</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon2}/>
                            <ServicesH2>Detailed Procedure</ServicesH2>
                            <ServicesP>We provide step wise procedure to apply your applicable schemes.</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon3}/>
                            <ServicesH2>Integrated Chatbot</ServicesH2>
                            <ServicesP>We provide an integrated chatbot to help you anytime.</ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
                </ServicesContainer>
            </Mainsec>
        </>
    )
}

export default Services
