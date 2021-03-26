import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainSec = styled.div`
    padding: 30px 60px;

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`

export const SchemesContainer = styled.div`
    height: 630px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #DFECFC;
    border-radius: 30px;

    @media screen and (max-width: 768px) {
        height: 1200px;
    }

    @media screen and (max-width: 480px) {
        height: 1150px;
    }
`

export const SchemesH1 = styled.h1`
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

export const SchemesWrapper = styled.div`
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
    border-radius: 200%;
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

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`

export const SchemeButton = styled(Link)`
    border-radius: 50px;    
    padding: 10px 20px;
    margin-top: 25px;
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

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }
`