/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery, Box, Button } from '@mui/material';

import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AnimateButton from 'ui-component/extended/AnimateButton';

const ResetPasswordPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/auth/resetpassword" {...props} role={undefined} />);

const ForgotPassword = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Grid container justifyContent="left" alignItems="left" sx={{ minHeight: 'calc(100vh - 250px)' }}>
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
                                                        Forgot Password?
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="column" justifyContent="center" spacing={2}>
                                            <Grid item xs={12} container alignItems="left" justifyContent="left">
                                                <Box sx={{ mb: 2 }}>
                                                    <Typography variant="subtitle1" color="#FFFFFF">
                                                        That&apos;s okey, it heppens! Click on the button below to reset your password
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} container alignItems="left" justifyContent="left">
                                                <Box sx={{ mt: 2 }}>
                                                    <AnimateButton>
                                                        <Button
                                                            component={ResetPasswordPage}
                                                            to="/auth/resetpassword"
                                                            disableElevation
                                                            fullWidth
                                                            size="large"
                                                            type="submit"
                                                            variant="contained"
                                                            sx={{ backgroundColor: '#FF0676', width: '490px' }}
                                                        >
                                                            Reset Your Password
                                                        </Button>
                                                    </AnimateButton>
                                                </Box>
                                            </Grid>
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

export default ForgotPassword;
