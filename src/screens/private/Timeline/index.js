import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withApollo } from 'react-apollo';

import standard from 'screens/private/layouts/standard';

import SubNavBar from 'screens/private/components/SubNavbar';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

import { LIST_MATTERS } from './queries';
import { CREATE_MATTER, UPDATE_MATTER,DESTROY_MATTER } from './mutations';


import MatterAdd from './MatterAdd';
import MatterList from './MatterList';

function Timeline({
  client
}) {

  const [keyedArray, setKeyedArray] = useState([]);
  const [indexedObject, setIndexedObject] = useState({});
  const [matterDataInitialised, setMatterDataInitialised] = useState(false);

  const { data, error, loading } = useQuery(LIST_MATTERS);
  useEffect(() => {
    if (!loading  && !error) {
      const reducedData = dataReduce(data.matters, 'token');
      setKeyedArray(reducedData.keyedArray);
      setIndexedObject(reducedData.indexedObject);
    } else {
      setKeyedArray([]);
      setIndexedObject({});
      setMatterDataInitialised(true);
    }
  }, [loading]);

  async function createItem({ title }) {
    const { data } = await client.mutate({
      variables: { title },
      mutation: CREATE_MATTER
    });
    await setIndexedObject(writeToIndexedObject(indexedObject, data.matterCreate.matter.token, data.matterCreate.matter));
    await setKeyedArray(appendToKeyedArray(keyedArray, data.matterCreate.matter.token));
  };

  async function updateItem({ token, title }) {
    const { data } = await client.mutate({
      variables: { token, title },
      mutation: UPDATE_MATTER
    });
    await setIndexedObject(writeToIndexedObject(indexedObject, data.matterUpdate.matter.token, data.matterUpdate.matter));
  };

  async function destroyItem({ token }) {
    const { data } = await client.mutate({
      variables: { token },
      mutation: DESTROY_MATTER
    });
    await setKeyedArray(removeFromKeyedArray(keyedArray, data.matterDelete.matter.token));
    await setIndexedObject(removeFromIndexedObject(indexedObject, data.matterDelete.matter.token));

  };

  const [showMatterModal, setShowMatterModal] = useState(false);
  const [editToken, setEditToken] = useState('');
  useEffect(() => {
    if (editToken) {
      setShowMatterModal(true);
    } else {
      setShowMatterModal(false);
    }
  }, [editToken]);
  useEffect(() => {
    if (!showMatterModal) {
      setEditToken('');
    }
  }, [showMatterModal]);

  return (
    <div>
      <div style={{ zIndex: 9}}>
        <SubNavBar actionsRight={
          <MatterAdd
          showMatterModal={showMatterModal}
          editToken={editToken}
          setEditToken={setEditToken}
          indexedObject={indexedObject}
          setShowMatterModal={setShowMatterModal}
          createItem={createItem}
          updateItem={updateItem}
        />
        }/>
      </div>
      
      <div  style={{paddingTop: "80px", zIndex: 8, paddingBottom: "150px"}}>
          <MatterList
            keyedArray={keyedArray}
            indexedObject={indexedObject}
            error={error}
            loading={loading}
            destroyItem={destroyItem}
            setEditToken={setEditToken}
            matterDataInitialised={matterDataInitialised}
          />
      </div>
    </div>
  )
};

export default standard(withApollo(Timeline));
