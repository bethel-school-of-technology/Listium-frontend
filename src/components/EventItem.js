import React from 'react';
import styled from 'styled-components';

const EventItemWrapper = styled.div`
    border: 1px solid lightgrey;
    padding: 16px;
    min-width: 320px;
    margin-bottom: 16px;
`
const CategoryPill = styled.div`
    padding: 4px 16px;
    border-radius: 100px;
    background: lightgrey;
    width: auto;
`

const EventItem = (props) => {
    return (
        <EventItemWrapper>
            <h4>{props.date}</h4>
            <h2>{props.name}</h2>
            <CategoryPill>
                <p>{props.category}</p>
            </CategoryPill>
        </EventItemWrapper>
    )
}

export default EventItem;