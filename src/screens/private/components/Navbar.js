import React from 'react';
import styled, { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import routes from 'routes';
import NavbarBrand from 'components/NavbarBrand';

const Wrapper = withTheme(styled.nav`
  ${props => `
    background-color: ${props.theme.colors.white};
  `}
`);

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top white-background has-shadow">
    <NavbarBrand href={routes.home.path} />
    <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <a className="nav-link" href="https://docs.google.com/forms/d/e/1FAIpQLSd1N9gAnQR9t0MTS8bTXgIvJcZcuv_vw4Hb53fiWQdftO_ldQ/viewform" target="_blank">
          Product Feedback
      </a>
      <li className="nav-item dropdown">
          <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <div aria-labelledby="navbarDropdown" class="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="https://docs.google.com/forms/d/e/1FAIpQLSd1N9gAnQR9t0MTS8bTXgIvJcZcuv_vw4Hb53fiWQdftO_ldQ/viewform" target="_blank">
              Sign Out
          </a>
          </div>
        </li>
    </ul>
      {/* <ul className="navbar-nav ml-auto">
        link_to "#{fa_icon('check', type: :solid)} Add Matter".html_safe, new_terminal_matter_path, className: 'nav-link btn', remote: true
        link_to "#{fa_icon('comment-alt', type: :regular)} Product Feedback".html_safe, "https://docs.google.com/forms/d/e/1FAIpQLSd1N9gAnQR9t0MTS8bTXgIvJcZcuv_vw4Hb53fiWQdftO_ldQ/viewform", target: "_blank", className: 'nav-link btn'
        # = link_to "#{fa_icon('robot', type: :solid)} Schedule".html_safe, "#", className: 'nav-link', data: { toggle: "modal", target: "#bot-modal" }
        if current_user.has_role? :super_admin
          <li className="nav-item dropdown">
            <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">
              Admin
            </a>
            <div aria-labelledby="navbarDropdown" className="dropdown-menu dropdown-menu-right">
              link_to "Sidekiq", sidekiq_web_path, className: 'dropdown-item', target: "_blank"
              link_to "Users", admin_users_path, className: 'dropdown-item'
            </div>
          </li>
        end
        <li className="nav-item dropdown">
          <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">
            fa_icon('user', type: :solid)
          </a>
          <div aria-labelledby="navbarDropdown" class="dropdown-menu dropdown-menu-right">
            link_to "My Profile", terminal_user_profile_edit_current_path, class: 'dropdown-item'
            link_to "Sign Out", destroy_user_session_path, class: 'dropdown-item', method: :delet
          </div>
        </li>
      </ul> */}
    </div>
</nav>
  );
}

export default Navbar;
