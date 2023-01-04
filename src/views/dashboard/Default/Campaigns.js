/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { CardContent, Divider, Grid, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Pagination from '@mui/material/Pagination';
import { TablePagination } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import { getCampaign, getRewardInfo } from 'services/apis/server';
import usePagination from 'ui-component/Pagination';
import { List } from 'tabler-icons-react';
import { store } from 'store';
import { GET_EVENTS, GET_REWARDS_INFO } from 'store/actions';

const Campaigns = ({ isLoading }) => {
    const theme = useTheme();
    const state = store.getState();
    const dispatch = useDispatch();
    const [eventInfo, setEventInfo] = useState([]);

    const load = async () => {
        const events = await getCampaign();
        dispatch({ type: GET_EVENTS, events: events });
        setEventInfo(events);
    };

    useEffect(() => {
        load();
    }, []);
    const allEvents = useSelector((state) => state.campaign);
    console.log(allEvents);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const today = new Date();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const count = Math.ceil(allEvents.events.length / rowsPerPage);
    const _DATA = usePagination(allEvents.events, rowsPerPage);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <></>
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                                <Grid container alignContent="center" justifyContent="space-between">
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

                                    <TablePagination
                                        component="div"
                                        count={allEvents.events.length}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        rowsPerPage={rowsPerPage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Grid>
                            </Grid>
                            <PerfectScrollbar
                                component="div"
                                style={{
                                    width: '100%'
                                }}
                            >
                                {_DATA.currentData().map((v, index) => (
                                    <Grid
                                        item
                                        xs={12}
                                        sx={{ minWidth: '980px', borderBottom: '0.5px solid #821EF088' }}
                                        key={`campaign_${index}`}
                                    >
                                        <Grid container item direction="column" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                                            <Grid item sx={{ height: '60px' }}>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item xs={2}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '300' : '500'}`,
                                                                fontSize: `${matchesSM ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesSM ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Status
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle1"
                                                            color={
                                                                new Date(v.end_time).getTime() >= today.getTime() ? '#43CC83' : '#FF0000'
                                                            }
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '400' : '600'}`,
                                                                fontSize: `${matchesSM ? '15px' : '20px'}`,
                                                                lineHeight: `${matchesSM ? '18px' : '24px'}`
                                                            }}
                                                        >
                                                            {new Date(v.end_time).getTime() >= today.getTime() ? 'Active' : 'Inactive'}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '300' : '500'}`,
                                                                fontSize: `${matchesSM ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesSM ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Name
                                                        </Typography>
                                                        <Typography
                                                            color="#FFFFFF"
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '400' : '600'}`,
                                                                fontSize: `${matchesSM ? '15px' : '20px'}`,
                                                                lineHeight: `${matchesSM ? '18px' : '24px'}`
                                                            }}
                                                        >
                                                            {v.name}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '300' : '500'}`,
                                                                fontSize: `${matchesSM ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesSM ? '13px' : '18px'}`,
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
                                                                fontWeight: `${matchesSM ? '400' : '600'}`,
                                                                fontSize: `${matchesSM ? '15px' : '20px'}`,
                                                                lineHeight: `${matchesSM ? '18px' : '24px'}`
                                                            }}
                                                        >
                                                            {v.game.name}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '300' : '500'}`,
                                                                fontSize: `${matchesSM ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesSM ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Users
                                                        </Typography>
                                                        <Typography
                                                            color="#FFFFFF"
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '400' : '600'}`,
                                                                fontSize: `${matchesSM ? '15px' : '20px'}`,
                                                                lineHeight: `${matchesSM ? '18px' : '24px'}`
                                                            }}
                                                        >
                                                            {v.users_num}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '300' : '500'}`,
                                                                fontSize: `${matchesSM ? '10px' : '15px'}`,
                                                                lineHeight: `${matchesSM ? '13px' : '18px'}`,
                                                                color: '#B9B9B9',
                                                                marginBottom: '16px'
                                                            }}
                                                        >
                                                            Coins
                                                        </Typography>
                                                        <Typography
                                                            color="#04B4DD"
                                                            sx={{
                                                                fontFamily: 'Inter',
                                                                fontStyle: 'normal',
                                                                fontWeight: `${matchesSM ? '400' : '600'}`,
                                                                fontSize: `${matchesSM ? '15px' : '20px'}`,
                                                                lineHeight: `${matchesSM ? '18px' : '24px'}`
                                                            }}
                                                        >
                                                            {v.subscription.coins}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                                <Pagination
                                    count={count}
                                    size="large"
                                    page={page}
                                    variant="outlined"
                                    shape="rounded"
                                    onChange={handleChange}
                                    sx={{ display: 'flex', flexDirection: 'row-reverse' }}
                                />
                            </PerfectScrollbar>
                        </Grid>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

Campaigns.propTypes = {
    isLoading: PropTypes.bool
};

export default Campaigns;
