import React, { useState, useEffect } from 'react'

const EventItemView = (events) => {
    const [selectedEvent, setSelectedEvent] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await fetch('api/event/:id');
        res
        .json()
        .then(res => setSelectedEvent(res))
      }
  
      fetchData();
    });

    return (
        <div>
            <h1>{selectedEvent}</h1>
            <p>Hello World</p>
        </div>
    )
}

export default EventItemView;