import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import TaskUpdateForm from './TaskUpdateForm';

export default function TaskItem({ token, data, destroyItem, updateItem }) {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ?
      <TaskUpdateForm
        token={token}
        data={data}
        setIsEditing={setIsEditing}
        updateItem={updateItem}
      />
      :
      <div className="tasklist-item">
        <div className="tasklist-item-text" onDoubleClick={() => setIsEditing(true)}>
          {data.body}
        </div>
        <div className="tasklist-item-actions">
          <a className="tall-poppy-text" styles={{ cursor: "pointer"}} onClick={() => destroyItem({ token })}><FontAwesomeIcon icon={faTimes} /></a>
        </div>
      </div>
      }
    </div>
  )
}
