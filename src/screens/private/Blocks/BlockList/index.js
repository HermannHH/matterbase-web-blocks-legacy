import React from 'react';
import { useSelector } from 'react-redux';

import Tasks from './Tasks';

export default function BlockList() {

  const matterEntityFetchEntityCompleted = useSelector(state => state.matter.entity.fetchEntityCompleted);
  const matterEntityContent= useSelector(state => state.matter.entity.content);
  const matterEntityBlocksKeyedArray = useSelector(state => state.matter.entity.blocksKeyedArray);
  const matterEntityBlocksIndexedObject = useSelector(state => state.matter.entity.blocksIndexedObject);



  let content = <h1>No results</h1>;
  if (matterEntityFetchEntityCompleted && matterEntityContent.blocksCount > 0) {
    content = matterEntityBlocksKeyedArray.map( item => {
      return <Tasks key={matterEntityBlocksIndexedObject[item].token} token={matterEntityBlocksIndexedObject[item].token}/>
    })
  }


  return (
    <div>
      {matterEntityFetchEntityCompleted ?
        content
        :
        <h1>Loading...</h1>
      }
    </div>
  )
}
