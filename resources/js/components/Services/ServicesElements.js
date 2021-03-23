import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 500px;
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
        height: 1200px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 20px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    max-height: 340px;
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
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

export const ServicesH2 = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
`

export const ServicesP = styled.p`
    font-size: 18px;
    text-align: center;
`

export const Mainsec = styled.div`
    padding: 30px 60px;

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`