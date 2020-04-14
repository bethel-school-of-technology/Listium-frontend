import React from 'react';
import styled from 'styled-components'
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
const ProfileContainer = styled.div`
   margin-top: 80px;
   display: flex;
   flex-direction: column;
`
const ButtonWrapper = styled.button`
    height: 48px;
    width: auto;
    background: white;
    color: black;
    font-size: 16px;
    font-weight: 600;
    border-radius: 100px;
    border-color: teal;

    &:focus {
        outline: none;
      }
`
 
const Profile = () => {
    return (
       <MainContainer>
         <Layout>
            <ProfileContainer>
               <h1>Welcome to your profile!</h1>
               <ButtonWrapper>Log out</ButtonWrapper>
            </ProfileContainer>
         </Layout>
       </MainContainer>
    );
}
 
export default Profile;