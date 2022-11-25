import React from 'react';

/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Button,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Menu,
    MenuItem,
    Typography,
    Box,
    Checkbox,
    useMediaQuery,
    Link
} from '@mui/material';
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
            id: 'users-chart',
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
            id: 'winners-chart',
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
            id: 'completion-chart',
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
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
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
                                        <Grid item xs={12}>
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
                                                Campaign Information
                                            </Typography>
                                        </Grid>
                                        <Grid container direction="column">
                                            <Grid item>
                                                <Divider sx={{ my: 5 }} />
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item xs={6} lg={4} sm={6} md={6}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '300' : '500'}`,
                                                                fontSize: `${matchesLG ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesLG ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Game
                                                        </Typography>
                                                        <Typography
                                                            color="#FF4C9D"
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '400' : '700'}`,
                                                                fontSize: `${matchesLG ? '20px' : '34px'}`,
                                                                lineHeight: `${matchesLG ? '22px' : '42px'}`
                                                            }}
                                                            alignItems="left"
                                                        >
                                                            Shock & Awe
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6} lg={3} sm={6} md={6}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '300' : '500'}`,
                                                                fontSize: `${matchesLG ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesLG ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Launch Date
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color="#FFC857"
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '400' : '700'}`,
                                                                fontSize: `${matchesLG ? '20px' : '34px'}`,
                                                                lineHeight: `${matchesLG ? '22px' : '42px'}`
                                                            }}
                                                        >
                                                            8.6.2022
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6} lg={3} sm={6} md={6}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '300' : '500'}`,
                                                                fontSize: `${matchesLG ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesLG ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Target Sudiance
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color="#FFFFFF"
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '400' : '700'}`,
                                                                fontSize: `${matchesLG ? '20px' : '34px'}`,
                                                                lineHeight: `${matchesLG ? '22px' : '42px'}`
                                                            }}
                                                        >
                                                            Dummy
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6} lg={2} sm={6} md={6}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '300' : '500'}`,
                                                                fontSize: `${matchesLG ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesLG ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Prize
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color="#04B4DD"
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesLG ? '400' : '700'}`,
                                                                fontSize: `${matchesLG ? '20px' : '34px'}`,
                                                                lineHeight: `${matchesLG ? '22px' : '42px'}`
                                                            }}
                                                        >
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
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', width: '150px' }}>
                                            <QRCode value="dummylink.com" bgColor="transparent" fgColor="#FFFFFF" size={150} />
                                        </Grid>
                                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                                            <Link
                                                href="#"
                                                underline="none"
                                                sx={{
                                                    backgroundColor: '#310241',
                                                    borderRadius: '100px',
                                                    color: '#FF4C9D',
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '13px',
                                                    lineHeight: '16px',
                                                    padding: '9px 12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '150px'
                                                }}
                                            >
                                                <FileDownloadOutlinedIcon />
                                                dummylink.com
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} lg={4} md={12} sm={12} sx={{ marginBottom: '40px' }}>
                            <InfoCard lineColor="#FF4D9D" label="Users" value="105" chartData={UsersData}></InfoCard>
                        </Grid>
                        <Grid item xs={12} lg={4} md={12} sm={12} sx={{ marginBottom: '40px' }}>
                            <InfoCard lineColor="#43CC83" label="Winners" value="05" chartData={WinnersData}></InfoCard>
                        </Grid>
                        <Grid item xs={12} lg={4} md={12} sm={12} sx={{ marginBottom: '40px' }}>
                            <InfoCard lineColor="#FFC857" label="Completion" value="60%" chartData={CompletionData}></InfoCard>
                        </Grid>
                    </Grid>
                    <MainCard content={false} sx={{ padding: `${matchesSM ? '10px' : '30px 40px'}` }}>
                        <Grid container spacing={gridSpacing} sx={{ marginBottom: '25px' }}>
                            <Grid item xs={12}>
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
                                    List of Users
                                </Typography>
                            </Grid>
                        </Grid>
                        <Users />
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
