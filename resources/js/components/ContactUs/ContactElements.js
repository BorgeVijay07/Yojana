import styled from  'styled-components'

export const Sec = styled.div`
    padding: 30px 60px;

    @media screen and (max-width: 768px) {
        padding: 30px;
    }
`

export const MainSec = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DFECFC;
    height: 600px;
    border-radius: 30px;

    @media screen and (max-width: 768px){
        height: 1050px;
    }
`

export const ContactContainer = styled.div`
    position: relative;
    min-width: 1100px;
    min-height: 500px;
    height: 500px;
    display: flex;

    @media screen and (max-width: 1200px){
        width: 90%;
        min-width: auto;
        margin: 20px;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column-reverse;
        height: 1050px;
        justify-content: center;
        align-items: center;
    }
`

export const ContactInfo = styled.div`
    position: absolute;
    top: 40px;
    width: 350px;
    height: calc(100% - 80px);
    background: #212738;
    z-index: 1;
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
    border-radius: 20px;

    @media screen and (max-width: 1200px){
        top: 0;
        height: 500px;
        position: relative;
        box-shadow: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding: 25px;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
        border-radius: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`

export const ContactForm = styled.div`
    position: absolute;
    padding: 70px 50px;
    padding-left: 250px;
    margin-left: 150px;
    width: calc(100% - 150px);
    height: 100%;
    background: #fff;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.15);
    border-radius: 20px;

    @media screen and (max-width: 1200px){
        position: relative;
        width: calc(100% - 350px);
        padding-left: 0;
        margin-left: 0;
        padding: 40px;
        height: 500px;
        box-shadow: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
        border-radius: 20px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 25px;
    }
`

export const ContactInfoH2 = styled.h2`
    color: #DFECFC;
    font-size: 24px;
    font-weight: 500;
`

export const ContactInfoList = styled.ul`
    position: relative;
    margin: 20px 0;
`

export const ContactInfoListItem = styled.li`
    position: relative;
    list-style: none;
    display: flex;
    margin: 20px 0;
    cursor: pointer;
    align-items: flex-start;
`

export const ImgWrap = styled.div`
    width: 30px;
    min-width: 30px;
`

export const Img = styled.img`
    max-width: 100%;
`

export const ContactInfoListContent = styled.div`
    color: #DFECFC;
    margin-left: 10px;
    font-weight: 300;
`

export const ContactFormH2 = styled.h2`
    color: #212738;
    font-size: 24px;
    font-weight: 500;
`

export const ContactFormContainer = styled.form`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
`

export const ContactFormItem = styled.div`
    position: relative;
    margin-bottom: 35px;
    width: 47%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const ContactFormItem2 = styled.div`
    position: relative;
    margin-bottom: 35px;
    width: 100%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const ContactInput = styled.input`
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    font-weight: 300;
    color: #212738;
    border: none;
    outline: none;
    border-bottom: 1px solid #212738;
`

export const ContactText = styled.textarea`
    width: 100%;
    resize: none;
    padding: 5px 0;
    font-size: 16px;
    font-weight: 300;
    color: #212738;
    border: none;
    outline: none;
    border-bottom: 1px solid #212738;
    height: 100px;

`

export const InputSpan = styled.span`
    position: absolute;
    left: 0;
    padding: 5px 0;
    pointer-events: none;
    font-size: 16px;
    font-weight: 300;
    transition: 0.3s;
`

export const ContactButton = styled.button`
    position: relative;
    cursor: pointer;
    background: #212738;
    color: #DFECFC;
    border: none;
    max-width: 150px;
    padding: 12px 30px;
    font-size: 16px;
    border-radius: 30px;

    &:hover{
        background: #fff;
        color: #212738;
        border: 2px solid #212738;
    }

`
