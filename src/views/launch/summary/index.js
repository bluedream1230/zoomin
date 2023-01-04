/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, CardContent, Grid, Typography, Card, CardMedia, useMediaQuery, Modal } from '@mui/material';
import { createTheme } from '@material-ui/core';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Edit } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrivia, createEvent, getGame } from 'services/apis/server';
import { GET_GAMES } from 'store/actions';
import { values } from 'lodash';
import jwt_decode from 'jwt-decode';
import { store } from 'store';
import { useEffect } from 'react';
import Iframe from 'react-iframe';
const CampaignPerformances = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/campaigns/performance" {...props} role={undefined} />
));

const CampaignEdit = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/launch/index" {...props} role={undefined} />);

const CampaignSummary = () => {
    const dispatch = useDispatch();
    const states = store.getState();
    const { state } = useLocation();
    console.log(states);
    const allEvents = useSelector((state) => state.campaign);
    const [openModal, setOpenModal] = React.useState(false);
    const handleCloseModal = () => setOpenModal(false);

    const PrizeListData = allEvents.rewards;
    const temp = new Date(state.screen1.eventInfo.launchdate);
    const y = temp.getFullYear();
    const m = temp.getMonth() + 1;
    const d = temp.getDate();
    const decoded = jwt_decode(states.auth.token);
    let prizeLabel = [];
    PrizeListData.forEach((item) => {
        state.screen1.prize.prize.forEach((prizeitem) => {
            if (item.id == prizeitem) {
                prizeLabel.push(item.name);
            }
        });
    });

    const GameListData = allEvents.games;
    let gameInfo;
    GameListData.forEach((item) => {
        if (item.id == state.screen2.gameid) {
            gameInfo = item;
        }
    });

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1400,
                xl: 1600
            }
        }
    });
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate();
    const [trivia, setTrivia] = React.useState();
    const getTriviaInfo = async () => {
        try {
            // navigate('https://saviour.earth/ZoomIn/trivia/create_trivia.php');
            const data = await addTrivia({
                name: state.screen1.eventInfo.selectname,
                user_id: decoded.id
            });
            setTrivia(data);
            setOpenModal(!openModal);
        } catch (e) {
            console.log(e);
        }
    };
    const handleClick = () => {
        navigate('/launch/index', { state: { state } });
    };
    const [isLoading, setLoading] = React.useState(false);
    const prizeIds = state.screen1.prize.prize.map((item) => item.id);
    const onCreateEvent = async () => {
        try {
            setLoading(true);
            const data = await createEvent(
                {
                    name: state.screen1.eventInfo.selectname,
                    location: state.screen1.eventInfo.location,
                    start_time: state.screen1.eventInfo.launchdate,
                    end_time: state.screen1.eventInfo.endtime,
                    duration: state.screen2.timelimit,
                    sponsorname: state.screen1.sponsor.sponsorname,
                    trivia_id: trivia?.trivia_id,
                    trivia_url: trivia?.url,
                    user: states.auth.user
                },
                state.screen1.sponsor.videourl,
                prizeIds,
                state.screen2.gameid,
                state.screen2.rewardpool.id,
                state.screen1.eventInfo.audience.id,
                state.screen3.subscribeId,
                state.screen1.sponsor.files
            );
            console.log('data', data);
            const tempUrl = '/campaigns/information/' + `${data.id}`;
            console.log(tempUrl);
            navigate(tempUrl);
            setLoading(false);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <MainCard>
            <form>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sx={{ marginBottom: `${matchesMD ? '20px' : '45px'}` }}>
                        <Grid container alignContent="center" justifyContent="space-between">
                            <Grid item>
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
                                    Campaign Summary
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ marginBottom: `${matchesMD ? '20px' : '40px'}` }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid
                                item
                                lg={5}
                                md={6}
                                sm={6}
                                xs={12}
                                paddingRight="40px !important"
                                sx={{ marginBottom: `${matchesMD ? '20px' : '0px'}` }}
                            >
                                <CardContent
                                    sx={{
                                        backgroundColor: '#36006844',
                                        boxShadow: '40px 7px 132px rgba(0,0,0,0.4)',
                                        borderRadius: '20px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '200' : '400'}`,
                                            fontSize: `${matchesMD ? '11px' : '22px'}`,
                                            lineHeight: `${matchesMD ? '15px' : '27px'}`,
                                            color: '#B9B9B9'
                                        }}
                                    >
                                        Campaign Name
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: `${matchesMD ? '400' : '700'}`,
                                            fontSize: `${matchesMD ? '16px' : '29px'}`,
                                            lineHeight: `${matchesMD ? '18px' : '35px'}`,
                                            color: '#FF0676'
                                        }}
                                    >
                                        {state.screen1.eventInfo.selectname}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item lg={4} md={3} sm={3} xs={12} sx={{ marginBottom: `${matchesMD ? '20px' : '45px'}` }}>
                                <Grid item>
                                    <CardContent
                                        sx={{
                                            backgroundColor: '#36006844',
                                            boxShadow: '40px 7px 132px rgba(0,0,0,0.4)',
                                            borderRadius: '20px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: `${matchesMD ? '200' : '400'}`,
                                                fontSize: `${matchesMD ? '11px' : '22px'}`,
                                                lineHeight: `${matchesMD ? '15px' : '27px'}`,
                                                color: '#B9B9B9'
                                            }}
                                        >
                                            Launch Date
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: `${matchesMD ? '400' : '700'}`,
                                                fontSize: `${matchesMD ? '16px' : '29px'}`,
                                                lineHeight: `${matchesMD ? '18px' : '35px'}`,
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            {m}.{d}.{y}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                            <Grid item lg={3} md={3} sm={3} xs={12}>
                                <Grid item>
                                    <CardContent
                                        sx={{
                                            backgroundColor: '#36006844',
                                            boxShadow: '40px 7px 132px rgba(0,0,0,0.4)',
                                            borderRadius: '20px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: `${matchesMD ? '200' : '400'}`,
                                                fontSize: `${matchesMD ? '11px' : '22px'}`,
                                                lineHeight: `${matchesMD ? '15px' : '27px'}`,
                                                color: '#B9B9B9'
                                            }}
                                        >
                                            Subscription
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: `${matchesMD ? '400' : '700'}`,
                                                fontSize: `${matchesMD ? '16px' : '29px'}`,
                                                lineHeight: `${matchesMD ? '18px' : '35px'}`,
                                                color: '#04B4DD'
                                            }}
                                        >
                                            {state.screen3.subscribeName}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item lg={5} md={6} sm={6} xs={12} paddingRight="40px !important">
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12} sx={{ marginBottom: `${matchesMD ? '20px' : '55px'}` }}>
                                        <CardContent
                                            sx={{
                                                backgroundColor: '#36006844',
                                                boxShadow: '40px 7px 132px rgba(0,0,0,0.4)',
                                                borderRadius: '20px'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: `${matchesMD ? '200' : '400'}`,
                                                    fontSize: `${matchesMD ? '11px' : '22px'}`,
                                                    lineHeight: `${matchesMD ? '15px' : '27px'}`,
                                                    color: '#B9B9B9'
                                                }}
                                            >
                                                Target Audience
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: `${matchesMD ? '400' : '700'}`,
                                                    fontSize: `${matchesMD ? '16px' : '29px'}`,
                                                    lineHeight: `${matchesMD ? '18px' : '35px'}`,
                                                    color: '#FFC857'
                                                }}
                                            >
                                                {state.screen1.eventInfo.audience.label}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={12} sx={{ marginBottom: `${matchesMD ? '20px' : '45px'}` }}>
                                        <CardContent
                                            sx={{
                                                backgroundColor: '#36006844',
                                                boxShadow: '40px 7px 132px rgba(0,0,0,0.4)',
                                                borderRadius: '20px'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: `${matchesMD ? '200' : '400'}`,
                                                    fontSize: `${matchesMD ? '11px' : '22px'}`,
                                                    lineHeight: `${matchesMD ? '15px' : '27px'}`,
                                                    color: '#B9B9B9'
                                                }}
                                            >
                                                Game Name
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: `${matchesMD ? '400' : '700'}`,
                                                    fontSize: `${matchesMD ? '16px' : '29px'}`,
                                                    lineHeight: `${matchesMD ? '18px' : '35px'}`,
                                                    color: '#43CC83'
                                                }}
                                            >
                                                {gameInfo.name}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                lg={7}
                                md={6}
                                sm={6}
                                xs={12}
                                paddingRight="40px !important"
                                sx={{
                                    borderRadius: '20px'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={gameInfo.img_url}
                                    width="100%"
                                    alt={gameInfo.name}
                                    sx={{
                                        borderRadius: '20px',
                                        height: `${matchesMD ? '210px' : '285px'}`
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ marginTop: `${matchesMD ? '35px' : '70px'}` }}>
                    <Button
                        // component={CampaignPerformances}
                        // to="/campaigns/performance"
                        variant="contained"
                        onClick={onCreateEvent}
                        sx={{
                            borderRadius: '9.8px',
                            backgroundColor: '#FF0676',
                            width: '260px',
                            height: '45px',
                            fontSize: '18px',
                            fontWeight: '700',
                            marginRight: '35px'
                        }}
                    >
                        Launch Your Campaign
                    </Button>
                    <Button
                        // component={CampaignEdit}
                        // to="/launch/index"
                        onClick={() => handleClick()}
                        variant="outlined"
                        sx={{
                            borderRadius: '9.8px',
                            border: '1px solid #04B4DD',
                            width: '130px',
                            height: '45px',
                            fontSize: '18px',
                            fontWeight: '600',
                            color: 'white',
                            marginRight: '35px'
                        }}
                        startIcon={<Edit />}
                    >
                        Edit
                    </Button>
                    {(gameInfo.type == 'trivia' || gameInfo.name == 'Trivia') && (
                        <Button
                            // component={CampaignEdit}
                            // to="/launch/index"
                            onClick={() => getTriviaInfo()}
                            variant="outlined"
                            sx={{
                                borderRadius: '9.8px',
                                border: '1px solid #04B4DD',
                                width: '130px',
                                height: '45px',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: 'white'
                            }}
                        >
                            Add Trivia
                        </Button>
                    )}
                </Grid>
            </form>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Iframe url={trivia?.url} width="1000px" height="1200vh" id="" className="" />
            </Modal>
        </MainCard>
    );
};

export default CampaignSummary;
