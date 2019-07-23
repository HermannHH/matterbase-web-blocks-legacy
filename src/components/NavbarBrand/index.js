import React from 'react';
import styled, { withTheme } from 'styled-components';

import { navigate } from '@reach/router';

import constants from 'utils/constants';

const Wrapper = withTheme(styled.a`
  ${props => `
    background-color: inherit;
    > img {
      width: 200px !important;
    }
  `}
`);

export default function NavbarBrand({ route }) {
  return (
    <Wrapper className="navbar-brand" onClick={() => navigate(route)} style={{ cursor: "pointer"}}>
      <img src={`${constants.ENV.ASSET_BASE_PATH}/branding/logo-full-v2.png`} />
    </Wrapper>
  );
}
