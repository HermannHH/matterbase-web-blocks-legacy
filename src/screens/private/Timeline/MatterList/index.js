import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withApollo } from 'react-apollo';


import { dataReduce, removeFromKeyedArray, removeFromIndexedObject } from 'utils/dataStructures';

import { LIST_MATTERS } from './queries';
import { DESTROY_MATTER } from './mutations';
import ListItem from './ListItem';


function MatterList({ client }) {
  const [keyedArray, setKeyedArray] = useState([]);
  const [indexedObject, setIndexedObject] = useState({});

  const { data, error, loading } = useQuery(LIST_MATTERS);
  useEffect(() => {
    if (!loading  && !error) {
      const reducedData = dataReduce(data.matters, 'token');
      setKeyedArray(reducedData.keyedArray);
      setIndexedObject(reducedData.indexedObject);
    } else {
      setKeyedArray([]);
      setIndexedObject({});
    }
  }, [loading]);

  async function destroyItem({ token }) {
    const { data } = await client.mutate({
      variables: { token },
      mutation: DESTROY_MATTER
    });
    console.log('data', data)
    setKeyedArray(removeFromKeyedArray(keyedArray, data.matterDelete.matter.token));
    setIndexedObject(removeFromIndexedObject(indexedObject, data.matterDelete.matter.token));
  };

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

export default withApollo(MatterList);
