/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, CardContent, Grid, TextField, Typography, Select } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import PrizeSelect from 'ui-component/PrizeSelect';

const LaunchGameView = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/launch/games/index" {...props} role={undefined} />);
const CreatePrize = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/prizes/manage" {...props} role={undefined} />);
const styles = {
    root: {
        'flex-direction': 'row-reverse'
    }
};

const LaunchPage = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(null);

    return (
        <MainCard>
            <form>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sx={{ marginBottom: '30px' }}>
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
                                    Select Name & Launch Date
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container>
                            <TextField
                                fullWidth
                                label="Select Name"
                                margin="normal"
                                name="selectname"
                                type="text"
                                defaultValue=""
                                sx={{ ...theme.typography.customInput }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Launch Date"
                                    DialogProps={{
                                        maxWidth: 'sm'
                                    }}
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} sx={{ ...theme.typography.customInput }} fullWidth />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ height: '50px' }}></Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sx={{ marginBottom: '30px' }}>
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
                                    Select or Create Prize
                                </Typography>
                            </Grid>
                            <Button
                                component={CreatePrize}
                                to="/prizes/manage"
                                variant="contained"
                                sx={{
                                    borderRadius: '8.8',
                                    backgroundColor: '#04B4DD',
                                    width: '185px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    lineHeight: '19px',
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal'
                                }}
                            >
                                Create Your Prize
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: '30px' }}>
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
                            <PrizeSelect />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignContent="center" justifyContent="space-between">
                            <Grid item>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        lineHeight: '180%',
                                        color: '#FFFFFF',
                                        marginBottom: '30px'
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At quam diam viverra pellentesque tincidunt
                                    duis in. Ornare.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ marginBottom: '30px' }}>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Lorem Ipsum"
                                    margin="normal"
                                    name="lorem"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Lorem Ipsum"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ marginBottom: '40px' }}>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Lorem Ipsum"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Lorem Ipsum"
                                    margin="normal"
                                    name="selectname"
                                    type="text"
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sx={{ marginBottom: '30px' }}>
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
                                    Select Audiance Bucket
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: '50px' }}>
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
                            <PrizeSelect />
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            component={LaunchGameView}
                            to="/launch/games/index"
                            variant="contained"
                            sx={{
                                borderRadius: '8.8',
                                backgroundColor: '#FF0676',
                                width: '100px',
                                height: '45px',
                                fontSize: '16px',
                                fontWeight: '700',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                lineHeight: '19px',
                                color: '#FFFFFF'
                            }}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </MainCard>
    );
};

export default LaunchPage;
