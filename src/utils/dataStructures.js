import _ from 'lodash';

// Takes array and returns indexed object & key array
const dataReduce = (array, keyName ) => {
  if (!array) { return {
    keyed: {},
    indexed: []
  } }
  const indexedObject = array.reduce((obj, item) => {
    obj[item[keyName]] = item
    return obj
  }, {});

  const keyedArray = array.map( item => item[keyName]);

  return {
    keyedArray,
    indexedObject
  };
};

// Appends item to indexed object & key array
function appendToKeyedArray(keyArray, token) {
  return keyArray.concat(token);
};

function removeFromKeyedArray(keyArray, token) {
  return keyArray.filter( item => item !== token);
};

function writeToIndexedObject(indexedObject, token, data) {
  return {
    ...indexedObject,
    [token] : {
      ...data,
    }
  };
};

function removeFromIndexedObject(indexedObject, token) {
  return _.omit(indexedObject, token);
};


export {
  dataReduce,
  appendToKeyedArray,
  writeToIndexedObject,
  removeFromKeyedArray,
  removeFromIndexedObject
}
