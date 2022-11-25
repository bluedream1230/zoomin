/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, CardContent, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

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
        Name: 'Jessica',
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
    const theme = useTheme();
    const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
    const listTable = PrizeListData.map((item, index) => {
        return (
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
                                    {item.Name}
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
                                    {item.CreatedDate}
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
                                    {item.Campaign}
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
                                    {item.Winners}
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
                                <Typography
                                    color={`${item.Status == 'Live' ? '#43CC83' : '#FF0000'}`}
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesLG ? '300' : '600'}`,
                                        fontSize: `${matchesLG ? '12px' : '18px'}`,
                                        lineHeight: `${matchesLG ? '15px' : '23px'}`
                                    }}
                                    alignItems="left"
                                >
                                    {item.Status}
                                </Typography>
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
                                                fontSize: '18px',
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
                        {listTable}
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
