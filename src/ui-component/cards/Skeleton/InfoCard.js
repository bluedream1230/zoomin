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
        ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    }, [navType, lineColor]);

    return (
        <Card sx={{ bgcolor: '#360068' }}>
            <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="subtitle1" sx={{ color: '#FFFFFF', fontSize: '55px' }}>
                                {props.value}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: '50px',
                                    border: '0px',
                                    height: '45px',
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: lineColor,
                                    backgroundColor: '#310241',
                                    width: '80%'
                                }}
                            >
                                {props.label}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Chart {...props.chartData} />
        </Card>
    );
};

export default InfoCard;
