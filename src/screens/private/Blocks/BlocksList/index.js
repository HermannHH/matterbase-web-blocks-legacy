import React from 'react';

import Loading from 'components/Loading';
import NoResults from 'components/NoResults';

import BlockItem from './BlockItem';

export default function BlocksList({
  loading,
  blocksKeyedArray,
  blocksIndexedObject,
  destroyItem,
  blocksDataInitialised,
  matterToken,
  embedded
}) {
  // console.log('loading && !error', loading, error);
  let content = <Loading />;
  if (!loading && blocksDataInitialised && blocksKeyedArray.length) {
    content = blocksKeyedArray.map(token => <BlockItem key={token} token={token} matterToken={matterToken} destroyItem={destroyItem} data={blocksIndexedObject[token]} embedded={embedded}/>)
  } else if (!loading && blocksDataInitialised) {
    content = <NoResults text="You have not added any blocks to this Matter yet"/>
  }
  return (
    <div>
      {content}
    </div>
  )
}
