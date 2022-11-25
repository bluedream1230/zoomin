/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, SvgIcon, useMediaQuery, Divider, ListItemIcon, ListItemButton } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';

import { MenuList, LogoutComponent } from './MenuList';
import { SET_COLLAPSE } from 'store/actions';
import { appDrawerWidth } from 'store/constant';
import { ReactComponent as HambergIcon } from '../../../assets/images/hamberg.svg';

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isCollapse = useSelector((state) => state.customization.isCollapse);
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const customization = useSelector((state) => state.customization);
    const handleClick = () => {
        dispatch({ type: SET_COLLAPSE, isCollapse: !isCollapse });
    };

    const drawer = (
        <BrowserView
            sx={{
                backgroundColor: '#36006844',
                boxShadow: '40px 7px 132px rgba(0,0,0,0.7)',
                borderRadius: '0px'
            }}
        >
            <PerfectScrollbar
                component="div"
                style={{
                    height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)'
                }}
            >
                <ListItemButton
                    onClick={handleClick}
                    sx={{
                        width: 'auto',
                        marginLeft: '40px',
                        marginTop: '38px',
                        padding: '0px',
                        marginBottom: '20px',
                        paddingRight: '20px',
                        flexDirection: `${customization.isCollapse ? 'column' : 'row'}`,
                        alignItems: `${customization.isCollapse ? 'center' : 'flex-start'}`
                    }}
                >
                    <ListItemIcon
                        sx={{
                            my: 'auto',
                            justifyContent: `${customization.isCollapse ? 'center' : 'left'}`
                        }}
                    >
                        <HambergIcon width="20" height="20" size="1.3rem" stroke="#B9B9B9" fill="#B9B9B9" />
                    </ListItemIcon>
                </ListItemButton>
                <MenuList />
                <Divider sx={{ opacity: 0.3, padding: '20px 0px', margin: '0px 40px' }} />
                <LogoutComponent />
            </PerfectScrollbar>
        </BrowserView>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{
                flexShrink: { md: 0 },
                width: matchUpMd ? (!isCollapse ? '320px' : '140px') : 'auto'
            }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: !isCollapse ? '320px' : '140px',
                        backgroundColor: '#36006844',
                        boxShadow: '40px 7px 132px rgba(0,0,0,0.7)',
                        borderRadius: '0px',
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '100px',
                            left: '0px',
                            transform: 'none !important',
                            visibility: 'visible !important'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;
