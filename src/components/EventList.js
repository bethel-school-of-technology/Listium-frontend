import React from 'react';
import styled from 'styled-components';
import EventItem from './EventItem';

const EventListWrapper = styled.div`
    border: 1px solid lightslategrey;
    padding: 64px;
    margin-left: 50%;
    width: 50%;
    min-width: 320px;
    max-width: 640px;
`

const EventList = (props) => (
    <EventListWrapper>
        <h1>Your Important Dates</h1>
        {props.events.map(event => (
            <EventItem 
                id={event.id}
                name={event.eventName}
                category={event.eventCategory}
                date={event.eventDate}
            />
        ))}
    </EventListWrapper>
);

export default EventList;