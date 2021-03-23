import styled from 'styled-components'
import {Link} from 'react-scroll'

export const SButton = styled(Link)`
    border-radius: 50px;    
    padding: 10px 20px;
    margin-top: 25px;
    background: #DFECFC;
    white-space: nowrap;
    color: #212738;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #212738;
        color: #DFECFC;
        border: 2px solid #DFECFC;
    }
`
export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 30px;
    height: 500px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #212738;
        z-index: 2;
        opacity:0.8;
        border-radius: 30px;
    }

    @media screen and (max-width: 768px) {
        height: 700px;
    }
`

export const AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    border-radius: 30px;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #212738;
`

export const MainSec = styled.div`
    padding: 30px 60px;

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`

export const AboutContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutHeading = styled.h1`
    color: #DFECFC;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const AboutP = styled.p`
    margin-top: 24px;
    color: #DFECFC;
    font-size: 18px;
    text-align: center;
    max-width: 800px;
    line-height: 30px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
    }
    @media screen and (max-width: 480px) {
        font-size: 16px;
        line-height: 25px;
    }
`