/* eslint-disable no-unused-vars */
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';

import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import CreatePassword from '../auth-forms/AuthCreate';

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Grid container justifyContent="left" alignItems="left" sx={{ minHeight: 'calc(100vh - 150px)' }}>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sm={12}
                            lg={5}
                            sx={{
                                m: { xs: 1, sm: 5 },
                                mb: 0
                            }}
                        >
                            <AuthCardWrapper
                                sx={{
                                    backgroundColor: 'transparent'
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
                                                    <Typography color="#FFFFFF" gutterBottom fontSize={matchDownSM ? '50px' : '70px'}>
                                                        Create New Password
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CreatePassword />
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
