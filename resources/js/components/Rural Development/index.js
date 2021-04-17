import React from 'react'
import Category from './../Category'
import crowd from './../Images/rural.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const RuralDevelopment = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>RURAL DEVELOPMENT</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default RuralDevelopment
