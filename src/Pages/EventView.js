import React from "react";
import EventItem from "../components/EventItem";
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

const EventView = () => {
    return (
        <MainContainer>
            <Layout>
                <EventItem />
            </Layout>
        </MainContainer>
    );
};

export default EventView;