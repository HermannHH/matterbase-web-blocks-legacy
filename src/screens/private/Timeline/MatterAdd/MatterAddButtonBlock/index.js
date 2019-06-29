import React from 'react';
import { Button } from 'react-bootstrap';


function MatterAddButtonBlock({
  showMatterModal,
  setShowMatterModal
}) {
  return (
    <div className="d-flex justify-content-end">
      <Button variant="primary" onClick={() => setShowMatterModal(!showMatterModal)}>Add Matter</Button>
    </div>
  )
}

export default MatterAddButtonBlock;
