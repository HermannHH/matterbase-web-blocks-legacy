import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withApollo } from 'react-apollo';

import { dataReduce, removeFromKeyedArray, removeFromIndexedObject } from 'utils/dataStructures';

import { LIST_MATTERS } from './queries';
import { DESTROY_MATTER } from './mutations';

const MatterList = React.createContext();

function MatterListProvider({ children, client }) {

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

  return (
    <MatterList.Provider
      value={{
        data: {
          keyedArray,
          indexedObject,
          error,
          loading
        },
        actions: {
          destroyItem
        }
      }}
    >
      {children}
    </MatterList.Provider>
  );
};

const ConnectedMatterListProvider = withApollo(MatterListProvider)


export default function matterListContextProvider(WrappedComponent) {
  function MatterListContextProvider(props) {
    return (
      
    <ConnectedMatterListProvider>
      <MatterList.Consumer>
        {context => (
          <WrappedComponent {...props} {...context} />
        )}
        </MatterList.Consumer>
    </ConnectedMatterListProvider>
    );
  }
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  MatterListContextProvider.displayName = `matterListContextProvider(${wrappedComponentName})`;
  return MatterListContextProvider;
};
