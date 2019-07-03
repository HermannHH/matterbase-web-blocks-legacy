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

function StickyNoteUpdateForm({
  token,
  updateItem,
  data,
  setIsEditing
}) {

  


  const validationSchema = object().shape({
    body: string()
      .required()
  });

  return (
      <Formik
          initialValues={{ body: data.body }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await updateItem({ token, body: values.body });
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
            <Form onSubmit={handleSubmit} className="sticky-notes-item-form">
              <Form.Group style={{ margin: "0px"}}>  
                <Form.Control
                  type="text"
                  as="textarea"
                  name="body"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.body}
                  placeholder="Add sticky note content..."
                  // isInvalid={errors.body && touched.body}
                  className="sticky-notes-item-form-input"
                />
              </Form.Group>
              <div className="sticky-notes-item-form-actions">
                <Button
                  type="submit"
                  // disabled={isSubmitting || !isValid}
                  className="btn btn-primary btn-block"
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
  );
}

StickyNoteUpdateForm.propTypes = {};

export default StickyNoteUpdateForm;

