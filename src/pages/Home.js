import React from "react";
import EventList from "../components/EventList";
import NewEvent from "../components/NewEvent";
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

// This is our static data model for now...

const home = () => {
  return (
    <MainContainer>
      <Layout>
        <NewEvent />
        <EventList />
      </Layout>
    </MainContainer>
  );
};

export default home;
