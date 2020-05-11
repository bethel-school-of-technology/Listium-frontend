import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EventItem from "./EventItem";
import theme from "../styles/theme";
import { H1 } from "./Fonts";

const EventListWrapper = styled.div`
  margin-right: 4%;
  width: 50%;
  min-width: 320px;
  max-width: 640px;
  z-index: 5;
  margin-bottom: 160px;
`;
const StyledH1 = styled(H1)`
  color: white;
  margin-bottom: 32px;
`;

const EventItemView = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/event/:id");
      res.json().then((res) => setEvent(res));
    }

    fetchData();
  });

  return (
    <EventListWrapper>
      <StyledH1>Upcoming Dates</StyledH1>
      {event.map((event, idx) => (
        <EventItem
          key={idx}
          id={event.id}
          name={event.eventName}
          category={event.eventCategory}
          date={event.eventDate}
        />
      ))}
    </EventListWrapper>
  );
};

export default EventItemView;
