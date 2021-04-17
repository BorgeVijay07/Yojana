import React from 'react'
import Category from './../Category'
import crowd from './../Images/urban.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const UrbanDevelopment = () => {
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
            </MainSec>
        </>
    )
}

export default UrbanDevelopment
