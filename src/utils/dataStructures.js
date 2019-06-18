import React from 'react';
import _ from 'lodash';

// Takes array and returns indexed object & key array
const dataReduce = (array, keyName ) => {
  if (!array) { return {
    keyed: {},
    indexed: []
  } }
  const keyedArray = array.reduce((obj, item) => {
    obj[item[keyName]] = item
    return obj
  }, {});

  const indexedObject = array.map( item => item[keyName]);

  return {
    keyedArray,
    indexedObject
  };
};

// Appends item to indexed object & key array
function appendToData({ keyArray, indexedObject, token, data }) {
  const newKeyArray = keyArray.concat(token);
  const newIndexedObject = {
    ...indexedObject,
    [token] : {
      ...data,
    }
  };
  return {
    newKeyArray,
    newIndexedObject
  };
};

// Updates item to indexed object & key array
function udateToData({ keyArray, indexedObject, token, data }) {
  const newKeyArray = keyArray;
  const newIndexedObject = {
    ...indexedObject,
    [token] : {
      ...data,
    }
  };
  return {
    newKeyArray,
    newIndexedObject
  };
};

// Removes item from indexed object & key array
function removeFromData({ keyArray, indexedObject, token }) {
  const newKeyArray = keyArray.filter( item => item !== token);
  const newIndexedObject = _.omit(indexedObject, token);
  return {
    newKeyArray,
    newIndexedObject
  };
}


export {
  dataReduce,
  udateToData,
  appendToData,
  removeFromData
}
