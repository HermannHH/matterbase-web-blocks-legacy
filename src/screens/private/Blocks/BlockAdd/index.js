import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

import { faTasks, faStickyNote } from '@fortawesome/free-solid-svg-icons';


import BlockOption from './BlockOption';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;



function BlockAdd({
  setShowBlockModal,
  showBlockModal,
  matterToken,
  createItem,
  loading,
  error
}) {
  
  // const matterEntityContent= useSelector(state => state.matter.entity.content);

  // const dispatch = useDispatch();


  // const [displayModal, setDisplayModal] = useState(false);

  async function createTaskBlock() {
    await createItem({ matterToken, scopeType: "tasks" });
    setShowBlockModal(false);
  }

  async function createStickyNoteBlock() {
    await createItem({ matterToken, scopeType: "sticky_notes" });
    // await dispatch(matterActions.createBlock({ matterToken: matterEntityContent.token, scopeType: "sticky_notes" }));
    setShowBlockModal(false);
  }

  return (
    <div>
      {!loading && !error &&
      <Wrapper>
        <Button variant="secondary" size="lg" block onClick={() => setShowBlockModal(true)}>
          Add Block
        </Button>
        <Modal show={showBlockModal} onHide={() => setShowBlockModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Blocks</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <BlockOption
                handleClick={() => createTaskBlock()}
                heading="Task List"
                description="An easy and convenient way to manage tasks"
                icon={faTasks}
              />
              <BlockOption
                handleClick={() => createStickyNoteBlock()}
                heading="Sticky Notes"
                description="Scribble down ideas & thoughts"
                icon={faStickyNote}
              />
            </Modal.Body>
          </Modal>
      </Wrapper>
      }
    </div>
  )
}


export default BlockAdd;
