import React from 'react';

import TaskAddForm from './TaskAddForm';

export default function TaskAdd({blockToken, createItem}) {
  return (
    <div>
      <TaskAddForm blockToken={blockToken} createItem={createItem}/>
    </div>
  )
}
