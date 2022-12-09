/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
const ForgotPassword = Loadable(lazy(() => import('views/pages/authentication/authentication/ForgotPassword')));
const ResetPassword = Loadable(lazy(() => import('views/pages/authentication/authentication/ResetPassword')));
const CreatePassword = Loadable(lazy(() => import('views/pages/authentication/authentication/CreatePassword')));
const AuthLogout = Loadable(lazy(() => import('views/pages/authentication/auth-forms/AuthLogout')));
const SignUp = Loadable(lazy(() => import('views/pages/authentication/authentication/SignUp')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <AuthLogin />
        },
        {
            path: '/auth/login',
            element: <AuthLogin />
        },
        {
            path: '/auth/forgotpassword',
            element: <ForgotPassword />
        },
        {
            path: '/auth/resetpassword',
            element: <ResetPassword />
        },
        {
            path: '/auth/createpassword/:token',
            element: <CreatePassword />
        },
        {
            path: '/auth/signup',
            element: <SignUp />
        },
        {
            path: '/auth/logout',
            element: <AuthLogout />
        }
    ]
};

export default AuthenticationRoutes;
