import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withApollo } from 'react-apollo';


import { dataReduce, removeFromKeyedArray, removeFromIndexedObject } from 'utils/dataStructures';

import { LIST_MATTERS } from './queries';
import { DESTROY_MATTER } from './mutations';
import ListItem from './ListItem';
import matterListContextProvider from './matterListContextProvider';


function MatterList({
  data: {
    keyedArray,
    indexedObject,
    error,
    loading
  },
  actions: {
    destroyItem
  }
}) {

  let content = <h1>Loading...</h1>;
  if (!loading && !error) {
    content = keyedArray.map( token => (
    <ListItem
      key={token}
      token={token}
      data={indexedObject[token]}
      handleDestroyItem={destroyItem}
    />));
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          {content}
        </div>
      </div>
    </div>
  )
};

export default matterListContextProvider(withApollo(MatterList));
