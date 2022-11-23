/* eslint-disable no-unused-vars */
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import AuthWrapper1 from '../AuthWrapper1';
import ResetPassword from '../auth-forms/AuthReset';

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="row" justifyContent="left" alignItems="center" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={12} sm={12} lg={7}>
                    <Grid
                        container
                        sx={{
                            width: '100%',
                            marginLeft: 'auto',
                            maxWidth: '1320px',
                            height: '100vh',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sm={12}
                            lg={12}
                            sx={{
                                marginLeft: '166px',
                                marginRight: '283px'
                            }}
                        >
                            <Grid container alignItems="left" justifyContent="left">
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction={matchDownSM ? 'column-reverse' : 'row'}
                                        alignItems="left"
                                        justifyContent="left"
                                    >
                                        <Grid item>
                                            <Stack alignItems="left" justifyContent="left" spacing={1}>
                                                <Typography
                                                    color="#FFFFFF"
                                                    gutterBottom
                                                    fontSize={matchDownSM ? '50px' : '70px'}
                                                    fontWeight="700"
                                                    fontStyle="normal"
                                                    fontFamily="Inter"
                                                    lineHeight="85px"
                                                    marginBottom="30px"
                                                >
                                                    Reset Password
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <ResetPassword />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
