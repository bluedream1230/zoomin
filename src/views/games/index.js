/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import ReactDom from 'react-dom';
import ModalVideo from 'react-modal-video';
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
import { store } from 'store';

import GameDefaultCard from 'ui-component/cards/Skeleton/GameDefaultCard';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import { useSelector } from 'react-redux';

const ImportGame = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/games/import" {...props} role={undefined} />);

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
    const state = store.getState();
    const allEvents = useSelector((state) => state.campaign);
    const gameList = allEvents.games;
    console.log(allEvents);

    return (
        <>
            <MainCard content={false} sx={{ marginBottom: '50px' }}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} sx={{ paddingRight: '0px !important' }}>
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
                                        Our Games
                                    </Typography>
                                </Grid>
                                {/* <Grid item sx={{ paddingRight: '0px !important' }}>
                                    <Button
                                        // component={AddPrize}
                                        // to="/games/import"
                                        variant="contained"
                                        sx={{
                                            borderRadius: '8.8px',
                                            backgroundColor: '#FF0676',
                                            width: '100px',
                                            height: '40px',
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            marginRight: '22px'
                                        }}
                                    >
                                        Upload
                                    </Button>

                                    <Button
                                        component={ImportGame}
                                        to="/games/import"
                                        variant="outlined"
                                        sx={{
                                            borderRadius: '8.8px',
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
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>

            {/* <Grid item lg={12} md={12} sm={12} xs={12} sx={{ marginBottom: '50px' }}>
                <TCard
                    className={classes.card}
                    sx={{
                        height: '415px',
                        cursor: 'pointer',
                        '& .MuiCardMedia-root': {
                            border: '1px solid transparent'
                        },
                        '& .MuiCardMedia-root:hover': {
                            border: '1px solid #FF0676'
                        }
                    }}
                >
                    <TCardMedia
                        media="picture"
                        alt="Contemplative Reptile"
                        title="Contemplative Reptile"
                        sx={{
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            borderRadius: '20px',
                            position: 'relative',
                            objectFit: 'cover',
                            transition: '0.3s',
                            display: 'inline-block'
                        }}
                        image={require(`../../assets/images/game-img.jpg`)}
                    />
                    <TCardActions className={classes.TCardContent}>
                        <Button
                            size="small"
                            color="inherit"
                            variant="none"
                            sx={{ fontSize: '20px', padding: '0px' }}
                            onClick={handlePreview}
                        >
                            Play Now
                        </Button>
                        <SvgIcon component={East} />
                    </TCardActions>
                </TCard>
            </Grid> */}

            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Grid container spacing={5}>
                            {gameList.map((item, key) => {
                                return (
                                    <Grid item xl={4} lg={6} md={12} sm={12} xs={12} sx={{ paddingX: '10px', marginBottom: '25px' }}>
                                        <GameDefaultCard
                                            card_name={item.name}
                                            card_image={item.img_url}
                                            card_video={item.video_url}
                                            key={key}
                                            href={item.href}
                                        ></GameDefaultCard>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ManageGame;
