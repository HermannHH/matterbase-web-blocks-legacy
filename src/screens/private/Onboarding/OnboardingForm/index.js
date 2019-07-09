import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { object, string, setLocale } from "yup";
import Select from 'react-select';

import FormikSelect from 'components/FormikSelect';

setLocale({
  mixed: {
    required: "Is required"
  },
});

function OnboardingForm({
  blockToken,
  timezoneOptionsArray
}) {

  const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(), 
    timezone: string().required(),
  });

  
  return (
      <Formik
          initialValues={{ firstName: '',  lastName: '',  timezone: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // await createItem({ blockToken, body: values.body });
            // resetForm();
            // setSubmitting(false);
            console.log('values', values)
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
            setFieldValue,
            setFieldTouched,
            isValid
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  // rows="3"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="Your First Name"
                  isInvalid={errors.firstName && touched.firstName}
                />
                {errors.firstName && touched.firstName &&
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                }
              </Form.Group>


              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  // rows="3"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="Your Last Name"
                  isInvalid={errors.lastName && touched.lastName}
                />
                {errors.lastName && touched.lastName &&
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                }
              </Form.Group>
              <FormikSelect
                value={values.timezone}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                errors={errors}
                touched={touched}
                options={timezoneOptionsArray}
                name="timezone"
                label="Timezone"
                placeholder="Your timezone"
              />
              <div>
                <Button
                  type="submit"
                  // disabled={isSubmitting || !isValid}
                  className="btn btn-primary btn-block"
                >
                  {isSubmitting ? "Saving..." : "Save & Continue"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
  );
}

OnboardingForm.propTypes = {};

export default OnboardingForm;

