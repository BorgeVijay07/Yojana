import React, { useContext, useState } from 'react'
import {useHistory} from 'react-router-dom'
import { Marginer } from '../Marginer'
import { AccountContext } from './accountContext'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'

export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const history = useHistory();

    async function signup() {

        let item = {name, email, password};
    
        let result = await fetch("http://localhost:8080/api/sign-up", {
            method: 'POST',
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user_info",JSON.stringify(result));
        history.push('/');
    }

    return(
        <BoxContainer>
            <FormContainer>
                <Input type='text' 
                value={name} onChange={(e) => setName(e.target.value)} 
                placeholder='Full Name'/>
                <Input type='email' 
                value={email} onChange={(e) => setEmail(e.target.value)} 
                placeholder='Email'/>
                <Input type='password' 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                placeholder='Password'/>
                <Input type='password'
                value={cpassword} onChange={(e) => setCpassword(e.target.valur)}  
                placeholder='Confirm Password'/>
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <SubmitButton type='submit' onClick={signup}>Signup</SubmitButton>
            <Marginer direction='vertical' margin='1em' />
            <MutedLink href='#'>Already have an account? <BoldLink href='#' onClick={switchToSignin}>
                Signin
            </BoldLink></MutedLink>
        </BoxContainer>
    )
}