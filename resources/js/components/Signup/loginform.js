import React, { useContext, useEffect, useState } from 'react'
import { Marginer } from '../Marginer'
import { AccountContext } from './accountContext';
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import {useHistory} from 'react-router-dom'


export function LoginForm(props) {

    const { switchToSignup } = useContext (AccountContext);

    const [user_email, setMail] = useState('')
    const [user_password, setPassword] = useState('')

    // const history = useHistory();
    // useEffect( ()=> {
    //     if(localStorage.getItem('user_info')) {
    //         window.location.reload();
    //         history.push('/dashboard1')
    //     }
    // }, [])

    // async function login(){
    //     let item = {user_email, user_password}
    //     let result = await fetch('http://localhost:8080/api/login', {
    //         method: 'POST',
    //         headers:{
    //             "Content-Type" : "application/json",
    //             "Accept" : "application/json"
    //         },
    //         body: JSON.stringify(item)
    //     });
    //     result = await result.json();
    //     localStorage.setItem('user_info', JSON.stringify(result));
    //     window.location.reload();
    //     history.push('/dashboard1');
    // }

    return(
        <BoxContainer >
            <FormContainer>
                <Input type='email' placeholder='Email'
                onChange={(e) =>setMail(e.target.value)}/>
                <Input type='password' placeholder='Password'
                onChange={(e) =>setPassword(e.target.value)}/>
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <MutedLink href='#'>Forget your password?</MutedLink>
            <Marginer direction='vertical' margin='1.6em' />
            {/* <SubmitButton type='submit' onClick={login} href='/dashboard'>Signin</SubmitButton> */}
            <SubmitButton to='/dashboard1'>Signin</SubmitButton>
            <Marginer direction='vertical' margin='1em' />
            <MutedLink href='#'>Don't have an account? <BoldLink href='#' onClick={switchToSignup}>
                Signup
            </BoldLink></MutedLink>
        </BoxContainer>
    )
}