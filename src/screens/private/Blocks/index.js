import React, { useState, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { navigate } from '@reach/router';
import {Helmet} from "react-helmet";

import routes from 'routes';

import { matterShow } from 'api/matters';
import { blocksList, createBlock, destroyBlock } from 'api/matters/blocks';

import PoweredByMatterbase from 'components/PoweredByMatterbase';

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


const params = (new URL(document.location)).searchParams;
const embedded = params.get("embedded");

function Blocks({ matterId }) {

  const [loading, setLoading] = useState(true);
  const [matter, setMatter] = useState({});
  const [blocksKeyedArray, setBlocksKeyedArray] = useState([]);
  const [blocksIndexedObject, setBlocksIndexedObject] = useState({});
  const [blocksDataInitialised, setBlocksDataInitialised] = useState(false);

  async function fetchBlocksList() {
    const matterData = await matterShow({ token: matterId });
    const data = await blocksList({ matterToken: matterId });
    setMatter({...matterData});
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
      {!embedded &&
      <Fragment>
        <Helmet>
            <title>Matterbase | Blocks</title>
        </Helmet>
        <div styles={{ zIndex: 9}}>
          <SubNavbar 
            actionsLeft={
              <div>
                <a id="sub-navbar--title" style={{ cursor: "pointer"}} onClick={() => navigate(routes.private.home.path)}><FontAwesomeIcon icon={faArrowLeft} />
                  {matter.title}
                </a>
              </div>
            }
          />
        </div>
      </Fragment>
      }
      <div className="container" style={{paddingTop: "66px", zIndex: 8, paddingBottom: "150px"}}>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-10">
            <BlocksList 
              loading={loading}
              blocksKeyedArray={blocksKeyedArray}
              blocksIndexedObject={blocksIndexedObject}
              destroyItem={destroyItem}
              blocksDataInitialised={blocksDataInitialised}
              matterToken={matterId}
              embedded={embedded}
            />
            {!embedded &&
              <BlockAdd
                loading={loading}
                showBlockModal={showBlockModal}
                setShowBlockModal={setShowBlockModal}
                createItem={createItem}
                matterToken={matterId}
              />
            }
          </div>
        </div>
        {embedded &&
          <PoweredByMatterbase />
        
        }
      </div>
    </div>
  )
};


export default standard(Blocks, embedded);
