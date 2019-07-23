import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import BlockItem from './BlockItem';

export default function UseCaseBlocks() {


  return (
    <div className="use-case-blocks">
      <div className="use-case-summary">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 py-5">
              <h1 className="display-4 font-weight-bold black-text">Daily problems solved using Matterbase</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blocks-list">
        <BlockItem headline="Meeting Assistant" handleButtonClick={() => animateScrollTo(document.querySelector('#meeting-assistant', { offset: 60 }))} />
        <BlockItem headline="Project Planning" handleButtonClick={() => animateScrollTo(document.querySelector('#project-planning', { offset: 60 }))} />
        <BlockItem headline="Productive Week" handleButtonClick={() => animateScrollTo(document.querySelector('#productive-weeks', { offset: 60 }))} />
        <BlockItem headline="CRM" handleButtonClick={() => animateScrollTo(document.querySelector('#crm', { offset: 60 }))} />
        <BlockItem headline="Fund Raising Assistant" handleButtonClick={() => animateScrollTo(document.querySelector('#fund-raising-assistant', { offset: 60 }))} />
        <BlockItem headline="Goal Tracker" handleButtonClick={() => animateScrollTo(document.querySelector('#goal-tracker', { offset: 60 }))} />
        <BlockItem headline="Financial Task Manager" handleButtonClick={() => animateScrollTo(document.querySelector('#financial-task-manager', { offset: 60 }))}/>
      </div>
    </div>
  )
}
