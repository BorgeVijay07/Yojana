import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #DFECFC;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 200;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled( LinkR )`
    color: #212738;
    font-family: 'Aclonica', 'poppins';
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #212738;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled( LinkS )`
    color: #212738;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #212738;
    }
` 

export const NavLinksr = styled( LinkR )`
    color: #212738;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active{
        border-bottom: 3px solid #212738;
    }
` 

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled( LinkR )`
    border-radius: 50px;
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

export const NavBtnLinkd = styled.div`
    border-radius: 50px;
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

export const DashLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    color: #212738;
    cursor: pointer;
    margin-bottom: 15px;
`

export const DashBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background: #212738;
    white-space: nowrap;
    padding: 10px 22px;
    color: #f8f8f8;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #f8f8f8;
        color: #212738;
        border: 2px solid #212738;
    }
`

