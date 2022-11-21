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
            <CardContent>
                <form>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h1" color="white">
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
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} sx={{ ...theme.typography.customInput }} fullWidth />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{ height: '20px' }}></Grid>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h1" color="white">
                                        Select or Create Prize
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <PrizeSelect />
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
                                    sx={{ ...theme.typography.customInput }}
                                />
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
                                    sx={{ ...theme.typography.customInput }}
                                />
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
                                    sx={{ ...theme.typography.customInput }}
                                />
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
                                        Select Audiance Bucket
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <PrizeSelect />
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                component={LaunchGameView}
                                to="/launch/games/index"
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
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </MainCard>
    );
};

export default LaunchPage;
