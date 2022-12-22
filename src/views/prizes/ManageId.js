/* eslint-disable no-unused-vars */
import * as React from 'react';
import * as Yup from 'yup';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop, Button, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import PrizeSelect from 'ui-component/PrizeSelect';
import Autocomplete from '@mui/material/Autocomplete';
import { useFormik } from 'formik';
import { createPrize, getCampaign, getReward, getRewardById, updateReward } from 'services/apis/server';
import { store } from 'store';
import { GET_EVENTS, GET_REWARDS } from 'store/actions';

const PrizeList = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/prizes/index" {...props} role={undefined} />);
const state = store.getState();

const UpdatePrize = () => {
    const theme = useTheme();
    const allEvents = useSelector((state) => state.campaign);
    const { id } = useParams();

    const PrizeListData = allEvents.rewards;
    const PrizeLabelList = [];
    PrizeListData.map((item, index) => {
        PrizeLabelList.push({ label: item.name, key: index });
    });
    const TypeLabelList = [{ label: 'Reward' }, { label: 'Coupon' }];
    const validationSchema = Yup.object({
        name: Yup.string('Enter name').required('Name is required'),
        type: Yup.string('').required('Type is required'),
        category: Yup.string('').required('Category is required'),
        image_url: Yup.string('').required('Image URL is required'),
        description: Yup.string('').required('Description is required'),
        coinvalue: Yup.number('Coin Value must be number').required('Coin Value is required'),
        timelimit: Yup.number('Time Limit must be number').required('Time Limit is required'),
        ratelimit: Yup.number('Rate Limit must be number').required('Rate Limit is required')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            category: '',
            image_url: '',
            description: '',
            coinvalue: '',
            timelimit: '',
            ratelimit: '',
            user: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onCreatePrize(values);
        }
    });

    console.log('formik', formik);

    React.useEffect(() => {
        load();
    }, []);

    console.log(id);
    const load = async () => {
        const reward = await getRewardById(id);
        formik.setValues(reward, false);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = React.useState(false);

    const onCreatePrize = async (values) => {
        try {
            setLoading(true);
            const data = await updateReward(
                {
                    name: values.name,
                    type: values.type,
                    category: values.category,
                    image_url: values.image_url,
                    description: values.description,
                    coinvalue: values.coinvalue,
                    timelimit: values.timelimit,
                    ratelimit: values.ratelimit
                },
                id
            );
            console.log('reward data', data);
            const rewards = await getReward();
            dispatch({ type: GET_REWARDS, rewards: rewards });
            setLoading(false);
            navigate('/prizes/index');
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {isLoading && (
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <MainCard
                sx={{ marginBottom: '50px', '& .MuiCardContent-root': { paddingTop: '0px !important', paddingBottom: '0px !important' } }}
            >
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignContent="center" justifyContent="space-between">
                            <Grid item xs={12} sx={{ paddingRight: '0px !important' }}>
                                <Grid
                                    container
                                    sx={{
                                        '& .MuiAutocomplete-popper': {
                                            '& .MuiPaper-root': {
                                                backgroundColor: '#360068'
                                            }
                                        }
                                    }}
                                >
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={PrizeLabelList}
                                        sx={{
                                            ...theme.typography.customInput,
                                            '& > div > label': {
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: '30px',
                                                lineHeight: '36px',
                                                color: '#FFFFFF',
                                                left: '-11px'
                                            },
                                            '& > div > div > fieldset': {
                                                border: '0px'
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Select Prizes" />}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>

            <MainCard>
                <form onSubmit={formik.handleSubmit}>
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
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    margin="normal"
                                    name="name"
                                    type="text"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid
                                container
                                sx={{
                                    '& .MuiAutocomplete-popper': {
                                        '& .MuiPaper-root': {
                                            backgroundColor: '#360068'
                                        }
                                    }
                                }}
                            >
                                <Autocomplete
                                    disablePortal
                                    id="type_label_list"
                                    name="type"
                                    options={TypeLabelList}
                                    sx={{
                                        ...theme.typography.customInput
                                    }}
                                    onChange={(e, v) => {
                                        formik.setFieldValue('type', v.label);
                                    }}
                                    renderOption={(props, option) => {
                                        return <li {...props}>{option.label}</li>;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            error={formik.touched.type && Boolean(formik.errors.type)}
                                            helperText={formik.touched.type && formik.errors.type}
                                            label="Type"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Category"
                                    margin="normal"
                                    name="category"
                                    type="text"
                                    id="category"
                                    value={formik.values.category}
                                    onChange={formik.handleChange}
                                    error={formik.touched.category && Boolean(formik.errors.category)}
                                    helperText={formik.touched.category && formik.errors.category}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Image URL"
                                    margin="normal"
                                    name="image_url"
                                    type="text"
                                    id="image_url"
                                    value={formik.values.image_url}
                                    onChange={formik.handleChange}
                                    error={formik.touched.image_url && Boolean(formik.errors.image_url)}
                                    helperText={formik.touched.image_url && formik.errors.image_url}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Description"
                                    margin="normal"
                                    name="description"
                                    type="text"
                                    id="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Coin Value"
                                    margin="normal"
                                    name="coinvalue"
                                    type="number"
                                    id="coinvalue"
                                    value={formik.values.coinvalue}
                                    onChange={formik.handleChange}
                                    error={formik.touched.coinvalue && Boolean(formik.errors.coinvalue)}
                                    helperText={formik.touched.coinvalue && formik.errors.coinvalue}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Rate Limit"
                                    margin="normal"
                                    name="ratelimit"
                                    type="number"
                                    id="ratelimit"
                                    value={formik.values.ratelimit}
                                    onChange={formik.handleChange}
                                    error={formik.touched.ratelimit && Boolean(formik.errors.ratelimit)}
                                    helperText={formik.touched.ratelimit && formik.errors.ratelimit}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Time Limit"
                                    margin="normal"
                                    name="timelimit"
                                    type="number"
                                    id="timelimit"
                                    value={formik.values.timelimit}
                                    onChange={formik.handleChange}
                                    error={formik.touched.timelimit && Boolean(formik.errors.timelimit)}
                                    helperText={formik.touched.timelimit && formik.errors.timelimit}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            // component={PrizeList}
                            // to="/prizes/index"
                            disableElevation
                            type="submit"
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
                            Update
                        </Button>
                    </Grid>
                </form>
            </MainCard>
        </>
    );
};

export default UpdatePrize;
