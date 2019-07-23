import React from 'react';
import { Button } from 'react-bootstrap';


function MatterAddButtonBlock({
  showMatterModal,
  setShowMatterModal
}) {
  return (
      <Button variant="success" onClick={() => setShowMatterModal(!showMatterModal)}>Add Matter</Button>
  )
}

export default MatterAddButtonBlock;
