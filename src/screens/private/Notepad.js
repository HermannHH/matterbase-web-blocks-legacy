import React from 'react';
import PropTypes from 'prop-types';


import standard from "screens/private/layouts/standard";

import SubNavbar from "screens/private/components/SubNavbar";

function Notepad(props) {
  return (
    <div>
      <SubNavbar />
      <h1>Notepad</h1>
    </div>
  );
}

Notepad.propTypes = {};

export default standard(Notepad);
