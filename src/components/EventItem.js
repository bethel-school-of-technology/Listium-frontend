import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import { H4, H5 } from './Fonts';
import {BirthdayCake} from '@styled-icons/fa-solid/BirthdayCake';
import {Heart} from '@styled-icons/entypo/Heart';
import {CalendarStar} from '@styled-icons/boxicons-regular/CalendarStar';

const EventItemWrapper = styled.div`
    border: 1px solid lightgrey;
    padding: 32px;
    min-width: 320px;
    margin-bottom: 24px;
    min-height: 80px;
    background: white;
    border-radius: 32px;
    display: flex;
    align-items: center;
    box-shadow: ${theme.elevation.shadow.high};
`
const StyledH5 = styled(H5)`
    color: ${theme.colors.primary};
`
const BirthdayIcon = styled(BirthdayCake)`
    color: white;
    height: 24px;
    width: 24px;
    padding: 16px;
    border-radius: 50%;
    margin-right: 32px;
    background: ${theme.colors.accent3};
`
const AnniversaryIcon = styled(Heart)`
    color: white;
    height: 24px;
    width: 24px;
    padding: 16px;
    border-radius: 50%;
    margin-right: 32px;
    background: ${theme.colors.accent2};
`
const SpecialIcon = styled(CalendarStar)`
    color: white;
    height: 24px;
    width: 24px;
    padding: 16px;
    border-radius: 50%;
    margin-right: 32px;
    background: ${theme.colors.accent1};
`
const TextWrapper = styled.div`
    
`
const EventCard = styled(Link)`
    text-decoration: none;
`


const EventItem = (props) => {
    
    function GetCategory(props) {
        if (props.category === "Birthday") {
            return <BirthdayIcon />
        } else if (props.category === "Anniversary") {
            return <AnniversaryIcon />
        } else {
            return <SpecialIcon />
        }
    }


    return (
        <EventCard to={`/event/${props.id}`} name={props.name} >
            <EventItemWrapper key={props.id}>
                <GetCategory category={props.category}/>
                <TextWrapper>
                    <StyledH5>{props.date}</StyledH5>
                    <H4>{props.name}</H4>
                </TextWrapper>
                {/* <Link to>Test</Link> */}
            </EventItemWrapper>
        </EventCard>
    )
}

export default EventItem;