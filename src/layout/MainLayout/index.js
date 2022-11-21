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
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    useEffect(() => {
        dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none',
                    backgroundImage:
                        'radial-gradient(circle at left, rgba(255, 77, 157, .1), transparent), radial-gradient(circle at center, rgba(255, 77, 157, .1), transparent)'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
                <Divider sx={{ opacity: '.3' }} />
            </AppBar>

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <Main
                theme={theme}
                open={leftDrawerOpened}
                sx={{
                    position: 'relative',
                    backgroundImage: 'radial-gradient(closest-side, rgba(22, 1, 45, .2), rgba(255, 77, 157, .1), rgba(22, 1, 45, .2))'
                }}
            >
                <Outlet />
            </Main>
        </Box>
    );
};

export default MainLayout;
