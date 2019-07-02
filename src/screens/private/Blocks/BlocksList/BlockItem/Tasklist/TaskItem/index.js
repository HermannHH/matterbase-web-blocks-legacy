import React, { useState } from 'react';

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
      <div>
        {data.body}
        <a onClick={() => destroyItem({ token })}>Delete</a>
        <a onClick={() => setIsEditing(true)}>Edit</a>
      </div>
      }
    </div>
  )
}
