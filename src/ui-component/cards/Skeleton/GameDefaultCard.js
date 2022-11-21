import * as React from 'react';
import { CardActionArea, Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, SvgIcon, Checkbox } from '@mui/material';
import { East, CheckCircleRounded, PanoramaFishEyeRounded } from '@mui/icons-material';
import { withStyles, makeStyles } from '@material-ui/core';

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
        maxWidth: 345
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

export default function GameDefaultCard(props) {
    const classes = useStyles();

    const handlePlay = () => {
        console.log('Play now: ', props.href, props.card_name);
        //TODO: Play game
    };

    return (
        <Box>
            <Grid container direction="column">
                <Grid item>
                    <FiCard className={classes.card} sx={{ height: '248px', cursor: 'pointer' }}>
                        <FiCardMedia media="picture" alt="Contemplative Reptile" image={props.card_image} title="Contemplative Reptile" />
                        <FiCardActions className={classes.fiCardContent}>
                            <Button
                                size="small"
                                color="inherit"
                                variant="none"
                                sx={{ fontSize: '20px', padding: '0px' }}
                                onClick={handlePlay}
                            >
                                Play Now
                            </Button>
                            <SvgIcon component={East} />
                        </FiCardActions>
                    </FiCard>
                </Grid>
            </Grid>
        </Box>
    );
}
