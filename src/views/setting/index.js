/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Button, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CountrySelect from 'ui-component/CountrySelect';

// import '@coreui/coreui/dist/css/coreui.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Setting = () => {
    const theme = useTheme();
    return (
        <MainCard>
            <CardContent>
                <form>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item xs={11}>
                                    <Typography variant="h1" color="white">
                                        Profile Information
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: '9.8',
                                            border: '1px solid #04B4DD',
                                            width: '130px',
                                            height: '45px',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            color: 'white'
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    margin="normal"
                                    name="name"
                                    type="text"
                                    defaultValue=""
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
                                    name="email"
                                    type="text"
                                    defaultValue=""
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
                                    name="phone"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{ height: '20px' }}></Grid>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h1" color="white">
                                        Billing Information
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="firstname"
                                    type="text"
                                    defaultValue=""
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
                                    name="lastname"
                                    type="text"
                                    defaultValue=""
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
                                    name="email"
                                    type="text"
                                    defaultValue=""
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
                                    name="phone"
                                    type="text"
                                    defaultValue=""
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
                                    name="billingaddress"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <CountrySelect />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Credit Card Number"
                                    margin="normal"
                                    name="cardnumber"
                                    type="text"
                                    defaultValue=""
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
                                    name="cvv"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Date Select TODO"
                                    margin="normal"
                                    name="date"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={10}></Grid>
                        <Grid item xs={1}>
                            <Button
                                // component={AddPrize}
                                // to="/launch/index"
                                variant="string"
                                sx={{
                                    borderRadius: '9.8',
                                    border: '0px solid #04B4DD',
                                    width: '100px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    color: '#04B4DD',
                                    backgroundColor: 'transparent'
                                }}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                // component={AddPrize}
                                // to="/prizes/manage"
                                variant="contained"
                                sx={{
                                    borderRadius: '9.8',
                                    backgroundColor: '#FF0676',
                                    width: '100px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: '700'
                                }}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid sx={{ height: '20px' }}></Grid>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h1" color="white">
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
                                    defaultValue=""
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
                                    defaultValue=""
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
                                    defaultValue=""
                                    multiline
                                    rows="4"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid sx={{ height: '20px' }}></Grid>
                        <Grid item xs={1}>
                            <Button
                                // component={AddPrize}
                                // to="/prizes/manage"
                                variant="contained"
                                sx={{
                                    borderRadius: '9.8',
                                    backgroundColor: '#FF0676',
                                    width: '100px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: '700'
                                }}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </MainCard>
    );
};

export default Setting;
