import React from 'react';

import Tasklist from './Tasklist';
import StickyNotes from './StickyNotes';

export default function BlockItem({ token, destroyItem, data }) {

  let content;
  if (data.scopeType === 'tasks') {
    content = <Tasklist blockToken={token} data={data.content}/>;
  } else if (data.scopeType === 'sticky_notes') {
    content = <StickyNotes blockToken={token} data={data.content} />;
  };

  return (
    <div className="row my-5">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <h3>{data.scopeType === 'sticky_notes' ? 'Sticky Notes' : 'Tasklist'}</h3>
        <a onClick={() => destroyItem({ token })}>Delete</a>
      </div>
      <div className="col-12">
        <div className="card">
          {content}
        </div>
      </div>
    </div>
  )
}
