import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Modal, Form, Button } from 'react-bootstrap';
import { object, string, setLocale } from "yup";

import FormikDateTimePicker from 'components/FormikDateTimePicker';
import moment from 'moment';

setLocale({
  mixed: {
    required: "Is required"
  },
});

function MatterAddModal({
  showMatterModal,
  editToken,
  indexedObject,
  setShowMatterModal,
  createItem,
  updateItem,
  timezone
}) {

  const validationSchema = object().shape({
    title: string()
      .required()
  });

  moment.tz.setDefault(timezone);

  const isUpdate = editToken ? true : false;
  const matter = isUpdate ? indexedObject[editToken] : {};
  const ROUNDING = 15 * 60 * 1000; // Rounds up to nearest 15 min interval
  console.log('matter', matter)
  const initialValues = isUpdate ? { title: matter.title, startAt: moment(matter.start_at), endAt: moment(matter.end_at) } : { title: '', startAt: moment(Math.ceil((+moment()) / ROUNDING) * ROUNDING).add(30, 'minutes'), endAt: moment(Math.ceil((+moment()) / ROUNDING) * ROUNDING).add(90, 'minutes') };
  console.log('initialValues', initialValues)
  return (
    <Modal show={showMatterModal} onHide={() => setShowMatterModal(false)}>
      <Modal.Header closeButton >
        <Modal.Title>{isUpdate ? "Edit Matter" : "Add a Matter"}</Modal.Title>
      </Modal.Header>
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              const { title, startAt, endAt } = values;
              const data = {
                token: matter.token,
                title,
                startAt: startAt.format(),
                endAt: endAt.format(),
              }
              if(isUpdate) {
                await updateItem({...data});
              } else {
                await createItem({...data});
              }
              setShowMatterModal(false);
            } catch (error) {
              setErrors({...error})
            } finally {
              setSubmitting(false);
            };
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
            setFieldTouched,
            setFieldValue,
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
                  placeholder="Describe this Matter..."
                  isInvalid={errors.name && touched.name}
                />
                {errors.name && touched.name &&
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                }
              </Form.Group>
              <FormikDateTimePicker
                value={values.startAt}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                errors={errors}
                touched={touched}
                name="startAt"
                label="Start At"
                placeholder="Matter starts at..."
                timezone={timezone}
              />
              <FormikDateTimePicker
                value={values.endAt}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                errors={errors}
                touched={touched}
                name="endAt"
                label="Ends At"
                placeholder="Matter ends at..."
                timezone={timezone}
              />
      </Modal.Body>
      <Modal.Footer>
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="btn btn-primary"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button></Modal.Footer>
            </Form>
          )}
        </Formik>
    </Modal>
  );
}

MatterAddModal.propTypes = {};

export default MatterAddModal;

