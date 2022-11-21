/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import { CardContent, Divider, Grid, Typography, Box, Checkbox } from '@mui/material';
//Tomik progress bar imports
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
// icon imports
import { Square } from 'tabler-icons-react';
import { default as CheckBoxIcon } from 'tabler-icons-react/dist/icons/checkbox';

const UserListData = [
    {
        PhoneNumber: '(555) 555-1234',
        Name: 'Ogra Megi',
        EmailAddress: 'Dummy@gmail.com',
        Campaign: 'Lorem Ipsum',
        Status: '77'
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

    const [selected, setSelected] = React.useState(true);

    const listTable = UserListData.map((item, index) => {
        return (
            <Grid item xs={12} key={index} style={{ paddingRight: '24px', paddingLeft: '44px' }}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item lg={3} xs={12} md={12} sm={12}>
                                <Typography variant="subtitle1" color="inherit">
                                    Name
                                </Typography>
                                <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'600'} fontSize="20px" alignItems="left">
                                    {item.Name}
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={12} md={12} sm={12}>
                                <Typography variant="subtitle1" color="inherit">
                                    Phone Number
                                </Typography>
                                <Typography variant="subtitle1" color="#FF4C9D" fontWeight={'600'} fontSize="20px">
                                    {item.PhoneNumber}
                                </Typography>
                            </Grid>
                            <Grid item lg={3} xs={12} md={12} sm={12}>
                                <Typography variant="subtitle1" color="inherit">
                                    Email Address
                                </Typography>
                                <Typography variant="subtitle1" color="#04B4DD" fontWeight={'600'} fontSize="20px">
                                    {item.EmailAddress}
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={12} md={12} sm={12}>
                                <Typography variant="subtitle1" color="inherit">
                                    Campaign
                                </Typography>
                                <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'600'} fontSize="20px">
                                    {item.Campaign}
                                </Typography>
                            </Grid>
                            <Grid item lg={1} xs={12} md={12} sm={12}>
                                <Typography variant="subtitle1" color="inherit">
                                    Opt-In
                                </Typography>
                                <Box sx={{ height: '20px', width: '20px', cursor: 'pointer' }}>
                                    <Checkbox
                                        icon={<Square style={{ color: '#43CC83' }} />}
                                        checkedIcon={<CheckBoxIcon style={{ color: '#43CC83' }} />}
                                        onChange={(e) => !e.target.checked}
                                    />
                                </Box>
                            </Grid>
                            <Grid item lg={1} xs={12} md={12} sm={12}>
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
                <Divider sx={{ my: 1.5 }} />
            </Grid>
        );
    });

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            {listTable}
                        </Grid>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

Users.propTypes = {
    isLoading: PropTypes.bool
};

export default Users;
