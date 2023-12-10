import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../constants/routes';
import { login } from '../../services/auth.service';

import AuthForm from '../shared/auth-form.component';

const Login = () => {
  const handleSubmit = async (details) => {
    await login(details);
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
