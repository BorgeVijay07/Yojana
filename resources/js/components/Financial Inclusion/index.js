import React from 'react'
import Category from './../Category'
import crowd from './../Images/finance.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const FinancialInclusion = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>FINANCIAL INCLUSION</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default FinancialInclusion
