import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


import NoResults from 'screens/private/components/NoResults';

import Item from 'screens/private/Timeline/MatterList/Item';
import MatterModal from 'screens/private/Timeline/MatterModal';

function MatterList() {


  const [showMatterModal, setShowMatterModal] = useState(false);
  const [editToken, setEditToken] = useState('');
  useEffect(() => {
    if (editToken) {
      setShowMatterModal(true);
    } else {
      setShowMatterModal(false);
    }
  }, [editToken]);
  useEffect(() => {
    if (!showMatterModal) {
      setEditToken('');
    }
  }, [showMatterModal]);


  const matterListFetchListCompleted = useSelector(state => state.matter.list.fetchListCompleted);
  const matterListIndexedObject = useSelector(state => state.matter.list.indexedObject);
  const matterListKeyedArray = useSelector(state => state.matter.list.keyedArray);

  let content = <NoResults />;
  if (matterListKeyedArray.length) {
    content = matterListKeyedArray.map( matter => <Item key={matter} token={matter} title={matterListIndexedObject[matter].title} setEditToken={setEditToken}/>)
  }

  return (
    <div className="container">
      {matterListFetchListCompleted ?
        <div className="my-5">
          <div className="row">
            <div className="col-12">
              <Button variant="primary" onClick={() => setShowMatterModal(!showMatterModal)}>Add Matter</Button>
              <MatterModal matter={matterListIndexedObject[editToken] || {}} setShowMatterModal={setShowMatterModal} showMatterModal={showMatterModal} />
            </div>
          </div>
          {content}
        </div>
        :
        <div>
          <h1>Loading...</h1>
        </div>
      }
    </div>
  );
}

MatterList.propTypes = {};

export default MatterList;
