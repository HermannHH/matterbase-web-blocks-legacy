import React from 'react'
import { useDispatch } from 'react-redux';


import {
  // selectors as buyerAgentSelectors,
  actions as matterActions,
} from 'ducks/matter';

import AddTask from './AddTask';

export default function Tasks({ token, contentKeyedArray, contentIndexedObject }) {

  const dispatch = useDispatch();

  return (
    <div>
      <AddTask blockToken={token}/>
      {contentKeyedArray.map((item) => (
        <h1 key={item}>{contentIndexedObject[item].body}</h1>
      ))}
      {token}
      <a onClick={() => dispatch(matterActions.destroyBlock({ token }))}>Delete</a>
    </div>
  )
}
