import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import { lazy } from 'react';

import Loadable from 'ui-component/Loadable';

// ==============================|| APP ||============================== //
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { stripePublicKey } from 'config';
import { store } from 'store';
import Login from 'views/pages/authentication/authentication/Login';
import { useCallback } from 'react';
const stripePromise = loadStripe(stripePublicKey);
const state = store.getState();

const App = () => {
    const customization = useSelector((state) => state.customization);
    const auth = useSelector((state) => state.auth);

    const appPage = useCallback(() => {
        if (!auth.token) {
            return (
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={themes(customization)}>
                        <CssBaseline />
                        <NavigationScroll>
                            <Elements stripe={stripePromise}>
                                <Login />
                            </Elements>
                        </NavigationScroll>
                    </ThemeProvider>
                </StyledEngineProvider>
            );
        }

        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <Elements stripe={stripePromise}>
                            <Routes />
                        </Elements>
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        );
    }, [auth]);

    return appPage();
};

export default App;
