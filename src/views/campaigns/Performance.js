/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
const CampaignsList = [
    {
        Status: 'Live',
        Name: 'Ogra Megi',
        Game: 'Shock & Awe',
        Link: 'dummylink.com',
        Prize: '$100'
    },
    {
        Status: 'No Live',
        Name: 'Grim Stroke',
        Game: 'Long Winter',
        Link: 'dummylink.com',
        Prize: '$150'
    },
    {
        Status: 'Live',
        Name: 'Jessica',
        Game: 'Master Thief',
        Link: 'dummylink.com',
        Prize: '$200'
    },
    {
        Status: 'Live',
        Name: 'Ogra Megi',
        Game: 'Shock & Awe',
        Link: 'dummylink.com',
        Prize: '$300'
    },
    {
        Status: 'No Live',
        Name: 'Grim Stroke',
        Game: 'Long Winter',
        Link: 'dummylink.com',
        Prize: '$150'
    },
    {
        Status: 'Live',
        Name: 'Jessica',
        Game: 'Master Thief',
        Link: 'dummylink.com',
        Prize: '$200'
    },
    {
        Status: 'No Live',
        Name: 'Ogra Megi',
        Game: 'Shock & Awe',
        Link: 'dummylink.com',
        Prize: '$300'
    }
];

const CampaignPerformances = ({ isLoading }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const campaignTable = CampaignsList.map((item, index) => {
        return (
            <Grid item xs={12} key={index} sx={{ borderBottom: '0.5px solid #821EF088' }}>
                <Grid container direction="column" sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Grid item sx={{ height: '60px' }}>
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
                                    {item.Name}
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
                                    {item.Game}
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
                                    Prize
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
                                    {item.Prize}
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
                                        fontWeight: `${matchesMD ? '400' : '600'}`,
                                        fontSize: `${matchesMD ? '10px' : '20px'}`,
                                        lineHeight: `${matchesMD ? '18px' : '24px'}`
                                    }}
                                >
                                    {item.Link}
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
                                    color={`${item.Status == 'Live' ? '#43CC83' : '#FF0000'}`}
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesMD ? '400' : '600'}`,
                                        fontSize: `${matchesMD ? '10px' : '20px'}`,
                                        lineHeight: `${matchesMD ? '18px' : '24px'}`
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
                            <Grid container spacing={gridSpacing}>
                                {campaignTable}
                            </Grid>
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
