import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

import { faTasks, faStickyNote } from '@fortawesome/free-solid-svg-icons';

import Option from './Option';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;



function AddBlock() {

  const [displayModal, setDisplayModal] = useState(false);

  return (
    <Wrapper>
      <Button variant="secondary" size="lg" block onClick={() => setDisplayModal(true)}>
        Add Block
      </Button>
      <Modal show={displayModal} onHide={() => setDisplayModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Blocks</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Option
              handleClick={() => console.log('tt')}
              heading="Task List"
              description="An easy and convenient way to manage tasks"
              icon={faTasks}
            />
            <Option
              handleClick={() => console.log('tt')}
              heading="Sticky Notes"
              description="An easy and convenient way to manage tasks"
              icon={faStickyNote}
            />
          </Modal.Body>
        </Modal>
    </Wrapper>
  )
}


export default AddBlock;
