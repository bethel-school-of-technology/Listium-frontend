import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { ListiumLogo } from '../components/branding/index';
 
import { BrowserRouter, NavLink } from 'react-router-dom';
 
const HeaderWrapper = styled.div`
   width: 100%;
   height: 72px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   background: rgb(37,36,70,.95);
   border-bottom: 1px solid rgb(0,0,0,.3);
   backdrop-filter: blur(10px);
   z-index: 10;
`
const LogoWrapper = styled.div`
   margin-left: 64px;
   color: white;
`
const NavLinksContainer = styled.div`

   margin-right: 64px;
`
const activeClassName = 'nav-item-active'
const NavLinkWrapper = styled(NavLink).attrs({ activeClassName })`
   padding: 8px 16px;
   font-size: 18px;
   font-weight: 500;
   color: ${theme.overlays.light._400};
   text-decoration: none;
   background: rgb(37,36,70,.0);
   border-radius: 100px;
   transition: all .3s;

   &:hover {
      background: ${theme.neutrals.dark};
      color: white;
   }

   &.${activeClassName} {
      color: ${theme.colors.accent1};
    }

`;

const Header = () => {
    return (
       <HeaderWrapper>
          <LogoWrapper>
            <ListiumLogo />
          </LogoWrapper>
          <NavLinksContainer>
            <NavLinkWrapper exact to="/">Home</NavLinkWrapper>
            <NavLinkWrapper to="/login">Login</NavLinkWrapper>
            <NavLinkWrapper to="/signup">Signup</NavLinkWrapper>
            <NavLinkWrapper to="/profile">Profile</NavLinkWrapper>
            <NavLinkWrapper to="/eventview">EventView</NavLinkWrapper>
          </NavLinksContainer>
       </HeaderWrapper>
    );
}
 
export default Header;