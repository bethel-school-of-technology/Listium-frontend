import React from 'react';
import styled from 'styled-components';
import EventItem from './EventItem';
import theme from '../styles/theme';
import { H2 } from './Fonts';


const EventListWrapper = styled.div`
    margin-left: 50%;
    width: 50%;
    min-width: 320px;
    max-width: 640px;
`
const StyledH2 = styled(H2)`
    color: white;
    margin-bottom: 32px;
`

const EventList = (props) => (
    <EventListWrapper>
        <StyledH2>Your Important Dates</StyledH2>
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