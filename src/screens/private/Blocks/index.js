import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withApollo } from 'react-apollo';

import standard from 'screens/private/layouts/standard';

import SubNavbar from "screens/private/components/SubNavbar";

import { SHOW_MATTER } from './queries';
import { CREATE_BLOCK, DESTROY_BLOCK } from './mutations';

import BlockAdd from './BlockAdd';
import BlocksList from './BlocksList';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

function Blocks({ client, matterId }) {

  // const [keyedArray, setKeyedArray] = useState([]);
  const [matter, setMatter] = useState({});

  const [blocksKeyedArray, setBlocksKeyedArray] = useState([]);
  const [blocksIndexedObject, setBlocksIndexedObject] = useState({});

  const { data, error, loading } = useQuery(SHOW_MATTER, {
    variables: { token: matterId },
  });
  useEffect(() => {
    if (!loading  && !error) {
      const { title, token, blocksCount, blockScopeTypes, blocks } = data.matter;
      const reducedData = dataReduce(blocks, 'token');
      setMatter({
        title,
        token,
        blocksCount,
        blockScopeTypes
      });
      setBlocksIndexedObject(reducedData.indexedObject);
      setBlocksKeyedArray(reducedData.keyedArray);
    } else {
      setMatter({});
    }
  }, [loading]);


  const [showBlockModal, setShowBlockModal] = useState(false);



  async function createItem({ matterToken, scopeType }) {
    const { data } = await client.mutate({
      variables: { matterToken, scopeType },
      mutation: CREATE_BLOCK
    });
    await setBlocksIndexedObject(writeToIndexedObject(blocksIndexedObject, data.blockCreate.block.token, data.blockCreate.block));
    await setBlocksKeyedArray(appendToKeyedArray(blocksKeyedArray, data.blockCreate.block.token));
  };

  async function destroyItem({ token }) {
    const { data } = await client.mutate({
      variables: { token },
      mutation: DESTROY_BLOCK
    });
    await setBlocksKeyedArray(removeFromKeyedArray(blocksKeyedArray, data.blockDelete.block.token));
    await setBlocksIndexedObject(removeFromIndexedObject(blocksIndexedObject, data.blockDelete.block.token));

  };

  console.log('checkers', blocksKeyedArray, blocksIndexedObject)

  return (
    <div>
      <div styles={{ zIndex: 9}}>
        <SubNavbar />
      </div>
      <div className="container" style={{paddingTop: "66px", zIndex: 8}}>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10">
            <BlocksList 
              loading={loading}
              error={error}
              blocksKeyedArray={blocksKeyedArray}
              blocksIndexedObject={blocksIndexedObject}
              destroyItem={destroyItem}
            />
            <BlockAdd
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


export default standard(withApollo(Blocks));
