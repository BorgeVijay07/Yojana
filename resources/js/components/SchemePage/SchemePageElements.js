import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainSec = styled.div`
    padding: 30px 60px;
    margin-top: 80px;

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`

export const SchemePageContainer = styled.div`
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #DFECFC;
    border-radius: 30px;

    @media screen and (max-width: 768px) {
        height: 1300px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 50px;    
    padding: 10px 20px;
    margin: 16px;
    background: #212738;
    white-space: nowrap;
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

export const SchemePageH1 = styled.h1`
    font-size: 48px;
    color: #212738;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
        font-size: 32px;
    }
`

export const SchemePageWrapper = styled.div`
    max-width: 1000px;
    margin: 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    padding: 5px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 0px;
        padding: 0px;
    }
`

export const SchemePageCard = styled(Link)`
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
    color: #212738;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const SchemePageIconCard = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 768px) {
        padding: 10px;
    }
`

export const SchemePageIcon = styled.img`
    height: 60px;
    width: 60px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        height: 45px;
        width: 45px;
    }
`

export const SchemePageH3 = styled.h3`
    margin-top: 15px;
    font-size: 15px;
    margin-bottom: 10px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`
    
