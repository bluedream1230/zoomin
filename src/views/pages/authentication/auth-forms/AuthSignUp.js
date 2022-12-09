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
import { login, logout, signup } from 'services/apis/user';
import { GET_EVENTS, GET_GAMES, GET_REWARDS, SET_TOKEN, LOG_OUT } from 'store/actions';
import { gridSpacing } from 'store/constant';

import { store } from 'store';
import { getCampaign, getGame, getReward } from 'services/apis/server';

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
        firstname: Yup.string('Enter your first name').required('First Name is required'),
        lastname: Yup.string('Enter your last name').required('Last Name is required'),
        email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        phone: Yup.string('Enter your Phone number').required('Phone number is required'),
        company: Yup.string('Enter your Company name').required('Company name is required'),
        password: Yup.string('Enter your password')
            .min(6, 'Password should be of minimum 6 characters length')
            .required('Password is required'),
        confirm: Yup.string()
            .when('password', {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same')
            })
            .max(255)
            .required('Confirm is required')
    });
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phone: '',
            company: '',
            confirm: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onSignup(values);
        }
    });
    const state = store.getState();
    const onSignup = async (values) => {
        const data = await signup({
            name: values.firstname,
            lastname: values.lastname,
            company: values.company,
            phone: values.phone,
            email: values.email,
            password: values.password
        });
        console.log(data);
        navigate('/auth/login');
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="firstname"
                            name="firstname"
                            label="First Name"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="lastname"
                            name="lastname"
                            label="Last Name"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                            helperText={formik.touched.lastname && formik.errors.lastname}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="company"
                            name="company"
                            label="Company Name"
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            error={formik.touched.company && Boolean(formik.errors.company)}
                            helperText={formik.touched.company && formik.errors.company}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Phone Number"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            sx={{ ...theme.typography.customInput }}
                        />

                        <TextField
                            fullWidth
                            id="confirm"
                            name="confirm"
                            label="Confirm Password"
                            type="password"
                            value={formik.values.confirm}
                            onChange={formik.handleChange}
                            error={formik.touched.confirm && Boolean(formik.errors.confirm)}
                            helperText={formik.touched.confirm && formik.errors.confirm}
                            sx={{ ...theme.typography.customInput }}
                        />
                        <Button
                            disableElevation
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            sx={{
                                marginTop: '30px',
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
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default FirebaseLogin;
