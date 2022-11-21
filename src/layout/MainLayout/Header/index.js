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

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const isCollapse = useSelector((state) => state.customization.isCollapse);
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const handleClick = () => {
        dispatch({ type: SET_COLLAPSE, isCollapse: !isCollapse });
    };

    return (
        <>
            {/* logo & toggler button */}
            <Box
                sx={{
                    // width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                {!matchUpMd && <SvgIcon component={DehazeOutlinedIcon} onClick={handleClick} />}
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* notification & profile */}
            <NotificationSection />
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
