import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { navigate } from '@reach/router';
import {Helmet} from "react-helmet";

import routes from 'routes';

import { blocksList, createBlock, destroyBlock } from 'api/matters/blocks';

import standard from 'screens/private/layouts/standard';

import SubNavbar from "screens/private/components/SubNavbar";


import BlockAdd from './BlockAdd';
import BlocksList from './BlocksList';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

function Blocks({ matterId }) {

  const [loading, setLoading] = useState(true);
  const [blocksKeyedArray, setBlocksKeyedArray] = useState([]);
  const [blocksIndexedObject, setBlocksIndexedObject] = useState({});
  const [blocksDataInitialised, setBlocksDataInitialised] = useState(false);

  async function fetchBlocksList() {
    const data = await blocksList({ matterToken: matterId });
    // console.log('Blocks list data', data)
    const reducedData = dataReduce(data, 'token');
    // console.log('reduced', reducedData)
    setBlocksIndexedObject(reducedData.indexedObject);
    setBlocksKeyedArray(reducedData.keyedArray);
    setBlocksDataInitialised(true);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlocksList();
  }, []);

  const [showBlockModal, setShowBlockModal] = useState(false);

  async function createItem({ matterToken, scopeType }) {
    const data = await createBlock({ matterToken, scopeType });
    await setBlocksIndexedObject(writeToIndexedObject(blocksIndexedObject, data.token, data));
    await setBlocksKeyedArray(appendToKeyedArray(blocksKeyedArray, data.token));
  };

  async function destroyItem({ matterToken, token }) {
    const data = await destroyBlock({ matterToken, token });
    await setBlocksKeyedArray(removeFromKeyedArray(blocksKeyedArray, data.token));
    await setBlocksIndexedObject(removeFromIndexedObject(blocksIndexedObject, data.token));
  };

  // console.log('checkers', blocksKeyedArray, blocksIndexedObject)

  return (
    <div>
      <Helmet>
          <title>Matterbase | Blocks</title>
      </Helmet>
      <div styles={{ zIndex: 9}}>
        <SubNavbar 
          actionsLeft={
            <div>
              <a id="sub-navbar--title" style={{ cursor: "pointer"}} onClick={() => navigate(routes.private.home.path)}><FontAwesomeIcon icon={faArrowLeft} /> Back</a>
            </div>
          }
        />
      </div>
      <div className="container" style={{paddingTop: "66px", zIndex: 8, paddingBottom: "150px"}}>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10">
            <BlocksList 
              loading={loading}
              blocksKeyedArray={blocksKeyedArray}
              blocksIndexedObject={blocksIndexedObject}
              destroyItem={destroyItem}
              blocksDataInitialised={blocksDataInitialised}
              matterToken={matterId}
            />
            <BlockAdd
              loading={loading}
              showBlockModal={showBlockModal}
              setShowBlockModal={setShowBlockModal}
              createItem={createItem}
              matterToken={matterId}
            />
          </div>
        </div>
      </div>
    </div>
  )
};


export default standard(Blocks);
