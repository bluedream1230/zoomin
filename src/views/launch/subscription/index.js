/* eslint-disable no-unused-vars */
// material-ui
import React from 'react';
import { Grid, Typography, TextField, Button, CardContent, Card, CardActions, CardHeader, Modal, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { getGame, payment, createCheckOutSession } from 'services/apis/server';
import { GET_GAMES } from 'store/actions';
import { store } from 'store';
import * as Yup from 'yup';
import { FormikProvider, useFormik } from 'formik';
import jwt_decode from 'jwt-decode';

import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';
import { useTheme } from '@emotion/react';

import {
    CardElement,
    useElements,
    useStripe,
    CardNumberElement,
    PaymentElement,
    CardCvcElement,
    CardExpiryElement
} from '@stripe/react-stripe-js';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Iframe from 'react-iframe';

const SelectSubscriptionPage = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const handleCloseModal = () => setOpenModal(false);

    const state = store.getState();
    const [openModal, setOpenModal] = React.useState(false);
    const [price, setPrice] = React.useState(500);
    const [sub, setSub] = useState([{}]);
    const [subscribeId, setSubscribeId] = React.useState(1);
    const [sessionUrl, setSessionUrl] = React.useState('');

    const decoded = jwt_decode(state.auth.token);
    console.log('state:', state, decoded);
    // const subscribeFlag = window.location.search;
    const { state: navigateState } = useLocation();
    // const handleNext = async () => {
    //     // Show Loading
    //     // await createSubscription();
    //     // Hide Loading
    //     navigate('/launch/summary/index', {
    //         state: { ...navigateState, screen3: { subscribeId: subscribeId, subscribeName: subscribe } }
    //     });
    // };

    const subscriptions = state.campaign.subscriptions;
    console.log('subscriptions', subscriptions);

    const handleOpenSubscribeModal = (id, name) => {
        console.log('open modal ', id, name);

        navigate('/launch/summary/index', {
            state: { ...navigateState, screen3: { subscribeName: subscriptions[id - 1].name, subscribeId: subscriptions[id - 1].id } }
        });
        // try {
        //     const response = await createCheckOutSession({
        //         priceId: 'price_1MMXNGHWzArqsHgy7dXd6yxj',
        //         email: decoded.email
        //     });
        //     return window.location.assign(response.url); //(response.url);
        // } catch (e) {
        //     console.log(e);
        //     alert('Something went wrong');
        // }
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
                        subscriptions
                            .sort((p1, p2) => (p1.coins > p2.coins ? 1 : p1.coins < p2.coins ? -1 : 0))
                            .map((item, key) => {
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
                                                // border: '1px solid #FF0676',
                                                background: '#FFFFFF11  !important'
                                            }
                                        }}
                                    >
                                        <Card
                                            sx={{
                                                background: '#FFFFFF00',
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
                                                        fontSize: '13px',
                                                        color: '#FFFFFF',
                                                        background: `${item.id == 2 ? '#371244' : '#FFFFFF00'}`,
                                                        display: 'inherit'
                                                        // borderBottom: '1px dashed #FFF',
                                                        // textAlign: 'center'
                                                    }}
                                                >
                                                    &nbsp;&nbsp;{item.id == 2 && 'Most popular'}&nbsp;&nbsp;
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Inter',
                                                        fontStyle: 'normal',
                                                        fontWeight: '500',
                                                        fontSize: '20px',
                                                        lineHeight: '30px',
                                                        color: '#FFFFFF'
                                                        // borderBottom: '1px dashed #FFF',
                                                        // textAlign: 'center'
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Inter',
                                                        fontStyle: 'normal',
                                                        fontWeight: '100',
                                                        fontSize: '15px',
                                                        lineHeight: '20px',
                                                        color: '#FFFFFF',
                                                        marginBottom: '20px'
                                                        // textAlign: 'center'
                                                    }}
                                                >
                                                    {item.id == 1 ? 'Best for local weeknight crowds' : ''}
                                                    {item.id == 2 ? 'Best for primetime evening crowds' : ''}
                                                    {item.id == 3 ? 'Best for college stadiums and events' : ''}
                                                    {item.id == 4 ? 'Best for semi-pro and pro sports' : ''}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Inter',
                                                        fontStyle: 'normal',
                                                        fontWeight: '1000',
                                                        fontSize: '40px',
                                                        lineHeight: '105px',
                                                        color: '#FFFFFF'
                                                        // borderBottom: '1px dashed #FFF'
                                                        // textAlign: 'center'
                                                    }}
                                                >
                                                    ${item.price}
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        borderRadius: '8.8',
                                                        backgroundColor: '#FF0676',
                                                        height: '40px',
                                                        width: '100%',
                                                        fontSize: '16px',
                                                        fontWeight: '700'
                                                    }}
                                                    onClick={(e) => handleOpenSubscribeModal(item.id, item.name)}
                                                >
                                                    Select
                                                </Button>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Inter',
                                                        fontStyle: 'normal',
                                                        fontWeight: '100',
                                                        fontSize: '20px',
                                                        lineHeight: '40px',
                                                        color: '#FFFFFF'
                                                        // textAlign: 'center'
                                                    }}
                                                >
                                                    This includes:
                                                    <br />
                                                    <CheckCircleIcon fontSize="small" />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    {item.coins} coins
                                                    <br />
                                                    <CheckCircleIcon fontSize="small" />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    {item.user_limit > 5000 ? 'Unlimited Players' : `Up to ${item.user_limit} Players`}
                                                    <br />
                                                    <CheckCircleIcon fontSize="small" />
                                                    &nbsp;&nbsp;&nbsp;&nbsp; Use Data Analytics
                                                </Typography>
                                            </CardContent>
                                            {/* <CardActions sx={{ justifyContent: 'center' }}> */}
                                            {/* </CardActions> */}
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
                    <Iframe url={sessionUrl} width="640px" height="800vh" id="" className="" />
                    {/* <Box
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
                            <CardNumberElement
                                options={{
                                    iconStyle: 'solid',
                                    hidePostalCode: true,
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
                                            ':-webkit-autofill': {
                                                color: '#fce883'
                                            },
                                            lineHeight: '60px'
                                        },
                                        invalid: {
                                            color: '#E25950'
                                        }
                                    }
                                }}
                            />
                            <CardElement />
                            
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
                    </Box> */}
                </Modal>
            </Grid>
        </>
    );
};

export default SelectSubscriptionPage;
