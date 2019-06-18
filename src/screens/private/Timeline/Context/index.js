import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { Query, graphql, compose } from 'react-apollo';
import { useQuery } from "react-apollo-hooks";
import _ from 'lodash';

import { matterCreate, matterDelete } from './mutations';
import { listMatters } from './queries';

import {
  dataReduce,
  appendToData,
  removeFromData
} from 'utils/dataStructures';

const Context = React.createContext();

function BaseProvider({ children, matterCreate, matterDelete }) {
  
  const { data: queryData, loading: queryLoading } = useQuery(listMatters, {
    suspend: false
  });
  const [matterData, setMatterData] = useState({
    matters: {},
    mattersIndex: []
  });
  const [listLoading, setListLoading] = useState(true);
  useEffect(() => {
    const arrayReduced = dataReduce(queryData.matters, 'token');
    setMatterData({
      ...matterData,
      matters: arrayReduced.keyedArray,
      mattersIndex: arrayReduced.indexedObject
    });
    setListLoading(queryLoading);
  }, [queryLoading]);


  const { matters, mattersIndex } = matterData;


  async function addMatter({ title }) {
    try {
      const { data } = await matterCreate({ title });
      const newData = await appendToData({
        keyArray: mattersIndex,
        indexedObject: matters,
        token: data.matterCreate.matter.token,
        data: data.matterCreate.matter
      });
      setMatterData({...matterData, matters: newData.newIndexedObject, mattersIndex: newData.newKeyArray });
    } catch (error) {
      console.log('error', error)
    }
  }
  async function removeMatter({ token }) {
    try {
      const { data } = await matterDelete({ token });
      const newData = await removeFromData({
        keyArray: mattersIndex,
        indexedObject: matters,
        token: token
      });
      setMatterData({...matterData, matters: newData.newIndexedObject, mattersIndex: newData.newKeyArray });
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Context.Provider
      value={{
        data: {
          matters,
          mattersIndex,
          listLoading
        },
        actions: {
          addMatter,
          removeMatter
        }
      }}
    >
      {children}
    </Context.Provider>
  );
};

const Provider = compose(
  graphql(matterCreate, {
    props: ({ ownProps, mutate }) => ({
      matterCreate: ({ title }) =>
        mutate({
          variables: { title },
        }),
    }),
  }),
  graphql(matterDelete, {
    props: ({ ownProps, mutate }) => ({
      matterDelete: ({ token }) =>
        mutate({
          variables: { token },
        }),
    }),
  }),
) (BaseProvider);


export {
  Context,
  Provider
}
