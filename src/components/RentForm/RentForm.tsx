import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { UseModal } from '../../zustand/modal';
import clsx from 'clsx';
import s from './RentForm.module.css';

const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
  email: Yup.string().matches(emailRegular, 'Wrong email format').required('Required'),
  phone: Yup.string().required('Required'),
  comment: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
});

interface RentForm {
  name: string;
  email: '';
  phone: string;
  comment: string;
}

const initialValues: RentForm = {
  name: '',
  email: '',
  phone: '',
  comment: '',
};

const RentForm = () => {
  const { openModal } = UseModal();

  const handleSubmit = (values: RentForm, action: FormikHelpers<RentForm>) => {
    console.log(values);
    openModal();
    action.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={clsx(s.rentForm)}>
          <div className={clsx(s.inputErrorTextContainer)}>
            <Field
              type='text'
              name='name'
              placeholder='Full Name'
              className={clsx(s.rentFormInput)}
            />
            <ErrorMessage name='name' component='div' className={clsx(s.errorMessage)} />
          </div>

          <div className={clsx(s.inputErrorTextContainer)}>
            <Field
              type='email'
              name='email'
              placeholder='Email'
              className={clsx(s.rentFormInput)}
            />
            <ErrorMessage name='email' component='div' className={clsx(s.errorMessage)} />
          </div>

          <div className={clsx(s.inputErrorTextContainer)}>
            <Field
              type='text'
              name='phone'
              placeholder='Phone number'
              className={clsx(s.rentFormInput)}
            />
            <ErrorMessage name='phone' component='div' className={clsx(s.errorMessage)} />
          </div>

          <div className={clsx(s.inputErrorTextContainer)}>
            <Field
              as='textarea'
              name='comment'
              placeholder='Full Name'
              className={clsx(s.rentFormInput, s.rentFormComment)}
            />
            <ErrorMessage name='comment' component='div' className={clsx(s.errorMessage)} />
          </div>

          <button type='submit' className={clsx(s.rentFormButton)}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RentForm;
