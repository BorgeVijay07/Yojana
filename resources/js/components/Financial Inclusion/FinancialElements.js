import styled from 'styled-components'

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
        height: 1150px;
    }
`