import React from 'react';

import StickyNoteAddForm from './StickyNoteAddForm';

export default function StickyNoteAdd({blockToken, createItem}) {
  return (
    <div>
      <StickyNoteAddForm blockToken={blockToken} createItem={createItem}/>
    </div>
  )
}
