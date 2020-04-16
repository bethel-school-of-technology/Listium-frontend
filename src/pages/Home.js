import React from 'react';
import EventList from '../components/EventList';
import NewEvent from '../components/NewEvent';
import styled from 'styled-components';
import theme from '../styles/theme';


const MainContainer = styled.div`
    min-height: 100vh;
    min-width: 100px;
    background: ${theme.neutrals.extraDark};
`
const Layout = styled.div`
    display: flex;
    padding: 120px;
    justify-content: flex-end;
    position: relative;
`

// This is our static data model for now...
<<<<<<< Updated upstream
let events = [
    {
        id: 1,
        eventName: "The day we got our first dog!",
        eventCategory: "Special Day",
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
=======
>>>>>>> Stashed changes

const home = () => {
    return (
    <MainContainer>
<<<<<<< Updated upstream
       <Layout>
           <NewEvent />
           <EventList events={events} />
       </Layout>
=======
      <Layout>
        <NewEvent />
        <EventList />
      </Layout>
>>>>>>> Stashed changes
    </MainContainer>
    );
}
 
export default home;