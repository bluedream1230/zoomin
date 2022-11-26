/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Popover,
    Popper,
    Fade,
    useMediaQuery
} from '@mui/material';

// project imports
import NavItem from '../NavItem';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { SET_SELETED } from 'store/actions';
import { menuItems } from 'menu-items';

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ index, menu, level }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selected, setSelected] = useState(customization);
    const matchesDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        console.log(customization);
        // setSelected(customization.selected[index]);
    }, []);

    const handleClick = (event) => {
        let arr = new Array(menuItems.items[0].children.length).fill(false);
        if (customization.selected[index] == false) {
            arr = new Array(menuItems.items[0].children.length).fill(false);
            arr[index] = true;
        }
        dispatch({ type: SET_SELETED, selected: arr });
        setSelected(customization.selected[index]);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openPopover = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    // menu collapse & item
    const menus = menu.children?.map((item) => {
        switch (item.type) {
            case 'collapse':
                return <NavCollapse key={item.id} menu={item} level={level + 1} />;
            case 'item':
                return <NavItem key={item.id} item={item} level={level + 1} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    const Icon = menu.icon;
    const menuIcon = menu.icon ? (
        <Icon width="20" height="20" fill="#B9B9B9" style={{ marginTop: 'auto', marginBottom: 'auto' }} stroke="#B9B9B9" />
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: selected === menu.id ? 8 : 6,
                height: selected === menu.id ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    return (
        <>
            <ListItemButton
                sx={{
                    borderRadius: `${customization.borderRadius}px`,
                    flexDirection: `${customization.isCollapse ? 'column' : 'row'}`,
                    alignItems: `${customization.isCollapse ? 'center' : 'flex-start'}`,
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    pl: `${customization.isCollapse ? '0px' : `${level * 40}px`}`,
                    pr: `${customization.isCollapse ? '0px' : '16px'}`
                }}
                // selected={selected === menu.id}
                onClick={handleClick}
            >
                <ListItemIcon
                    sx={{ my: 'asuto', minWidth: !menu.icon ? 18 : 36, justifyContent: `${customization.isCollapse ? 'center' : 'left'}` }}
                >
                    {menuIcon}
                </ListItemIcon>
                {!matchesDownSM && (
                    <ListItemText
                        primary={
                            <Typography
                                variant={selected === menu.id ? 'h5' : 'body1'}
                                color="inherit"
                                sx={{ my: 'auto' }}
                                fontFamily="inter"
                            >
                                {menu.title}
                            </Typography>
                        }
                        secondary={
                            menu.caption && (
                                <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
                                    {menu.caption}
                                </Typography>
                            )
                        }
                    />
                )}
                {customization.isCollapse ? (
                    <></>
                ) : (customization && customization?.selected && customization.selected[index]) || false ? (
                    <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                ) : (
                    <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                )}
            </ListItemButton>
            {!customization.isCollapse && (
                <Collapse
                    in={(customization && customization?.selected && customization.selected[index]) || false}
                    timeout="auto"
                    unmountOnExit
                >
                    <List
                        component="div"
                        disablePadding
                        sx={{
                            position: 'relative',
                            '&:after': {
                                content: "''",
                                position: 'absolute',
                                left: '32px',
                                top: 0,
                                height: '100%',
                                width: '1px',
                                opacity: 1
                            }
                        }}
                    >
                        {menus}
                    </List>
                </Collapse>
            )}
            {customization.isCollapse && (
                <Popper
                    id={id}
                    open={customization.selected[index]}
                    anchorEl={anchorEl}
                    placement="right-start"
                    transition
                    sx={{ zIndex: 100 }}
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <List
                                component="div"
                                sx={{
                                    width: '200px',
                                    position: 'absolute',
                                    backgroundColor: '#360068',
                                    opacity: '0.86',
                                    boxShadow: '40px 7px 132px rgba(0,0,0,0.7)',
                                    transform: 'rotate(0.06deg)'
                                }}
                            >
                                {menus}
                            </List>
                        </Fade>
                    )}
                </Popper>
            )}
        </>
    );
};

NavCollapse.propTypes = {
    menu: PropTypes.object,
    level: PropTypes.number
};

export default NavCollapse;
