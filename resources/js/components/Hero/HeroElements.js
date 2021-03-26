import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const MainSec = styled.div`
    padding: 30px 60px;
    margin-top: 80px;

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`

export const HeroSec = styled.div`
    color: #212738;
    padding: 10px 0;
    background: #DFECFC;
    border-radius: 30px;
`

export const Content = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`

export const HeroRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
`

export const HeroColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 50px;
    padding-bottom: 60px;
    padding-left: 50px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
        padding-left: 0;
    }
`

export const TopLine = styled.div`
    color: #212738;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;    

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: #212738;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #212738;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const Button = styled( LinkR )`
    border-radius: 50px;
    width: 88px;
    background: #212738;
    white-space: nowrap;
    padding: 10px 22px;
    color: #DFECFC;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #DFECFC;
        color: #212738;
        border: 2px solid #212738;
    }
`

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: flex-end;
`

export const Img = styled.img`
    padding-right: 10px;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
    animation: rotation 20s infinite linear;

    @keyframes rotation {
        from {
            transform : rotate(0deg);
        }
        to {
            transform : rotate(359deg);
        }
    }

    @media screen and (max-width: 768px) {
        padding-right: 0;
    }
`
