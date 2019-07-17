import React from 'react';

import Loading from 'components/Loading';
import NoResults from 'components/NoResults';

import ListItem from './ListItem';


function MatterList({
  keyedArray,
  indexedObject,
  // error,
  loading,
  destroyItem,
  setEditToken,
  matterDataInitialised,
  timezone
}) {
  let content = <Loading />;
  if (!loading && matterDataInitialised && keyedArray.length) {
    content = keyedArray.map( token => (
    <ListItem
      key={token}
      token={token}
      data={indexedObject[token]}
      handleDestroyItem={destroyItem}
      setEditToken={setEditToken}
      timezone={timezone}
    />));
  } else if (!loading && matterDataInitialised) {
    content = <NoResults text="You have not added any Matters yet"/>
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
