/* eslint-disable no-unused-vars */
import * as React from 'react';
import * as Yup from 'yup';
import {
    Autocomplete,
    Button,
    CardContent,
    Grid,
    TextField,
    Typography,
    useMediaQuery,
    Box,
    Backdrop,
    CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CountrySelect from 'ui-component/CountrySelect';
import { useFormik } from 'formik';
import { store } from 'store';
import { getUserInfo, sendMail, updateBillInfo, updateUserInfo } from 'services/apis/server';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { Input } from '@material-ui/core';
import { RestaurantMenu } from '@mui/icons-material';

const state = store.getState();

const Setting = () => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [isLoading, setLoading] = React.useState(false);
    const decoded = jwt_decode(state.auth.token);

    console.log(decoded);
    const validationSchema = Yup.object({
        username: Yup.string('Enter name').required('Name is required'),
        useremail: Yup.string('Enter Email').email('Invalid email format').required('Email is required'),
        userphone: Yup.string('Enter Phone').required('Phone is required'),
        userstreet: Yup.string('Enter Street').required('Street is required'),
        usersuite: Yup.string('Enter Suite').required('Suite is required'),
        usercity: Yup.string('Enter City').required('City is required'),
        userstate: Yup.string('Enter State').required('State is required'),
        userzip: Yup.string('Enter Zip').required('Zip is required'),
        usersubscription: Yup.string('Enter Subscription').required('Subscription is required'),
        billfirstname: Yup.string('Enter First name').required('First name is required'),
        billlastname: Yup.string('Enter Last name').required('Last name is required'),
        billemail: Yup.string('Enter Email').email('Invalid email format').required('Email is required'),
        billphone: Yup.string('Enter Phone').required('Phone is required'),
        billaddress: Yup.string('Enter Address').required('Address is required'),
        billcountry: Yup.string('Enter Country').required('Country is required'),
        billccn: Yup.string('Enter Credit card number').required('Credit Card Number is required'),
        billCVV: Yup.string('Enter CVV').required('CVV is required'),
        billexpirationdateM: Yup.string('Enter expiration Date').required('Enter correct'),
        billexpirationdateY: Yup.string('Enter expiration Date').required('Enter correct')
    });

    const validationSchema1 = Yup.object({
        email: Yup.string('Enter Email').email('Invalid email format').required('Email is required'),
        name: Yup.string('Enter name').required('Name is required'),
        message: Yup.string('Enter Message').required('Please Enter Message')
    });

    const formik1 = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: ''
        },
        validationSchema: validationSchema1,
        onSubmit: (values) => {
            onSend(values);
        }
    });

    const onSend = async (values) => {
        try {
            setLoading(true);
            const data = await sendMail({
                email: values.email,
                sender: values.name,
                text: values.message
            });
            setLoading(false);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            useremail: '',
            userphone: '',
            userstreet: '',
            usersuite: '',
            usercity: '',
            userstate: '',
            userzip: '',
            usersubscription: '',
            billfirstname: '',
            billlastname: '',
            billemail: '',
            billphone: '',
            billaddress: '',
            billcountry: '',
            billccn: '',
            billCVV: '',
            billexpirationdateM: '',
            billexpirationdateY: '',
            logo: []
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values.logo);
            if (!values.logo) {
                alert("Don't forget upload a photo");
            } else {
                onUpdateBillInfo(values);
                onUpdateUserInfo(values);
            }
        }
    });
    const load = async () => {
        const userInfo = await getUserInfo();
        console.log('userInfo', userInfo);
        const userInfoFormikIn = {
            username: userInfo.name,
            useremail: userInfo.email,
            userphone: userInfo.phone,
            userstreet: userInfo.street,
            usersuite: userInfo.suite,
            usercity: userInfo.city,
            userstate: userInfo.state,
            userzip: userInfo.zip,
            usersubscription: userInfo.subscription,
            billfirstname: userInfo.bill?.firstname,
            billlastname: userInfo.bill?.lastname,
            billemail: userInfo.bill?.email,
            billphone: userInfo.bill?.phone,
            billaddress: userInfo.bill?.billingaddress,
            billcountry: userInfo.bill?.country,
            billccn: userInfo.bill?.ccn,
            billCVV: userInfo.bill?.CVV,
            billexpirationdateM: userInfo.bill?.billexpirationdateM,
            billexpirationdateY: userInfo.bill?.billexpirationdateY
        };
        formik.setValues(userInfoFormikIn, false);
    };

    React.useEffect(() => {
        load();
    }, []);

    const onUpdateUserInfo = async (values) => {
        try {
            setLoading(true);
            const data = await updateUserInfo(
                {
                    name: values.username,
                    email: values.useremail,
                    phone: values.userphone,
                    subscription: values.usersubscription,
                    street: values.userstreet,
                    suite: values.usersuite,
                    city: values.usercity,
                    state: values.userstate,
                    zip: values.userzip
                },
                values.logo
            );
            console.log('user:', data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const onUpdateBillInfo = async (values) => {
        try {
            setLoading(true);
            const data = await updateBillInfo({
                firstname: values.billfirstname,
                lastname: values.billlastname,
                email: values.billemail,
                phone: values.billphone,
                billingaddress: values.billaddress,
                country: values.billcountry,
                ccn: values.billccn,
                CVV: values.billCVV,
                billexpirationdateM: billexpirationdateM,
                billexpirationdateY: billexpirationdateY
                // user: state.auth
            });
            console.log('update bill', data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {isLoading && (
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <MainCard>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between" sx={{ marginBottom: '24px' }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '30px',
                                        lineHeight: '36px',
                                        color: '#FFFFFF'
                                    }}
                                >
                                    Profile Information
                                </Typography>

                                <Button
                                    variant="outlined"
                                    component="label"
                                    sx={{
                                        borderRadius: '8.8px',
                                        border: '1px solid #04B4DD',
                                        height: '40px',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '16px',
                                        lineHeight: '19px',
                                        color: '#04B4DD'
                                    }}
                                >
                                    Upload a Photo
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        name="logo"
                                        onChange={(event) => {
                                            formik.setFieldValue('logo', event.currentTarget.files[0]);
                                        }}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    margin="normal"
                                    name="username"
                                    type="text"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    margin="normal"
                                    name="useremail"
                                    type="text"
                                    value={formik.values.useremail}
                                    onChange={formik.handleChange}
                                    error={formik.touched.useremail && Boolean(formik.errors.useremail)}
                                    helperText={formik.touched.useremail && formik.errors.useremail}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    margin="normal"
                                    name="userphone"
                                    type="text"
                                    value={formik.values.userphone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.userphone && Boolean(formik.errors.userphone)}
                                    helperText={formik.touched.userphone && formik.errors.userphone}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Street"
                                    margin="normal"
                                    name="userstreet"
                                    type="text"
                                    value={formik.values.userstreet}
                                    onChange={formik.handleChange}
                                    error={formik.touched.userstreet && Boolean(formik.errors.userstreet)}
                                    helperText={formik.touched.userstreet && formik.errors.userstreet}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Suite"
                                    margin="normal"
                                    name="usersuite"
                                    type="text"
                                    value={formik.values.usersuite}
                                    onChange={formik.handleChange}
                                    error={formik.touched.usersuite && Boolean(formik.errors.usersuite)}
                                    helperText={formik.touched.usersuite && formik.errors.usersuite}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="City"
                                    margin="normal"
                                    name="usercity"
                                    type="text"
                                    value={formik.values.usercity}
                                    onChange={formik.handleChange}
                                    error={formik.touched.usercity && Boolean(formik.errors.usercity)}
                                    helperText={formik.touched.usercity && formik.errors.usercity}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="State"
                                    margin="normal"
                                    name="userstate"
                                    type="text"
                                    value={formik.values.userstate}
                                    onChange={formik.handleChange}
                                    error={formik.touched.userstate && Boolean(formik.errors.userstate)}
                                    helperText={formik.touched.userstate && formik.errors.userstate}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Zip"
                                    margin="normal"
                                    name="userzip"
                                    type="text"
                                    value={formik.values.userzip}
                                    onChange={formik.handleChange}
                                    error={formik.touched.userzip && Boolean(formik.errors.userzip)}
                                    helperText={formik.touched.userzip && formik.errors.userzip}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Subscription"
                                    margin="normal"
                                    name="usersubscription"
                                    type="text"
                                    value={formik.values.usersubscription}
                                    onChange={formik.handleChange}
                                    error={formik.touched.usersubscription && Boolean(formik.errors.usersubscription)}
                                    helperText={formik.touched.usersubscription && formik.errors.usersubscription}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={gridSpacing} sx={{ marginTop: '55px' }}>
                        <Grid item xs={12} marginBottom="25px">
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '30px',
                                    lineHeight: '36px',
                                    color: '#FFFFFF'
                                }}
                            >
                                Billing Information
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="billfirstname"
                                    type="text"
                                    value={formik.values.billfirstname}
                                    onChange={formik.handleChange}
                                    error={formik.touched.billfirstname && Boolean(formik.errors.billfirstname)}
                                    helperText={formik.touched.billfirstname && formik.errors.billfirstname}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    name="billlastname"
                                    type="text"
                                    value={formik.values.billlastname}
                                    onChange={formik.handleChange}
                                    error={formik.touched.billlastname && Boolean(formik.errors.billlastname)}
                                    helperText={formik.touched.billlastname && formik.errors.billlastname}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Email Addreess"
                                    margin="normal"
                                    name="billemail"
                                    type="text"
                                    value={formik.values.billemail}
                                    onChange={formik.handleChange}
                                    error={formik.touched.billemail && Boolean(formik.errors.billemail)}
                                    helperText={formik.touched.billemail && formik.errors.billemail}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    margin="normal"
                                    name="billphone"
                                    type="text"
                                    value={formik.values.billphone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.billphone && Boolean(formik.errors.billphone)}
                                    helperText={formik.touched.billphone && formik.errors.billphone}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Billing Address"
                                    margin="normal"
                                    name="billaddress"
                                    type="text"
                                    value={formik.values.billaddress}
                                    onChange={formik.handleChange}
                                    error={formik.touched.billaddress && Boolean(formik.errors.billaddress)}
                                    helperText={formik.touched.billaddress && formik.errors.billaddress}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid
                                container
                                sx={{
                                    '& .MuiAutocomplete-popper': {
                                        '& .MuiPaper-root': {
                                            backgroundColor: '#360068'
                                        }
                                    }
                                }}
                            >
                                <Autocomplete
                                    disablePortal
                                    id="country-select-demo"
                                    options={countries}
                                    getOptionLabel={(option) => option.label}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                            <img
                                                loading="lazy"
                                                width="20"
                                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                                alt=""
                                            />
                                            {option.label} ({option.code}) +{option.phone}
                                        </Box>
                                    )}
                                    onChange={(e, v) => {
                                        formik.setFieldValue('billcountry', v.label);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Choose a country"
                                            error={formik.touched.billcountry && Boolean(formik.errors.billcountry)}
                                            helperText={formik.touched.billcountry && formik.errors.billcountry}
                                        />
                                    )}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Credit Card Number"
                                    margin="normal"
                                    name="billccn"
                                    type="text"
                                    value={formik.values.billccn}
                                    onChange={formik.handleChange}
                                    error={formik.touched.billccn && Boolean(formik.errors.billccn)}
                                    helperText={formik.touched.billccn && formik.errors.billccn}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="CVV"
                                    margin="normal"
                                    name="billCVV"
                                    type="number"
                                    value={formik.values.billCVV}
                                    onChange={formik.handleChange}
                                    error={formik.touched.billCVV && Boolean(formik.errors.billCVV)}
                                    helperText={formik.touched.billCVV && formik.errors.billCVV}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            sx={{
                                border: '1px solid #FFFFFF',
                                borderRadius: '11px',
                                paddingRight: '0px !important',
                                maxWidth: `${matchesSM ? 'calc(100% - 20px) !important' : 'calc(33.3333% - 20px) !important'}`,
                                margin: '8px 0px'
                            }}
                        >
                            <Grid container sx={{ padding: '8px 14px 8px' }}>
                                <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '14px',
                                            lineHeight: '180%',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        Expiration Dare
                                    </Typography>
                                </Grid>
                                <Grid item xs={9} sx={{ paddingRight: '0px !important' }}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="MM"
                                                name="billexpirationdateM"
                                                type="number"
                                                value={formik.values.billexpirationdateM}
                                                onChange={formik.handleChange}
                                                error={formik.touched.billexpirationdateM && Boolean(formik.errors.billexpirationdateM)}
                                                helperText={formik.touched.billexpirationdateM && formik.errors.billexpirationdateM}
                                                sx={{
                                                    ...theme.typography.customInput,
                                                    '& > label': {
                                                        top: '0px !important',
                                                        left: 0,
                                                        color: '#e0e0e0',
                                                        '&[data-shrink="false"]': {
                                                            top: 5
                                                        }
                                                    },
                                                    '& > div > input': {
                                                        padding: '10px 7px 10px !important',
                                                        backgroundColor: 'transparent !important',
                                                        color: '#FFFFFF',
                                                        borderRadius: '19px',
                                                        fontFamily: 'Inter',
                                                        fontStyle: 'normal',
                                                        fontWeight: '400',
                                                        fontSize: '20px',
                                                        lineHeight: '39px'
                                                    },
                                                    margin: '0px !important'
                                                }}
                                            ></TextField>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="YY"
                                                name="billexpirationdateY"
                                                type="number"
                                                value={formik.values.billexpirationdateY}
                                                onChange={formik.handleChange}
                                                error={formik.touched.billexpirationdateY && Boolean(formik.errors.billexpirationdateY)}
                                                helperText={formik.touched.billexpirationdateY && formik.errors.billexpirationdateY}
                                                sx={{
                                                    ...theme.typography.customInput,
                                                    '& > label': {
                                                        top: '0px !important',
                                                        left: 0,
                                                        color: '#e0e0e0',
                                                        '&[data-shrink="false"]': {
                                                            top: '0px !important'
                                                        }
                                                    },
                                                    '& > div > input': {
                                                        padding: '10px 7px 10px !important',
                                                        backgroundColor: 'transparent !important',
                                                        color: '#FFFFFF',
                                                        borderRadius: '19px',
                                                        fontFamily: 'Inter',
                                                        fontStyle: 'normal',
                                                        fontWeight: '400',
                                                        fontSize: '20px',
                                                        lineHeight: '39px'
                                                    },
                                                    margin: '0px !important'
                                                }}
                                            ></TextField>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="flex-end" marginTop="30px">
                        <Button
                            // component={AddPrize}
                            // to="/launch/index"
                            variant="string"
                            sx={{
                                borderRadius: '8.8px',
                                border: '0px solid #04B4DD',
                                width: '120px',
                                height: '40px',
                                fontSize: '16px',
                                fontWeight: '400',
                                color: '#FFFFFF',
                                backgroundColor: 'transparent',
                                lineHeight: '19px',
                                fontStyle: 'normal'
                            }}
                        >
                            Cancel
                        </Button>

                        <Button
                            // component={AddPrize}
                            // to="/prizes/manage"
                            type="submit"
                            variant="contained"
                            sx={{
                                borderRadius: '8.8px',
                                backgroundColor: '#FF0676',
                                width: '120px',
                                height: '40px',
                                fontSize: '16px',
                                fontWeight: '700',
                                lineHeight: '19px',
                                fontStyle: 'normal',
                                fontFamily: 'Inter',
                                color: '#FFFFFF'
                            }}
                        >
                            Save
                        </Button>
                    </Grid>
                </form>
                <form onSubmit={formik1.handleSubmit}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} marginBottom="30px">
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '30px',
                                            lineHeight: '36px',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        Support
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    margin="normal"
                                    name="name"
                                    type="text"
                                    value={formik1.values.name}
                                    onChange={formik1.handleChange}
                                    error={formik1.touched.name && Boolean(formik1.errors.name)}
                                    helperText={formik1.touched.name && formik1.errors.name}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    type="text"
                                    value={formik1.values.email}
                                    onChange={formik1.handleChange}
                                    error={formik1.touched.email && Boolean(formik1.errors.email)}
                                    helperText={formik1.touched.email && formik1.errors.email}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Message..."
                                    margin="normal"
                                    name="message"
                                    type="text"
                                    value={formik1.values.message}
                                    onChange={formik1.handleChange}
                                    error={formik1.touched.message && Boolean(formik1.errors.message)}
                                    helperText={formik1.touched.message && formik1.errors.message}
                                    multiline
                                    rows="4"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item marginTop="35px" marginBottom="40px">
                        <Button
                            // component={AddPrize}
                            // to="/prizes/manage"
                            variant="contained"
                            type="submit"
                            sx={{
                                borderRadius: '8.8px',
                                backgroundColor: '#FF0676',
                                width: '120px',
                                height: '40px',
                                fontSize: '16px',
                                fontWeight: '700',
                                lineHeight: '19px',
                                color: '#FFFFFF',
                                fontFamily: 'Inter',
                                fontStyle: 'normal'
                            }}
                        >
                            Send
                        </Button>
                    </Grid>
                </form>
            </MainCard>
        </>
    );
};

