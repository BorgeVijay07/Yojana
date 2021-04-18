import styled from 'styled-components'

export const MainSec = styled.div`
    padding: 30px 60px;

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`

export const BgContainer = styled.div`
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

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
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
        height: 120px;
    }
`

export const Heading = styled.h1`
    color: #DFECFC;
    font-size: 48px;
    text-align: center;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const SchemeContainer = styled.div`
    height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #DFECFC;
    border-radius: 30px;
    margin-top: 40px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 950px;
    }
`

export const SchemeWrapper = styled.div`
    max-width: 1000px;
    margin: 0 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 30px;
    /* padding: 20px; */
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
`

export const SchemeCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    max-height: 340px;
    padding: 25px;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const SchemeIconCard = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`

export const SchemeIcon = styled.img`
    height: 60px;
    width: 60px;
    margin-bottom: 10px;
`

export const SchemeH3 = styled.h3`
    margin-top: 15px;
    font-size: 15px;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    color: #212738;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`

export const SchemeDetails = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 40px;
    color: #212738;
    background-color: #f8f8f8;
    margin-top: 40px;
    border-radius: 30px;
`

export const Scheme = styled.div`
    display: flex;
    /* justify-content: flex-start;
    align-items: center; */
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 60px;
`

export const Schemeh4 = styled.h4`
    font-size: 20px;
    padding-top: 10px;
`

export const SchemeUList = styled.ul`
    list-style: disc;
    padding-left: 60px;
    padding-top: 10px;
`

export const SchemeItem = styled.li`
    font-size: 16px;
    list-style: disc;
`

export const SchemeH2 = styled.h2`
    font-size: 30px;
    text-align: center;
    padding-bottom: 20px;
`