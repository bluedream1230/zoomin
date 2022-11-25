/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { CardContent, Divider, Grid, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

const CampaignsList = [
    {
        Status: 'Active',
        Name: 'Ogra Megi',
        Game: 'Shock & Awe',
        Users: '900,00',
        Winner: '$3000,00'
    },
    {
        Status: 'Active',
        Name: 'Grim Stroke',
        Game: 'Long Winter',
        Users: '900,00',
        Winner: '$5000,00'
    },
    {
        Status: 'Active',
        Name: 'Jessica',
        Game: 'Master Thief',
        Users: '900,00',
        Winner: '$2000,00'
    },
    {
        Status: 'Active',
        Name: 'Ogra Megi',
        Game: 'Shock & Awe',
        Users: '900,00',
        Winner: '$3000,00'
    }
];

const Campaigns = ({ isLoading }) => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const campaignTable = CampaignsList.map((item, index) => {
        return (
            <Grid item xs={12} key={index} sx={{ minWidth: '980px' }}>
                <Grid container direction="column" sx={{ marginTop: '40px', marginBottom: '40px' }}>
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
                                    color="#43CC83"
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: `${matchesSM ? '400' : '600'}`,
                                        fontSize: `${matchesSM ? '15px' : '20px'}`,
                                        lineHeight: `${matchesSM ? '18px' : '24px'}`
                                    }}
                                >
                                    {item.Status}
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
                                    {item.Name}
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
                                    {item.Game}
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
                                    {item.Users}
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
                                    Winner
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
                                    {item.Winner}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
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
                                    <MoreHorizOutlinedIcon
                                        fontSize="small"
                                        sx={{
                                            color: theme.palette.primary[200],
                                            cursor: 'pointer'
                                        }}
                                        aria-controls="menu-popular-card"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    />
                                    <Menu
                                        id="menu-popular-card"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        variant="selectedMenu"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right'
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}> 1-10</MenuItem>
                                        <MenuItem onClick={handleClose}> 11-20</MenuItem>
                                    </Menu>
                                </Grid>
                            </Grid>
                            <PerfectScrollbar
                                component="div"
                                style={{
                                    width: '100%'
                                }}
                            >
                                {campaignTable}
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
