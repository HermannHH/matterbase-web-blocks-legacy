import React from 'react';
import styled, { withTheme } from 'styled-components';

import NavbarBrand from 'components/NavbarBrand';

const Wrapper = withTheme(styled.nav`
  ${props => `
    background-color: ${props.theme.colors.white};
  `}
`);

function Navbar({}) {
  return (
    <Wrapper className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <NavbarBrand />
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <a className="nav-link">About Us</a>
            <a className="nav-link">Pricing</a>
            <a className="nav-link">Login</a>
            <a className="btn btn-outline-secondary ml-4 mr-2">Login</a>
            <a className="btn btn-primary mx-2">Register</a>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
