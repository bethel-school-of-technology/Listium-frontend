import React from 'react';
import EventList from '../components/EventList';
import Header from '../components/Header';
import NewEvent from '../components/NewEvent';

import '../styles/theme.css';
 
let events = [
    {
        id: 1,
        eventName: "Sarah's Birthday",
        eventCategory: "Birthday",
        eventDate: "April 13"
    },
    {
        id: 2,
        eventName: "Michael's Birthday",
        eventCategory: "Birthday",
        eventDate: "February 23"
    },
    {
        id: 3,
        eventName: "Parent's Anniversary",
        eventCategory: "Anniversary",
        eventDate: "March 11"
    },
    {
        id: 4,
        eventName: "Jim's Birthday",
        eventCategory: "Birthday",
        eventDate: "December 25"
    },
    {
        id: 5,
        eventName: "The day I first met my wife",
        eventCategory: "Special Day",
        eventDate: "January 12"
    },
    {
        id: 6,
        eventName: "Michael Scott's Birthday",
        eventCategory: "Birthday",
        eventDate: "November 25"
    },
    {
        id: 7,
        eventName: "Richa's Birthday",
        eventCategory: "Birthday",
        eventDate: "May 7"
    }
]

const home = () => {
    return (
       <div className="layout">
           <NewEvent />
           <EventList events={events} />
       </div>
    );
}
 
export default home;