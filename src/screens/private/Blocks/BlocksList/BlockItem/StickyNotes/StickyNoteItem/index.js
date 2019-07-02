import React, { useState } from 'react';

import StickyNoteUpdateForm from './StickyNoteUpdateForm';

export default function StickyNoteItem({ token, data, destroyItem, updateItem }) {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ?
      <StickyNoteUpdateForm
        token={token}
        data={data}
        setIsEditing={setIsEditing}
        updateItem={updateItem}
      />
      :
      <div>
        {data.body}
        <a onClick={() => destroyItem({ token })}>Delete</a>
        <a onClick={() => setIsEditing(true)}>Edit</a>
      </div>
      }
    </div>
  )
}
