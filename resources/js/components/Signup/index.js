import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { AccountContext } from './accountContext'
import { LoginForm } from './loginform'
import {BoxContainer,
        TopContainer,
        SignupContainer,
        HeaderContainer,
        HeaderText,
        SmallText,
        InnerContainer
        } from './SignupElements'
import { SignupForm } from './signupform'
import {motion} from 'framer-motion'
import styled from 'styled-components'

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 550px;
    top: -290px;
    left: -70px;
    z-index: 9;
    transform: rotate(60deg);
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(2,0,36);
    background: linear-gradient(58deg, rgba(2,0,36,0.5) 0%, rgba(87,196,229,1) 20%, rgba(0,212,255,1) 100%); 
`

const backdropVariants = {
    expanded: {
        width: "700%",
        height: "2900px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
    }
}

const expandingTransition = {
    typt: "spring",
    duration: 2.3,
    stiffness: 30,
}

const Signup = (props) => {

    useEffect(() => {
        if(localStorage.getItem('user_info'))
        {
            history.push('/');
        }
    }, [])

    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState('signin');
    const history = useHistory();

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout( () => {
            setExpanded(false)
        }, expandingTransition.duration * 1000 - 1500);
    }

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout( () => {
            setActive('signup');
        }, 400)
    } 

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout( () => {
            setActive('signin');
        }, 400)
    } 

    const contextValue = { switchToSignup, switchToSignin};

    return (
        <>
            <AccountContext.Provider value={contextValue}>
                <SignupContainer className='sign-up'>
                    <BoxContainer>
                        <TopContainer>
                            <BackDrop 
                                initial={false} 
                                animate={isExpanded ? 'expanded' : 'collapsed'} 
                                variants={backdropVariants}
                                transition={expandingTransition}
                            />
                            { active === 'signin' && <HeaderContainer>
                                <HeaderText>Welcome</HeaderText>
                                <HeaderText>Back</HeaderText>
                                <SmallText>Please sign-in to continue!</SmallText>
                            </HeaderContainer> }
                            { active === 'signup' && <HeaderContainer>
                                <HeaderText>Create</HeaderText>
                                <HeaderText>Account</HeaderText>
                                <SmallText>Please sign-up to continue!</SmallText>
                            </HeaderContainer> }
                        </TopContainer>
                        <InnerContainer>
                            {active === 'signin' && <LoginForm />}
                            {active === 'signup' && <SignupForm />}
                        </InnerContainer>
                    </BoxContainer>
                </SignupContainer>
            </AccountContext.Provider>
        </>
    )
}

export default Signup
