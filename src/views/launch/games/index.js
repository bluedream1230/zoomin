/* eslint-disable no-unused-vars */
// material-ui
import React, { useCallback } from 'react';
import { Grid, Typography, TextField, Button, Modal, Box, Autocomplete, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { createPrizepool, getGame, getPrizepool } from 'services/apis/server';
import { GET_GAMES, GET_PRIZEPOOL } from 'store/actions';
import { store } from 'store';
import * as Yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import { gridSpacing } from 'store/constant';

import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';
import { useTheme } from '@emotion/react';
import { number } from 'prop-types';
import { cloneDeep } from 'lodash';

const SelectGamePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = store.getState();
    const [games, setGames] = useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [prizepool, setPrizepool] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);
    const { state: navigateState } = useLocation();

    const load = async () => {
        const games = await getGame();
        dispatch({ type: GET_GAMES, games: games });
        const prizepool = await getPrizepool();
        dispatch({ type: GET_PRIZEPOOL, prizepool: prizepool });
        console.log(games);
        setGames(games);
        setPrizepool(prizepool);
        if (navigateState.navigateState) {
            const formik1Edit = {
                timelimit: navigateState.navigateState.state.screen2.timelimit
            };
            formik1.setValues(formik1Edit, false);
        }
    };

    React.useEffect(() => {
        load();
    }, []);

    const addPrizePool = (place, coin) => {
        const newPool = { place: '', coin: '', errorCoinText: '', errorPlaceText: '' };
        const newData = cloneDeep(prizepool);
        newData.push(newPool);
        setPrizepool(newData);
        console.log(prizepool);
        return newPool;
    };

    const validationSchema1 = Yup.object({
        timelimit: Yup.number('Enter Time limit').required('Time limit is required'),
        rewardpool: Yup.number('Enter Prize Pool').required('Prize pool is required'),
        gameid: Yup.number('Select Game').min(1, 'Game is required').required('Game is required')
    });

    const validationSchema2 = Yup.object({
        name: Yup.string('Enter Name').required('Name is required')
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

    const formik2 = useFormik({
        initialValues: {
            name: ''
        },
        validationSchema: validationSchema2,
        onSubmit: (values) => {}
    });
    const allEvents = useSelector((state) => state.campaign);
    const prizepoolListDataTemp = allEvents.prizepool;
    const prizepoolListData = prizepoolListDataTemp.map((item) => ({ ...item, label: item.name, prizepool: JSON.parse(item.prizepool) }));
    console.log('prizepoolListData', prizepoolListData);
    const gameListData = allEvents.games;
    console.log('allEvents:', gameListData);

    console.log(navigateState);
    const handleNext = (screen2) => {
        navigate('/launch/subscription/index', { state: { screen2, screen1: navigateState } });
    };
    const [selected, setSelected] = React.useState(true);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const onCreatePrizepool1 = useCallback(
        async (values) => {
            if (
                prizepool.reduce((sum, item) => (sum += Number(item.place)), 0) !== 100 &&
                prizepool.reduce((sum, item) => (sum += Number(item.coin)), 0) !== 100
            ) {
                alert('The sum of the place or coin percent should be 100.');
                return;
            } else {
                const postData = JSON.stringify(prizepool);
                try {
                    setLoading(true);
                    const data = await createPrizepool({
                        name: values.name,
                        prizepool: postData
                    });
                    const prizepool = await getPrizepool();
                    dispatch({ type: GET_PRIZEPOOL, prizepool: prizepool });
                    setPrizepool([]);
                    handleCloseModal();
                    setLoading(false);
                } catch (e) {
                    console.log(e);
                    // setSnakebar({ open: true });
                } finally {
                    setLoading(false);
                }
            }
        },
        [dispatch, prizepool]
    );
    const onCreatePrizepool = async (values) => {
        console.log(prizepool);
        // try {
        setLoading(true);
        const data = await createPrizepool({
            name: values.name,
            prizepool: JSON.stringify(prizepool)
        });
        console.log('prizepool', data);
        const prizepool = await getPrizepool();
        dispatch({ type: GET_PRIZEPOOL, prizepool: prizepool });
        console.log('prizepool get', prizepool);
        setLoading(false);
        // navigate('/prizes/index');
        // } catch (e) {
        //     console.log(e);
        //     // setSnakebar({ open: true });
        // } finally {
        //     setLoading(false);
        // }
    };

    const handleCoinChange = (event, index) => {
        const currentSum = prizepool.reduce((sum, item, idx) => {
            if (idx !== index) {
                sum += Number(item.coin);
            }
            return sum;
        }, 0);
        if (currentSum + Number(event.target.value) > 100) {
            setPrizepool((prev) =>
                prev.map((item, idx) =>
                    idx === index ? { ...item, coin: event.target.value, errorCoinText: 'Invalid input' } : { ...item, errorCoinText: '' }
                )
            );
        } else {
            setPrizepool((prev) =>
                prev.map((item, idx) =>
                    idx === index ? { coin: event.target.value, place: item.place, errorCoinText: '' } : { ...item, errorCoinText: '' }
                )
            );
        }
    };
    const handlePlaceChange = (event, index) => {
        const currentSum = prizepool.reduce((sum, item, idx) => {
            if (idx !== index) {
                sum += Number(item.place);
            }
            return sum;
        }, 0);

        if (currentSum + Number(event.target.value) > 100) {
            setPrizepool((prev) =>
                prev.map((item, idx) =>
                    idx === index
                        ? { ...item, place: event.target.value, errorPlaceText: 'Invalid input' }
                        : { ...item, errorPlaceText: '' }
                )
            );
        } else {
            setPrizepool((prev) =>
                prev.map((item, idx) =>
                    idx === index ? { place: event.target.value, coin: item.coin, errorPlaceText: '' } : { ...item, errorPlaceText: '' }
                )
            );
        }
    };

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
                                gameListData.map((item, key) => {
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
                                            item
                                        >
                                            <ImgMediaCard
                                                card_name={item.name}
                                                card_image={item.img_url}
                                                key={key}
                                                game_id={item.id}
                                                formikvalue={formik1.values.gameid}
                                            ></ImgMediaCard>
                                        </Grid>
                                    );
                                })}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item sx={{ marginBottom: '45px', display: 'flex', justifyContent: 'space-between' }}>
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
                            <Button
                                disableElevation
                                variant="contained"
                                onClick={handleOpenModal}
                                sx={{
                                    borderRadius: '8.8',
                                    backgroundColor: '#04B4DD',
                                    width: '210px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    lineHeight: '19px',
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal'
                                }}
                            >
                                Create Your Prize Pool
                            </Button>
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
                                    <Autocomplete
                                        disablePortal
                                        id="prize_pool_list"
                                        name="rewardpool"
                                        options={prizepoolListData}
                                        sx={{
                                            ...theme.typography.customInput
                                        }}
                                        onChange={(e, v) => {
                                            console.log(v);
                                            formik1.setFieldValue('rewardpool', v.id);
                                        }}
                                        renderOption={(props, option) => {
                                            console.log('props', props);
                                            console.log('props', props);
                                            return (
                                                <li {...props} key={option.id}>
                                                    {option.name}
                                                </li>
                                            );
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                error={formik1.touched.rewardpool && Boolean(formik1.errors.rewardpool)}
                                                helperText={formik1.touched.rewardpool && formik1.errors.rewardpool}
                                                label="Select Prize pool"
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 1400,
                            bgcolor: '#360068',

                            border: '2px solid #000',
                            boxShadow: '39.9357px 7.35657px 132.418px rgba(0, 0, 0, 0.4)',
                            p: 8
                        }}
                    >
                        <form onSubmit={formik2.handleSubmit}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} sx={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Grid container alignContent="center" justifyContent="space-between">
                                        <Grid item>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '26px',
                                                    lineHeight: '180%',
                                                    color: '#FFFFFF',
                                                    marginBottom: '30px'
                                                }}
                                            >
                                                Please Add Prize Pool
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Grid container>
                                        <TextField
                                            fullWidth
                                            id="name"
                                            label="Prize pool Name"
                                            margin="normal"
                                            name="name"
                                            type="text"
                                            value={formik2.values.name}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.name && Boolean(formik2.errors.name)}
                                            helperText={formik2.touched.name && formik2.errors.name}
                                            sx={{ ...theme.typography.customInput }}
                                        />
                                    </Grid>
                                </Grid>
                                {prizepool.map((item, index) => (
                                    <>
                                        <Grid item xs={12} sm={6}>
                                            <Grid container>
                                                <TextField
                                                    fullWidth
                                                    id="place"
                                                    label="Place"
                                                    margin="normal"
                                                    name={'price' + `${index}`}
                                                    type="number"
                                                    value={item.place}
                                                    onChange={(e) => handlePlaceChange(e, index)}
                                                    error={!!item.errorPlaceText}
                                                    helperText={item.errorPlaceText}
                                                    sx={{ ...theme.typography.customInput }}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="end">%</InputAdornment>
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Grid container>
                                                <TextField
                                                    fullWidth
                                                    id="coin"
                                                    label="Coin"
                                                    margin="normal"
                                                    name={'coin' + `${index}`}
                                                    type="number"
                                                    value={item.coin}
                                                    error={!!item.errorCoinText}
                                                    helperText={item.errorCoinText}
                                                    onChange={(e) => handleCoinChange(e, index)}
                                                    sx={{ ...theme.typography.customInput }}
                                                    InputProps={{
                                                        startAdornment: <InputAdornment position="end">%</InputAdornment>
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </>
                                ))}
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button
                                    disableElevation
                                    onClick={async () => {
                                        const errors = await formik2.validateForm();
                                        await formik2.submitForm();
                                        await onCreatePrizepool1(formik2.values);
                                    }}
                                    variant="contained"
                                    sx={{
                                        borderRadius: '8.8',
                                        backgroundColor: '#FF0676',
                                        width: '120px',
                                        height: '40px',
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        lineHeight: '19px'
                                    }}
                                >
                                    Create
                                </Button>
                                <Button
                                    disableElevation
                                    variant="contained"
                                    onClick={addPrizePool}
                                    sx={{
                                        borderRadius: '8.8',
                                        backgroundColor: '#04B4DD',
                                        width: '120px',
                                        height: '40px',
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        lineHeight: '19px',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal'
                                    }}
                                >
                                    Add
                                </Button>
                            </Grid>
                        </form>
                    </Box>
                </Modal>
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
