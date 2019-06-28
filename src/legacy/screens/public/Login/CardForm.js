import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { object, string, setLocale } from "yup";

setLocale({
  mixed: {
    required: "Is required"
  },
  string: {
    email: "Must be a valid email address"
  }
});

function CardForm(props) {

  // const [state, setState] = useState({ isSubmitting: false });

  const validationSchema = object().shape({
    email: string()
      .required()
      .email(),
    password: string().required()
  });


  return (
    <div className="card">
      <div className="card-body">
      <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
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
