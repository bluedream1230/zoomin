/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Yup from 'yup';
import { Validate, ValidationGroup } from 'mui-validate';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    CardContent,
    Grid,
    TextField,
    Typography,
    Select,
    Backdrop,
    CircularProgress,
    Snackbar,
    Alert,
    Modal,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import PrizeSelect from 'ui-component/PrizeSelect';
import { FormikProvider, useFormik } from 'formik';
import { getReward, getCampaign, createPrize, getAudience, createAudience } from 'services/apis/server';
import { GET_AUDIENCES, GET_REWARDS } from 'store/actions';
import { store } from 'store';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import Container from '@mui/material/Container';
import Iframe from 'react-iframe';

import { useForm } from 'react-hook-form';
import { values } from 'lodash';
import Dropzone from 'react-dropzone';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const LaunchGameView = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/launch/games/index" {...props} role={undefined} />);
const CreatePrize = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/prizes/manage" {...props} role={undefined} />);
const styles = {
    root: {
        'flex-direction': 'row-reverse'
    }
};

const filter = createFilterOptions();

const LaunchPage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const state = store.getState();

    const [videoUrl, setVideoUrl] = useState('simple');
    const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);
    const [reward, setReward] = useState([]);
    const [audience, setAudience] = useState([]);
    const [isLoading, setLoading] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const { state: navigateState } = useLocation();

    const navigate = useNavigate();
    const allEvents = useSelector((state) => state.campaign);

    const load = async () => {
        const rewards = await getReward();
        dispatch({ type: GET_REWARDS, rewards: rewards });
        const audiences = await getAudience();
        dispatch({ type: GET_AUDIENCES, audiences: audiences });
        setReward(rewards);
        setAudience(audiences);
    };

    React.useEffect(() => {
        load();
    }, []);
    const PrizeListData = allEvents.rewards;
    const AudienceListData = allEvents.audiences;
    const TypeLabelList = [{ label: 'Reward' }, { label: 'Coupon' }];
    const PrizeLabelList = React.useMemo(() => {
        if (!PrizeListData) return [];
        return PrizeListData.map((item, index) => ({ label: item.name, id: item.id, key: index }));
    }, [PrizeListData]);

    const validationSchema1 = Yup.object({
        selectname: Yup.string('Enter Prize name').required('Name is required'),
        launchdate: Yup.date('Enter Launch Date').required('Launch Date is required'),
        location: Yup.string('Enter Location').required('Location is required'),
        endtime: Yup.date('Enter end time').required('End time is required'),
        audience: Yup.string('Enter Audience').required('Audience is required')
    });

    const validationSchema2 = Yup.object({
        name: Yup.string('Enter name').required('Name is required'),
        type: Yup.string('').required('Type is required'),
        category: Yup.string('').required('Category is required'),
        image_url: Yup.string('').required('Image URL is required'),
        description: Yup.string('').required('Description is required'),
        coinvalue: Yup.number('Coin Value must be number').required('Coin Value is required'),
        timelimit: Yup.number('Time Limit must be number').required('Time Limit is required'),
        ratelimit: Yup.number('Rate Limit must be number').required('Rate Limit is required')
    });
    const validationSchema3 = Yup.object({
        prize: Yup.array().min(1).required('Prize is required')
    });
    const validationSchema4 = Yup.object({
        videourl: Yup.string('Enter Video Url').required('Video Url is required'),
        sponsorname: Yup.string('Enter Sponsor Name').required('Sponsor Name is required'),
        files: Yup.array().min(1).required('Image is required')
    });

    const formik1 = useFormik({
        initialValues: {
            selectname: '',
            launchdate: '',
            location: '',
            endtime: '',
            audience: ''
        },
        validationSchema: validationSchema1,
        onSubmit: (values) => {}
    });

    const formik2 = useFormik({
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
        validationSchema: validationSchema2,
        onSubmit: (values) => {}
    });

    const formik3 = useFormik({
        initialValues: {
            prize: []
        },
        validationSchema: validationSchema3,
        onSubmit: (values) => {}
    });
    const formik4 = useFormik({
        initialValues: {
            videourl: '',
            sponsorname: '',
            logoUrl: '',
            files: []
        },
        validationSchema: validationSchema4,
        onSubmit: (values) => {}
    });

    const onCreatePrize = async (values) => {
        try {
            setLoading(true);
            const data = await createPrize({
                name: values.name,
                type: values.type,
                category: values.category,
                image_url: values.image_url,
                description: values.description,
                coinvalue: values.coinvalue,
                timelimit: values.timelimit,
                ratelimit: values.ratelimit,
                user: state.auth
            });
            const rewards = await getReward();
            dispatch({ type: GET_REWARDS, rewards: rewards });
            setLoading(false);
            // navigate('/prizes/index');
        } catch (e) {
            console.log(e);
            // setSnakebar({ open: true });
        } finally {
            setLoading(false);
        }
    };

    const handleNext = (eventInfo, prize, sponsor) => {
        navigate('/launch/games/index', { state: { eventInfo, prize, sponsor } });
    };

    // React.useEffect(() => {
    //     async function setInitialValues() {
    //         if (!navigateState) return;
    //         else {
    //             await formik1.setValues(navigateState.eventInfo, false);
    //             // await formik3.setValues(navigateState.prizeId, false);
    //         }
    //     }
    //     setInitialValues();
    // }, [navigateState]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handleClose = () => {
        setDialogValue({
            label: ''
        });
        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        label: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            label: dialogValue.label
        });
        handleClose();
    };

    const handleCreateAudience = async () => {
        // console.log(dialogValue);
        const data = await createAudience({
            name: dialogValue.label
        });
        const audiences = await getAudience();
        dispatch({ type: GET_AUDIENCES, audiences: audiences });
        handleClose();
    };
    const AudienceLabelList = React.useMemo(() => {
        if (!AudienceListData) return [];
        return AudienceListData.map((item, index) => ({ label: item.name, id: item.id, key: index }));
    }, [allEvents]);

    return (
        <>
            {isLoading && (
                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            <MainCard>
                <form onSubmit={formik1.handleSubmit}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sx={{ marginBottom: '30px' }}>
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
                                        Select Name & Launch Date
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
                                    value={formik1.values.selectname}
                                    onChange={formik1.handleChange}
                                    error={formik1.touched.selectname && Boolean(formik1.errors.selectname)}
                                    helperText={formik1.touched.selectname && formik1.errors.selectname}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Grid container>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Launch Date"
                                        DialogProps={{
                                            maxWidth: 'sm'
                                        }}
                                        value={formik1.values.launchdate}
                                        onChange={(newValue) => {
                                            formik1.setFieldValue('launchdate', newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                sx={{ ...theme.typography.customInput }}
                                                error={formik1.touched.launchdate && Boolean(formik1.errors.launchdate)}
                                                helperText={formik1.touched.launchdate && formik1.errors.launchdate}
                                                fullWidth
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Grid container>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="End Date"
                                        DialogProps={{
                                            maxWidth: 'sm'
                                        }}
                                        value={formik1.values.endtime}
                                        onChange={(newValue) => {
                                            // formik1.values.endtime = newValue;
                                            formik1.setFieldValue('endtime', newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                sx={{ ...theme.typography.customInput }}
                                                error={formik1.touched.endtime && Boolean(formik1.errors.endtime)}
                                                helperText={formik1.touched.endtime && formik1.errors.endtime}
                                                fullWidth
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm v={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Location"
                                    margin="normal"
                                    name="location"
                                    type="text"
                                    value={formik1.values.location}
                                    onChange={formik1.handleChange}
                                    error={formik1.touched.location && Boolean(formik1.errors.location)}
                                    helperText={formik1.touched.location && formik1.errors.location}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sx={{ marginBottom: '50px', width: '100%' }}>
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
                                    id="audience_label_list"
                                    name="audience"
                                    options={AudienceLabelList}
                                    sx={{
                                        ...theme.typography.customInput
                                    }}
                                    onChange={(e, v) => {
                                        formik1.setFieldValue('audience', v.id);
                                        if (typeof v === 'string') {
                                            // timeout to avoid instant validation of the dialog's form.
                                            setTimeout(() => {
                                                toggleOpen(true);
                                                setDialogValue({
                                                    label: v
                                                });
                                            });
                                        } else if (v && v.inputValue) {
                                            toggleOpen(true);
                                            setDialogValue({
                                                label: v.inputValue
                                            });
                                        } else {
                                            setValue(v);
                                        }
                                    }}
                                    getOptionLabel={(option) => {
                                        // e.g value selected with enter, right from the input
                                        if (typeof option === 'string') {
                                            return option;
                                        }
                                        if (option.inputValue) {
                                            return option.inputValue;
                                        }
                                        return option.label;
                                    }}
                                    filterOptions={(options, params) => {
                                        const filtered = filter(options, params);

                                        if (params.inputValue !== '') {
                                            filtered.push({
                                                inputValue: params.inputValue,
                                                label: `Add "${params.inputValue}"`
                                            });
                                            console.log(filtered);
                                        }

                                        return filtered;
                                    }}
                                    renderOption={(props, option) => <li {...props}>{option.label}</li>}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            error={formik1.touched.audience && Boolean(formik1.errors.audience)}
                                            helperText={formik1.touched.audience && formik1.errors.audience}
                                            label="Select Audience"
                                        />
                                    )}
                                />
                                {/* <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    sx={{
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 1000,
                                        bgcolor: '#360068',
                                        opacity: '0.88',

                                        border: '2px solid #000',
                                        boxShadow: '39.9357px 7.35657px 132.418px rgba(0, 0, 0, 0.4)',
                                        p: 8,
                                        '& .MuiDialog-container': {
                                            '& .MuiDialog-paper': {
                                                minWidth: '100%',
                                                minHeight: '100%'
                                            }
                                        }
                                    }}
                                > */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
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
                                            opacity: '0.88',

                                            border: '2px solid #000',
                                            boxShadow: '39.9357px 7.35657px 132.418px rgba(0, 0, 0, 0.4)',
                                            p: 8
                                        }}
                                    >
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
                                            Add Audience
                                        </Typography>
                                        <TextField
                                            margin="normal"
                                            id="name"
                                            name="label"
                                            value={dialogValue.label}
                                            onChange={(event) =>
                                                setDialogValue({
                                                    ...dialogValue,
                                                    label: event.target.value
                                                })
                                            }
                                            label="Name"
                                            type="text"
                                            required
                                            sx={{ ...theme.typography.customInput }}
                                        />
                                        <Button
                                            disableElevation
                                            onClick={handleCreateAudience}
                                            variant="contained"
                                            sx={{
                                                borderRadius: '8.8',
                                                backgroundColor: '#FF0676',
                                                width: '120px',
                                                height: '40px',
                                                fontSize: '16px',
                                                fontWeight: '700',
                                                lineHeight: '19px',
                                                marginTop: '20px'
                                            }}
                                        >
                                            Create
                                        </Button>
                                        {/* </Dialog> */}
                                    </Box>
                                </Modal>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>

                <Grid item xs={12} sx={{ marginBottom: '30px' }}>
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
                                Sponsorship
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <form onSubmit={formik4.handleSubmit}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Sponsor Name"
                                    margin="normal"
                                    name="sponsorname"
                                    type="text"
                                    value={formik4.values.sponsorname}
                                    onChange={formik4.handleChange}
                                    error={formik4.touched.sponsorname && Boolean(formik4.errors.sponsorname)}
                                    helperText={formik4.touched.sponsorname && formik4.errors.sponsorname}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Grid container>
                                <TextField
                                    fullWidth
                                    label="Video Url"
                                    margin="normal"
                                    name="videourl"
                                    type="text"
                                    value={formik4.values.videourl}
                                    onChange={(e) => {
                                        formik4.handleChange(e);
                                        setVideoUrl(e.target.value);
                                    }}
                                    error={formik4.touched.videourl && Boolean(formik4.errors.videourl)}
                                    helperText={formik4.touched.videourl && formik4.errors.videourl}
                                    sx={{ ...theme.typography.customInput }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ cursor: 'pointer' }}>
                            <Grid container sx={{ border: '1px solid #FFF', borderRadius: '12px', height: '100%' }}>
                                <Dropzone
                                    onDrop={(acceptedFiles) => {
                                        acceptedFiles.forEach((item, index) => {
                                            if (formik4.values.files.length >= 3) return;
                                            formik4.values.files.push(item);
                                        });
                                    }}
                                    maxFiles={3}
                                >
                                    {({ getRootProps, getInputProps, open, acceptedFiles }) => (
                                        <div {...getRootProps()} style={{ height: '35vh', width: '100%', textAlign: 'center' }}>
                                            <input {...getInputProps()} />

                                            <img
                                                src={
                                                    formik4.values.logoUrl.length !== 0
                                                        ? baseServerUrl + '/companies/' + formik4.values.logoUrl
                                                        : ''
                                                }
                                                alt=""
                                            />
                                            <p
                                                style={{
                                                    borderBottom: '1px solid',
                                                    fontSize: '25px',
                                                    margin: '0px',
                                                    paddingBottom: '15px'
                                                }}
                                            >
                                                Upload logo
                                            </p>
                                            <div style={{ display: 'flex', padding: '20px' }}>
                                                {formik4.values.files.map((file, index) => {
                                                    return (
                                                        <div key={index} style={{ width: '33.33%' }}>
                                                            {/* <DeleteOutlinedIcon onClick={console.log(index)} /> */}
                                                            <img
                                                                src={URL.createObjectURL(file)}
                                                                alt="preview"
                                                                style={{ padding: '10px', height: '25vh', width: '100%' }}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </Dropzone>
                                {/* <DropzoneAreaExample /> */}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Container>
                                <ReactPlayer width={'100%'} height="100%" url={videoUrl} playing={true} muted={true} controls={true} />
                                {/* <ControlIcons /> */}
                            </Container>
                        </Grid>
                    </Grid>
                </form>
                <Grid sx={{ height: '50px' }}></Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sx={{ marginBottom: '30px' }}>
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
                                    Select or Create Prize
                                </Typography>
                            </Grid>
                            <Button
                                disableElevation
                                variant="contained"
                                onClick={handleOpenModal}
                                sx={{
                                    borderRadius: '8.8',
                                    backgroundColor: '#04B4DD',
                                    width: '185px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    lineHeight: '19px',
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal'
                                }}
                            >
                                Create Your Prize
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <form onSubmit={formik3.handleSubmit}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sx={{ marginBottom: '30px', width: '100%' }}>
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
                                    multiple
                                    id="prize_label_list"
                                    name="prize"
                                    options={PrizeLabelList}
                                    sx={{
                                        ...theme.typography.customInput
                                    }}
                                    onChange={(e, v) => {
                                        console.log(v);
                                        formik3.values.prize = [];
                                        v.forEach((item, index) => {
                                            console.log(item);
                                            formik3.values.prize.push(item.id);
                                        });
                                        console.log(formik3.values.prize);
                                    }}
                                    renderOption={(props, option) => {
                                        return (
                                            <li {...props} key={option.id}>
                                                {option.label}
                                            </li>
                                        );
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            error={formik3.touched.prize && Boolean(formik3.errors.prize)}
                                            helperText={formik3.touched.prize && formik3.errors.prize}
                                            label="Select Prizes"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
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
                            opacity: '0.88',

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
                                                Please Add Your Prize
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
                                            value={formik2.values.name}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.name && Boolean(formik2.errors.name)}
                                            helperText={formik2.touched.name && formik2.errors.name}
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
                                                formik2.setFieldValue('type', v.label);
                                            }}
                                            renderOption={(props, option) => {
                                                return <li {...props}>{option.label}</li>;
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    error={formik2.touched.type && Boolean(formik2.errors.type)}
                                                    helperText={formik2.touched.type && formik2.errors.type}
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
                                            value={formik2.values.category}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.category && Boolean(formik2.errors.category)}
                                            helperText={formik2.touched.category && formik2.errors.category}
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
                                            value={formik2.values.image_url}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.image_url && Boolean(formik2.errors.image_url)}
                                            helperText={formik2.touched.image_url && formik2.errors.image_url}
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
                                            value={formik2.values.description}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.description && Boolean(formik2.errors.description)}
                                            helperText={formik2.touched.description && formik2.errors.description}
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
                                            value={formik2.values.coinvalue}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.coinvalue && Boolean(formik2.errors.coinvalue)}
                                            helperText={formik2.touched.coinvalue && formik2.errors.coinvalue}
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
                                            value={formik2.values.ratelimit}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.ratelimit && Boolean(formik2.errors.ratelimit)}
                                            helperText={formik2.touched.ratelimit && formik2.errors.ratelimit}
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
                                            value={formik2.values.timelimit}
                                            onChange={formik2.handleChange}
                                            error={formik2.touched.timelimit && Boolean(formik2.errors.timelimit)}
                                            helperText={formik2.touched.timelimit && formik2.errors.timelimit}
                                            sx={{ ...theme.typography.customInput }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    disableElevation
                                    onClick={async () => {
                                        const errors = await formik2.validateForm();
                                        formik2.submitForm();
                                        if (Object.keys(errors).length == 0) {
                                            onCreatePrize(formik2.values);
                                        }
                                        handleCloseModal();
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
                            const errors3 = await formik3.validateForm();
                            const errors4 = await formik4.validateForm();
                            console.log(errors4, errors, errors3);
                            await formik1.submitForm();
                            await formik3.submitForm();
                            await formik4.submitForm();
                            if (Object.keys(errors).length == 0 && Object.keys(errors3).length == 0 && Object.keys(errors4).length == 0) {
                                handleNext(formik1.values, formik3.values, formik4.values);
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
            </MainCard>
            {/* <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={5000}>
                <Alert severity="error">Something went wrong!</Alert>
            </Snackbar> */}
        </>
    );
};

export default LaunchPage;
