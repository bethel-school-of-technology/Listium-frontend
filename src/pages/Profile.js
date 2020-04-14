import React from 'react';
import styled from 'styled-components'

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
       <Layout>
          <ProfileContainer>
            <h1>Welcome to your profile!</h1>
            <ButtonWrapper>Log out</ButtonWrapper>
          </ProfileContainer>
       </Layout>
    );
}
 
export default Profile;