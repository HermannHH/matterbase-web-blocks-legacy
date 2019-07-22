import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import TaskUpdateForm from './TaskUpdateForm';

export default function TaskItem({ token, data, destroyItem, updateItem, matterToken, blockToken, embedded }) {

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ?
      <TaskUpdateForm
        token={token}
        data={data}
        setIsEditing={setIsEditing}
        updateItem={updateItem}
        matterToken={matterToken}
        blockToken={blockToken}
      />
      :
      <div className={`${data.is_completed ? "completed tasklist-item" : "tasklist-item"}`}>
        <div className="tasklist-item-checkbox">
          <a styles={{ cursor: "pointer"}} onClick={() => !embedded && updateItem({ matterToken, blockToken, token, body: data.body, isCompleted: !data.is_completed })}>
            {data.is_completed ?
              <FontAwesomeIcon icon={faCheck} />
            :
              <FontAwesomeIcon icon={faCheck} />
            }
          </a>
        </div>
        <div className="tasklist-item-text" onDoubleClick={() => setIsEditing(true)}>
          {data.body}
        </div>
        <div className="tasklist-item-actions">
          <a className="tall-poppy-text" styles={{ cursor: "pointer"}} onClick={() => !embedded && destroyItem({ matterToken, blockToken, token })}><FontAwesomeIcon icon={faTimes} /></a>
        </div>
      </div>
      }
    </div>
  )
}
