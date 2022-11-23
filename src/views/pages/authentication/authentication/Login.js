/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import AuthWrapper1 from '../AuthWrapper1';
import AuthLogin from '../auth-forms/AuthLogin';

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="row" justifyContent="left" alignItems="center" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={12} sm={12} lg={7}>
                    <Grid
                        container
                        sx={{
                            width: '100%',
                            marginLeft: 'auto',
                            maxWidth: '1320px',
                            height: '100vh',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sm={12}
                            lg={12}
                            sx={{
                                marginLeft: '166px',
                                marginRight: '283px'
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
                                                <Typography
                                                    color="#FFFFFF"
                                                    gutterBottom
                                                    fontSize={matchDownSM ? '50px' : '70px'}
                                                    fontWeight="700"
                                                    fontStyle="normal"
                                                    fontFamily="Inter"
                                                    lineHeight="85px"
                                                    marginBottom="12px"
                                                >
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
                                        <Typography sx={{ lineHeight: '39px', fontSize: '21.5px', fontWeight: '400' }}>
                                            Don&apos;t have an account?
                                        </Typography>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Typography
                                            component={Link}
                                            to="/pages/register/register3"
                                            variant="subtitle1"
                                            sx={{ textDecoration: 'none', lineHeight: '39px', fontSize: '21.5px', fontWeight: '400' }}
                                        >
                                            Sign up
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
