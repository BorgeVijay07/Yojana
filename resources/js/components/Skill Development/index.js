import React from 'react'
import Category from './../Category'
import crowd from './../Images/skill.jpg'
import { MainSec,
         BgContainer,
         ImgBg,
         HeadingContainer,
         Heading
        } from './../Agriculture/AgricultureElements'

const SkillDevelopment = () => {
    return (
        <>
            <Category />
            <MainSec>
                <HeadingContainer>
                    <BgContainer>
                        <ImgBg src={crowd} alt='about'/>
                    </BgContainer>
                    <Heading>SKILL DEVELOPMENT</Heading>
                </HeadingContainer>
            </MainSec>
        </>
    )
}

export default SkillDevelopment