import React from 'react';

import StickyNoteAddForm from './StickyNoteAddForm';

export default function StickyNoteAdd({blockToken, createItem, matterToken}) {
  return (
    <div className="sticky-notes-item">
      <StickyNoteAddForm blockToken={blockToken} createItem={createItem} matterToken={matterToken}/>
    </div>
  )
}
