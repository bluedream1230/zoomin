/* eslint-disable no-unused-vars */
// material-ui
import { styled } from '@mui/material/styles';

import BackgroundImage from 'assets/images/login-screen.jpg';

const AuthWrapper1 = styled('div')(({}) => ({
    backgroundImage: `url(${BackgroundImage})`,
    minHeight: '100vh'
}));

export default AuthWrapper1;
