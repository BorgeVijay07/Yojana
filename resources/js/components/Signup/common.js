import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`

export const MutedLink = styled.a`
    font-size: 11px;
    color: #212738;
    opacity: 0.8;
    font-weight: 500;
    text-decoration: none;
`

export const BoldLink = styled.a`
    font-size: 12px;
    color: #1667B9;
    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
`

export const Input = styled.input`
    height: 42px;
    width: 100%;
    border: 1px solid rgba(200, 200, 200, 0);
    outline: none;
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    color: #212738;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: #212738;
        opacity: 0.8;
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid #7BB3F0;
    }
`

export const SubmitButton = styled(Link)`
    width: 100%;
    padding: 11px 40%;
    color: #212738;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: #7BB3F0;
    
    &:hover {
        filter: brightness(1.03);
    }
`


