import React from 'react'
import { ContactContainer, 
        ContactForm, 
        ContactInfo, 
        MainSec, 
        Sec,
        ContactInfoListContent,
        Img,
        ImgWrap,
        ContactInfoListItem,
        ContactInfoList,
        ContactInfoH2,
        ContactButton,
        InputSpan,
        ContactText,
        ContactInput,
        ContactFormItem2,
        ContactFormItem,
        ContactFormContainer,
        ContactFormH2
        } from './ContactElements'
import Icon1 from './../Images/location.png'
import Icon2 from './../Images/mail.png'
import Icon3 from './../Images/call.png'
import './style.css'

const ContactUs = () => {
    return (
        <>
            <Sec id='contact-us' className='contact-us'>
                <MainSec>
                    <ContactContainer className='container'>
                        <ContactInfo>
                            <ContactInfoH2>Contact Info</ContactInfoH2>
                            <ContactInfoList>
                                <ContactInfoListItem>
                                    <ImgWrap>
                                        <Img src={Icon1}/>
                                    </ImgWrap>
                                    <ContactInfoListContent>
                                        2912 Meadowbrook Road <br />
                                        Los Angles, <br />
                                        90017
                                    </ContactInfoListContent>
                                </ContactInfoListItem>
                                <ContactInfoListItem>
                                    <ImgWrap>
                                        <Img src={Icon2}/>
                                    </ImgWrap>
                                    <ContactInfoListContent>
                                        lorem@ipsum.com
                                    </ContactInfoListContent>
                                </ContactInfoListItem>
                                <ContactInfoListItem>
                                    <ImgWrap>
                                        <Img src={Icon3}/>
                                    </ImgWrap>
                                    <ContactInfoListContent>
                                        310-286-1623
                                    </ContactInfoListContent>
                                </ContactInfoListItem>
                            </ContactInfoList>
                        </ContactInfo>
                        <ContactForm className='contactform'>
                        <ContactFormH2>Send a Meaasgae</ContactFormH2>
                        <ContactFormContainer className='formbox'>
                            <ContactFormItem>
                                <ContactInput type='text' required className='input'/>
                                <InputSpan className='span'>First Name</InputSpan>
                            </ContactFormItem>
                            <ContactFormItem>
                                <ContactInput type='text' required className='input'/>
                                <InputSpan className='span'>Last Name</InputSpan>
                            </ContactFormItem>
                            <ContactFormItem>
                                <ContactInput type='email' required className='input'/>
                                <InputSpan className='span'>Email Address</InputSpan>
                            </ContactFormItem>
                            <ContactFormItem>
                                <ContactInput type='text' required className='input'/>
                                <InputSpan className='span'>Contact Number</InputSpan>
                            </ContactFormItem>
                            <ContactFormItem2>
                                <ContactText required className='textarea'></ContactText>
                                <InputSpan className='span'>Write your message here..</InputSpan>
                            </ContactFormItem2>
                            <ContactFormItem2>
                                <ContactButton type='submit'>Send</ContactButton>
                            </ContactFormItem2>
                        </ContactFormContainer>
                        </ContactForm>
                    </ContactContainer>
                </MainSec>
            </Sec>
        </>
    )
}

export default ContactUs
