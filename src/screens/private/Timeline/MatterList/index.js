import React from 'react';

import ListItem from './ListItem';


function MatterList({
  keyedArray,
  indexedObject,
  error,
  loading,
  destroyItem,
  setEditToken
}) {
  let content = <h1>Loading...</h1>;
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
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          {content}
        </div>
      </div>
    </div>
  )
};

export default MatterList;
