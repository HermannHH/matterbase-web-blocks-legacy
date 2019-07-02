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
    await setStickyNotesIndexedObject(writeToIndexedObject(stickyNotesIndexedObject, data.stickyNoteCreate.stickyNote.token, data.stickyNoteCreate.stickyNote));
    await setStickyNotesKeyedArray(appendToKeyedArray(stickyNotesKeyedArray, data.stickyNoteCreate.stickyNote.token));
  };

  async function updateItem({ token, body, isCompleted }) {
    console.log('data', token, body)
    const { data } = await client.mutate({
      variables: { token, body, isCompleted },
      mutation: UPDATE_STICKY_NOTE
    });
    console.log('data', data)    
    await setStickyNotesIndexedObject(writeToIndexedObject(stickyNotesIndexedObject, data.stickyNoteUpdate.stickyNote.token, data.stickyNoteUpdate.stickyNote));
  };

  async function destroyItem({ token }) {
    const { data } = await client.mutate({
      variables: { token },
      mutation: DESTROY_STICKY_NOTE
    });
    await setStickyNotesKeyedArray(removeFromKeyedArray(stickyNotesKeyedArray, data.stickyNoteDelete.stickyNote.token));
    await setStickyNotesIndexedObject(removeFromIndexedObject(stickyNotesIndexedObject, data.stickyNoteDelete.stickyNote.token, data.stickyNoteDelete.stickyNote));
  };

  let stickyNotesContent;
  if (stickyNotesKeyedArray.length) {
    stickyNotesContent = stickyNotesKeyedArray.map( token => <StickyNoteItem key={token} token={token} data={stickyNotesIndexedObject[token]} destroyItem={destroyItem} updateItem={updateItem}/>)
  } else {
    stickyNotesContent = <h3>No stickyNotes</h3>;
  }


  return (
    <div>
      <StickyNoteAdd createItem={createItem} blockToken={blockToken}/>
      {stickyNotesContent}
    </div>
  )
};

export default withApollo(StickyNotes);
