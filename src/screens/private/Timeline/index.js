import React from 'react'

import standard from 'screens/private/layouts/standard';

import MatterAdd from './MatterAdd';
import MatterList from './MatterList';

function Timeline() {
  return (
    <div className="container">
      <div className="my-5">
        <MatterAdd />
        <MatterList />
      </div>
    </div>
  )
};

export default standard(Timeline);
