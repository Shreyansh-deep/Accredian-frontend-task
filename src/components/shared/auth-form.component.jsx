import { TextField } from '@mui/material';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';

import { validateDetails } from '../../utils/validations';

import './auth-form.styles.css';

const defaultDetails = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

const AuthForm = ({ isSignUp, handleSubmit }) => {
  const [formDetails, setFormDetails] = useState(defaultDetails);
  const [errors, setErrors] = useState(defaultDetails);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    //call submit if there are no errors
    if (!Object.values(errors).every((error) => error.length)) {
      try {
        setLoading(true);
        await handleSubmit(formDetails);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormDetails({ ...formDetails, [name]: value });

    if (!isSignUp) return;

    // validate check password and confirm password together
    if (name === 'password' || name === 'confirmPassword') {
      setErrors((prev) => ({
        ...prev,
        [name]: validateDetails(value, 'password', value),
      }));

      setErrors((prev) => ({
        ...prev,
        [name]: validateDetails(value, 'confirmPassword', value),
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: validateDetails(value, name) }));
    }
  };

  return (
    <form className='auth-form' onSubmit={onSubmit}>
      <TextField
        fullWidth
        name='name'
        label='Username'
        onChange={handleChange}
        error={formDetails.name && errors.name}
        helperText={formDetails.name && errors.name}
      />
      {isSignUp && (
        <TextField
          fullWidth
          name='email'
          label='Email'
          onChange={handleChange}
          error={formDetails.email && errors.email}
          helperText={formDetails.email && errors.email}
        />
      )}
      <TextField
        fullWidth
        name='password'
        label='Password'
        onChange={handleChange}
        error={formDetails.password && errors.password}
        helperText={formDetails.password && errors.password}
      />
      {isSignUp && (
        <TextField
          fullWidth
          label='Confirm Password'
          name='confirmPassword'
          onChange={handleChange}
          error={formDetails.confirmPassword && errors.confirmPassword}
          helperText={formDetails.confirmPassword && errors.confirmPassword}
        />
      )}
      <LoadingButton loading={loading} variant='contained' type='submit'>
        {isSignUp ? 'Sign Up' : 'Login'}
      </LoadingButton>
    </form>
  );
};

export default AuthForm;
