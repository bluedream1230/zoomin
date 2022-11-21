import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Badge, Box, Button, ButtonBase, Divider, Grid, Paper, Popper, Stack, TextField, Typography, Drawer } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// assets
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
//Notificationi List

const NotificationList = [
    {
        avatar: 'B',
        label: 'Lorem Ipsum Dolar alsto dummy',
        text: 'Volutpat vitae commodo vitae.'
    },
    {
        avatar: 'C',
        label: 'Lorem Ipsum Dolar alsto dummy',
        text: 'Volutpat vitae commodo vitae.'
    },
    {
        avatar: 'S',
        label: 'Lorem Ipsum Dolar alsto dummy',
        text: 'Volutpat vitae commodo vitae.'
    }
];

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    const NotificationTable = NotificationList.map((item, index) => {
        return (
            <Grid item xs={12} key={index} style={{ padding: '20px' }}>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={3}>
                                <Avatar>{item.avatar}</Avatar>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="h5" color="#FFFFFF" fontWeight={'600'} fontSize="14px">
                                    {item.label}
                                </Typography>
                                <Typography variant="h6" color="#FFFFFF" fontWeight={'400'} fontSize="12px">
                                    {item.text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    });
    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    mr: 3,
                    [theme.breakpoints.down('md')]: {
                        mr: 2
                    }
                }}
            >
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <Badge badgeContent={2} color="primary">
                        <NotificationsNoneOutlinedIcon sx={{ cursor: 'pointer' }} onClick={handleToggle} />
                    </Badge>
                    <Drawer
                        anchor="right"
                        onClose={handleToggle}
                        open={open}
                        PaperProps={{
                            sx: {
                                position: 'absolute',
                                top: '100px',
                                right: '0px',
                                width: 280,
                                height: 'calc(100vh - 100px)'
                            }
                        }}
                    >
                        <PerfectScrollbar component="div">
                            <Grid container spacing={2} sx={{ padding: '20px' }}>
                                <Grid item xs={11}>
                                    <Typography variant="h3" color="#FFFFFF">
                                        Notification
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} sx={{ paddingLeft: '0px' }} onClick={handleToggle}>
                                    <HighlightOffOutlinedIcon />
                                </Grid>
                            </Grid>
                            <Divider sx={{ my: 1.5, margin: '20px' }} />
                            {NotificationTable}
                        </PerfectScrollbar>
                    </Drawer>
                </Stack>
            </Box>
        </>
    );
};

export default NotificationSection;
