import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import {
  // selectors as buyerAgentSelectors,
  actions as matterActions,
} from 'ducks/matter';


import { Context, Provider } from "screens/private/Timeline/Context";

import MatterList from "screens/private/Timeline/MatterList";
import standard from "screens/private/layouts/standard";


function Timeline() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('matterActions', matterActions);
    dispatch(matterActions.fetchList());
  }, []);

  return (
    <Provider>
      <Context.Consumer>
        {context => (
          <div className="container">
            {console.log('context', context)}
            {context.data.listLoading ?
              <h1>Loading...</h1>
              :
              <div className="my-5">
                <MatterList 
                  {...context}
                />
              </div>
          }
          </div>
        )}
      </Context.Consumer>
    </Provider>
  );
}

Timeline.propTypes = {};

export default standard(Timeline);
