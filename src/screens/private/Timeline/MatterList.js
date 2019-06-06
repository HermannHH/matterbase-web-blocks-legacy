import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import NoResults from 'screens/private/components/NoResults';

import Item from 'screens/private/Timeline/MatterList/Item';
import MatterModal from 'screens/private/Timeline/MatterModal';

function MatterList({ matters, mattersIndex, removeMatter }) {
  const [showModal, setShowModal] = useState(false);

  
  // const [state, setState] = useState({ matters: {a:{title:"Hello World"}, b:{title:"Hello World"}}, mattersIndex: ["a","b"] });

  let content = <NoResults />;
  if (mattersIndex.length) {
    content = mattersIndex.map( matter => <Item key={matter} token={matter} title={matters[matter].title} removeMatter={removeMatter}/>)
  }

  return (
    <div className="container">
      <div className="my-5">
        <Button variant="primary" onClick={() => setShowModal(!showModal)}>Add Matter</Button>
        <MatterModal show={showModal} handleClose={() => setShowModal(false)}/>
        {content}
      </div>
    </div>
  );
}

MatterList.propTypes = {};

export default MatterList;
