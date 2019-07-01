import React from 'react';

import BlockItem from './BlockItem';

export default function BlocksList({
  loading,
  error,
  blocksKeyedArray,
  blocksIndexedObject,
  destroyItem
}) {
  console.log('loading && !error', loading, error);
  let content = <h1>Loading...</h1>;
  if (!loading && !error && blocksKeyedArray.length) {
    content = blocksKeyedArray.map(token => <BlockItem key={token} token={token} destroyItem={destroyItem} data={blocksIndexedObject[token]}/>)
  } else if (!loading && !error) {
    content = <h1>No Results</h1>
  }
  return (
    <div>
      {content}
    </div>
  )
}
