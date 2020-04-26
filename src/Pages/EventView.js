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
  padding: 120px;
  justify-content: flex-end;
  position: relative;
`;
const StyledH1 = styled(H1)`
  color: white;
`

const EventView = (props) => {
  console.log(props.location.selectedEvent)
  return (
      <MainContainer>
        <Layout>
          <StyledH1>Hello</StyledH1>
        </Layout>
      </MainContainer>
  )
};

export default EventView;