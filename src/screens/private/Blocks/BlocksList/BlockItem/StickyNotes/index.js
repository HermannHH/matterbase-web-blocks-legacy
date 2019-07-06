import React, { useState, useEffect, Fragment } from 'react';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

import { createStickyNote, destroyStickyNote, updateStickyNote } from 'api/matters/blocks/stickyNotes';

import StickyNoteAdd from './StickyNoteAdd';
import StickyNoteItem from './StickyNoteItem';
import Loading from 'components/Loading';

function StickyNotes({ blockToken, data, matterToken }) {

  const [loading, setLoading] = useState(true);
  const [stickyNotesKeyedArray, setStickyNotesKeyedArray] = useState([]);
  const [stickyNotesIndexedObject, setStickyNotesIndexedObject] = useState({});
  useEffect(() => {
    const reducedData = dataReduce(data, 'token');
    setStickyNotesIndexedObject(reducedData.indexedObject);
    setStickyNotesKeyedArray(reducedData.keyedArray);
    setLoading(false)
  }, []);
  // console.log('StickyNotes data', token, stickyNotesKeyedArray, stickyNotesIndexedObject);

  async function createItem({ matterToken, blockToken, body }) {
    const data = await createStickyNote({ matterToken, blockToken, body });
    console.log('data', data)
    await setStickyNotesIndexedObject(writeToIndexedObject(stickyNotesIndexedObject, data.token, data));
    await setStickyNotesKeyedArray(appendToKeyedArray(stickyNotesKeyedArray, data.token));
  };

  async function updateItem({ matterToken, blockToken, token, body }) {
    const data = await updateStickyNote({ matterToken, blockToken, token, body });
    console.log('data', data)    
    await setStickyNotesIndexedObject(writeToIndexedObject(stickyNotesIndexedObject, data.token, data));
  };

  async function destroyItem({ matterToken, blockToken, token }) {
    const data = await destroyStickyNote({ matterToken, blockToken, token });
    await setStickyNotesKeyedArray(removeFromKeyedArray(stickyNotesKeyedArray, data.token));
    await setStickyNotesIndexedObject(removeFromIndexedObject(stickyNotesIndexedObject, data.token, data));
  };

  let stickyNotesContent;
  if (stickyNotesKeyedArray.length) {
    stickyNotesContent = stickyNotesKeyedArray.map( token => <StickyNoteItem key={token} token={token} matterToken={matterToken} blockToken={blockToken} data={stickyNotesIndexedObject[token]} destroyItem={destroyItem} updateItem={updateItem}/>)
  }


  return (
    <div className="sticky-notes">
      {loading ?
        <Loading />
      :
      <Fragment>
        {stickyNotesContent}
        <StickyNoteAdd createItem={createItem} blockToken={blockToken} matterToken={matterToken}/>
      </Fragment>
      }
    </div>
  )
};

export default StickyNotes;
