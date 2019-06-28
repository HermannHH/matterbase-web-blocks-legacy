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

function MatterModal({ matter, showMatterModal, setShowMatterModal }) {

  // const [state, setState] = useState({ isSubmitting: false });
  const dispatch = useDispatch();

  const validationSchema = object().shape({
    title: string()
      .required()
  });


  const isUpdate = Object.keys(matter).length;
  const initialTitle = isUpdate ? matter.title : '';

  return (
    <Modal show={showMatterModal} onHide={() => setShowMatterModal(false)}>
      <Modal.Header closeButton />
      <Formik
          initialValues={{ title: initialTitle }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            if(isUpdate) {
              await dispatch(matterActions.update({ token: matter.token, title: values.title }));
            } else {
              await dispatch(matterActions.create({ title: values.title }));
            }
            
            setShowMatterModal(false);
            setSubmitting(false);
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
            <Modal.Body>
              <Form.Group>
                <Form.Label>Matter Name</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                  ref={input => input && input.focus()}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder="Enter matter name"
                  isInvalid={errors.name && touched.name}
                />
                {errors.name && touched.name &&
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                }
              </Form.Group>
      </Modal.Body>
      <Modal.Footer>
              <Button
                type="submit"
                // disabled={isSubmitting || !isValid}
                className="btn btn-primary btn-block"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button></Modal.Footer>
            </Form>
          )}
        </Formik>
    </Modal>
  );
}

MatterModal.propTypes = {};

export default MatterModal;
