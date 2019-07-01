import React from 'react';

export default function BlockItem({ token, destroyItem }) {
  return (
    <div>
      {token}
      <a onClick={() => destroyItem({ token })}>Delete</a>
    </div>
  )
}
