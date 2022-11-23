/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography, Popover } from '@mui/material';

// project imports
import NavItem from '../NavItem';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level }) => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClick = (event) => {
        setOpen(!open);
        setSelected(!selected ? menu.id : null);
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
                    mb: 0.5,
                    flexDirection: `${customization.isCollapse ? 'column' : 'row'}`,
                    alignItems: `${customization.isCollapse ? 'center' : 'flex-start'}`,
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    py: level > 1 ? 1 : 1.25,
                    pl: `${level * 24}px`
                }}
                // selected={selected === menu.id}
                onClick={handleClick}
            >
                <ListItemIcon
                    sx={{ my: 'asuto', minWidth: !menu.icon ? 18 : 36, justifyContent: `${customization.isCollapse ? 'center' : 'left'}` }}
                >
                    {menuIcon}
                </ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" sx={{ my: 'auto' }}>
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
                {customization.isCollapse ? (
                    <></>
                ) : open ? (
                    <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                ) : (
                    <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                )}
            </ListItemButton>
            {!customization.isCollapse && (
                <Collapse in={open} timeout="auto" unmountOnExit>
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
                                opacity: 1,
                                background: theme.palette.primary.light
                            }
                        }}
                    >
                        {menus}
                    </List>
                </Collapse>
            )}
            {customization.isCollapse && (
                <Popover
                    id={id}
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    sx={{
                        left: '15px'
                    }}
                >
                    <List
                        component="div"
                        sx={{
                            position: 'relative',
                            width: '145px',
                            '&:after': {
                                position: 'absolute',
                                left: '32px',
                                top: 0,
                                height: '100%',
                                width: '1px',
                                opacity: 1,
                                background: theme.palette.primary.light
                            }
                        }}
                    >
                        {menus}
                    </List>
                </Popover>
            )}
        </>
    );
};

NavCollapse.propTypes = {
    menu: PropTypes.object,
    level: PropTypes.number
};

export default NavCollapse;
