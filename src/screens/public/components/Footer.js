import React from 'react';

import styled from 'styled-components';

import { navigate } from '@reach/router';

import routes from 'routes';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: inherit;
  padding: 40px 25px 25px 25px;
  align-items: center;
  line-height: 2rem;
  justify-content: space-between;
  clear: both;

  #brochure-footer--links {
    > a {
      padding: 0 20px;
      font-size: 20px;
      color: $tundora;

      &:hover {
        color: $dodgerBlue;
      }
    }
  }
`;

export default function Footer() {
  return (
    <div style={{ paddingTop: '150px' }}>
      <Wrapper>
        <div id="brochure-footer--links">
          <a onClick={() => navigate(routes.public.aboutUs.path)} style={{ cursor: "pointer"}}>
            About Us
          </a>
          <a onClick={() => navigate(routes.public.useCases.path)} style={{ cursor: "pointer"}}>
            Use Cases
          </a>
          <a onClick={() => navigate(routes.public.pricing.path)} style={{ cursor: "pointer"}}>
            Pricing
          </a>
          <a href="https://twitter.com/matterbaseio" target="_blank" style={{ cursor: "pointer"}}>
            Twitter
          </a>
        </div>
        <div>{`Copyright © All Rights Reserved ${new Date().getFullYear()}`}</div>
      </Wrapper>
    </div>
  );
}
