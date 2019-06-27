import React from 'react';
import { useSelector } from 'react-redux';

import Tasks from './Tasks';
import StickyNotes from './StickyNotes';

export default function BlockList() {

  const matterEntityFetchEntityCompleted = useSelector(state => state.matter.entity.fetchEntityCompleted);
  const matterEntityContent= useSelector(state => state.matter.entity.content);
  const matterEntityBlocksKeyedArray = useSelector(state => state.matter.entity.blocksKeyedArray);
  const matterEntityBlocksIndexedObject = useSelector(state => state.matter.entity.blocksIndexedObject);



  let content = <h1>No results</h1>;
  if (matterEntityFetchEntityCompleted && matterEntityContent.blocksCount > 0) {
    content = matterEntityBlocksKeyedArray.map( item => {
      const block = matterEntityBlocksIndexedObject[item];
      switch (block.general.scopeType) {
        case 'tasks':
          return <Tasks key={item} token={item} contentKeyedArray={block.contentKeyedArray} contentIndexedObject={block.contentIndexedObject}/>;
    
        case 'sticky_notes':
          return <StickyNotes key={item} token={item}/>;
    
        default:
          break;
      }
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
