/* eslint-disable no-unused-vars */
// material-ui
import React from 'react';
import { Grid, Typography, TextField, Button, CardContent, Card, CardActions, CardHeader, Modal, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getGame, payment } from 'services/apis/server';
import { GET_GAMES } from 'store/actions';
import { store } from 'store';
import * as Yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import jwt_decode from 'jwt-decode';

import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';
import { useTheme } from '@emotion/react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const SelectSubscriptionPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const state = store.getState();
    const [openModal, setOpenModal] = React.useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const [price, setPrice] = React.useState(500);
    const [subscribe, setSubscribe] = React.useState('');
    const [subscribeId, setSubscribeId] = React.useState(1);
    const stripe = useStripe();
    const elements = useElements();

    const decoded = jwt_decode(state.auth.token);
    console.log('state:', state, decoded);
    const { state: navigateState } = useLocation();
    console.log(navigateState);
    const handleNext = async () => {
        // Show Loading
        await createSubscription();
        // Hide Loading
        navigate('/launch/summary/index', {
            state: { ...navigateState, screen3: { subscribeId: subscribeId, subscribeName: subscribe } }
        });
    };

    const subscriptions = state.campaign.subscriptions;
    console.log('subscriptions', subscriptions);

    const handleOpenSubscribeModal = (id, name) => {
        console.log('open modal ', id, name);
        if (id == 1) {
            setPrice(500);
            setSubscribeId(id);
            setSubscribe(name);
        } else if (id == 2) {
            setSubscribeId(id);
            setPrice(2000);
            setSubscribe(name);
        } else if (id == 3) {
            setSubscribeId(id);
            setPrice(3500);
            setSubscribe(name);
        } else {
            setSubscribeId(id);
            setPrice(5000);
            setSubscribe(name);
        }
        setOpenModal(true);
    };

    const createSubscription = async () => {
        // create a payment method
        const paymentMethod = await stripe?.createPaymentMethod({
            type: 'card',
            card: elements?.getElement(CardElement),
            billing_details: {
                name: decoded.name,
                email: decoded.email
            }
        });

        // call the backend to create subscription
        const response = await payment({
            paymentMethod: paymentMethod?.paymentMethod?.id,
            name: decoded.name,
            email: decoded.email,
            price: price
        });

        // confirm the payment by the user
        const confirmPayment = await stripe?.confirmCardPayment(response.clientSecret);

        if (confirmPayment?.error) {
            alert(confirmPayment.error.message);
        } else {
            console.log('Success! Check your email for the invoice.');
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
                                Select Subscription
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    {subscriptions &&
                        subscriptions.length != 0 &&
                        subscriptions.map((item, key) => {
                            return (
                                <Grid
                                    item
                                    xl={3}
                                    lg={3}
                                    md={6}
                                    sm={6}
                                    xs={6}
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
                                                    fontWeight: '500',
                                                    fontSize: '40px',
                                                    lineHeight: '105px',
                                                    color: '#FFFFFF',
                                                    borderBottom: '1px dashed #FFF',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '40px',
                                                    lineHeight: '105px',
                                                    color: '#FFFFFF',
                                                    borderBottom: '1px dashed #FFF',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                ${item.price}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    fontSize: '20px',
                                                    lineHeight: '40px',
                                                    color: '#FFFFFF',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {item.coins} coins
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Inter',
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    fontSize: '20px',
                                                    lineHeight: '40px',
                                                    color: '#FFFFFF',
                                                    textAlign: 'center',
                                                    borderBottom: '1px dashed #FFF'
                                                }}
                                            >
                                                Up to {item.user_limit > 5000 ? '---' : item.user_limit} fans
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'center' }}>
                                            <Button
                                                sx={{ fontSize: '30px', textAlign: 'center', lineHeight: '40px', width: '100%' }}
                                                onClick={(e) => handleOpenSubscribeModal(item.id, item.name)}
                                            >
                                                Subscribe
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })}
                    {/* <Grid
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
                                        fontSize: '20px',
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
                                <Button
                                    sx={{ fontSize: '30px', textAlign: 'center', lineHeight: '70px', width: '100%' }}
                                    onClick={(e) => handleOpenSubscribeModal(2)}
                                >
                                    Subscribe
                                </Button>
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
                                        fontSize: '20px',
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
                                <Button
                                    sx={{ fontSize: '30px', textAlign: 'center', lineHeight: '70px', width: '100%' }}
                                    onClick={(e) => handleOpenSubscribeModal(3)}
                                >
                                    Subscribe
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid> */}
                </Grid>
                {/* <StripePayment /> */}

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
                            width: 1000,
                            bgcolor: '#360068',
                            p: 8
                        }}
                    >
                        <Box
                            sx={{
                                border: '1px solid #FFFFFF',
                                boxShadow: '39.9357px 7.35657px 132.418px rgba(0, 0, 0, 0.4)',
                                borderRadius: '12px',
                                p: 1
                            }}
                        >
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            // height: '30px !important',
                                            color: '#FFFFFF',
                                            fontWeight: 500,
                                            fontFamily: 'Inter',
                                            fontSize: '30px',
                                            fontSmoothing: 'antialiased',
                                            '::placeholder': {
                                                color: '#CFD7DF'
                                            },
                                            lineHeight: '60px'
                                        },
                                        invalid: {
                                            color: '#E25950'
                                        }
                                    }
                                }}
                            />
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={async () => {
                                handleNext();
                            }}
                            sx={{
                                borderRadius: '12px',
                                backgroundColor: '#FF0676',
                                width: '100%',
                                height: '50px',
                                fontSize: '16px',
                                fontWeight: '700',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                lineHeight: '19px',
                                color: '#FFFFFF',
                                marginTop: '10px'
                            }}
                        >
                            Pay
                        </Button>
                    </Box>
                </Modal>
            </Grid>
        </>
    );
};

export default SelectSubscriptionPage;
