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