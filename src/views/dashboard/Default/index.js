/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';
import Campaigns from './Campaigns';
import CircleChart from './CircleChart';
import LineChart from '../SingleReport/LineChart';
import BarChart from './VerticalChart';
const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <>
            <Grid container marginBottom="35px" minHeight="300px">
                <Grid item xs={4}>
                    <CircleChart />
                </Grid>
                <Grid item xs={4}>
                    <LineChart />
                </Grid>
                <Grid item xs={4}>
                    <BarChart />
                </Grid>
            </Grid>
            <Campaigns />
        </>
    );
};

export default Dashboard;
