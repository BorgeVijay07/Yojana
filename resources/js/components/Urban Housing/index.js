import React from 'react'
import Category from './../Category'
import crowd from './../Images/city.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const UrbanHousing = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>URBAN HOUSING</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default UrbanHousing
