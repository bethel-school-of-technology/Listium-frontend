import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { H3, Body3 } from '../components/Fonts';


const NewEventContainer = styled.div`s
    border: 2px solid white;
    box-shadow: 20px 20px 60px #1a1a32, 
    -20px -20px 60px #302e5a;
    padding: 3vw;
    z-index: 10;
    background: linear-gradient(145deg, #28274b, #21203f);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    height: auto;
    position: fixed;
    left: 10%;
    width: 20%;
    min-width: 380px;
    max-width: 560px;
`
const StyledH3 = styled(H3)`
    color: white;
    margin-bottom: 4px;
`
const StyledBody3 = styled(Body3)`
    color: ${theme.overlays.light._400};
    margin-bottom: 32px;
`
const ButtonWrapper = styled.button`
    height: 56px;
    width: auto;
    background: ${theme.colors.primary};
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 100px;
    border: none;
    margin-top: 24px;
    transition: all 300ms ease;

    &:hover {
        transform: scale(1.03);
    }
    &:focus {
        outline: none;
      }
`
const Label = styled.label`
      color: white;
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 8px;
`
const InputWrapper = styled.input`
    height: 56px;
    width: auto;
    margin-bottom: 24px;
    border-radius: 6px;
    padding-left: 16px;
    background: ${theme.neutrals.extraDark};
    border: 1px solid ${theme.overlays.light._300};
    font-size: 16px;
    color: white;
    transition: all .5s;

    ::placeholder {
        color: ${theme.overlays.light._400};
        opacity: 1
    };

    &:hover {
        border: 1px solid ${theme.overlays.light._400};
        background: ${theme.overlays.light._100};
    }
    &:focus {
        outline: none;
        border: 1px solid white;
      }
`
const SelectWrapper = styled.select`
      height: 56px;
      width: auto;
      margin-bottom: 24px;
      border-radius: 6px;
      padding-left: 16px;
      background: none;
      border: 1px solid ${theme.overlays.light._300};

      &:hover {
        border: 1px solid ${theme.overlays.light._400};
        background: ${theme.overlays.light._100};
    };

      &:focus {
        outline: none;
      };
`
const SelectOption = styled.option`
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
`

const NewEvent = () => {
    return (
        <NewEventContainer>
            <StyledH3>Add an event 🎉</StyledH3>
            <StyledBody3>What's a special date you want to remember?</StyledBody3>
            <Label for="name">What's the event?</Label>
            <InputWrapper type="text" id="name" placeholder="try your mom's bday..." />
            <Label for="date">On what day?</Label>
            <SelectWrapper id="date" placeholder="Select Date"/>
            <Label for="category">Select a category</Label>
            <SelectWrapper id="category" placeholder="Select Category" >
                <SelectOption value="Select a category" disabled="disabled" selected="selected"></SelectOption>
                <SelectOption value="Birthday"></SelectOption>
                <SelectOption value="Anniversary"></SelectOption>
                <SelectOption value="Special Day"></SelectOption>
            </SelectWrapper>
            <ButtonWrapper>Create New Event</ButtonWrapper>
        </NewEventContainer>
    )
}

export default NewEvent;