/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

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

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const campaignTable = CampaignsList.map((item, index) => {
        return (
            <Grid item xs={12} key={index} style={{ paddingRight: '24px', paddingLeft: '44px' }}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={2}>
                                <Typography variant="subtitle1" color="inherit">
                                    Status
                                </Typography>
                                <Typography variant="subtitle1" color="#43CC83" fontWeight={'600'} fontSize="20px">
                                    {item.Status}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="inherit">
                                    Name
                                </Typography>
                                <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'600'} fontSize="20px">
                                    {item.Name}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="inherit">
                                    Game
                                </Typography>
                                <Typography variant="subtitle1" color="#FF4C9D" fontWeight={'600'} fontSize="20px">
                                    {item.Game}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="inherit">
                                    Users
                                </Typography>
                                <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'600'} fontSize="20px">
                                    {item.Users}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography variant="subtitle1" color="inherit">
                                    Winner
                                </Typography>
                                <Typography variant="subtitle1" color="#04B4DD" fontWeight={'600'} fontSize="20px">
                                    {item.Winner}
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
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h1" color="white">
                                            Your Campaigns
                                        </Typography>
                                    </Grid>
                                    <Grid item>
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
                            </Grid>
                            {campaignTable}
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
