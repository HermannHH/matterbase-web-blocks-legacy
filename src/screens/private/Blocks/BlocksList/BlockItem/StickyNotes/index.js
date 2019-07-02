import React, { useState, useEffect } from 'react';
import { withApollo } from 'react-apollo';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

import { CREATE_STICKY_NOTE, DESTROY_STICKY_NOTE, UPDATE_STICKY_NOTE } from './mutations';

import StickyNoteAdd from './StickyNoteAdd';
import StickyNoteItem from './StickyNoteItem';

function StickyNotes({ client, blockToken, data }) {

  const [stickyNotesKeyedArray, setStickyNotesKeyedArray] = useState([]);
  const [stickyNotesIndexedObject, setStickyNotesIndexedObject] = useState({});
  useEffect(() => {
    const reducedData = dataReduce(data, 'token');
    setStickyNotesIndexedObject(reducedData.indexedObject);
    setStickyNotesKeyedArray(reducedData.keyedArray);
  }, []);
  // console.log('StickyNotes data', token, stickyNotesKeyedArray, stickyNotesIndexedObject);

  async function createItem({ blockToken, body }) {
    const { data } = await client.mutate({
      variables: { blockToken, body },
      mutation: CREATE_STICKY_NOTE
    });
    console.log('data', data)
    await setStickyNotesIndexedObject(writeToIndexedObject(stickyNotesIndexedObject, data.taskCreate.task.token, data.taskCreate.task));
    await setStickyNotesKeyedArray(appendToKeyedArray(stickyNotesKeyedArray, data.taskCreate.task.token));
  };

  async function updateItem({ token, body, isCompleted }) {
    console.log('data', token, body)
    const { data } = await client.mutate({
      variables: { token, body, isCompleted },
      mutation: UPDATE_STICKY_NOTE
    });
    console.log('data', data)    
    await setStickyNotesIndexedObject(writeToIndexedObject(stickyNotesIndexedObject, data.taskUpdate.task.token, data.taskUpdate.task));
  };

  async function destroyItem({ token }) {
    const { data } = await client.mutate({
      variables: { token },
      mutation: DESTROY_STICKY_NOTE
    });
    await setStickyNotesKeyedArray(removeFromKeyedArray(stickyNotesKeyedArray, data.taskDelete.task.token));
    await setStickyNotesIndexedObject(removeFromIndexedObject(stickyNotesIndexedObject, data.taskDelete.task.token, data.taskDelete.task));
  };

  let tasksContent;
  if (stickyNotesKeyedArray.length) {
    tasksContent = stickyNotesKeyedArray.map( token => <StickyNoteItem key={token} token={token} data={stickyNotesIndexedObject[token]} destroyItem={destroyItem} updateItem={updateItem}/>)
  } else {
    tasksContent = <h3>No tasks</h3>;
  }


  return (
    <div>
      <StickyNoteAdd createItem={createItem} blockToken={blockToken}/>
      {tasksContent}
    </div>
  )
};

export default withApollo(StickyNotes);
