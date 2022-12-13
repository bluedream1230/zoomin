/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, CardContent, Grid, Typography, Card, CardMedia, useMediaQuery } from '@mui/material';
import { createTheme } from '@material-ui/core';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Edit } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, getGame } from 'services/apis/server';
import { GET_GAMES } from 'store/actions';
import { values } from 'lodash';
import { store } from 'store';
const CampaignPerformances = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/campaigns/performance" {...props} role={undefined} />
));

const CampaignEdit = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/launch/index" {...props} role={undefined} />);

const CampaignSummary = () => {
    const dispatch = useDispatch();
    const states = store.getState();
    const { state } = useLocation();

    const allEvents = useSelector((state) => state.campaign);
    const PrizeListData = allEvents.rewards;
    console.log(allEvents);
    let prizeLabel = '';
    PrizeListData.forEach((item) => {
        if (item.id == state.prizeId.prize) {
            prizeLabel = item.name;
        }
    });

    const AudienceListData = allEvents.audiences;
    let audienceLabel = '';
    AudienceListData.forEach((item) => {
        if (item.id == state.audienceId.audience) {
            audienceLabel = item.name;
        }
    });

    const GameListData = allEvents.games;
    let gameLabel = '';
    GameListData.forEach((item) => {
        if (item.id == state.gameId) {
            gameLabel = item.name;
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

    const handleClick = () => {
        const eventInfo = state.eventInfo;
        const prizeId = state.prizeId;
        const audienceId = state.audienceId;
        navigate('/launch/index', { state: { eventInfo, prizeId, audienceId } });
    };
    console.log('time:', state.eventInfo.endtime.$d);
    console.log('state', state);
    const [isLoading, setLoading] = React.useState(false);
    const onCreateEvent = async () => {
        try {
            setLoading(true);
            const data = await createEvent(
                {
                    name: state.eventInfo.selectname,
                    location: state.eventInfo.location,
                    start_time: state.eventInfo.launchdate.$d,
                    end_time: state.eventInfo.endtime.$d,
                    user_limit: state.eventInfo.userlimit,
                    event_coins: state.eventInfo.eventcoins,
                    duration: state.eventInfo.timelimit,
                    user: states.auth.user
                },
                state.gameId,
                state.prizeId.prize,
                state.audienceId.audience
            );
            console.log('data:', data);
            navigate('/campaigns/performance');
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
                                        {state.eventInfo.selectname}
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
                                            {state.eventInfo.launchdate.$M + 1}.{state.eventInfo.launchdate.$D}.
                                            {state.eventInfo.launchdate.$y}
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
                                            Winning Prize
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
                                            ${state.eventInfo.eventcoins}
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
                                                TargetAudience
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
                                                {audienceLabel}
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
                                                {gameLabel}
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
                                    image={state.gameImg}
                                    width="100%"
                                    alt={gameLabel}
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
                            color: 'white'
                        }}
                        startIcon={<Edit />}
                    >
                        Edit
                    </Button>
                </Grid>
            </form>
        </MainCard>
    );
};

export default CampaignSummary;
