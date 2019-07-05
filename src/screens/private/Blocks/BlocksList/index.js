import React from 'react';

import Loading from 'components/Loading';
import NoResults from 'components/NoResults';

import BlockItem from './BlockItem';

export default function BlocksList({
  loading,
  error,
  blocksKeyedArray,
  blocksIndexedObject,
  destroyItem,
  blocksDataInitialised
}) {
  // console.log('loading && !error', loading, error);
  let content = <Loading />;
  if (!loading && !error && blocksDataInitialised && blocksKeyedArray.length) {
    content = blocksKeyedArray.map(token => <BlockItem key={token} token={token} destroyItem={destroyItem} data={blocksIndexedObject[token]}/>)
  } else if (!loading && !error && blocksDataInitialised) {
    content = <NoResults text="You have not added any blocks to this Matter yet"/>
  }
  return (
    <div>
      {content}
    </div>
  )
}
