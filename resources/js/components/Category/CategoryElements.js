import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CategoryContainer = styled.div`
    background: #f8f8f8;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin-top: 110px;
`

export const CategoryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    z-index: 1;
    width: 100%;
    padding: 30px 20px;
`

export const CategoryItem = styled(Link)`
    border-radius: 50px;
    background: #f8f8f8;
    white-space: nowrap;
    margin: 5px;
    padding: 10px 22px;
    color: #212738;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 2px solid #212738;
    text-decoration: none;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #212738;
        color: #f8f8f8;
    }

    @media screen and (max-width: 768px) {
        font-size: 13px;
        padding: 6px 15px;
    }
`
