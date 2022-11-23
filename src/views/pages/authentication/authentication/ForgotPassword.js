/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery, Box, Button } from '@mui/material';

import AuthWrapper1 from '../AuthWrapper1';
import AnimateButton from 'ui-component/extended/AnimateButton';

const ResetPasswordPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/auth/resetpassword" {...props} role={undefined} />);

const ForgotPassword = () => {
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
                            lg={5}
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
                                                    marginBottom="47px"
                                                    width="615px"
                                                >
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
                                                <Typography
                                                    width="555px"
                                                    fontSize="21px"
                                                    fontWeight="400"
                                                    fontStyle="normal"
                                                    fontFamily="Inter"
                                                    lineHeight="39px"
                                                    color="#FFFFFF"
                                                >
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
                                                        sx={{
                                                            backgroundColor: '#FF0676',
                                                            width: '490px',
                                                            marginTop: '98px',
                                                            borderRadius: '18px',
                                                            height: '90px',
                                                            fontFamily: 'Inter',
                                                            fontStyle: 'normal',
                                                            fontWeight: '700',
                                                            fontSize: '27px',
                                                            lineHeight: '34px'
                                                        }}
                                                    >
                                                        Reset Your Password
                                                    </Button>
                                                </AnimateButton>
                                            </Box>
                                        </Grid>
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

export default ForgotPassword;
