import React from 'react'
import { 
        AboutBg, 
        AboutContainer, 
        AboutContent, 
        AboutHeading,
        AboutP, 
        ImgBg,
        MainSec,
        SButton
        } from './AboutElemets'
import crowd from './../Images/10.jpg'

const About = () => {
    return (
        <>
            <MainSec id='about'>
                <AboutContainer>
                    <AboutBg>
                        <ImgBg src={crowd} alt='about'/>
                    </AboutBg>
                    <AboutContent>
                        <AboutHeading>About Us</AboutHeading>
                        <AboutP>
                        India had 73 million people living in extreme poverty which makes up 6.5% of its 
                        total population. Our indian government always try hard to provide most of the needful 
                        things to this peoples by introducing new schemes. But due to there poverty and lack 
                        of knowledge about these schemes they unable to get help from it. Our vision is to make 
                        them knowledgeable about these schemes. 

                        To help them we have create this application for them. Through this application we 
                        take all required information from user and notify them if they are eligible for the criteria 
                        of schemes. We will also provide them the steps they have to perform to get help from the 
                        eligible scheme.
                        </AboutP>
                        <SButton to='services'
                                 smooth={true} 
                                 duration={500} 
                                 spy={true} 
                                 exact='true' 
                                 offset={-110}>
                            Our Services
                        </SButton>
                    </AboutContent>
                </AboutContainer>
            </MainSec>
        </>
    )
}

export default About
