/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, SvgIcon, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import { SET_COLLAPSE } from 'store/actions';
// project imports
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import { Direction } from 'tabler-icons-react';
import { ReactComponent as HambergIcon } from '../../../assets/images/hamberg.svg';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const isCollapse = useSelector((state) => state.customization.isCollapse);
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClick = () => {
        dispatch({ type: SET_COLLAPSE, isCollapse: !isCollapse });
    };

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: `${matchDownSM ? '-20px' : '-30px'}`,
                    marginRight: '30px'
                }}
            >
                {!matchUpMd && <HambergIcon width="20" height="20" size="1.3rem" stroke="#B9B9B9" fill="#B9B9B9" onClick={handleClick} />}
            </Box>
            <Box
                sx={{
                    // width: 228,
                    display: 'flex'
                }}
            >
                <Box component="span">
                    <LogoSection />
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* notification & profile */}
            <Box
                sx={{
                    width: '100px',
                    height: '46px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {/* <NotificationSection /> */}
                <ProfileSection />
            </Box>
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
