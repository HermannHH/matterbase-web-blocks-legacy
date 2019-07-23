import React from 'react';

export default function NoResults({ text }) {
  return (
    <div className="no-results">
      <h4>{text || "No Results"}</h4>
    </div>
  )
}
