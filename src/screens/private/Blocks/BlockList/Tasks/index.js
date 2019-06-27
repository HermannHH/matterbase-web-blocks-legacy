import React from 'react'
import { useDispatch } from 'react-redux';


import {
  // selectors as buyerAgentSelectors,
  actions as matterActions,
} from 'ducks/matter';

import AddTask from './AddTask';

export default function Tasks({ token }) {

  const dispatch = useDispatch();

  return (
    <div>
      <AddTask blockToken={token}/>
      {token}
      <a onClick={() => dispatch(matterActions.destroyBlock({ token }))}>Delete</a>
    </div>
  )
}
