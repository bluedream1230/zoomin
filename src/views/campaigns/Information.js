import React from 'react';

/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography, Box, Checkbox } from '@mui/material';
//Tomik progress bar imports
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import Users from 'ui-component/Users';
import InfoCard from 'ui-component/cards/Skeleton/InfoCard';
// QR Code imports
import QRCode from 'react-qr-code';
//Icon imports
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const UsersData = {
    type: 'area',
    height: 95,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 5
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: 'Ticket '
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [0, 15, 10, 50, 30, 40, 25]
        }
    ]
};

const WinnersData = {
    type: 'area',
    height: 95,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 5
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: 'Ticket '
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [15, 30, 20, 40, 50, 15, 10]
        }
    ]
};

const CompletionData = {
    type: 'area',
    height: 95,
    options: {
        chart: {
            id: 'support-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 5
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: 'Ticket '
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [35, 50, 45, 20, 15, 35, 40]
        }
    ]
};

const CampaignInformation = ({ isLoading }) => {
    const theme = useTheme();

    const [selected, setSelected] = React.useState(true);

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <>
                    <MainCard content={false} sx={{ marginBottom: '50px' }}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                <Grid item lg={9} xs={12} md={6} sm={12}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item sx={{ paddingLeft: '20px' }} xs={12}>
                                            <Typography variant="h1" color="white">
                                                Campaign Information
                                            </Typography>
                                        </Grid>
                                        <Grid container direction="column">
                                            <Grid item sx={{ paddingLeft: '20px' }}>
                                                <Divider sx={{ my: 5 }} />
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item xs={12} lg={4} sm={12} md={12}>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            Game
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color="#FF4C9D"
                                                            fontWeight={'700'}
                                                            fontSize="35px"
                                                            alignItems="left"
                                                        >
                                                            Shock & Awe
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} lg={3} sm={12} md={12}>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            Launch Date
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="#FFC857" fontWeight={'700'} fontSize="35px">
                                                            8.6.2022
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} lg={3} sm={12} md={12}>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            Target Sudiance
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'700'} fontSize="35px">
                                                            Dummy
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} lg={2} sm={12} md={12}>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            Prize
                                                        </Typography>
                                                        <Typography variant="subtitle1" color="#04B4DD" fontWeight={'700'} fontSize="35px">
                                                            $300
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={3} xs={12} md={6} sm={12}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                                            <QRCode value="dummylink.com" bgColor="transparent" fgColor="#FFFFFF" />
                                        </Grid>
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    borderRadius: '100px',
                                                    border: '0px',
                                                    height: '34px',
                                                    fontSize: '18px',
                                                    fontWeight: '600',
                                                    color: '#FF4C9D',
                                                    backgroundColor: '#310241',
                                                    width: '80%'
                                                }}
                                                startIcon={<FileDownloadOutlinedIcon />}
                                            >
                                                dummylink.com
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </MainCard>
                    <Grid container spacing={gridSpacing} sx={{ marginBottom: '40px' }}>
                        <Grid item xs={12} lg={4} md={12} sm={12}>
                            <InfoCard lineColor="#FF4D9D" label="Users" value="105" chartData={UsersData}></InfoCard>
                        </Grid>
                        <Grid item xs={12} lg={4} md={12} sm={12}>
                            <InfoCard lineColor="#43CC83" label="Winners" value="05" chartData={WinnersData}></InfoCard>
                        </Grid>
                        <Grid item xs={12} lg={4} md={12} sm={12}>
                            <InfoCard lineColor="#FFC857" label="Completion" value="60%" chartData={CompletionData}></InfoCard>
                        </Grid>
                    </Grid>
                    <MainCard content={false} sx={{ paddingTop: '40px' }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item sx={{ paddingLeft: '40px' }} xs={10}>
                                        <Typography variant="h1" color="white">
                                            List of Users
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <MainCard content={false}>
                            <CardContent>
                                <Grid container spacing={gridSpacing}>
                                    <Users />
                                </Grid>
                            </CardContent>
                        </MainCard>
                    </MainCard>
                </>
            )}
        </>
    );
};

CampaignInformation.propTypes = {
    isLoading: PropTypes.bool
};

export default CampaignInformation;
