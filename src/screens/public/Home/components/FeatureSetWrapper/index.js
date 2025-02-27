// import React from 'react';
import styled, { withTheme } from 'styled-components';
import media from "styled-media-query";

const FeatureSetWrapper = withTheme(styled.section`
    margin-bottom: 0px;
    .screenshot-explainer {
      display: flex;
      flex-direction: column;
      padding: 100px 30px;
      justify-content: center;
      align-items: center;
      text-align: center;
      ${media.greaterThan("medium")`
        padding-right: 80px;
        align-items: flex-start;
        text-align: left;
      `};
    }
    .screenshot-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding-top: 40px;
      padding-bottom: 40px;
      img {
        width: 90%;
        display: block;
        margin: 0 auto;
        ${media.greaterThan("large")`
          width: 150%;
        `}
      }
    }
`);

export default FeatureSetWrapper;
