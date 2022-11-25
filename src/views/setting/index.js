/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Button, CardContent, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import CountrySelect from 'ui-component/CountrySelect';

const Setting = () => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <MainCard>
            <form>
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
                            </Button>
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
                                type="number"
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
                </Grid>
                <Grid item marginTop="35px" marginBottom="40px">
                    <Button
                        // component={AddPrize}
                        // to="/prizes/manage"
                        variant="contained"
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
    );
};

export default Setting;
