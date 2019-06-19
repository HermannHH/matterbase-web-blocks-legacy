import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import NoResults from 'screens/private/components/NoResults';

import Item from 'screens/private/Timeline/MatterList/Item';
import MatterModal from 'screens/private/Timeline/MatterModal';

function MatterList( {
  data: { matters, mattersIndex, showMatterModal, editToken },
  actions: { addMatter, removeMatter, updateMatter, setShowMatterModal, setEditToken } 
}) {

  let content = <NoResults />;
  if (mattersIndex.length) {
    content = mattersIndex.map( matter => <Item key={matter} token={matter} title={matters[matter].title} removeMatter={removeMatter} setEditToken={setEditToken}/>)
  }

  return (
    <div className="container">
      <div className="my-5">
        <Button variant="primary" onClick={() => setShowMatterModal(!showMatterModal)}>Add Matter</Button>
        <MatterModal matter={matters[editToken] || {}} addMatter={addMatter} updateMatter={updateMatter} setShowMatterModal={setShowMatterModal} showMatterModal={showMatterModal}/>
        {content}
      </div>
    </div>
  );
}

MatterList.propTypes = {};

export default MatterList;
