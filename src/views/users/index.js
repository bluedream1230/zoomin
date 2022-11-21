/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Button, CardContent, Grid, Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import Users from 'ui-component/Users';

const UserList = ({ isLoading }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <>
                    <MainCard content={false} sx={{ marginBottom: '50px' }}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item sx={{ paddingLeft: '20px' }} xs={10}>
                                            <Typography variant="h1" color="white">
                                                List of Users
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
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
                                                    fontWeight: '700'
                                                }}
                                            >
                                                Imports
                                            </Button>
                                        </Grid>
                                        <Grid item xs={1}>
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

                    <MainCard content={false}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                <Users />
                            </Grid>
                        </CardContent>
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
