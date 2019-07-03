import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import StickyNoteUpdateForm from './StickyNoteUpdateForm';

export default function StickyNoteItem({ token, data, destroyItem, updateItem }) {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="sticky-notes-item">
      {isEditing ?
      <StickyNoteUpdateForm
        token={token}
        data={data}
        setIsEditing={setIsEditing}
        updateItem={updateItem}
      />
      :
      <div className="sticky-notes-item-paper" onDoubleClick={() => setIsEditing(true)}>
        <div className="remover"  onClick={() => destroyItem({ token })}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div>
          {data.body}
        </div>
      </div>
      }
    </div>
  )
}
