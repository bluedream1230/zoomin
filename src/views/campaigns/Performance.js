/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

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

    const campaignTable = CampaignsList.map((item, index) => {
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
                                    Game
                                </Typography>
                                <Typography variant="subtitle1" color="#FF4C9D" fontWeight={'600'} fontSize="20px">
                                    {item.Game}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="subtitle1" color="inherit">
                                    Prize
                                </Typography>
                                <Typography variant="subtitle1" color="#04B4DD" fontWeight={'600'} fontSize="20px">
                                    {item.Prize}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="subtitle1" color="inherit">
                                    Link
                                </Typography>
                                <Typography variant="subtitle1" color="#FFFFFF" fontWeight={'600'} fontSize="20px">
                                    {item.Link}
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
                    <Grid item sx={{ paddingBottom: '50px' }}>
                        <Typography variant="h1" color="white">
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
