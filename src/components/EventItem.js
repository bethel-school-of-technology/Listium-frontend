import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { H4, H5 } from './Fonts';
import {BirthdayCake} from '@styled-icons/fa-solid/BirthdayCake';

const EventItemWrapper = styled.div`
    border: 1px solid lightgrey;
    padding: 32px;
    min-width: 320px;
    margin-bottom: 24px;
    background: white;
    border-radius: 32px;
    display: flex;
`
const CategoryPill = styled.div`

    padding: 4px 16px;
    border-radius: 100px;
    background: lightgrey;
    width: auto;
`
const StyledH5 = styled(H5)`
    color: ${theme.neutrals.dark};
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
const TextWrapper = styled.div`
    
`


const EventItem = (props) => {
    return (
        <EventItemWrapper>
            <BirthdayIcon />
            <TextWrapper>
                <StyledH5>{props.date}</StyledH5>
                <H4>{props.name}</H4>
            </TextWrapper>
        </EventItemWrapper>
    )
}

export default EventItem;