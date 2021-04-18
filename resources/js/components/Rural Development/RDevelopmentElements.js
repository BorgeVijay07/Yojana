import styled from 'styled-components'

export const SchemeContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #DFECFC;
    border-radius: 30px;
    margin-top: 40px;

    @media screen and (max-width: 768px) {
        height: 600px;
    }

    @media screen and (max-width: 480px) {
        height: 600px;
    }
`