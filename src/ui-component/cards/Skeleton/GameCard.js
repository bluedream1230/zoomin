import * as React from 'react';
import { CardActionArea, Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, SvgIcon, Checkbox } from '@mui/material';
import { East, CheckCircleRounded, PanoramaFishEyeRounded } from '@mui/icons-material';
import { withStyles, makeStyles } from '@material-ui/core';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const LaunchSummaryView = React.forwardRef((props, ref) => <RouterLink ref={ref} to="/launch/summary/index" {...props} role={undefined} />);

export const FiCard = withStyles({
    root: {
        position: 'relative'
    }
})(Card);

export const FiCardActionArea = withStyles({
    root: {
        position: 'relative'
    }
})(CardActionArea);

export const FiCardActions = withStyles({
    root: {
        position: 'absolute',
        left: '0px',
        bottom: '0px'
    }
})(CardActions);

export const FiCardContent = withStyles({
    root: {
        position: 'relative',
        backgroundColor: 'transparent'
    }
})(CardContent);

export const FiCardMedia = withStyles({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%'
    }
})(CardMedia);

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    /**
     * Max Card with for demo
     * same values used in Material-Ui Card Demos
     */
    card: {
        minWidth: 350
    },

    /**
     * Applied to Orginal Card demo
     * Same vale used in Material-ui Card Demos
     */
    media: {
        height: 140
    },

    /**
     * Demo stlying to inclrease text visibility
     * May verry on implementation
     */
    fiCardContent: {
        color: '#ffffff',
        backgroundColor: 'transparent'
    },
    fiCardContentTextSecondary: {
        color: 'rgba(255,255,255,0.78)'
    }
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(true);

    const handleClick = () => {
        setSelected(true);
    };
    return (
        <FiCard
            onClick={handleClick}
            className={classes.card}
            sx={{
                height: '280px',
                cursor: 'pointer',
                borderRadius: '20px',
                '& .MuiCardMedia-root': {
                    border: '1px solid transparent'
                },
                '& .MuiCardMedia-root:hover': {
                    border: '1px solid #FF0676'
                }
            }}
        >
            <Checkbox
                checked={props.formikvalue == props.game_id && selected}
                icon={<PanoramaFishEyeRounded sx={{ color: 'white' }} />}
                checkedIcon={<CheckCircleRounded sx={{ color: '#02DF6A' }} />}
                sx={{ zIndex: 10, color: 'white', position: 'absolute', top: '0px', right: '0px' }}
            />
            <FiCardMedia
                component="img"
                alt={props.card_name}
                image={props.card_image}
                title={props.card_name}
                sx={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '20px',
                    position: 'relative',
                    objectFit: 'cover',
                    transition: '0.3s',
                    display: 'inline-block'
                }}
            />
        </FiCard>
    );
}
