import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

const MainContainer = styled.div`
    min-height: 100vh;
    min-width: 100px;
    background: ${theme.neutrals.extraDark};
`
const Layout = styled.div`
    display: flex;
    padding: 120px;
    justify-content: center;
    position: relative;
`
const LoginContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 80px;
   width: 50%;
   max-width: 480px;
   min-width: 320px;
`
const ButtonWrapper = styled.button`
    height: 56px;
    width: auto;
    background: teal;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 100px;

    &:focus {
        outline: none;
      }
`
const InputWrapper = styled.input`
    height: 48px;
    width: auto;
    margin-bottom: 16px;
    border-radius: 6px;
    padding-left: 16px;

    &:focus {
        outline: none;
      }
`
const TextButton = styled(NavLink)`
   margin-top: 24px;
   color: teal;
`

const Login = () => {
    return (
      <MainContainer>
        <Layout>
            <LoginContainer>
              <h1>Welcome back 👋</h1>
              <InputWrapper placeholder="Email" type="email"/>
              <InputWrapper placeholder="Password" type="password"/>
              <ButtonWrapper>Login</ButtonWrapper>
              <TextButton to='/signup'>Don't have an account?</TextButton>
            </LoginContainer>
        </Layout>
      </MainContainer>
    );
}
 
export default Login;