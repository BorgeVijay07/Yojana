import React from 'react'
import Category from './../Category'
import crowd from './../Images/mother.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const MotherCare = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>MOTHER CARE</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default MotherCare
