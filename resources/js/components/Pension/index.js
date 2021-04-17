import React from 'react'
import Category from './../Category'
import crowd from './../Images/pension.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const Pension = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>PENSION</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default Pension
