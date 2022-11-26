/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU, SET_SELETED } from 'store/actions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Cut } from 'tabler-icons-react';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const Icon = item.icon;
    const itemIcon = item?.icon ? <Icon width="20" height="20" size="1.3rem" stroke="#B9B9B9" fill="#B9B9B9" /> : <></>;

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
    };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    const itemHandler = (id) => {
        dispatch({ type: MENU_OPEN, id });
        if (matchesSM) dispatch({ type: SET_MENU, opened: false });
        let arr = new Array(7).fill(false);
        dispatch({ type: SET_SELETED, selected: arr });
    };

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch({ type: MENU_OPEN, id: item.id });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                borderRadius: `${customization.borderRadius}px`,
                flexDirection: `${customization.isCollapse && level == 1 ? 'column' : 'row'}`,
                alignItems: `${customization.isCollapse ? 'center' : 'flex-start'}`,
                backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                pl: `${customization.isCollapse && level !== 1 ? '0px' : level !== 1 ? '60px' : `${level * 40}px`}`
            }}
            selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
            onClick={() => itemHandler(item.id)}
        >
            <ListItemIcon
                sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36, justifyContent: `${customization.isCollapse ? 'center' : 'left'}` }}
            >
                {itemIcon}
            </ListItemIcon>
            <ListItemText>
                <Typography
                    variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'}
                    fontFamily="inter"
                    color="inherit"
                >
                    {item.title}
                </Typography>
            </ListItemText>
            {/* {item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )} */}
        </ListItemButton>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;
