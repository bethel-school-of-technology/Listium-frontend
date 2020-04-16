import React, { Component } from "react";
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

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    fetch('/api/events')
      .then(res => res.json())
      .then(events => this.setState({events}, () => console.log('Events fetched...', events)));
  }
  
  render() {
    return (
      <EventListWrapper>
        <StyledH1>Upcoming Dates</StyledH1>
        {this.state.events.map((event) => (
          <EventItem
            id={event.id}
            name={event.eventName}
            category={event.eventCategory}
            date={event.eventDate}
          />
        ))}
      </EventListWrapper>
    );
  }
}

export default EventList;
