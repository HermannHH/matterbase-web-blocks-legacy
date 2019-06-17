import React from 'react';

import styled, { withTheme } from 'styled-components';
import { Dropdown, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import Tasklist from './Tasklist';
import StickyNotes from './StickyNotes';

const Wrapper = withTheme(styled.div`
  ${props => `
    display: flex;
    padding: 20px 0;
    flex-direction: column;
  `}
`);


const Card = withTheme(styled.div`
  ${props => `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px; 
  `}
`);

const Header = withTheme(styled.div`
  ${props => `
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 15px;
  `}
`);





export default function Block({
  type
}) {

  let content;
  let heading;
  if(type === "tasks") {
    content = <Tasklist />;
    heading = "Tasklist";
  } else if (type === "sticky_notes") {
    content = <StickyNotes />;
    heading = "Sticky Notes";
  }
  return (
    <Wrapper>
      <Header>
        <h3>{heading}</h3>
        <Dropdown  alignRight >
            <Dropdown.Toggle variant="light">
              <FontAwesomeIcon icon={faUser} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Header>
      <Card className="card">
        {content}
      
      </Card>
    </Wrapper>
  )
}
