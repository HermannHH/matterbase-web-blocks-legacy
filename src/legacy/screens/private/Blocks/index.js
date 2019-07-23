import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

import replaceUrlParams from 'utils/replaceUrlParams';
import routes from "routes";

import standard from "screens/private/layouts/standard";

import SubNavbar from "screens/private/components/SubNavbar";

import AddBlock from "./AddBlock";
import BlockList from "./BlockList";

function Blocks({ token }) {
  return (
    <div>
    <SubNavbar />
    <div className="container" style={{paddingTop: "66px"}}>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-10">
          <BlockList />
          <div className="row">
            <div className="col-12">
              <AddBlock />
            </div>          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

Blocks.propTypes = {};

export default standard(Blocks);
