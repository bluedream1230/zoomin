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
import { SET_MENU } from 'store/actions';
import './scrollbar.css';

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
            marginLeft: '0px',
            width: `calc(100% - ${appDrawerWidth}px)`,
            padding: '70px'
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${appDrawerWidth}px)`,
            padding: '70px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${appDrawerWidth}px)`,
            padding: '70px',
            marginRight: '10px'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: -(appDrawerWidth - 20),
            width: `calc(100% - ${appDrawerWidth}px)`,
            padding: '70px',
            marginRight: '10px'
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
            marginLeft: '20px',
            padding: '70px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            padding: '70px'
        }
    })
}));
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownLg });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLg]);

    return (
        <div style={{ height: '100px' }}>
            <CssBaseline />
            <AppBar
                sx={{
                    position: 'relative',
                    height: '100px',
                    backgroundColor: '#36006844',
                    borderBottom: '2px solid #821EF044',
                    paddingLeft: '42px',
                    paddingRight: '51px'
                }}
            >
                <Toolbar sx={{ padding: '20px 0px 17px 0px !important' }}>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex' }}>
                <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
                <Main
                    theme={theme}
                    open={leftDrawerOpened}
                    sx={{
                        overflowY: 'scroll',
                        scrollbarColor: 'trasparent',
                        backgroundImage: `url(${BackgroundImg})`,
                        height: 'calc(100vh - 100px)',
                        borderRadius: '0px'
                    }}
                    className="scrollbar-hide"
                >
                    {/* <Outlet /> */}
                </Main>
            </Box>
        </div>
    );
};

export default MainLayout;
