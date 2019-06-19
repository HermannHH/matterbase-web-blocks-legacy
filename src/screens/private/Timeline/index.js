import React from 'react';
import PropTypes from 'prop-types';


import { Context, Provider } from "screens/private/Timeline/Context";

import MatterList from "screens/private/Timeline/MatterList";
import standard from "screens/private/layouts/standard";


function Timeline() {
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
