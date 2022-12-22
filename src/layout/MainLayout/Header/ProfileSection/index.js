import * as React from 'react';
import { Menu, MenuItem, Avatar, Divider, Popover, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { FaUserAlt } from 'react-icons/fa';
import { MdSettingsSuggest } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { getUserInfo } from 'services/apis/server';

export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [userinfo, setUserinfo] = React.useState({});
    const load = async () => {
        const userInfo = await getUserInfo();
        console.log('userInfoheader', userInfo);
        setUserinfo(userInfo);
    };

    React.useEffect(() => {
        load();
    }, []);

    return (
        <div>
            <Avatar
                alt={userinfo.name}
                onClick={handleClick}
                sx={{
                    width: '46px',
                    height: '46px'
                }}
                src={userinfo.logo}
            ></Avatar>

            {/* <Popover
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiPaper-root': {
                        top: '100px !important',
                        right: '0px',
                        left: 'auto !important',
                        backgroundColor: '#FFFFFF',
                        backgroundClip: 'padding-box',
                        minWidth: '10rem',
                        textAlign: 'left',
                        borderRadius: '0.25rem',
                        border: '1px solid rgba(0,0,0,.15)',
                        padding: '0.5rem 0',
                        width: '160px'
                    },
                    '& .MuiListItemText-primary': {
                        color: '#212529'
                    }
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <FaUserAlt />
                    </ListItemIcon>
                    <ListItemText color="">Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <MdSettingsSuggest />
                    </ListItemIcon>
                    <ListItemText>Setting</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <FaList />
                    </ListItemIcon>
                    <ListItemText>Activity Log</ListItemText>
                </MenuItem>
                <Divider sx={{ border: '1px solid rgba(0,0,0,.15) !important' }} />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <FiLogOut />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </Popover> */}
        </div>
    );
}
