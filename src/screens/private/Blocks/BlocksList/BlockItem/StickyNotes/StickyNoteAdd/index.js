import React from 'react';

import StickyNoteAddForm from './StickyNoteAddForm';

export default function StickyNoteAdd({blockToken, createItem}) {
  return (
    <div className="sticky-notes-item">
      <StickyNoteAddForm blockToken={blockToken} createItem={createItem}/>
    </div>
  )
}
