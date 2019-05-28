import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';

function CardForm(props) {

  // const [state, setState] = useState({ isSubmitting: false });

  return (
    <div className="card">
      <div className="card-body">
      <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  isInvalid={errors.password && touched.password}
                />
                {errors.password && touched.password &&
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                }
              </Form.Group>

            <Form.Group>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
                isInvalid={errors.password && touched.password}
              />
              {errors.password && touched.password &&
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              }
            </Form.Group>
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="btn btn-primary btn-block"
              >
                {isSubmitting ? "Logging In..." : "Log In"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

CardForm.propTypes = {};

export default CardForm;
