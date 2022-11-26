/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Divider, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import { appDrawerWidth } from 'store/constant';
import { SET_MENU, SET_SELETED } from 'store/actions';

//backgroundImg imports
import BackgroundImg from '../../assets/images/content-colomn-img.png';

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.down('lg')]: {
            width: `calc(100% - ${appDrawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            width: `calc(100% - ${appDrawerWidth}px)`
        },
        [theme.breakpoints.down('sm')]: {
            width: `calc(100% - ${appDrawerWidth}px)`
        },
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${appDrawerWidth}px)`
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${appDrawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
    }, [matchDownMd]);

    useEffect(() => {
        let arr = new Array(7).fill(false);
        dispatch({ type: SET_SELETED, selected: arr });
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                position="fixed"
                sx={{
                    height: '100px',
                    backgroundColor: '#36006844',
                    borderBottom: '2px solid #821EF044',
                    paddingLeft: '42px',
                    paddingRight: '51px',
                    backdropFilter: 'blur(42px)'
                }}
            >
                <Toolbar sx={{ paddingTop: '20px' }}>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Main
                theme={theme}
                open={leftDrawerOpened}
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${BackgroundImg})`,
                    top: '100px',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    padding: `${matchDownSM ? '10px 5px 0px 5px !important' : '55px 55px 0px 55px'}`
                }}
            >
                <Outlet />
            </Main>
        </Box>
    );
};

export default MainLayout;
