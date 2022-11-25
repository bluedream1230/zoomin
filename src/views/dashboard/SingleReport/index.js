/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';
import Campaigns from '../Default/Campaigns';
import LineChart from './LineChart';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <LineChart></LineChart>
                <Grid style={{ height: '35px' }}></Grid>
                <Campaigns></Campaigns>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
