import React from 'react';

import BlockItem from './BlockItem';

export default function UseCaseBlocks() {
  return (
    <div className="use-case-blocks">
      <div className="use-case-summary">
        <h1 className="">Here are a few examples</h1>
        <p>eifiwjfbej</p>
      </div>
      <div className="blocks-list">
        <BlockItem headline="Meeting Assistant" />
        <BlockItem headline="Project Planning" />
        <BlockItem headline="Productive Week" />
        <BlockItem headline="CRM" />
        <BlockItem headline="Fund Raising Assistant" />
        <BlockItem headline="Goal Tracker" />
        <BlockItem headline="Financial Task Manager" />
      </div>
    </div>
  )
}
