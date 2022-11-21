/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrizeList = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/prizes/index" {...props} role={undefined} />);

const UpdatePrize = () => {
    const theme = useTheme();
    return (
        <>
            <MainCard sx={{ marginBottom: '50px' }}>
                <CardContent>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item sx={{ paddingLeft: '20px' }}>
                                    <Typography variant="h2" color="white">
                                        Select Prizes
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
            <MainCard sx={{ backgroundColor: '#33064C' }}>
                <CardContent>
                    <form>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h1" color="white">
                                            Creating Your Prize
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h5" color="white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, convallis sed sagittis sit
                                            varius ullamcorper. At morbi amet nec montes. Nisi, lacinia pellentesque consequat cursus.
                                            Ultricies neque, magna eget auctor. In lectus cursus nec ultricies.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <TextField
                                        fullWidth
                                        label="Select Name"
                                        margin="normal"
                                        name="selectname"
                                        type="text"
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <TextField
                                        fullWidth
                                        label="Select Name"
                                        margin="normal"
                                        name="selectname"
                                        type="text"
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <TextField
                                        fullWidth
                                        label="Select Name"
                                        margin="normal"
                                        name="selectname"
                                        type="text"
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <TextField
                                        fullWidth
                                        label="Select Name"
                                        margin="normal"
                                        name="selectname"
                                        type="text"
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                component={PrizeList}
                                to="/prizes/index"
                                variant="contained"
                                sx={{
                                    borderRadius: '8.8',
                                    backgroundColor: '#FF0676',
                                    width: '120px',
                                    height: '40px',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    marginRight: '35px',
                                    marginTop: '60px'
                                }}
                            >
                                + Add New
                            </Button>
                        </Grid>
                    </form>
                </CardContent>
            </MainCard>
        </>
    );
};

export default UpdatePrize;
