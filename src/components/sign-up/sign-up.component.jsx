import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../constants/routes';
import { signUp } from '../../services/auth.service';
import { notify } from '../../utils/toast.utils';

import AuthForm from '../shared/auth-form.component';

const SignUp = () => {
  const handleSubmit = async (details) => {
    const { error } = await signUp(details);

    if (error) {
      notify(error.message, 'error');
    } else {
      notify('Signup successful', 'success');
    }
  };

  return (
    <>
      <AuthForm isSignUp handleSubmit={handleSubmit} />
      <Typography>Already have an account?</Typography>
      <Link to={AppRoutes.login}>
        <Button
          color='inherit'
          sx={{ textTransform: 'capitalize', color: 'black' }}
        >
          login
        </Button>
      </Link>
    </>
  );
};

export default SignUp;
