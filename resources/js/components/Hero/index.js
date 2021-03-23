import React from 'react'
import {
        Content, 
        HeroSec,
        HeroRow,
        HeroColumn,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        Button,
        ImgWrapper,
        Img,
        MainSec
        } 
        from './HeroElements'
import logo from './../Images/8.png'

const Hero = () => {
    return (
        <>
        <MainSec id='hero' className='hero'>
            <HeroSec>
                <Content>
                    <HeroRow>
                        <HeroColumn>
                            <TextWrapper>
                                <TopLine>
                                    We Will Guide You
                                </TopLine>
                                <Heading>
                                   To Apply Your Government Schemes.
                                </Heading>
                                <Subtitle>
                                    Now you can easily apply to your applicable Government schemes.
                                </Subtitle>
                                <Button to='/sign-up'>
                                    Let's Start
                                </Button>
                            </TextWrapper>
                        </HeroColumn>
                        <HeroColumn>
                            <ImgWrapper>
                                <Img src= {logo} alt='Hero'/>
                            </ImgWrapper>
                        </HeroColumn>
                    </HeroRow>
                </Content>
            </HeroSec>
        </MainSec>
        </>
    )
}

export default Hero
