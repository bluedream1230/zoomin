/* eslint-disable no-unused-vars */
// material-ui
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getGame } from 'services/apis/server';
import { GET_GAMES } from 'store/actions';
import { store } from 'store';

import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';

const SelectGamePage = () => {
    const dispatch = useDispatch();
    const state = store.getState();
    const [games, setGames] = useState([]);

    const load = async () => {
        const games = await getGame();
        dispatch({ type: GET_GAMES, games: games });
        console.log(games);
        setGames(games);
    };

    React.useEffect(() => {
        load();
    }, []);
    const allEvents = useSelector((state) => state.campaign);
    const gameListData = allEvents.games;
    console.log('allEvents:', gameListData);
    const { state: navigateState } = useLocation();
    console.log(navigateState);
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Grid item sx={{ marginBottom: '45px' }}>
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
                                Select Games
                            </Typography>
                        </Grid>
                        <Grid container>
                            {gameListData &&
                                gameListData.length != 0 &&
                                gameListData.map((item, index) => {
                                    return (
                                        <Grid item xl={4} lg={6} md={12} sm={12} xs={12} sx={{ paddingX: '10px', marginBottom: '25px' }}>
                                            <ImgMediaCard
                                                card_name={item.name}
                                                card_image={item.img_url}
                                                key={index}
                                                game_id={item.id}
                                                state={navigateState}
                                            ></ImgMediaCard>
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

export default SelectGamePage;
