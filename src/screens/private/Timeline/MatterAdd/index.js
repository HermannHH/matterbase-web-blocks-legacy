import React from 'react';

import MatterAddModal from './MatterAddModal';
import MatterAddButtonBlock from './MatterAddButtonBlock';

function MatterAdd({
  showMatterModal,
  editToken,
  indexedObject,
  setShowMatterModal,
  createItem,
  updateItem
}) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <MatterAddModal
            showMatterModal={showMatterModal}
            editToken={editToken}
            indexedObject={indexedObject}
            setShowMatterModal={setShowMatterModal}
            createItem={createItem}
            updateItem={updateItem}
          />
          <MatterAddButtonBlock
            showMatterModal={showMatterModal}
            setShowMatterModal={setShowMatterModal}
          />
        </div>
      </div>
    </div>
  )
};

export default MatterAdd;
