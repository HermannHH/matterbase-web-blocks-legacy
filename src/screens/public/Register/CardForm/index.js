import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';

function CardForm({
  handleSignUp
}) {

  // const [state, setState] = useState({ isSubmitting: false });

  return (
    <div className="card">
      <div className="card-body">
      <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
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
          onSubmit={async (values, { setSubmitting, resetForm  }) => {
            await handleSignUp({ email: values.email, password: values.password, passwordConfirmation: values.passwordConfirmation });
            resetForm();
            setSubmitting(false);
           
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
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                  isInvalid={errors.email && touched.email}
                />
                {errors.email && touched.email &&
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                }
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

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
                name="passwordConfirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
                placeholder="Confirm your password"
                isInvalid={errors.passwordConfirmation && touched.passwordConfirmation}
              />
              {errors.passwordConfirmation && touched.passwordConfirmation &&
                <Form.Control.Feedback type="invalid">
                  {errors.passwordConfirmation}
                </Form.Control.Feedback>
              }
            </Form.Group>
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="btn btn-primary btn-block"
              >
                {isSubmitting ? "Registering..." : "Register"}
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