export default Setting;

const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
        code: 'AE',
        label: 'United Arab Emirates',
        phone: '971'
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
        code: 'AG',
        label: 'Antigua and Barbuda',
        phone: '1-268'
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
        code: 'BA',
        label: 'Bosnia and Herzegovina',
        phone: '387'
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
        code: 'CA',
        label: 'Canada',
        phone: '1',
        suggested: true
    },
    {
        code: 'CC',
        label: 'Cocos (Keeling) Islands',
        phone: '61'
    },
    {
        code: 'CD',
        label: 'Congo, Democratic Republic of the',
        phone: '243'
    },
    {
        code: 'CF',
        label: 'Central African Republic',
        phone: '236'
    },
    {
        code: 'CG',
        label: 'Congo, Republic of the',
        phone: '242'
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
        code: 'DE',
        label: 'Germany',
        phone: '49',
        suggested: true
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
        code: 'DO',
        label: 'Dominican Republic',
        phone: '1-809'
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
        code: 'FK',
        label: 'Falkland Islands (Malvinas)',
        phone: '500'
    },
    {
        code: 'FM',
        label: 'Micronesia, Federated States of',
        phone: '691'
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
        code: 'FR',
        label: 'France',
        phone: '33',
        suggested: true
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
        code: 'GS',
        label: 'South Georgia and the South Sandwich Islands',
        phone: '500'
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
        code: 'HM',
        label: 'Heard Island and McDonald Islands',
        phone: '672'
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
        code: 'IO',
        label: 'British Indian Ocean Territory',
        phone: '246'
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
        code: 'IR',
        label: 'Iran, Islamic Republic of',
        phone: '98'
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
        code: 'JP',
        label: 'Japan',
        phone: '81',
        suggested: true
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
        code: 'KN',
        label: 'Saint Kitts and Nevis',
        phone: '1-869'
    },
    {
        code: 'KP',
        label: "Korea, Democratic People's Republic of",
        phone: '850'
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
        code: 'LA',
        label: "Lao People's Democratic Republic",
        phone: '856'
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
        code: 'MD',
        label: 'Moldova, Republic of',
        phone: '373'
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
        code: 'MF',
        label: 'Saint Martin (French part)',
        phone: '590'
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
        code: 'MK',
        label: 'Macedonia, the Former Yugoslav Republic of',
        phone: '389'
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
        code: 'MP',
        label: 'Northern Mariana Islands',
        phone: '1-670'
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
        code: 'PM',
        label: 'Saint Pierre and Miquelon',
        phone: '508'
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
        code: 'PS',
        label: 'Palestine, State of',
        phone: '970'
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
        code: 'SJ',
        label: 'Svalbard and Jan Mayen',
        phone: '47'
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
        code: 'ST',
        label: 'Sao Tome and Principe',
        phone: '239'
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
        code: 'SX',
        label: 'Sint Maarten (Dutch part)',
        phone: '1-721'
    },
    {
        code: 'SY',
        label: 'Syrian Arab Republic',
        phone: '963'
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
        code: 'TC',
        label: 'Turks and Caicos Islands',
        phone: '1-649'
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
        code: 'TF',
        label: 'French Southern Territories',
        phone: '262'
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
        code: 'TT',
        label: 'Trinidad and Tobago',
        phone: '1-868'
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
        code: 'TW',
        label: 'Taiwan, Republic of China',
        phone: '886'
    },
    {
        code: 'TZ',
        label: 'United Republic of Tanzania',
        phone: '255'
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
        code: 'US',
        label: 'United States',
        phone: '1',
        suggested: true
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
        code: 'VA',
        label: 'Holy See (Vatican City State)',
        phone: '379'
    },
    {
        code: 'VC',
        label: 'Saint Vincent and the Grenadines',
        phone: '1-784'
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
        code: 'VG',
        label: 'British Virgin Islands',
        phone: '1-284'
    },
    {
        code: 'VI',
        label: 'US Virgin Islands',
        phone: '1-340'
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' }
];
