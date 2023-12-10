import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../constants/routes';
import { login } from '../../services/auth.service';
import { notify } from '../../utils/toast.utils';

import AuthForm from '../shared/auth-form.component';

const Login = () => {
  const handleSubmit = async (details) => {
    const { error } = await login(details);

    if (error) {
      notify(error.message, 'error');
    } else {
      notify('Login successful', 'success');
    }
  };

  return (
    <>
      <AuthForm handleSubmit={handleSubmit} />
      <Typography>Create a new account</Typography>
      <Link to={AppRoutes.signUp}>
        <Button
          color='inherit'
          sx={{ textTransform: 'capitalize', color: 'black' }}
        >
          sign up
        </Button>
      </Link>
    </>
  );
};

export default Login;
