import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';
// import { object, string, setLocale } from "yup";

// setLocale({
//   mixed: {
//     required: "Is required"
//   },
// });

function TaskUpdateForm({
  token,
  updateItem,
  data,
  setIsEditing
}) {

  


  // const validationSchema = object().shape({
  //   body: string()
  //     .required()
  // });

  return (
      <Formik
          initialValues={{ body: data.body }}
          // validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await updateItem({ token, body: values.body, isCompleted: data.isCompleted });
            resetForm();
            setSubmitting(false);
            setIsEditing(false);
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
                    placeholder="Enter a task description..."
                    // ref={input => input && input.focus()}
                    // isInvalid={errors.body && touched.body}
                  />
                    <InputGroup.Append>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-light btn-block"
                      >
                        {isSubmitting ? "Saving..." : "Hit return to save"}
                      </Button>
                    </InputGroup.Append>
                    {/* {errors.body && touched.body &&
                      <Form.Control.Feedback type="invalid">
                        {errors.body}
                      </Form.Control.Feedback>
                    } */}
                </InputGroup>
              </Form.Group>
          {/* <Button
            type="submit"
            // disabled={isSubmitting || !isValid}
            className="btn btn-primary btn-block"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button> */}
            </Form>
          )}
        </Formik>
  );
}

TaskUpdateForm.propTypes = {};

export default TaskUpdateForm;

