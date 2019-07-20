import React from 'react';
// import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

import styled from 'styled-components';

import standard from 'screens/public/layouts/standard';

import Faq from './Faq';

const Card = styled.div`
  border: none;
  border-radius: 1rem;
  transition: all 0.2s;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  hr {
    margin: 1.5rem 0;
  }
  .card-title {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    letter-spacing: .1rem;
    font-weight: bold;
  }
  .card-price {
    font-size: 3rem;
    margin: 0;
    .period {
      font-size: 0.8rem;
    }
  }
  ul li {
    margin-bottom: 1rem;
  }
  .text-muted {
    opacity: 0.7;
  }
  .btn {
    font-size: 80%;
    border-radius: 5rem;
    letter-spacing: .1rem;
    font-weight: bold;
    padding: 1rem;
    opacity: 0.7;
    transition: all 0.2s;
  }
`;

function Pricing(props) {
  return (
    <section className="pricing pb-5" style={{
      background: "#007bff",
      background: "linear-gradient(to right, #0062E6, #33AEFF)"
    }}>
    <Helmet>
        <title>Matterbase | Pricing</title>
    </Helmet>
  <div className="container py-5">
    <div className="row d-flex flex-column justify-content-center align-items-center">
      <div className="col-10 col-md-6 text-center text-white py-5">
        <h1>
          We will always have a free tier
        </h1>
        <p>
          We are software users ourselves. There is great value in trying a platform before committing to it. For this reason, we will always have a free tier. There is no need to commit before knowing that Matterbase works for you.
        </p>
        <h4>
          More features & pricing plans coming soon.
        </h4>
      </div>
      <div className="col-10 col-md-6 col-lg-4 pb-5">
        <Card className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">
              $0
              <span className="period">/month</span>
            </h6>
            <hr/>
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Single User
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Matters/Events
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Documents
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Document Exports
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Team Workspaces
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Custom Blocks
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                Content Tagging
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                API Access
              </li>
            </ul>
            <a className="btn btn-block btn-success text-uppercase">Register</a>
          </div>
        </Card>
      </div>
    </div>
  </div>
  <div>
    <Faq />
  </div>
</section>
  );
}

Pricing.propTypes = {};

export default standard(Pricing);
