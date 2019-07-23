import React from 'react';

function SubNavbar({ actionsLeft, actionsRight }) {

  return (
    <div id="sub-navbar">
      <div id="sub-navbar--actions-left">
        {actionsLeft}
      </div>
      <div id="sub-navbar--actions-right">
        {actionsRight}
      </div>
    </div>
  )
}

export default SubNavbar;
