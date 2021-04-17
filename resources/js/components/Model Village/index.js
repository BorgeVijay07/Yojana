import React from 'react'
import Category from './../Category'
import crowd from './../Images/village.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const ModelVillage = () => {
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
            </MainSec>
        </>
    )
}

export default ModelVillage
