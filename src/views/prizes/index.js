/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, CardContent, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

import Pagination from '@mui/material/Pagination';
import { TablePagination } from '@mui/material';
import usePagination from 'ui-component/Pagination';
import { getRewardInfo } from 'services/apis/server';
import { GET_REWARDS_INFO } from 'store/actions';
import { Link } from 'react-router-dom';

import { store } from 'store';

const AddPrize = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/prizes/manage" {...props} role={undefined} />);

const PrizeList = ({ isLoading }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const state = store.getState();

    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
    const [rewardsInfo, setRewardsInfo] = useState([]);

    const load = async () => {
        const rewardsInfo = await getRewardInfo();
        dispatch({ type: GET_REWARDS_INFO, rewardsInfo: rewardsInfo });
        setRewardsInfo(rewardsInfo);
    };

    React.useEffect(() => {
        load();
    }, []);

    const allEvents = useSelector((state) => state.campaign);
    const PrizeListData = allEvents.rewardsInfo;
    console.log(allEvents);

    const today = new Date();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const count = Math.ceil(PrizeListData.length / rowsPerPage);
    const _DATA = usePagination(PrizeListData, rowsPerPage);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const listTable = _DATA.currentData().map((item, index) => {
        return (
            <Link to={`/prizes/manage/${item.reward.id}`} style={{ textDecoration: 'none' }}>
                <Grid item xs={12} key={index} sx={{ borderBottom: '0.5px solid #821EF088' }}>
                    <Grid container direction="column" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                        <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item xs={3}>
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
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesLG ? '300' : '600'}`,
                                            fontSize: `${matchesLG ? '12px' : '18px'}`,
                                            lineHeight: `${matchesLG ? '15px' : '23px'}`
                                        }}
                                        alignItems="left"
                                    >
                                        {item.reward.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
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
                                        Created Date
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
                                        {item.reward.createdAt}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
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
                                        color="#04B4DD"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesLG ? '300' : '600'}`,
                                            fontSize: `${matchesLG ? '12px' : '18px'}`,
                                            lineHeight: `${matchesLG ? '15px' : '23px'}`
                                        }}
                                    >
                                        {item.event ? item.event.name : 'Not Launch'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
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
                                        Winners
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
                                        {item.users_num}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1}>
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
                                        Status
                                    </Typography>
                                    {item.event ? (
                                        <Typography
                                            color={new Date(item.event.end_time).getTime() >= today.getTime() ? '#43CC83' : '#FF0000'}
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: `${matchesLG ? '300' : '600'}`,
                                                fontSize: `${matchesLG ? '12px' : '18px'}`,
                                                lineHeight: `${matchesLG ? '15px' : '23px'}`
                                            }}
                                            alignItems="left"
                                        >
                                            {new Date(item.event.end_time).getTime() >= today.getTime() ? 'Live' : 'No Live'}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            color="#FF0000"
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: `${matchesLG ? '300' : '600'}`,
                                                fontSize: `${matchesLG ? '12px' : '18px'}`,
                                                lineHeight: `${matchesLG ? '15px' : '23px'}`
                                            }}
                                            alignItems="left"
                                        >
                                            No Live
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Link>
        );
    });

    return (
        <>
            {isLoading ? (
                <></>
            ) : (
                <>
                    <MainCard content={false} sx={{ marginBottom: '50px' }}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item sx={{ paddingLeft: '35px' }}>
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
                                                List of Prizes
                                            </Typography>
                                        </Grid>
                                        <Button
                                            component={AddPrize}
                                            to="/prizes/manage"
                                            variant="contained"
                                            sx={{
                                                borderRadius: '8.8',
                                                backgroundColor: '#FF0676',
                                                width: '120px',
                                                height: '40px',
                                                fontSize: '16px',
                                                fontWeight: '700'
                                            }}
                                        >
                                            + Add New
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </MainCard>
                    <MainCard content={false} sx={{ padding: '10px 30px' }}>
                        <TablePagination
                            component="div"
                            count={PrizeListData.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            sx={{ display: 'flex', justifyContent: 'flex-end' }}
                        />
                        {listTable}
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

PrizeList.propTypes = {
    isLoading: PropTypes.bool
};

export default PrizeList;
