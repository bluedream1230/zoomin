/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, CardContent, Divider, Grid, Typography } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

const AddPrize = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/prizes/manage" {...props} role={undefined} />);

const PrizeListData = [
    {
        Status: 'Live',
        Name: 'Ogra Megi',
        CreatedDate: '11.06.2022',
        Campaign: 'Lorem Ipsum',
        Winners: '2000,00'
    },
    {
        Status: 'No Live',
        Name: 'Grim Stroke',
        CreatedDate: '11.06.2022',
        Campaign: 'Lorem Ipsum',
        Winners: '2000,00'
    },
    {
        Status: 'Live',
        Name: 'Jessica',
        CreatedDate: '11.06.2022',
        Campaign: 'Lorem Ipsum',
        Winners: '2000,00'
    },
    {
        Status: 'Live',
        CreatedDate: '11.06.2022',
        Campaign: 'Lorem Ipsum',
        Winners: '2000,00'
    },
    {
        Status: 'No Live',
        Name: 'Grim Stroke',
        CreatedDate: '11.06.2022',
        Campaign: 'Lorem Ipsum',
        Winners: '2000,00'
    },
    {
        Status: 'Live',
        Name: 'Jessica',
        CreatedDate: '11.06.2022',
        Campaign: 'Lorem Ipsum',
        Winners: '2000,00'
    },
    {
        Status: 'No Live',
        Name: 'Ogra Megi',
        CreatedDate: '11.06.2022',
        Campaign: 'Lorem Ipsum',
        Winners: '2000,00'
    }
];

const PrizeList = ({ isLoading }) => {
    const listTable = PrizeListData.map((item, index) => {
        return (
            <Grid item xs={12} key={index} style={{ paddingRight: '24px', paddingLeft: '44px' }}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="inherit">
                                    Name
                                </Typography>
                                <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'600'} fontSize="20px" alignItems="left">
                                    {item.Name}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="inherit">
                                    Created Date
                                </Typography>
                                <Typography variant="subtitle1" color="#FF4C9D" fontWeight={'600'} fontSize="20px">
                                    {item.CreatedDate}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1" color="inherit">
                                    Campaign
                                </Typography>
                                <Typography variant="subtitle1" color="#04B4DD" fontWeight={'600'} fontSize="20px">
                                    {item.Campaign}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="inherit">
                                    Winners
                                </Typography>
                                <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'600'} fontSize="20px">
                                    {item.Winners}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="subtitle1" color="inherit">
                                    Status
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color={`${item.Status == 'Live' ? '#43CC83' : '#FF0000'}`}
                                    fontWeight={'600'}
                                    fontSize="20px"
                                    alignItems="left"
                                >
                                    {item.Status}
                                </Typography>
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
                <>
                    <MainCard content={false} sx={{ marginBottom: '50px' }}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item sx={{ paddingLeft: '20px' }}>
                                            <Typography variant="h1" color="white">
                                                List of Prizes
                                            </Typography>
                                        </Grid>
                                        <Button
                                            component={AddPrize}
                                            to="/prizes/manage"
                                            variant="contained"
                                            sx={{
                                                borderRadius: '9.8',
                                                backgroundColor: '#FF0676',
                                                width: '120px',
                                                height: '40px',
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                marginRight: '35px'
                                            }}
                                        >
                                            + Add New
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </MainCard>
                    <MainCard content={false}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                {listTable}
                            </Grid>
                        </CardContent>
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
