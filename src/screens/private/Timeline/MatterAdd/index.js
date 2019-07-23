import React from 'react';

import MatterAddModal from './MatterAddModal';
import MatterAddButtonBlock from './MatterAddButtonBlock';

function MatterAdd({
  showMatterModal,
  editToken,
  indexedObject,
  setShowMatterModal,
  createItem,
  updateItem,
  data
}) {
  return (
    <div>
          <MatterAddModal
            showMatterModal={showMatterModal}
            editToken={editToken}
            indexedObject={indexedObject}
            setShowMatterModal={setShowMatterModal}
            createItem={createItem}
            updateItem={updateItem}
            timezone={data.user && data.user.profile && data.user.profile.timezone}
          />
          <MatterAddButtonBlock
            showMatterModal={showMatterModal}
            setShowMatterModal={setShowMatterModal}
          />
    </div>
  )
};

export default MatterAdd;
