import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { object, string, setLocale } from "yup";

setLocale({
  mixed: {
    required: "Is required"
  },
});

function TaskAddForm({
  blockToken,
  createItem,
  matterToken
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
            await createItem({ matterToken, blockToken, body: values.body });
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
              <InputGroup>
                  <Form.Control
                    type="text"
                    name="body"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                    placeholder="Describe a new task..."
                    // isInvalid={errors.body && touched.body}
                  />
                  <InputGroup.Append>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className="btn btn-primary btn-block"
                    >
                      {isSubmitting ? "Adding..." : "Hit return to add"}
                    </Button>
                  </InputGroup.Append>
              </InputGroup>
                
              </Form.Group>
            </Form>
          )}
        </Formik>
  );
}

TaskAddForm.propTypes = {};

export default TaskAddForm;

