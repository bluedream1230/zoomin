/* eslint-disable no-unused-vars */
// material-ui
import { Grid, Typography } from '@mui/material';

import ImgMediaCard from 'ui-component/cards/Skeleton/GameCard';

const SelectGamePage = () => {
    const tempcard = [
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img1.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img2.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img3.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img4.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img5.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img6.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img7.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img8.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img9.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img10.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img11.jpg`)
        },
        {
            name: 'Home',
            href: 'home',
            icon: require(`../../../assets/images/game-img12.jpg`)
        }
    ];
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid item xs={12} style={{ paddingRight: '24px', paddingLeft: '44px' }}>
                        <Grid item sx={{ paddingBottom: '45px' }}>
                            <Typography variant="h1" color="white">
                                Select Games
                            </Typography>
                        </Grid>
                        <Grid container spacing={5}>
                            {tempcard.map((item, index) => {
                                return (
                                    <Grid item lg={3} md={6} sm={6} xs={12}>
                                        <ImgMediaCard
                                            card_name={item.name}
                                            card_image={item.icon}
                                            key={index}
                                            href={item.href}
                                        ></ImgMediaCard>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default SelectGamePage;
