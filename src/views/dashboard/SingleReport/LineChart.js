/* eslint-disable no-unused-vars */
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CardContent, Grid, Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            align: 'end'
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart'
        }
    },
    maintainAspectRatio: false
};

const labels = ['-100', '-90', '-80', '-70', '-60', '-50', '-40', '-30', '-20', '-10', '0'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Time',
            data: ['34', '23', '39', '76', '61', '23', '73', '88', '46', '66', '32'],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            hoverBackgroundColor: 'rgba(255, 255, 132, 1)',
            borderWidth: 5,
            pointHoverRadius: 10,
            pointRadius: 5,
            tension: 0.4
        },
        {
            label: 'Dates Rang',
            data: ['12', '23', '76', '61', '23', '73', '88', '46', '34', '72', '23'],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderWidth: 5,
            pointHoverRadius: 10,
            pointRadius: 5,
            tension: 0.4
        }
    ]
};

const LineChartData = () => {
    return (
        <Grid item xs={12}>
            <Line data={data} options={options} style={{ height: '360px', padding: '20px' }} />
        </Grid>
    );
};
const LineChart = () => {
    return (
        <MainCard content={false}>
            <CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignContent="center" justifyContent="space-between">
                            <Grid item>
                                <Typography variant="h1" color="white">
                                    User supplied data
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <LineChartData />
                </Grid>
            </CardContent>
        </MainCard>
    );
};
export default LineChart;
