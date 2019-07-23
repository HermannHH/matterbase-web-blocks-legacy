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

function CardForm({ handleForgotPassword }) {

  // const [state, setState] = useState({ isSubmitting: false });

  const validationSchema = object().shape({
    email: string()
      .required()
      .email()
  });


  return (
    <div className="card">
      <div className="card-body">
      <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm  }) => {
            await handleForgotPassword({ email: values.email });
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
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="btn btn-primary btn-block"
              >
                {isSubmitting ? "Sending..." : "Send reset instructions"}
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
