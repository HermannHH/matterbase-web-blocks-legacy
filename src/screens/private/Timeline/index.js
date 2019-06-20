import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import {
  // selectors as buyerAgentSelectors,
  actions as matterActions,
} from 'ducks/matter';

import MatterList from "screens/private/Timeline/MatterList";
import standard from "screens/private/layouts/standard";


function Timeline() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('matterActions', matterActions);
    dispatch(matterActions.fetchList());
  }, []);

  return (
    <div className="container">
        <div className="my-5">
          <MatterList/>
        </div>
    </div>
  );
}

Timeline.propTypes = {};

export default standard(Timeline);
