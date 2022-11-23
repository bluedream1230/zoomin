/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

const LoginPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/auth/login" {...props} role={undefined} />);

const CreatePassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();

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
                            marginBottom="52px"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec nisl, eget integer nunc duis facilisi mauris urna,
                            sagittis.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().max(255).required('Password is required'),
                    confirm: Yup.string().max(255).required('Confirm is required')
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
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput, marginBottom: '45px' }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">New Password</InputLabel>
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
                        <FormControl
                            fullWidth
                            error={Boolean(touched.confirm && errors.confirm)}
                            sx={{ ...theme.typography.customInput, marginBottom: '51px' }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-confirm-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.confirm}
                                name="confirm"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.confirm && errors.confirm && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.confirm}
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
                                    component={LoginPage}
                                    to="/auth/login"
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
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
                                    Submit Now
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default CreatePassword;
