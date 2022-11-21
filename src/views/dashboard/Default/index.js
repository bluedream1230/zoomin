/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';
import Campaigns from './Campaigns';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    console.log('errr');
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Campaigns></Campaigns>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
