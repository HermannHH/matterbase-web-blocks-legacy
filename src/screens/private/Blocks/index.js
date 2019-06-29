import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { withApollo } from 'react-apollo';

import standard from 'screens/private/layouts/standard';

import SubNavbar from "screens/private/components/SubNavbar";

import { SHOW_MATTER } from './queries';

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
  console.log('sass', matterId, data, error, loading)
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

  return (
    <div>
      <SubNavbar />
      Hello
    </div>
  )
};


export default standard(withApollo(Blocks));
