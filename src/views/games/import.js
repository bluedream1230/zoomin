/* eslint-disable no-unused-vars */
// material-ui
import { Grid, Typography, Card, CardContent, Avatar, CardActions, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';
import { ReactComponent as MyDevice } from '../../assets/images/device-icon.svg';
import { ReactComponent as GoogleDrive } from '../../assets/images/google-drive-icon.svg';
import { ReactComponent as DropBox } from '../../assets/images/dropbox-icon.svg';
import { ReactComponent as BoxIcon } from '../../assets/images/box-icon-96.svg';
import { ReactComponent as Egnyte } from '../../assets/images/egnyte.svg';
import { ReactComponent as SharePoint } from '../../assets/images/sharepoint-icon.svg';
import { ReactComponent as OneDrive } from '../../assets/images/one-drive-icon.svg';
const ImportGames = () => {
    const tempcard = [
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img1.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img2.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img3.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img4.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img5.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img6.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img7.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img8.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img9.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img10.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img11.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../assets/images/game-img12.jpg`)
        }
    ];
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchDownXL = useMediaQuery(theme.breakpoints.down('xl'));
    return (
        <>
            <PerfectScrollbar
                component="div"
                style={{
                    width: `${matchDownXL ? '60%' : '100%'}`
                }}
            >
                <Grid container spacing={5} sx={{ width: 'calc(100% - 410px)' }}>
                    <Grid item xs={12} sx={{ minWidth: '750px' }}>
                        <Grid container>
                            {tempcard.map((item, index) => {
                                return (
                                    <Grid
                                        item
                                        xl={6}
                                        lg={6}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                        sx={{ paddingX: '20px !important', marginBottom: '25px' }}
                                    >
                                        <ImgMediaCard
                                            card_name={item.name}
                                            card_image={item.icon}
                                            key={index}
                                            href={item.href}
                                        ></ImgMediaCard>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </PerfectScrollbar>
            <Grid
                sx={{
                    position: 'fixed',
                    top: `${matchDownSM ? '50px' : '100px'}`,
                    right: '0px',
                    width: 410,
                    height: `${matchDownSM ? 'calc(100vh - 50px)' : 'calc(100vh - 100px)'}`,
                    backgroundColor: '#360068',
                    opacity: '0.86',
                    boxShadow: '40px 7px 132px rgba(0,0,0,0.7)',
                    transform: 'rotate(0.06deg)',
                    padding: '65px 55px 0px 55px',
                    zIndex: '1000'
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid item marginBottom="43px">
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '30px',
                                lineHeight: '36px',
                                color: '#FFFFFF',
                                marginBottom: '17px'
                            }}
                        >
                            Lorem Ipsum
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '180%',
                                width: '277px',
                                color: '#FFFFFF'
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit at quam diam.
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{ marginBottom: '25px' }}>
                            <Card sx={{ border: '0.8px solid #821EF0', borderRadius: '6.5px' }}>
                                <CardContent sx={{ padding: '0px !important', margin: '20px 35px 20px 35px' }}>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: 60,
                                            height: 60,
                                            padding: '0px !important',
                                            marginBottom: '15px'
                                        }}
                                    >
                                        <MyDevice />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', padding: '0px', marginBottom: '20px', color: '#FFFFFF' }}>
                                    <Typography>My Device</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sx={{ marginBottom: '25px' }}>
                            <Card sx={{ border: '0.8px solid #821EF0', borderRadius: '6.5px' }}>
                                <CardContent sx={{ padding: '0px !important', margin: '20px 35px 20px 35px' }}>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: 60,
                                            height: 60,
                                            padding: '0px !important',
                                            marginBottom: '15px'
                                        }}
                                    >
                                        <GoogleDrive />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', padding: '0px', marginBottom: '20px', color: '#FFFFFF' }}>
                                    <Typography>Google Drive</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sx={{ marginBottom: '25px' }}>
                            <Card sx={{ border: '0.8px solid #821EF0', borderRadius: '6.5px' }}>
                                <CardContent sx={{ padding: '0px !important', margin: '20px 35px 20px 35px' }}>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: 60,
                                            height: 60,
                                            padding: '0px !important',
                                            marginBottom: '15px'
                                        }}
                                    >
                                        <DropBox />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', padding: '0px', marginBottom: '20px', color: '#FFFFFF' }}>
                                    <Typography>Drop Box</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sx={{ marginBottom: '25px' }}>
                            <Card sx={{ border: '0.8px solid #821EF0', borderRadius: '6.5px' }}>
                                <CardContent sx={{ padding: '0px !important', margin: '20px 35px 20px 35px' }}>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: 60,
                                            height: 60,
                                            padding: '0px !important',
                                            marginBottom: '15px'
                                        }}
                                    >
                                        <BoxIcon />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', padding: '0px', marginBottom: '20px', color: '#FFFFFF' }}>
                                    <Typography>Box</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sx={{ marginBottom: '25px' }}>
                            <Card sx={{ border: '0.8px solid #821EF0', borderRadius: '6.5px' }}>
                                <CardContent sx={{ padding: '0px !important', margin: '20px 35px 20px 35px' }}>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: 60,
                                            height: 60,
                                            padding: '0px !important',
                                            marginBottom: '15px'
                                        }}
                                    >
                                        <OneDrive />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', padding: '0px', marginBottom: '20px', color: '#FFFFFF' }}>
                                    <Typography>One Drive</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sx={{ marginBottom: '25px' }}>
                            <Card sx={{ border: '0.8px solid #821EF0', borderRadius: '6.5px' }}>
                                <CardContent sx={{ padding: '0px !important', margin: '20px 35px 20px 35px' }}>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: 60,
                                            height: 60,
                                            padding: '0px !important',
                                            marginBottom: '15px'
                                        }}
                                    >
                                        <SharePoint />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', padding: '0px', marginBottom: '20px', color: '#FFFFFF' }}>
                                    <Typography>Share Poing</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sx={{ marginBottom: '25px' }}>
                            <Card sx={{ border: '0.8px solid #821EF0', borderRadius: '6.5px' }}>
                                <CardContent sx={{ padding: '0px !important', margin: '20px 35px 20px 35px' }}>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            backgroundColor: 'transparent',
                                            width: 60,
                                            height: 60,
                                            padding: '0px !important',
                                            marginBottom: '15px'
                                        }}
                                    >
                                        <Egnyte />
                                    </Avatar>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', padding: '0px', marginBottom: '20px', color: '#FFFFFF' }}>
                                    <Typography>Egnyte</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Grid>
        </>
    );
};

export default ImportGames;
