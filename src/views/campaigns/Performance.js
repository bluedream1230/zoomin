/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
//pagination
import Pagination from '@mui/material/Pagination';
import { TablePagination } from '@mui/material';
import usePagination from 'ui-component/Pagination';
// assets
import { Link } from 'react-router-dom';
import { GET_EVENTS } from 'store/actions';
import { getCampaign } from 'services/apis/server';

const CampaignPerformances = ({ isLoading }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);

    const load = async () => {
        const events = await getCampaign();
        dispatch({ type: GET_EVENTS, events: events });
        setEvents(events);
    };

    useEffect(() => {
        load();
    }, []);
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const campaignsData = useSelector((state) => state.campaign);
    const allEvents = campaignsData.events;
    const today = new Date();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const count = Math.ceil(allEvents.length / rowsPerPage);
    const _DATA = usePagination(allEvents, rowsPerPage);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const campaignTable = _DATA.currentData().map((item, index) => {
        return (
            <Grid item xs={12} key={index} sx={{ borderBottom: '0.5px solid #821EF088' }}>
                <Grid container direction="column" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Grid item sx={{ height: '60px' }}>
                        <Link to={`/campaigns/information/${item.id}`} style={{ textDecoration: 'none' }}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '300' : '500'}`,
                                            fontSize: `${matchesMD ? '10px' : '15px'}`,
                                            lineHeight: `${matchesMD ? '13px' : '18px'}`,
                                            color: '#B9B9B9',
                                            marginBottom: '16px'
                                        }}
                                    >
                                        Name
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="#FFFFFF"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '400' : '600'}`,
                                            fontSize: `${matchesMD ? '15px' : '20px'}`,
                                            lineHeight: `${matchesMD ? '18px' : '24px'}`
                                        }}
                                        alignItems="left"
                                    >
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '300' : '500'}`,
                                            fontSize: `${matchesMD ? '10px' : '15px'}`,
                                            lineHeight: `${matchesMD ? '13px' : '18px'}`,
                                            color: '#B9B9B9',
                                            marginBottom: '16px'
                                        }}
                                    >
                                        Game
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="#FF4C9D"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '400' : '600'}`,
                                            fontSize: `${matchesMD ? '15px' : '20px'}`,
                                            lineHeight: `${matchesMD ? '18px' : '24px'}`
                                        }}
                                    >
                                        {item.game.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '300' : '500'}`,
                                            fontSize: `${matchesMD ? '10px' : '15px'}`,
                                            lineHeight: `${matchesMD ? '13px' : '18px'}`,
                                            color: '#B9B9B9',
                                            marginBottom: '16px'
                                        }}
                                    >
                                        Subscribe
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="#04B4DD"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '400' : '600'}`,
                                            fontSize: `${matchesMD ? '15px' : '20px'}`,
                                            lineHeight: `${matchesMD ? '18px' : '24px'}`
                                        }}
                                    >
                                        {item.subscribe_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '300' : '500'}`,
                                            fontSize: `${matchesMD ? '10px' : '15px'}`,
                                            lineHeight: `${matchesMD ? '13px' : '18px'}`,
                                            color: '#B9B9B9',
                                            marginBottom: '16px'
                                        }}
                                    >
                                        Link
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="#FFFFFF"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '200' : '400'}`,
                                            fontSize: `${matchesMD ? '7px' : '14px'}`,
                                            lineHeight: `${matchesMD ? '9px' : '12px'}`
                                        }}
                                    >
                                        {item.game.video_url}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '300' : '500'}`,
                                            fontSize: `${matchesMD ? '10px' : '15px'}`,
                                            lineHeight: `${matchesMD ? '13px' : '18px'}`,
                                            color: '#B9B9B9',
                                            marginBottom: '16px'
                                        }}
                                    >
                                        Status
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color={new Date(item.end_time).getTime() >= today.getTime() ? '#43CC83' : '#FF0000'}
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '400' : '600'}`,
                                            fontSize: `${matchesMD ? '10px' : '20px'}`,
                                            lineHeight: `${matchesMD ? '18px' : '24px'}`
                                        }}
                                        alignItems="left"
                                    >
                                        {new Date(item.end_time).getTime() >= today.getTime() ? 'Live' : 'No Live'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <>
            {isLoading ? (
                <></>
            ) : (
                <>
                    <Grid item sx={{ paddingBottom: '50px' }}>
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
                            Your Campaigns
                        </Typography>
                    </Grid>

                    <MainCard content={false}>
                        <CardContent>
                            <TablePagination
                                component="div"
                                count={allEvents.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                sx={{ display: 'flex', justifyContent: 'flex-end' }}
                            />
                            <Grid container spacing={gridSpacing} sx={{ width: '100% !important' }}>
                                {campaignTable}
                            </Grid>
                            <Pagination
                                count={count}
                                size="large"
                                page={page}
                                variant="outlined"
                                shape="rounded"
                                onChange={handleChange}
                                sx={{ display: 'flex', flexDirection: 'row-reverse' }}
                            />
                        </CardContent>
                    </MainCard>
                </>
            )}
        </>
    );
};

CampaignPerformances.propTypes = {
    isLoading: PropTypes.bool
};

export default CampaignPerformances;
