import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { H1 } from "../components/Fonts";
import EventItem from "../components/EventItem";
import EventItemView from "../components/EventItemView";

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
  display: flex-center;
  height: 56px;
  width: 240px;
  background: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border-radius: 100px;
  border: 1px solid white;
`;

const EventView = (props) => {
  const [activeEvent, setActiveEvent] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/event/:id");
      res.json((res) => setActiveEvent(res)).then();
    }
    fetchData();
  });
  console.log({ activeEvent });
  return (
    <MainContainer>
      <Layout>
        <StyledH1></StyledH1>
        <EventItemView
        />
        <ButtonWrapper>Delete Event</ButtonWrapper>
      </Layout>
    </MainContainer>
  );
};

export default EventView;
