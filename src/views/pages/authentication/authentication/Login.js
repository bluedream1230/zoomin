/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import { gridSpacing } from 'store/constant';
import AuthLogin from '../auth-forms/AuthLogin';

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Grid container justifyContent="left" alignItems="left" sx={{ minHeight: 'calc(100vh - 150px)' }}>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sm={12}
                            lg={5}
                            sx={{
                                m: { xs: 1, sm: 5 },
                                mb: 0
                            }}
                        >
                            <AuthCardWrapper
                                sx={{
                                    backgroundColor: 'transparent'
                                }}
                            >
                                <Grid container alignItems="left" justifyContent="left">
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="left"
                                            justifyContent="left"
                                        >
                                            <Grid item>
                                                <Stack alignItems="left" justifyContent="left" spacing={1}>
                                                    <Typography color="#FFFFFF" gutterBottom fontSize={matchDownSM ? '50px' : '70px'}>
                                                        Welcome.
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="row" alignItems="left" xs={12}>
                                            <Typography sx={{ lineHeight: '1.75' }}>Don&apos;t have an account?</Typography>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Typography
                                                component={Link}
                                                to="/pages/register/register3"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Sign up
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
