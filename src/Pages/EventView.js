import React, {useEffect, useState} from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { H1 } from "../components/Fonts"

const MainContainer = styled.div`
  min-height: 100vh;
  min-width: 100px;
  background: ${theme.neutrals.extraDark};
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 120px;
  justify-content: center;
  position: relative;
`;
const StyledH1 = styled(H1)`
  color: white;
`;
const ButtonWrapper = styled.button`
    height: 56px;
    width: 240px;
    background: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 100px;
    border: 1px solid white;
 ` 

const EventView = (props) => {
  console.log(props.location.selectedEvent)
  return (
      <MainContainer>
        <Layout>
          <StyledH1>Hello</StyledH1>
          <ButtonWrapper>Delete Event</ButtonWrapper>
        </Layout>
      </MainContainer>
  )
};

export default EventView;