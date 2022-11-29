/* eslint-disable no-unused-vars */
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CardContent, Grid, Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
    labels: ['', '', '', '', '', ''],
    datasets: [
        {
            label: 'Date one',
            data: ['34', '23', '39', '76', '61', '23'],
            backgroundColor: '#F72585'
        },
        {
            label: 'Date two',
            data: ['12', '23', '76', '61', '23', '73'],
            backgroundColor: '#7209B7'
        }
    ]
};

const VerticalChartData = () => {
    return (
        <Grid item xs={12} position="relative" height="300px">
            <Bar data={data} options={options} />
        </Grid>
    );
};
const BarChart = () => {
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
                                    Data Compare
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <VerticalChartData />
                </Grid>
            </CardContent>
        </MainCard>
    );
};
export default BarChart;
