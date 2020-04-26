import React, {useEffect, useState} from "react";
import styled from "styled-components";
import theme from "../styles/theme";

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

const EventView = (props) => {
  console.log(props.location.selectedEvent)
  return (
      <MainContainer>
        <Layout>
          <h1>{props.location.name}</h1>
        </Layout>
      </MainContainer>
  )
};

export default EventView;