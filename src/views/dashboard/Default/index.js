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
    return <Campaigns />;
};

export default Dashboard;
