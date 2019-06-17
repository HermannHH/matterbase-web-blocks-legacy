import React from 'react';


import styled, { withTheme } from 'styled-components';
import { Dropdown, InputGroup, FormControl } from 'react-bootstrap';


const Wrapper = withTheme(styled.div`
  ${props => `
    display: flex;
    width: 100%;
    flex-direction: column;
  `}
`);


const Tasks = withTheme(styled.div`
  ${props => `
    display: flex;
    width: 100%;
  `}
`);

export default function Tasklist() {
  return (
    <Wrapper>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add a task..."
          aria-label="Add a task..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon2">Hit return to add</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Tasks>
        <div>
          <p>Helooooooo</p>
          <span>Mark as complete</span>
        </div>
      </Tasks>
    </Wrapper>
  )
}
