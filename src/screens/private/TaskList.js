import React from 'react';
import PropTypes from 'prop-types';
import standard from "screens/private/layouts/standard";
import SubNavbar from "screens/private/components/SubNavbar";

function TaskList(props) {
  return (
    <div>
    <SubNavbar />
      <h1>TaskList</h1>
    </div>
  );
}

TaskList.propTypes = {};

export default standard(TaskList);
