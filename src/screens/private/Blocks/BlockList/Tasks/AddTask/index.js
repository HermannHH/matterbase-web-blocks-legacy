import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Modal, Form, Button } from 'react-bootstrap';
import { object, string, setLocale } from "yup";

import { useDispatch } from 'react-redux';

import {
  // selectors as buyerAgentSelectors,
  actions as matterActions,
} from 'ducks/matter';

setLocale({
  mixed: {
    required: "Is required"
  },
});

function AddTask({ blockToken }) {

  // const [state, setState] = useState({ isSubmitting: false });
  const dispatch = useDispatch();

  const validationSchema = object().shape({
    body: string()
      .required()
  });


  return (
      <Formik
          initialValues={{ body: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await dispatch(matterActions.createTask({ blockToken, body: values.body }));
            setSubmitting(false);
            resetForm();
            
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
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
                <Form.Control
                  type="text"
                  name="body"
                  onChange={handleChange}
                  ref={input => input && input.focus()}
                  onBlur={handleBlur}
                  value={values.body}
                  placeholder="Enter task"
                  isInvalid={errors.name && touched.name}
                />
                {errors.name && touched.name &&
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
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

AddTask.propTypes = {};

export default AddTask;
