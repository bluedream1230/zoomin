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
        avatar: 'S',
        label: 'Lorem Ipsum Dolar alsto dummy',
        text: 'Volutpat vitae commodo vitae.',
        color: '#04B4DD'
    },
    {
        avatar: 'B',
        label: 'Lorem Ipsum Dolar alsto dummy',
        text: 'Volutpat vitae commodo vitae.',
        color: '#821EF0'
    },
    {
        avatar: 'C',
        label: 'Lorem Ipsum Dolar alsto dummy',
        text: 'Volutpat vitae commodo vitae.',
        color: '#FF328E'
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
            <Grid item xs={12} key={index} sx={{ marginBottom: '50px' }}>
                <Grid container direction="column" sx={{ height: '53px' }}>
                    <Grid item sx={{ height: '53px' }}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item xs={3}>
                                <Avatar
                                    sx={{
                                        fontSize: '27px',
                                        fontFamily: 'Inter',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '39px',
                                        width: '53px',
                                        height: '53px',
                                        color: '#FFFFFF',
                                        bgcolor: `${item.color}`
                                    }}
                                >
                                    {item.avatar}
                                </Avatar>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography
                                    color="#FFFFFF"
                                    fontStyle={'normal'}
                                    fontFamily={'Inter'}
                                    fontWeight={'700'}
                                    lineHeight={'35px'}
                                    fontSize="14px"
                                >
                                    {item.label}
                                </Typography>
                                <Typography
                                    color="#FFFFFF"
                                    fontWeight={'400'}
                                    fontSize="12px"
                                    fontStyle={'normal'}
                                    fontFamily={'Inter'}
                                    lineHeight={'15px'}
                                >
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
            <Box>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <Badge
                        badgeContent={1}
                        color="error"
                        sx={{
                            '& .MuiBadge-badge': {
                                right: 5,
                                top: 5
                            }
                        }}
                    >
                        <NotificationsNoneOutlinedIcon sx={{ cursor: 'pointer', fontSize: 30 }} onClick={handleToggle} />
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
                                width: 375,
                                height: 'calc(100vh - 100px)',
                                boxShadow: '40px 7px 133px rgba(0, 0, 0, 0.7)',
                                transform: 'rotate(0.06deg)',
                                padding: ' 30px 35px'
                            }
                        }}
                    >
                        <PerfectScrollbar component="div">
                            <Grid container>
                                <Grid item sx={{ marginRight: '130px' }}>
                                    <Typography
                                        variant="h3"
                                        color="#FFFFFF"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            fontSize: '25px',
                                            lineHeight: '35px'
                                        }}
                                    >
                                        Notification
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} onClick={handleToggle} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <HighlightOffOutlinedIcon sx={{ color: '#FF0676', fontSize: '36px' }} />
                                </Grid>
                            </Grid>
                            <Divider sx={{ marginTop: '28px', marginBottom: '38px' }} />
                            {NotificationTable}
                        </PerfectScrollbar>
                    </Drawer>
                </Stack>
            </Box>
        </>
    );
};

export default NotificationSection;
