import React, { useEffect, useState } from 'react';
import {Helmet} from "react-helmet";

import { mattersList, createMatter, updateMatter, destroyMatter } from 'api/matters';

import standard from 'screens/private/layouts/standard';
import SubNavBar from 'screens/private/components/SubNavbar';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';


import MatterAdd from './MatterAdd';
import MatterList from './MatterList';

function Timeline({
  appContext: { actions }
}) {

  const [loading, setLoading] = useState(true);
  const [keyedArray, setKeyedArray] = useState([]);
  const [indexedObject, setIndexedObject] = useState({});
  const [matterDataInitialised, setMatterDataInitialised] = useState(false);

  async function fetchMattersList() {
      const data = await mattersList();
      const reducedData = await dataReduce(data, 'token');
      setKeyedArray(reducedData.keyedArray);
      setIndexedObject(reducedData.indexedObject);
      setMatterDataInitialised(true);
      setLoading(false);
  };

  useEffect(() => {
    fetchMattersList();
  }, []);


  async function createItem({ title }) {
    const data = await createMatter({ title });
    await setIndexedObject(writeToIndexedObject(indexedObject, data.token, data));
    await setKeyedArray(appendToKeyedArray(keyedArray, data.token));
  };

  async function updateItem({ token, title }) {
    const data = await updateMatter({ token, title });
    await setIndexedObject(writeToIndexedObject(indexedObject, data.token, data));
  };

  async function destroyItem({ token }) {
    const data = await destroyMatter({ token });
    await setKeyedArray(removeFromKeyedArray(keyedArray, data.token));
    await setIndexedObject(removeFromIndexedObject(indexedObject, data.token));

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
      <Helmet>
          <title>Matterbase | Timeline</title>
      </Helmet>
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
            // error={error}
            loading={loading}
            destroyItem={destroyItem}
            setEditToken={setEditToken}
            matterDataInitialised={matterDataInitialised}
          />
      </div>
    </div>
  )
};

export default standard(Timeline);
