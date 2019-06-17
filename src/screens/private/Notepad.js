import React from 'react';
import PropTypes from 'prop-types';
import Editor from '@stfy/react-editor.js';

import standard from "screens/private/layouts/standard";

import SubNavbar from "screens/private/components/SubNavbar";

function Notepad(props) {
  return (
    <div>
      <SubNavbar />
      <h1>Notepad</h1>
      <Editor 
        autofocus
        holderId="editorjs-container"
        // excludeDefaultTools={['header']}
        onChange={(data) => console.log(data)}
        // customTools={{
        //   header: CustomHeader
        // }}
        onReady={() => console.log('Start!')}
        data={{
          "time" : 1554920381017,
          "blocks" : [
              {
                  "type" : "header",
                  "data" : {
                      "text" : "Hello Editor.js",
                      "level" : 2
                  }
              },
          ],
          "version" : "2.12.4"
        }}
      />;
    </div>
  );
}

Notepad.propTypes = {};

export default standard(Notepad);
