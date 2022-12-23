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
    path: 'auth',
    children: [
        // {
        //     path: '/',
        //     element: <AuthLogin />
        // },
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'forgotpassword',
            element: <ForgotPassword />
        },
        {
            path: 'resetpassword',
            element: <ResetPassword />
        },
        {
            path: 'createpassword/:token',
            element: <CreatePassword />
        },
        {
            path: 'signup',
            element: <SignUp />
        },
        {
            path: 'logout',
            element: <AuthLogout />
        }
    ]
};

export default AuthenticationRoutes;
