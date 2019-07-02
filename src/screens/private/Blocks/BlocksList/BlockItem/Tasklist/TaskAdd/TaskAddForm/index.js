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

function TaskAddForm({
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
            // if(isUpdate) {
            //   await updateItem({ token: matter.token, title: values.title });
            // } else {
            //   await createItem({ title: values.title });
            // }
            await createItem({ blockToken, body: values.body });
            // setShowMatterModal(false);
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
                  // ref={input => input && input.focus()}
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

TaskAddForm.propTypes = {};

export default TaskAddForm;

