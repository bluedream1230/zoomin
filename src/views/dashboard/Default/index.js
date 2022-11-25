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
    return <Campaigns sx={{ backgroundColor: '#36006844', boxShadow: '40px 7px 132px rgb(0,0,0,0.7)', borderRadius: '20px' }} />;
};

export default Dashboard;
