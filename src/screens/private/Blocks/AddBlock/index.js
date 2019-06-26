import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { faTasks, faStickyNote } from '@fortawesome/free-solid-svg-icons';




import {
  // selectors as buyerAgentSelectors,
  actions as matterActions,
} from 'ducks/matter';

import Option from './Option';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;



function AddBlock() {
  
  const matterEntityContent= useSelector(state => state.matter.entity.content);

  const dispatch = useDispatch();


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
              handleClick={() => dispatch(matterActions.createBlock({ matterToken: matterEntityContent.token, scopeType: "tasks" }))}
              heading="Task List"
              description="An easy and convenient way to manage tasks"
              icon={faTasks}
            />
            <Option
              handleClick={() => dispatch(matterActions.createBlock({ matterToken: matterEntityContent.token, scopeType: "sticky_notes" }))}
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
