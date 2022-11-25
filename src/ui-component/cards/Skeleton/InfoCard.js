import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography, Button } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// // project imports
// import chartData from 'views/dashboard/Default/chart-data/bajaj-area-chart';
// console.log(chartData);
// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const InfoCard = (props) => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const { navType } = customization;

    const lineColor = props.lineColor;
    useEffect(() => {
        const newSupportChart = {
            ...props.chartData.options,
            colors: [lineColor],
            tooltip: {
                theme: 'light'
            }
        };
        console.log(newSupportChart.colors);
        ApexCharts.exec(props.chartData.options.chart.id, 'updateOptions', newSupportChart);
    }, [navType, lineColor]);

    return (
        <Card sx={{ bgcolor: '#36006844', boxShadow: '40px 7px 132px rgba(0,0,0,0.7)', borderRadius: '20px' }}>
            <Grid container sx={{ padding: '20px', paddingBottom: '0px', color: '#fff' }}>
                <Grid item xs={12} sx={{ paddingRight: '0px !important' }}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: '55px',
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '66px'
                                }}
                            >
                                {props.value}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ paddingRight: '0px !important' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                    color: lineColor,
                                    backgroundColor: '#310241',
                                    borderRadius: '50px',
                                    padding: '10px 17px'
                                }}
                            >
                                {props.label}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Chart {...props.chartData} />
        </Card>
    );
};

export default InfoCard;
