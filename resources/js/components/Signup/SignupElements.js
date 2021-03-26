import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SignupContainer = styled.div`
    /* width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    /* margin-top:50px; */
    height: 100vh;
    margin-top: 80px;
`

export const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #DFECFC;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`

export const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: #212738;
    z-index: 10;
    margin: 0;
`

export const SmallText = styled.h5`
    color: #212738;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`
export const SignUpRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
`

export const SignUpColumn = styled.div`
    margin-bottom: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Img = styled.img`
    padding-top: 30px;
    padding-right: 10px;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`
 
export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
       display: none;
    }
`

export const Content = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 100px;
    padding-left: 100px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`