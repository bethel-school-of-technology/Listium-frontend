import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    height: 56px;
    width: auto;
    background: teal;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 100px;

    &:focus {
        outline: none;
      }
`
const NewEventContainer = styled.div`
    padding: 64px;
    border: 1px solid lightslategrey;
    display: flex;
    flex-direction: column;
    height: auto;
    position: fixed;
    left: 64px;
    width: 30%;
    min-width: 320px;
    max-width: 560px;
`
const InputWrapper = styled.input`
    height: 56px;
    width: auto;
    margin-bottom: 16px;
    border-radius: 6px;
    padding-left: 16px;

    &:focus {
        outline: none;
      }
`
const SelectWrapper = styled.select`
      height: 56px;
      width: auto;
      margin-bottom: 16px;
      border-radius: 6px;
      padding-left: 16px;

      &:focus {
        outline: none;
      }
`

const NewEvent = () => {
    return (
        <NewEventContainer>
            <h2>Add an event 🎉</h2>
                <InputWrapper placeholder="Event Name" />
                <SelectWrapper placeholder="Select Category" />
                <SelectWrapper placeholder="Select Date"/>
                <ButtonWrapper>Create New Event</ButtonWrapper>
        </NewEventContainer>
    )
}

export default NewEvent;