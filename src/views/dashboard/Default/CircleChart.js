/* eslint-disable no-unused-vars */
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CardContent, Grid, Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                color: '#FFF'
            }
        }
    },
    maintainAspectRatio: false
};

export const data = {
    labels: ['champaign1', 'champaign2', 'champaign3', 'champaign4', 'champaign5'],
    datasets: [
        {
            data: [20, 20, 20, 20, 20],
            backgroundColor: ['#4207C7', '#FFC857', '#FF4D9D', '#04B4DD', '#310042'],
            borderWidth: 0
        }
    ]
};

const CircleChartData = () => {
    return (
        <Grid item xs={12} position="relative" height="250px">
            <Doughnut data={data} options={options} />
        </Grid>
    );
};
const CircleChart = () => {
    return (
        <MainCard content={false}>
            <CardContent>
                <Grid container spacing={gridSpacing} sx={{ position: 'relative', height: '400px' }}>
                    <Grid item xs={12} marginBottom="20px">
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
                                    Completion Percentage
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <CircleChartData />
                </Grid>
            </CardContent>
        </MainCard>
    );
};
export default CircleChart;
