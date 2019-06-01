import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MatterList from "screens/private/Timeline/MatterList";
import standard from "screens/private/layouts/standard";


const LIST_MATTERS = gql`
  {
    matters {
      title
      token
    }
  }
`;


function Timeline(props) {
  return (
    <Query query={LIST_MATTERS}>
      {({ data, loading }) => {
        console.log('graph data', data, loading)
        return (
          <div className="container">
            <div className="my-5">
              <MatterList />
            </div>
          </div>
        )
      }}
    </Query>
  );
}

Timeline.propTypes = {};

export default standard(Timeline);
