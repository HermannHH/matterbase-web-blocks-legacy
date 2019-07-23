import React from 'react';

import TaskAddForm from './TaskAddForm';

export default function TaskAdd({blockToken, createItem, matterToken}) {
  return (
    <div>
      <TaskAddForm blockToken={blockToken} createItem={createItem} matterToken={matterToken}/>
    </div>
  )
}
