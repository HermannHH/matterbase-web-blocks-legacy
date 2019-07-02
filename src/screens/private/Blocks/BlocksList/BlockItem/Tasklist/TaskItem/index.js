import React from 'react';

export default function TaskItem({ token, data, destroyItem }) {
  return (
    <div>
      {data.body}
      <a onClick={() => destroyItem({ token })}>Delete</a>
    </div>
  )
}
