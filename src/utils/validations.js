import { isEmpty } from 'lodash';

export const validateUsername = (value) => {
  if (isEmpty(value)) return 'Usename should have a value';
  if (value.length < 4) return 'Username must be at least 4 characters';
};

export const validatePassword = (value) => {
  if (isEmpty(value)) return 'Password should have a value';
  if (value.length < 6) return 'Password must be at least 6 characters';
};

export const validateEmail = (value) => {
  if (isEmpty(value)) return 'Email should have a value';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    return 'Invalid email address';
};

export const validateConfirmPassword = (value, prevPassword) => {
  if (!isEmpty(value)) return 'Please confirm password';
  if (value !== prevPassword) return `Passwords don't match`;
};

export const validateDetails = (value, fieldName, password) => {
  let message = '';
  switch (fieldName) {
    case 'name':
      message = validateUsername(value, 'name');
      break;
    case 'email':
      message = validateEmail(value, 'email');
      break;
    case 'password':
      message = validatePassword(value, 'password');
      break;
    case 'confirmPassword':
      message = validateConfirmPassword(value, 'confirmPassword', password);
      break;
    default:
      message = '';
  }

  return message;
};
