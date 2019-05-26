import React from 'react';
import styled, { withTheme } from 'styled-components';

import constants from 'utils/constants';

const Wrapper = withTheme(styled.a`
  ${props => `
    background-color: inherit;
    > img {
      width: 170px;
    }
  `}
`);

export default function NavbarBrand({ href }) {
  return (
    <Wrapper className="navbar-brand" href={href}>
      <img src={`${constants.ENV.ASSET_BASE_PATH}/branding/logo-full.png`} />
    </Wrapper>
  );
}
