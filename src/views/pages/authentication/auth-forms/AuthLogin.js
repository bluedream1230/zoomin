/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Yup from 'yup';
import { Formik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

const DashboardPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/dashbaord" {...props} role={undefined} />);
const ForgotPasswordPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/auth/forgotpassword" {...props} role={undefined} />);

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                            marginBottom="65px"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quam diam viverra pellentesque tincidunt duis in.
                            Ornare.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    submit: null
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
                            sx={{ ...theme.typography.customInput, marginBottom: '45px' }}
                        >
                            <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email Address / Username"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput, marginBottom: '45px' }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                sx={{
                                    color: '#FFFFFF',
                                    '& > span': {
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '21px',
                                        lineHeight: '39px'
                                    }
                                }}
                                label="Remember me"
                            />
                            <Typography
                                color="#FFFFFF"
                                sx={{
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '21px',
                                    lineHeight: '180%'
                                }}
                                component={ForgotPasswordPage}
                                to="/auth/forgotpassword"
                            >
                                Forgot Password?
                            </Typography>
                        </Stack>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    component={DashboardPage}
                                    to="/dashboard"
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#FF0676',
                                        marginTop: '50px',
                                        marginBottom: '50px',
                                        borderRadius: '18px',
                                        height: '90px',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '27px',
                                        lineHeight: '34px'
                                    }}
                                >
                                    Login
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
