/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    Typography,
    TextField
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';

import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { login, logout } from 'services/apis/user';
import { GET_EVENTS, GET_GAMES, GET_REWARDS, SET_TOKEN, LOG_OUT, GET_AUDIENCES } from 'store/actions';

import { store } from 'store';
import { getAudience, getCampaign, getGame, getReward } from 'services/apis/server';

const DashboardPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/dashbaord" {...props} role={undefined} />);
const ForgotPasswordPage = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/auth/forgotpassword" {...props} role={undefined} />);

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const scriptedRef = useScriptRef();
    const [checked, setChecked] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validationSchema = Yup.object({
        email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: Yup.string('Enter your password')
            .min(6, 'Password should be of minimum 6 characters length')
            .required('Password is required')
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onLogin(values);
        }
    });
    const state = store.getState();
    const onLogin = async (values) => {
        const data = await login({
            email: values.email,
            password: values.password
        });
        const { access_token } = data;
        dispatch({ type: SET_TOKEN, token: access_token });
        const rewards = await getReward();
        dispatch({ type: GET_REWARDS, rewards: rewards });
        const audiences = await getAudience();
        dispatch({ type: GET_AUDIENCES, audiences: audiences });
        navigate('/dashboard');
    };

    useEffect(() => {
        let success = false;

        try {
            const payload = jwt(auth.token);
            if (payload.exp * 1000 > Date.now()) {
                success = true;
            } else {
                toast(`Your token is expired!`, { type: 'error' });
            }
        } catch {}
        if (!success) {
            logout();
        }
    }, []);
    const handleNext = (values) => {
        if (!values.email) {
            return alert('Please Enter Your Email!');
        }
        navigate('/auth/forgotpassword', { state: { values } });
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
                            marginBottom="25px"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quam diam viverra pellentesque tincidunt duis in.
                            Ornare.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ ...theme.typography.customInput, marginBottom: '45px' }}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    sx={{ ...theme.typography.customInput, marginBottom: '45px' }}
                />

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
                        onClick={() => handleNext(formik.values)}
                        // component={ForgotPasswordPage}
                        // to="/auth/forgotpassword"
                    >
                        Forgot Password?
                    </Typography>
                </Stack>
                <Button
                    disableElevation
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
            </form>
        </>
    );
};

export default FirebaseLogin;
