import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: inherit;
  padding: 40px 25px 25px 25px;
  align-items: center;
  line-height: 2rem;
  justify-content: space-between;
  clear: both;
  position: absolute;
  bottom: 0px;

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
          <a>About Us</a>
          <a>Pricing</a>
          <a>Twitter</a>
        </div>
        <div>Copyright © All Rights Reserved 2019</div>
      </Wrapper>
    </div>
  );
}
