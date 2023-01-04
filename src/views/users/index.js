/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Button, CardContent, Grid, Typography, useMediaQuery, Box, Checkbox } from '@mui/material';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import Users from 'ui-component/Users';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'services/apis/server';
import { store } from 'store';
import { GET_USERS } from 'store/actions';

import jwt_decode from 'jwt-decode';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ReactComponent as Square } from '../../assets/images/square.svg';
import { ReactComponent as CheckBoxIcon } from '../../assets/images/check.svg';

//pagination
import Pagination from '@mui/material/Pagination';
import { TablePagination } from '@mui/material';
import usePagination from 'ui-component/Pagination';

const UserList = ({ isLoading }) => {
    const theme = useTheme();
    const state = store.getState();
    const dispatch = useDispatch();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

    const data = useSelector((state) => state.auth);
    const decoded = jwt_decode(data.token);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const load = async () => {
        const users = await getUsers();
        console.log('users', users);
        dispatch({ type: GET_USERS, users: users });
        setUsers(users);
    };

    useEffect(() => {
        load();
    }, []);

    const campaignData = useSelector((state) => state.campaign);
    const allUsers = campaignData.users;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const count = Math.ceil(allUsers.length / rowsPerPage);
    const _DATA = usePagination(allUsers, rowsPerPage);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    console.log(allUsers);

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
                                    {item.event.name}
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
    return (
        <>
            {isLoading ? (
                <></>
            ) : (
                <>
                    <MainCard content={false} sx={{ marginBottom: '50px' }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12} sx={{ paddingRight: '0px !important' }}>
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
                                                List of Users
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{ paddingRight: '0px !important' }}>
                                            <Button
                                                // component={AddPrize}
                                                // to="/launch/index"
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: '8.8px',
                                                    border: '1px solid #04B4DD',
                                                    width: '100px',
                                                    height: '40px',
                                                    fontSize: '16px',
                                                    fontWeight: '700',
                                                    color: '#04B4DD'
                                                }}
                                            >
                                                Export
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </MainCard>
                    <MainCard content={false} sx={{ padding: `${matchesSM ? '10px' : '25px 45px'}` }}>
                        <TablePagination
                            component="div"
                            count={allUsers.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            sx={{ display: 'flex', justifyContent: 'flex-end' }}
                        />
                        <Grid container>
                            <PerfectScrollbar
                                component="div"
                                style={{
                                    width: '100%'
                                }}
                            >
                                {listTable}
                            </PerfectScrollbar>
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
                    </MainCard>
                </>
            )}
        </>
    );
};

UserList.propTypes = {
    isLoading: PropTypes.bool
};

export default UserList;
