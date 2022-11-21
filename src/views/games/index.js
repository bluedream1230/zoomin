/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Grid,
    Typography,
    Box,
    CardContent,
    Drawer,
    Button,
    SvgIcon,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Avatar
} from '@mui/material';
import { withStyles, makeStyles } from '@material-ui/core';
import { East } from '@mui/icons-material';

import GameDefaultCard from 'ui-component/cards/Skeleton/GameDefaultCard';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { ReactComponent as MyDevice } from '../../assets/images/device-icon.svg';
import { ReactComponent as GoogleDrive } from '../../assets/images/google-drive-icon.svg';
import { ReactComponent as DropBox } from '../../assets/images/dropbox-icon.svg';
import { ReactComponent as BoxIcon } from '../../assets/images/box-icon-96.svg';
import { ReactComponent as Egnyte } from '../../assets/images/egnyte.svg';
import { ReactComponent as SharePoint } from '../../assets/images/sharepoint-icon.svg';
import { ReactComponent as OneDrive } from '../../assets/images/one-drive-icon.svg';

export const TCard = withStyles({
    root: {
        position: 'relative'
    }
})(Card);

export const TCardActionArea = withStyles({
    root: {
        position: 'relative'
    }
})(CardActionArea);

export const TCardActions = withStyles({
    root: {
        position: 'absolute',
        left: '0px',
        bottom: '0px'
    }
})(CardActions);

export const TCardContent = withStyles({
    root: {
        position: 'relative',
        backgroundColor: 'transparent'
    }
})(CardContent);

export const TCardMedia = withStyles({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%'
    }
})(CardMedia);

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    /**
     * Max Card with for demo
     * same values used in Material-Ui Card Demos
     */

    /**
     * Applied to Orginal Card demo
     * Same vale used in Material-ui Card Demos
     */
    media: {
        height: 140
    },

    /**
     * Demo stlying to inclrease text visibility
     * May verry on implementation
     */
    tCardContent: {
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    tCardContentTextSecondary: {
        color: 'rgba(255,255,255,0.78)'
    }
});

const ManageGame = () => {
    const classes = useStyles();
    const tempcard = [
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img1.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img2.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img3.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img4.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img5.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img6.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img7.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img8.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img9.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img10.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img11.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img12.jpg`)
        }
    ];

    const handlePlay = () => {
        console.log('Play now: ', props.href, props.card_name);
        //TODO: Play game
    };
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <MainCard content={false} sx={{ marginBottom: '50px' }}>
                <CardContent>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item sx={{ paddingLeft: '20px' }} lg={9} md={7} sm={7} xs={12}>
                                    <Typography variant="h1" color="white">
                                        Our Games
                                    </Typography>
                                </Grid>
                                <Grid item lg={1} md={2} sm={2} xs={4}>
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
                                        Upload
                                    </Button>
                                </Grid>
                                <Grid item lg={1} md={1} sm={1} xs={4}></Grid>
                                <Grid item lg={1} md={2} sm={2} xs={4}>
                                    <Button
                                        onClick={handleToggle}
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
                                        Import
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>

            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ marginBottom: '50px' }}>
                <TCard className={classes.card} sx={{ height: '416px', cursor: 'pointer' }}>
                    <TCardMedia
                        media="picture"
                        alt="Contemplative Reptile"
                        image={require(`../../assets/images/game-img.jpg`)}
                        title="Contemplative Reptile"
                    />
                    <TCardActions className={classes.TCardContent}>
                        <Button size="small" color="inherit" variant="none" sx={{ fontSize: '20px', padding: '0px' }} onClick={handlePlay}>
                            Play Now
                        </Button>
                        <SvgIcon component={East} />
                    </TCardActions>
                </TCard>
            </Grid>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Grid container spacing={5}>
                            {tempcard.map((item, index) => {
                                return (
                                    <Grid item lg={3} md={6} sm={6} xs={12}>
                                        <GameDefaultCard
                                            card_name={item.name}
                                            card_image={item.icon}
                                            key={index}
                                            href={item.href}
                                        ></GameDefaultCard>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        position: 'absolute',
                        top: '100px',
                        right: '0px',
                        width: 380,
                        height: 'calc(100vh - 100px)',
                        backgroundColor: '#360068'
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={2} sx={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <Typography variant="h1" color="#FFFFFF">
                                Lorem Ipsum
                            </Typography>
                            <Typography variant="h5" color="#FFFFFF" sx={{ fontWeight: '400' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit at quam diam.
                            </Typography>
                        </Grid>
                        <Grid item xs={1} sx={{ paddingLeft: '0px' }} onClick={handleToggle}>
                            <HighlightOffOutlinedIcon />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ padding: '20px' }}>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: 'transparent', borderColor: '1px solid #FFFFFF' }}>
                                <CardContent>
                                    <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', width: 60, height: 60, left: 30 }}>
                                        <MyDevice />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Typography>My Device</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: 'transparent', borderColor: '1px solid #FFFFFF' }}>
                                <CardContent>
                                    <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', width: 60, height: 60, left: 30 }}>
                                        <GoogleDrive />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Typography>Google Drive</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: 'transparent', borderColor: '1px solid #FFFFFF' }}>
                                <CardContent>
                                    <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', width: 60, height: 60, left: 30 }}>
                                        <DropBox />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Typography>Drop Box</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: 'transparent', borderColor: '1px solid #FFFFFF' }}>
                                <CardContent>
                                    <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', width: 60, height: 60, left: 30 }}>
                                        <BoxIcon />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Typography>Box</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: 'transparent', borderColor: '1px solid #FFFFFF' }}>
                                <CardContent>
                                    <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', width: 60, height: 60, left: 30 }}>
                                        <OneDrive />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Typography>One Drive</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: 'transparent', borderColor: '1px solid #FFFFFF' }}>
                                <CardContent>
                                    <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', width: 60, height: 60, left: 30 }}>
                                        <SharePoint />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Typography>Share Point</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: 'transparent', borderColor: '1px solid #FFFFFF' }}>
                                <CardContent>
                                    <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', width: 60, height: 60, left: 30 }}>
                                        <Egnyte />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Typography>Egnyte</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default ManageGame;
