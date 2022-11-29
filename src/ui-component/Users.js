/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import { CardContent, Divider, Grid, Typography, Box, Checkbox, useMediaQuery } from '@mui/material';
//Tomik progress bar imports
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import PerfectScrollbar from 'react-perfect-scrollbar';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
// icon imports
import { ReactComponent as Square } from '../assets/images/square.svg';
import { ReactComponent as CheckBoxIcon } from '../assets/images/check.svg';

const UserListData = [
    {
        PhoneNumber: '(555) 555-1234',
        Name: 'Ogra Megi',
        EmailAddress: 'Dummy@gmail.com',
        Campaign: 'Lorem Ipsum',
        Status: '100'
    },
    {
        PhoneNumber: '(555) 555-1263',
        Name: 'Ogra MegiGrim Stroke',
        EmailAddress: 'Dummy@gmail.com',
        Campaign: 'Lorem Ipsum',
        Status: '44'
    },
    {
        PhoneNumber: '(555) 555-1644',
        Name: 'Jessica',
        EmailAddress: 'Dummy@gmail.com',
        Campaign: 'Lorem Ipsum',
        Status: '72'
    },
    {
        PhoneNumber: '(555) 555-5434',
        Name: 'Ogra Megi',
        EmailAddress: 'Dummy@gmail.com',
        Campaign: 'Lorem Ipsum',
        Status: '77'
    },
    {
        PhoneNumber: '(555) 555-1234',
        Name: 'Ogra Megi',
        EmailAddress: 'Dummy@gmail.com',
        Campaign: 'Lorem Ipsum',
        Status: '77'
    },
    {
        PhoneNumber: '(555) 555-1234',
        Name: 'Ogra Megi',
        EmailAddress: 'Dummy@gmail.com',
        Campaign: 'Lorem Ipsum',
        Status: '77'
    }
];

const Users = ({ isLoading }) => {
    const theme = useTheme();
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
    const [selected, setSelected] = React.useState(true);

    const listTable = UserListData.map((item, index) => {
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
                                    {item.Name}
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
                                    {item.PhoneNumber}
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
                                    {item.EmailAddress}
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
                                    {item.Campaign}
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
                                    percent={item.Status}
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
                <SkeletonPopularCard />
            ) : (
                <PerfectScrollbar
                    component="div"
                    style={{
                        width: '100%'
                    }}
                >
                    {listTable}
                </PerfectScrollbar>
            )}
        </>
    );
};

Users.propTypes = {
    isLoading: PropTypes.bool
};

export default Users;
