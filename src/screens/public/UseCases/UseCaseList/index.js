import React from 'react';

import { navigate } from '@reach/router';

import routes from 'routes';


import UseCase from 'components/UseCase';

import useCases from 'screens/public/useCases';

export default function UseCaseList() {
  return (
    <div>
      <div className="my-5 p-5 selago-background rad-5" id="meeting-assistant">
        <UseCase
          heading="Meeting Assistant"
          text={<div className="mb-5"><h4>Meetings often end up with outcomes lost in disorganised notes.</h4><h4>Attaching tasks & notes to the meeting event keeps all  thoughts & actions contextualised.</h4></div>}
          url={`${useCases.meetingAssistant}?embedded=true`}
          buttonText="I want more productive meetings"
          handleButtonClick={() => navigate(routes.public.register.path)}
        />
      </div>
      <div className="my-5 p-5 snow-grey-background rad-5" id="project-planning">
        <UseCase
          heading="Project Planning"
          text={<div className="mb-5"><h4>Project planning tools are often complicated. Project plans should be simple, to increase project success rates. Convert notes and ideas into actionable items which assist with  project completion.</h4></div>}
          url={`${useCases.projectPlanning}?embedded=true`}
          buttonText="I want more successful projects"
          handleButtonClick={() => navigate(routes.public.register.path)}
        />
      </div>
      <div className="my-5 p-5 selago-background rad-5" id="productive-weeks">
        <UseCase
          heading="Productive Weeks"
          text={<div className="mb-5"><h4>Planning your week in advance, helps increase  productivity. Create a Matter on Sunday night and jot down reminders and tasks to dedicate your time towards in the week to come. Then sit back and watch how this weekly process becomes a habit and removes stress and anxiety.</h4></div>}
          url={`${useCases.productiveWeek}?embedded=true`}
          buttonText="I want more productive weeks"
          handleButtonClick={() => navigate(routes.public.register.path)}
        />
      </div>
      <div className="my-5 p-5 snow-grey-background rad-5" id="crm">
        <UseCase
          heading="CRM"
          text={<div className="mb-5"><h4>Create a timeline goal in which to close a deal. Never miss a deadline or a follow up and close deals in pre-planned cycles.</h4></div>}
          url={`${useCases.crm}?embedded=true`}
          buttonText="I want to manager customer relations better"
          handleButtonClick={() => navigate(routes.public.register.path)}
        />
      </div>
      <div className="my-5 p-5 selago-background rad-5" id="fund-raising-assistant">
        <UseCase
          heading="Fund Raising Assistant"
          text={<div className="mb-5"><h4>Raising investment for your business is tough. The last thing you need is for admin to add to the complexity. Never forget important tasks or notes on that perfect investor.</h4></div>}
          url={`${useCases.fundRaisingAssistant}?embedded=true`}
          buttonText="I want to improve my fundraising"
          handleButtonClick={() => navigate(routes.public.register.path)}
        />
      </div>
      <div className="my-5 p-5 snow-grey-background rad-5" id="goal-tracker">
        <UseCase
          heading="Goal Tracker"
          text={<div className="mb-5"><h4>Whether it is money management, a side hustle or your fitness and health goals. Simplify and visualise your action items and progress using the adaptability of Matterbase.</h4></div>}
          url={`${useCases.goalTracker}?embedded=true`}
          buttonText="I want to reach my goals"
          handleButtonClick={() => navigate(routes.public.register.path)}
        />
      </div>
      <div className="my-5 p-5 selago-background rad-5" id="financial-task-manager">
        <UseCase
          heading="Financial Task Manager"
          text={<div className="mb-5"><h4>Trying to get on top of your finances? Schedule a monthly Matter  to remind yourself of your goals. Set tasks to transfer into your savings account and pay a set amount into your credit card.</h4></div>}
          url={`${useCases.financialTaskManager}?embedded=true`}
          buttonText="I want to improve my finances"
          handleButtonClick={() => navigate(routes.public.register.path)}
        />
      </div>
    </div>
  )
}
