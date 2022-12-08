/* eslint-disable no-unused-vars */
// material-ui
import { Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router';

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

    const { state } = useLocation();
    console.log(state);
    return (
        <>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <Grid item sx={{ marginBottom: '45px' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '30px',
                                    lineHeight: '36px',
                                    color: '#FFFFFF'
                                }}
                            >
                                Select Games
                            </Typography>
                        </Grid>
                        <Grid container>
                            {tempcard.map((item, index) => {
                                return (
                                    <Grid item xl={4} lg={6} md={12} sm={12} xs={12} sx={{ paddingX: '10px', marginBottom: '25px' }}>
                                        <ImgMediaCard
                                            card_name={item.name}
                                            card_image={item.icon}
                                            key={index}
                                            href={item.href}
                                            state={state}
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
