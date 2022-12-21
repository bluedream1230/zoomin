/* eslint-disable no-unused-vars */
// material-ui
import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getGame } from 'services/apis/server';
import { GET_GAMES } from 'store/actions';
import { store } from 'store';
import * as Yup from 'yup';
import { FormikProvider, useFormik } from 'formik';

import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';
import { useTheme } from '@emotion/react';

const SelectGamePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
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
    const validationSchema1 = Yup.object({
        timelimit: Yup.number('Enter Time limit').required('Time limit is required'),
        rewardpool: Yup.number('Enter Prize Pool').required('Prize pool is required'),
        gameid: Yup.number('Select Game').min(1, 'Game is required').required('Game is required')
    });
    const formik1 = useFormik({
        initialValues: {
            timelimit: '',
            rewardpool: '',
            gameid: 0
        },
        validationSchema: validationSchema1,
        onSubmit: (values) => {}
    });
    const allEvents = useSelector((state) => state.campaign);
    const gameListData = allEvents.games;
    console.log('allEvents:', gameListData);
    const { state: navigateState } = useLocation();
    console.log(navigateState);
    const handleNext = (screen2) => {
        navigate('/launch/subscription/index', { state: { screen2, screen1: navigateState } });
    };
    const [selected, setSelected] = React.useState(true);
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
                                        <Grid
                                            onClick={() => {
                                                formik1.values.gameid = item.id;
                                                setSelected(!selected);
                                            }}
                                            xl={4}
                                            lg={6}
                                            md={12}
                                            sm={12}
                                            xs={12}
                                            sx={{ paddingX: '10px', marginBottom: '25px' }}
                                        >
                                            <ImgMediaCard
                                                card_name={item.name}
                                                card_image={item.img_url}
                                                key={index}
                                                game_id={item.id}
                                                formikvalue={formik1.values.gameid}
                                            ></ImgMediaCard>
                                        </Grid>
                                    );
                                })}
                        </Grid>
                    </Grid>
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
                                Rules
                            </Typography>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <TextField
                                        fullWidth
                                        label="Time Limit"
                                        margin="normal"
                                        name="timelimit"
                                        type="number"
                                        value={formik1.values.timelimit}
                                        onChange={formik1.handleChange}
                                        error={formik1.touched.timelimit && Boolean(formik1.errors.timelimit)}
                                        helperText={formik1.touched.timelimit && formik1.errors.timelimit}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <TextField
                                        fullWidth
                                        label="Pool"
                                        margin="normal"
                                        name="rewardpool"
                                        type="number"
                                        value={formik1.values.rewardpool}
                                        onChange={formik1.handleChange}
                                        error={formik1.touched.rewardpool && Boolean(formik1.errors.rewardpool)}
                                        helperText={formik1.touched.rewardpool && formik1.errors.rewardpool}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={async () => {
                            const errors = await formik1.validateForm();
                            await formik1.submitForm();
                            if (Object.keys(errors).length == 0) {
                                handleNext(formik1.values);
                            } else console.log('false');
                        }}
                        sx={{
                            borderRadius: '8.8',
                            backgroundColor: '#FF0676',
                            width: '100px',
                            height: '45px',
                            fontSize: '16px',
                            fontWeight: '700',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            lineHeight: '19px',
                            color: '#FFFFFF'
                        }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SelectGamePage;
