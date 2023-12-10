import { Navigate, Route, Routes } from 'react-router-dom';

import waveBackground from './assets/images/wave-bg.jpg';
import { AppRoutes } from './constants/routes';

import SignUp from './components/sign-up/sign-up.component';
import Login from './components/login/login.component';

import './App.css';
import { ToastContainer } from 'react-toastify';
import { toastContainerConfig } from './utils/toast.utils';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${waveBackground})` }}>
      <div className='glass-morph-container'>
        <Routes>
          <Route path='/' element={<Navigate to={AppRoutes.login} />} />
          <Route path={AppRoutes.signUp} element={<SignUp />} />
          <Route path={AppRoutes.login} element={<Login />} />
        </Routes>
      </div>
      <ToastContainer {...toastContainerConfig} />
    </div>
  );
}

export default App;
