import React from 'react';
import styled from 'styled-components';
 
import { NavLink } from 'react-router-dom';
 
const HeaderWrapper = styled.div`
   width: 100%;
   height: 64px;
   border-bottom: 1px solid lightgrey;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   background: white;
   z-index: 10;
   background: black;
`

const LogoWrapper = styled.div`
   margin-left: 64px;
   color: white;
`

const NavLinksContainer = styled.div`
   margin-right: 64px;
`

const NavLinkWrapper = styled(NavLink)`
   padding: 8px 16px;
   color: rgb(255,255,255,.7);
   text-decoration: none;
   background: black;
   border-radius: 100px;
   transition: all .3s;

   &:hover {
      background: rgb(255,255,255, .1);
      color: rgb(255,255,255);
   }
`

const Header = () => {
    return (
       <HeaderWrapper>
          <LogoWrapper>
            <h3>Listium</h3>
          </LogoWrapper>
          <NavLinksContainer>
            <NavLinkWrapper to="/">Home</NavLinkWrapper>
            <NavLinkWrapper to="/login">Login</NavLinkWrapper>
            <NavLinkWrapper to="/signup">Signup</NavLinkWrapper>
            <NavLinkWrapper to="/profile">Profile</NavLinkWrapper>
          </NavLinksContainer>
       </HeaderWrapper>
    );
}
 
export default Header;