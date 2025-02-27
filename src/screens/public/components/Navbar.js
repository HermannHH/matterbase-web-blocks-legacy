import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { navigate } from '@reach/router';

import routes from 'routes';

import NavbarBrand from 'components/NavbarBrand';

const Wrapper = withTheme(styled.nav`
  ${props => `
    background-color: ${props.theme.colors.white};
  `}
`);

function Navbar() {
  return (
    <BootstrapNavbar className="navbar navbar-expand-lg navbar-light sticky-top white-background" expand="lg">
      <div className="container">
        <NavbarBrand  route={routes.public.home.path} />
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="navbar-nav ml-auto">
            <a className="nav-link" onClick={() => navigate(routes.public.aboutUs.path)} style={{ cursor: "pointer"}}>
              About Us
            </a>
            <a className="nav-link" onClick={() => navigate(routes.public.useCases.path)} style={{ cursor: "pointer"}}>
              Use Cases
            </a>
            <a className="nav-link" onClick={() => navigate(routes.public.pricing.path)} style={{ cursor: "pointer"}}>
              Pricing
            </a>
            <a
              className="btn btn-outline-secondary ml-4 mr-2"
              onClick={() => navigate(routes.public.login.path)} style={{ cursor: "pointer"}}
            >
              Login
            </a>
            <a
              className="btn btn-primary mx-2"
              onClick={() => navigate(routes.public.register.path)} style={{ cursor: "pointer"}}
              style={{ color: "white", cursor: "pointer"}}
            >
              Register
            </a>
          </ul>
          </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
}

export default Navbar;
