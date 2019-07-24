import React from 'react';
import animateScrollTo from 'animated-scroll-to';
import constants from 'utils/constants';
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
        <BlockItem headline="Meeting Assistant" handleButtonClick={() => animateScrollTo(document.querySelector('#meeting-assistant', { offset: 60 }))} coverImgUrl={`${constants.ENV.ASSET_BASE_PATH}/assets/meeting-assistant.png`}/>
        <BlockItem headline="Project Planning" handleButtonClick={() => animateScrollTo(document.querySelector('#project-planning', { offset: 60 }))}  coverImgUrl={`${constants.ENV.ASSET_BASE_PATH}/assets/project-planning.png`}/>
        <BlockItem headline="Productive Week" handleButtonClick={() => animateScrollTo(document.querySelector('#productive-weeks', { offset: 60 }))}  coverImgUrl={`${constants.ENV.ASSET_BASE_PATH}/assets/productive-week.png`}/>
        <BlockItem headline="CRM" handleButtonClick={() => animateScrollTo(document.querySelector('#crm', { offset: 60 }))}  coverImgUrl={`${constants.ENV.ASSET_BASE_PATH}/assets/crm.png`}/>
        <BlockItem headline="Fund Raising Assistant" handleButtonClick={() => animateScrollTo(document.querySelector('#fund-raising-assistant', { offset: 60 }))}  coverImgUrl={`${constants.ENV.ASSET_BASE_PATH}/assets/fund-raising-assistant.png`}/>
        <BlockItem headline="Goal Tracker" handleButtonClick={() => animateScrollTo(document.querySelector('#goal-tracker', { offset: 60 }))}  coverImgUrl={`${constants.ENV.ASSET_BASE_PATH}/assets/goal-tracker.png`}/>
        <BlockItem headline="Financial Task Manager" handleButtonClick={() => animateScrollTo(document.querySelector('#financial-task-manager', { offset: 60 }))}  coverImgUrl={`${constants.ENV.ASSET_BASE_PATH}/assets/financial-task-manager.png`}/>
      </div>
    </div>
  )
}
