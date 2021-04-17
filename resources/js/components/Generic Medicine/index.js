import React from 'react'
import Category from '../Category'
import crowd from './../Images/medicine.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const GenericMedicine = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>GENERIC MEDICINE</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default GenericMedicine
