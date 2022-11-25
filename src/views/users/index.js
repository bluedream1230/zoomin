/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Button, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import Users from 'ui-component/Users';

const UserList = ({ isLoading }) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <>
                    <MainCard content={false} sx={{ marginBottom: '50px' }}>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={12} sx={{ paddingRight: '0px !important' }}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item sx={{ paddingLeft: '35px' }}>
                                            <Typography variant="h1" color="white">
                                                List of Users
                                            </Typography>
                                        </Grid>
                                        <Grid item sx={{ paddingRight: '0px !important' }}>
                                            <Button
                                                // component={AddPrize}
                                                // to="/prizes/manage"
                                                variant="contained"
                                                sx={{
                                                    borderRadius: '9.8',
                                                    backgroundColor: '#FF0676',
                                                    width: '100px',
                                                    height: '40px',
                                                    fontSize: '16px',
                                                    fontWeight: '700',
                                                    marginRight: '22px'
                                                }}
                                            >
                                                Imports
                                            </Button>

                                            <Button
                                                // component={AddPrize}
                                                // to="/launch/index"
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: '9.8',
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
                        <Grid container>
                            <Users />
                        </Grid>
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
