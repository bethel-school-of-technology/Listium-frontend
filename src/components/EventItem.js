import React from 'react';
import '../styles/theme.css';

const EventItem = (props) => {
    return (
        <div className="eventItem">
            <h4>{props.date}</h4>
            <h2>{props.name}</h2>
            <div className="categoryPill">
                <p>{props.category}</p>
            </div>
        </div>
    )
}

export default EventItem;