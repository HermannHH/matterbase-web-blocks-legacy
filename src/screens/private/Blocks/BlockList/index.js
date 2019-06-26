import React from 'react';
import { useSelector } from 'react-redux';

export default function BlockList() {

  const matterEntityFetchEntityCompleted = useSelector(state => state.matter.entity.fetchEntityCompleted);
  const matterEntityContent= useSelector(state => state.matter.entity.content);
  // const matterListKeyedArray = useSelector(state => state.matter.list.keyedArray);

  let content = <h1>No results</h1>;
  if (matterEntityFetchEntityCompleted && matterEntityContent.blocksCount > 0) {
    content = <h1>I have blocks</h1>
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
