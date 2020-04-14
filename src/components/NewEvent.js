import React from 'react';
import '../styles/theme.css';

const NewEvent = () => {
    return (
        <div className="newEvent">
            <h2>Add an event!</h2>
                <input placeholder="Event Name" />
                <select placeholder="Select Category" />
                <select placeholder="Select Date"/>
                <button>Create New Event</button>
        </div>
    )
}

export default NewEvent;