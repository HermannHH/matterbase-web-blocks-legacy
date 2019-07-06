import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';


function StickyNoteAddForm({
  blockToken,
  createItem,
  matterToken
}) {

  
  return (
      <Formik
          initialValues={{ body: '' }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await createItem({ blockToken, matterToken, body: values.body });
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
            <Form onSubmit={handleSubmit} className="sticky-notes-item-form">
              <Form.Group style={{ margin: "0px"}}>
                <Form.Control
                  type="text"
                  as="textarea"
                  // rows="3"
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
                  {isSubmitting ? "Adding..." : "Add"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
  );
}

StickyNoteAddForm.propTypes = {};

export default StickyNoteAddForm;

