/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const PrizeList = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/prizes/index" {...props} role={undefined} />);

const UpdatePrize = () => {
    const theme = useTheme();
    return (
        <>
            <MainCard sx={{ marginBottom: '50px' }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignContent="center" justifyContent="space-between">
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
                                Select Prizes
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>
            <MainCard>
                <form>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sx={{ marginTop: '45px', marginBottom: '25px' }}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
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
                                        Creating Your Prize
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={9} sx={{ marginBottom: '45px' }}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            lineHeight: '180%',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus, convallis sed sagittis sit varius
                                        ullamcorper. At morbi amet nec montes. Nisi, lacinia pellentesque consequat cursus. Ultricies neque,
                                        magna eget auctor. In lectus cursus nec ultricies.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ marginBottom: '35px' }}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Lorem Ipsum"
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
                                    label="Lorem Ipsum"
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
                                    label="Lorem Ipsum"
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
                                    label="Lorem Ipsum"
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
                                fontSize: '16px',
                                fontWeight: '700',
                                marginTop: '60px',
                                marginBottom: '60px',
                                lineHeight: '19px'
                            }}
                        >
                            Create
                        </Button>
                    </Grid>
                </form>
            </MainCard>
        </>
    );
};

export default UpdatePrize;
