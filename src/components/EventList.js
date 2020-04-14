import React from 'react';
import '../styles/theme.css';

import EventItem from './EventItem';

const EventList = (props) => (
    <div className="eventList">
        <h1>Your Important Dates</h1>
        {props.events.map(event => (
            <EventItem 
                id={event.id}
                name={event.eventName}
                category={event.eventCategory}
                date={event.eventDate}
            />
        ))}
    </div>
);

export default EventList;