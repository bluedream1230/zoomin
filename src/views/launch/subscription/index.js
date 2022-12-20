/* eslint-disable no-unused-vars */
// material-ui
import React from 'react';
import { Grid, Typography, TextField, Button, CardContent, Card, CardActions, CardHeader } from '@mui/material';
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

const SelectSubscriptionPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const state = store.getState();

    const { state: navigateState } = useLocation();
    console.log(navigateState);
    const handleNext = () => {
        navigate('/launch/summary/index', { state: { navigateState } });
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
                                Select Subscription
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid
                        item
                        xs={4}
                        sx={{
                            '& .MuiPaper-root': {
                                border: '1px solid transparent'
                            },
                            '& .MuiPaper-root:hover': {
                                border: '1px solid #FF0676'
                            }
                        }}
                    >
                        <Card
                            sx={{
                                background: '#FFFFFF11  !important',
                                cursor: 'pointer',
                                borderRadius: '20px'
                            }}
                        >
                            <CardContent
                                sx={{
                                    borderRadius: '20px',
                                    position: 'relative',
                                    objectFit: 'cover',
                                    transition: '0.3s',
                                    display: 'inline-block',
                                    width: '100%'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '50px',
                                        lineHeight: '125px',
                                        color: '#FFFFFF',
                                        borderBottom: '1px dashed #FFF',
                                        textAlign: 'center'
                                    }}
                                >
                                    $20
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '30px',
                                        lineHeight: '120px',
                                        color: '#FFFFFF',
                                        textAlign: 'center',
                                        borderBottom: '1px dashed #FFF'
                                    }}
                                >
                                    1000 coins
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button sx={{ fontSize: '40px', textAlign: 'center', lineHeight: '70px', width: '100%' }}>Subscribe</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{
                            '& .MuiPaper-root': {
                                border: '1px solid transparent'
                            },
                            '& .MuiPaper-root:hover': {
                                border: '1px solid #FF0676'
                            }
                        }}
                    >
                        <Card
                            sx={{
                                background: '#FFFFFF11  !important',
                                cursor: 'pointer',
                                borderRadius: '20px'
                            }}
                        >
                            <CardContent
                                sx={{
                                    borderRadius: '20px',
                                    position: 'relative',
                                    objectFit: 'cover',
                                    transition: '0.3s',
                                    display: 'inline-block',
                                    width: '100%'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '50px',
                                        lineHeight: '125px',
                                        color: '#FFFFFF',
                                        borderBottom: '1px dashed #FFF',
                                        textAlign: 'center'
                                    }}
                                >
                                    $100
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '30px',
                                        lineHeight: '120px',
                                        color: '#FFFFFF',
                                        textAlign: 'center',
                                        borderBottom: '1px dashed #FFF'
                                    }}
                                >
                                    10,000 coins
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button sx={{ fontSize: '40px', textAlign: 'center', lineHeight: '70px', width: '100%' }}>Subscribe</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        sx={{
                            '& .MuiPaper-root': {
                                border: '1px solid transparent'
                            },
                            '& .MuiPaper-root:hover': {
                                border: '1px solid #FF0676'
                            }
                        }}
                    >
                        <Card
                            sx={{
                                background: '#FFFFFF11  !important',
                                cursor: 'pointer',
                                borderRadius: '20px'
                            }}
                        >
                            <CardContent
                                sx={{
                                    borderRadius: '20px',
                                    position: 'relative',
                                    objectFit: 'cover',
                                    transition: '0.3s',
                                    display: 'inline-block',
                                    width: '100%'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '50px',
                                        lineHeight: '125px',
                                        color: '#FFFFFF',
                                        borderBottom: '1px dashed #FFF',
                                        textAlign: 'center'
                                    }}
                                >
                                    $1000
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: '30px',
                                        lineHeight: '120px',
                                        color: '#FFFFFF',
                                        textAlign: 'center',
                                        borderBottom: '1px dashed #FFF'
                                    }}
                                >
                                    500,000 coins
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button sx={{ fontSize: '40px', textAlign: 'center', lineHeight: '70px', width: '100%' }}>Subscribe</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                {/* <StripePayment /> */}
                <Grid item xs={3} sx={{ marginTop: '40px' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={async () => {
                            handleNext();
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

export default SelectSubscriptionPage;
