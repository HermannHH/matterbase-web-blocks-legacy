import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { object, string, setLocale } from "yup";

setLocale({
  mixed: {
    required: "Is required"
  },
});

function StickyNoteAddForm({
  blockToken,
  createItem
}) {

  


  const validationSchema = object().shape({
    body: string()
      .required()
  });

  return (
      <Formik
          initialValues={{ body: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await createItem({ blockToken, body: values.body });
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
                <Form.Label>Task Body</Form.Label>
                <Form.Control
                  type="text"
                  name="body"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                  placeholder="Enter task body"
                  isInvalid={errors.body && touched.body}
                />
                {errors.body && touched.body &&
                  <Form.Control.Feedback type="invalid">
                    {errors.body}
                  </Form.Control.Feedback>
                }
              </Form.Group>
          <Button
            type="submit"
            // disabled={isSubmitting || !isValid}
            className="btn btn-primary btn-block"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
            </Form>
          )}
        </Formik>
  );
}

StickyNoteAddForm.propTypes = {};

export default StickyNoteAddForm;

