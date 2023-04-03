/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';
import Campaigns from './Campaigns';
import CircleChart from './CircleChart';
import LineChart from '../SingleReport/LineChart';
import BarChart from './VerticalChart';
import { GET_EVENTS, LOADING } from 'store/actions';

const Dashboard = () => {
    return (
        <>
            <Grid container marginBottom="35px" minHeight="300px">
                <Grid item xs={4}>
                    <BarChart />
                </Grid>
                <Grid item xs={4}>
                    <LineChart />
                </Grid>
                <Grid item xs={4}>
                    <CircleChart />
                </Grid>
            </Grid>
            <Campaigns />
        </>
    );
};

export default Dashboard;
