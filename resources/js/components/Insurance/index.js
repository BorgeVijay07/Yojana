import React from 'react'
import Category from './../Category'
import crowd from './../Images/insurance.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const Insurance = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>INSURANCE</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default Insurance
