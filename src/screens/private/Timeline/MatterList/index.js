import React from 'react';

import Loading from 'components/Loading';

import ListItem from './ListItem';


function MatterList({
  keyedArray,
  indexedObject,
  error,
  loading,
  destroyItem,
  setEditToken
}) {
  let content = <Loading />;
  if (!loading && !error) {
    content = keyedArray.map( token => (
    <ListItem
      key={token}
      token={token}
      data={indexedObject[token]}
      handleDestroyItem={destroyItem}
      setEditToken={setEditToken}
    />));
  }

  return (
    <div className="container">
      <div className="row">
          {content}
      </div>
    </div>
  )
};

export default MatterList;
