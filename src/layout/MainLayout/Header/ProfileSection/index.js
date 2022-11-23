import * as React from 'react';
import { Menu, MenuItem, Avatar, Divider, Drawer } from '@mui/material';

export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Avatar
                alt="Richard"
                onClick={handleClick}
                sx={{
                    width: '46px',
                    height: '46px'
                }}
            >
                R
            </Avatar>

            <Drawer
                id="basic-menu"
                anchor="right"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        position: 'absolute',
                        top: '100px',
                        right: '0px',
                        height: 'auto',
                        border: '1px',
                        padding: '8px 0'
                    }
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Drawer>
        </div>
    );
}
