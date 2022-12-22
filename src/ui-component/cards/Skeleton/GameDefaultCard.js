import * as React from 'react';
import { CardActionArea, Modal, Box, Grid, Card, CardActions, CardContent, CardMedia, Button, SvgIcon } from '@mui/material';
import { East, CheckCircleRounded, PanoramaFishEyeRounded } from '@mui/icons-material';
import { withStyles, makeStyles } from '@material-ui/core';
import ModalVideo from 'react-modal-video';
import ReactPlayer from 'react-player';
import Container from '@mui/material/Container';
import Iframe from 'react-iframe';

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

export default function GameDefaultCard(props) {
    const classes = useStyles();
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const handlePlay = () => {
        setOpenModal(!openModal);
        console.log('Play now: ', props.card_name, props.card_video);
        //TODO: Play game
    };
    return (
        <>
            <FiCard
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
                <FiCardMedia
                    media="picture"
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
                <FiCardActions className={classes.fiCardContent}>
                    <Button size="small" color="inherit" variant="none" sx={{ fontSize: '20px', padding: '0px' }} onClick={handlePlay}>
                        Play Now
                    </Button>
                    <SvgIcon component={East} />
                </FiCardActions>
            </FiCard>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Iframe url={props.card_video} width="640px" height="800vh" id="" className="" />
            </Modal>
        </>
    );
}
