import React from 'react'
import Category from './../Category'
import crowd from './../Images/health.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const Health = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>HEALTH</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default Health
