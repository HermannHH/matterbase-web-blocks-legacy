import React, { useState, useEffect } from 'react';

import { graphql, compose } from 'react-apollo';
import { useQuery } from "react-apollo-hooks";

import { matterCreate, matterDelete, matterUpdate } from './mutations';
import { listMatters } from './queries';

import {
  dataReduce,
  appendToData,
  removeFromData,
  updateToData
} from 'utils/dataStructures';

const Context = React.createContext();

function BaseProvider({ children, matterCreate, matterDelete, matterUpdate }) {
  
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
  async function updateMatter({ token, title }) {
    try {
      const { data } = await matterUpdate({ token, title });
      console.log('data resp', data)
      const newData = await updateToData({
        keyArray: mattersIndex,
        indexedObject: matters,
        token: token,
        data: data.matterUpdate.matter
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
          listLoading,
          showMatterModal,
          editToken
        },
        actions: {
          addMatter,
          removeMatter,
          updateMatter,
          setShowMatterModal,
          setEditToken
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
  graphql(matterUpdate, {
    props: ({ ownProps, mutate }) => ({
      matterUpdate: ({ token, title }) =>
        mutate({
          variables: { token, title },
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
