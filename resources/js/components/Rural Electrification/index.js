import React from 'react'
import Category from './../Category'
import crowd from './../Images/electricity.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const RuralElectrification = () => {
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
            </MainSec>
        </>
    )
}

export default RuralElectrification
