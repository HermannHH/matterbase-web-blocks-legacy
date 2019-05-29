import React, { useState } from 'react';
import PropTypes from 'prop-types';


import NoResults from 'screens/private/components/NoResults'

import Item from 'screens/private/Timeline/MatterList/Item';

function MatterList(props) {
  // const [state, setState] = useState({ matters: {}, mattersIndex: [] });
  const [state, setState] = useState({ matters: {a:{title:"Hello World"}, b:{title:"Hello World"}}, mattersIndex: ["a","b"] });

  let content = <NoResults />;

  if (state.mattersIndex.length) {
    content = state.mattersIndex.map( matter => <Item token={matter} title={state.matters[matter].title} />)
  }

  return (
    <div className="container">
      <div className="my-5">
        {content}
      </div>
    </div>
  );
}

MatterList.propTypes = {};

export default MatterList;
