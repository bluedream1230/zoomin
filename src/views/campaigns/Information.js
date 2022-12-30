import React, { useEffect } from 'react';

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
import QRCode from './qr-code';
//Icon imports
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useParams } from 'react-router';
import { getEventInfo } from 'services/apis/server';
import { GET_EVENT_INFO_ITEM } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { ReactComponent as Square } from '../../assets/images/square.svg';
import { ReactComponent as CheckBoxIcon } from '../../assets/images/check.svg';
//pagination
import Pagination from '@mui/material/Pagination';
import { TablePagination } from '@mui/material';
import usePagination from 'ui-component/Pagination';

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
    const dispatch = useDispatch();
    const { id } = useParams();
    const [eventInfo, setEventInfo] = useState([]);

    const load = async () => {
        const eventInfo = await getEventInfo(id);
        console.log(eventInfo);
        dispatch({ type: GET_EVENT_INFO_ITEM, eventInfo: eventInfo });
        setEventInfo(eventInfo);
    };

    useEffect(() => {
        load();
    }, []);
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [selected, setSelected] = React.useState(true);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const campaignData = useSelector((state) => state.campaign);
    let info = [];
    let mydate;
    if (campaignData.eventInfo.event && campaignData.eventInfo.event.length != 0) {
        info = campaignData.eventInfo.totalData;
        mydate = new Date(campaignData.eventInfo.event[0].start_time);
    }
    let y;
    let m;
    let d;
    if (mydate) {
        y = mydate.getFullYear();
        m = mydate.getMonth() + 1;
        d = mydate.getDate();
    }
    const dateView = d + '.' + m + '.' + y;
    const count = Math.ceil(info.length / rowsPerPage);
    const _DATA = usePagination(info, rowsPerPage);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    console.log(campaignData);

    const listTable = _DATA.currentData().map((item, index) => {
        return (
            <Grid item xs={12} key={index} sx={{ minWidth: '980px', borderBottom: '0.5px solid #821EF088' }}>
                <Grid container direction="column" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item lg={3} xs={3} md={2} sm={2}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '500'}`,
                                        fontSize: `${matchesLG ? '10px' : '15px'}`,
                                        lineHeight: `${matchesLG ? '9px' : '17px'}`,
                                        color: '#B9B9B9',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Name
                                </Typography>
                                <Typography
                                    color="#FFFFFF"
                                    alignItems="left"
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '600'}`,
                                        fontSize: `${matchesLG ? '12px' : '18px'}`,
                                        lineHeight: `${matchesLG ? '15px' : '23px'}`
                                    }}
                                >
                                    {item.fan.name}
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={2} md={2} sm={2}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '500'}`,
                                        fontSize: `${matchesLG ? '10px' : '15px'}`,
                                        lineHeight: `${matchesLG ? '9px' : '17px'}`,
                                        color: '#B9B9B9',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Phone Number
                                </Typography>
                                <Typography
                                    color="#FF4C9D"
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '600'}`,
                                        fontSize: `${matchesLG ? '12px' : '18px'}`,
                                        lineHeight: `${matchesLG ? '15px' : '23px'}`
                                    }}
                                >
                                    {item.fan.phone}
                                </Typography>
                            </Grid>
                            <Grid item lg={3} xs={3} md={4} sm={4}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '500'}`,
                                        fontSize: `${matchesLG ? '10px' : '15px'}`,
                                        lineHeight: `${matchesLG ? '9px' : '17px'}`,
                                        color: '#B9B9B9',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Email Address
                                </Typography>
                                <Typography
                                    color="#04B4DD"
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '600'}`,
                                        fontSize: `${matchesLG ? '12px' : '18px'}`,
                                        lineHeight: `${matchesLG ? '15px' : '23px'}`
                                    }}
                                >
                                    {item.fan.email}
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={2} md={2} sm={2}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '500'}`,
                                        fontSize: `${matchesLG ? '10px' : '15px'}`,
                                        lineHeight: `${matchesLG ? '9px' : '17px'}`,
                                        color: '#B9B9B9',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Campaign
                                </Typography>
                                <Typography
                                    color="#FFFFFF"
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '600'}`,
                                        fontSize: `${matchesLG ? '12px' : '18px'}`,
                                        lineHeight: `${matchesLG ? '15px' : '23px'}`
                                    }}
                                >
                                    {campaignData.eventInfo.event[0].name}
                                </Typography>
                            </Grid>
                            <Grid item lg={1} xs={1} md={1} sm={1}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '500'}`,
                                        fontSize: `${matchesLG ? '10px' : '15px'}`,
                                        lineHeight: `${matchesLG ? '9px' : '17px'}`,
                                        color: '#B9B9B9',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Opt-In
                                </Typography>
                                <Box sx={{ height: '20px', width: '20px', cursor: 'pointer' }}>
                                    <Checkbox
                                        icon={<Square stroke="#43CC83" />}
                                        checkedIcon={<CheckBoxIcon stroke="#43CC83" />}
                                        onChange={(e) => !e.target.checked}
                                    />
                                </Box>
                            </Grid>
                            <Grid item lg={1} xs={1} md={1} sm={1}>
                                <CircularProgressBar
                                    colorCircle="#39064A"
                                    linearGradient={['#04b4dd', '#ff4d9d', '#ffc857', '#4207c7']}
                                    percent={Number(item.fan.completion)}
                                    round
                                    strokeBottom={5}
                                    rotation={-360}
                                    size={100}
                                    fontSize="20px"
                                    fontWeight={700}
                                    fontColor="#FFFFFF"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    });
    var base64 = '';

    if (eventInfo.event) {
        const qrcode = require('qrcode-js');

        base64 = qrcode.toDataURL(eventInfo.event[0].qr_code, 4);
    }
    return (
        <>
            {isLoading || eventInfo.length == 0 ? (
                <></>
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
                                                            {eventInfo.event[0] && eventInfo.event[0].game.name}
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
                                                            {d}.{m}.{y}
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
                                                            Target Audience
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
                                                            {eventInfo.event[0] && eventInfo.event[0].audience.name}
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
                                                            {eventInfo && eventInfo.event[0] && eventInfo.event[0].event_coins}
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
                                            <QRCode url={base64} />
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
                                                    // width: '150px',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <FileDownloadOutlinedIcon />
                                                {eventInfo.event[0] && eventInfo.event[0].qr_code}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} lg={4} md={12} sm={12} sx={{ marginBottom: '40px' }}>
                            <InfoCard lineColor="#FF4D9D" label="Users" value={eventInfo.user_num} chartData={UsersData}></InfoCard>
                        </Grid>
                        <Grid item xs={12} lg={4} md={12} sm={12} sx={{ marginBottom: '40px' }}>
                            <InfoCard
                                lineColor="#43CC83"
                                label="Winners"
                                value={eventInfo && eventInfo.win_num}
                                chartData={WinnersData}
                            ></InfoCard>
                        </Grid>
                        <Grid item xs={12} lg={4} md={12} sm={12} sx={{ marginBottom: '40px' }}>
                            <InfoCard
                                lineColor="#FFC857"
                                label="Completion"
                                value={eventInfo.total_completion}
                                chartData={CompletionData}
                            ></InfoCard>
                        </Grid>
                    </Grid>
                    <MainCard content={false} sx={{ padding: `${matchesSM ? '10px' : '30px 40px'}` }}>
                        <Grid container spacing={gridSpacing} sx={{ marginBottom: '25px', flexDirection: 'row', flexWrap: 'nowrap' }}>
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
                            <TablePagination
                                component="div"
                                count={info.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                sx={{ display: 'flex', justifyContent: 'flex-end' }}
                            />
                        </Grid>
                        <PerfectScrollbar
                            component="div"
                            style={{
                                width: '100%'
                            }}
                        >
                            {listTable}
                        </PerfectScrollbar>
                        <Pagination
                            count={count}
                            size="large"
                            page={page}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                            sx={{ display: 'flex', flexDirection: 'row-reverse' }}
                        />
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
