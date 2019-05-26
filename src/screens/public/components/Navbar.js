import React from 'react';
import styled, { withTheme } from 'styled-components';

import routes from 'routes';
import NavbarBrand from 'components/NavbarBrand';

const Wrapper = withTheme(styled.nav`
  ${props => `
    background-color: ${props.theme.colors.white};
  `}
`);

function Navbar() {
  return (
    <Wrapper className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        <NavbarBrand href={routes.public.home.path} />
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
            <a className="nav-link" href={routes.public.aboutUs.path}>
              About Us
            </a>
            <a className="nav-link" href={routes.public.pricing.path}>
              Pricing
            </a>
            <a
              className="btn btn-outline-secondary ml-4 mr-2"
              href={routes.public.login.path}
            >
              Login
            </a>
            <a
              className="btn btn-primary mx-2"
              href={routes.public.register.path}
            >
              Register
            </a>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
