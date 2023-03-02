/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, OutlinedInput, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { resetPassword } from 'services/apis/server';

const CreatePasswordPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/auth/createpassword" {...props} role={undefined} />);

const ResetPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const { state } = useLocation();
    const email = state.email;
    const sendForMail = async (values) => {
        try {
            console.log(values, email);
            if (values == email) {
                const data = await resetPassword({ email: values, userid: email });
            }
            console.log('You must enter your registered email.');
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="left" justifyContent="left">
                    <Box sx={{ mb: 2 }}>
                        <Typography
                            color="#FFFFFF"
                            fontFamily="Inter"
                            fontStyle="normal"
                            fontWeight="400"
                            fontSize="21px"
                            lineHeight="40px"
                            marginBottom="75px"
                            width="555px"
                        >
                            No Worries! Just enter your email and we'll send you a reset password link.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    submit: null,
                    email: email ? email : ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl
                            fullWidth
                            error={Boolean(touched.email && errors.email)}
                            sx={{ ...theme.typography.customInput, marginBottom: '58px' }}
                        >
                            <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email Address"
                                inputProps={{}}
                                readOnly
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    // component={CreatePasswordPage}
                                    // to="/auth/createpassword"
                                    disableElevation
                                    // disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    onClick={() => sendForMail(values.email)}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#FF0676',
                                        borderRadius: '18px',
                                        height: '90px',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '27px',
                                        lineHeight: '34px'
                                    }}
                                >
                                    Send Recovery Email
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ResetPassword;
