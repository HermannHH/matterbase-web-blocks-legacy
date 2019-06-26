import React from 'react';
import { useSelector } from 'react-redux';

export default function BlockList() {

  const matterEntityFetchEntityCompleted = useSelector(state => state.matter.entity.fetchEntityCompleted);
  const matterEntityContent= useSelector(state => state.matter.entity.content);
  const matterEntityBlocksKeyedArray = useSelector(state => state.matter.entity.blocksKeyedArray);
  const matterEntityBlocksIndexedObject = useSelector(state => state.matter.entity.blocksIndexedObject);



  let content = <h1>No results</h1>;
  if (matterEntityFetchEntityCompleted && matterEntityContent.blocksCount > 0) {
    content = matterEntityBlocksKeyedArray.map( item => {
      return <h1 key={matterEntityBlocksIndexedObject[item].token}>{matterEntityBlocksIndexedObject[item].token}</h1>
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
