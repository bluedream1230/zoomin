/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, CardContent, Grid, Typography, Card, CardMedia } from '@mui/material';
import { createTheme } from '@material-ui/core';

import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Edit } from 'tabler-icons-react';

const CampaignPerformances = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/campaigns/performance" {...props} role={undefined} />
));

const CampaignEdit = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/launch/index" {...props} role={undefined} />);

const CampaignSummary = () => {
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
    return (
        <MainCard>
            <CardContent>
                <form>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h1" color="white">
                                        Campaign Summary
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item lg={5} md={6} sm={6} xs={12}>
                                    <Card>
                                        <CardContent sx={{ backgroundColor: '#3B075B' }}>
                                            <Typography fontSize="23px" fontWeight="400" color="#B9B9B9">
                                                Campaign Name
                                            </Typography>
                                            <Typography fontSize="30px" fontWeight="700" color="#FF0676">
                                                Steve Jobs Gaming
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={4} md={3} sm={3} xs={12}>
                                    <Grid item>
                                        <Card>
                                            <CardContent sx={{ backgroundColor: '#3B075B' }}>
                                                <Typography fontSize="23px" fontWeight="400" color="#B9B9B9">
                                                    Launch Date
                                                </Typography>
                                                <Typography fontSize="30px" fontWeight="700" color="#FFFFFF">
                                                    09.06.2022
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <Grid item lg={3} md={3} sm={3} xs={12}>
                                    <Grid item>
                                        <Card>
                                            <CardContent sx={{ backgroundColor: '#3B075B' }}>
                                                <Typography fontSize="23px" fontWeight="400" color="#B9B9B9">
                                                    Winning Prize
                                                </Typography>
                                                <Typography fontSize="30px" fontWeight="700" color="#04B4DD">
                                                    $100
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item lg={5} md={6} sm={6} xs={12}>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardContent sx={{ backgroundColor: '#3B075B' }}>
                                                    <Typography fontSize="23px" fontWeight="400" color="#B9B9B9">
                                                        Target Audiance
                                                    </Typography>
                                                    <Typography fontSize="30px" fontWeight="700" color="#FFC857">
                                                        Lorem Ipsum Dummy
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardContent sx={{ backgroundColor: '#3B075B' }}>
                                                    <Typography fontSize="23px" fontWeight="400" color="#B9B9B9">
                                                        Game Name
                                                    </Typography>
                                                    <Typography fontSize="30px" fontWeight="700" color="#43CC83">
                                                        Long Winter Cars
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={7} md={6} sm={6} xs={12}>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    height="260"
                                                    image={require(`../../../assets/images/game-img12.jpg`)}
                                                    alt="green iguana"
                                                />
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginTop: '70px' }}>
                        <Button
                            component={CampaignPerformances}
                            to="/campaigns/performance"
                            variant="contained"
                            sx={{
                                borderRadius: '9.8',
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
                            component={CampaignEdit}
                            to="/launch/index"
                            variant="outlined"
                            sx={{
                                borderRadius: '9.8',
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
            </CardContent>
        </MainCard>
    );
};

export default CampaignSummary;
