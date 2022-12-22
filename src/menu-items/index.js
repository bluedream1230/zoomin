/* eslint-disable no-unused-vars */
import { ReactComponent as DashboardIcon } from '../assets/images/dashboad-icon.svg';
import { ReactComponent as LaunchIcon } from '../assets/images/Launch-icon.svg';
import { ReactComponent as CampaignIcon } from '../assets/images/Campaigns-icon.svg';
import { ReactComponent as PrizeIcon } from '../assets/images/Prizes-icon.svg';
import { ReactComponent as GameIcon } from '../assets/images/Games-icon.svg';
import { ReactComponent as UserIcon } from '../assets/images/Users-icon.svg';
import { ReactComponent as SettingIcon } from '../assets/images/setting-icon.svg';
import { ReactComponent as LogoutIcon } from '../assets/images/logout-icon.svg';

const menuItem = {
    id: 'menu',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'collapse',
            url: '',
            icon: DashboardIcon,
            breadcrumbs: false,
            children: [
                {
                    id: 'default',
                    title: 'Default',
                    type: 'item',
                    url: '/dashboard/default',
                    breadcrumbs: false
                },
                {
                    id: 'single-report-view',
                    title: 'Single Report View',
                    type: 'item',
                    url: '/dashboard/single-report',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'launch',
            title: 'Launch',
            type: 'item',
            url: '/launch/index',
            icon: LaunchIcon,
            breadcrumbs: false
        },
        {
            id: 'campaigns',
            title: 'Campaigns Performance',
            type: 'item',
            url: '/campaigns/performance',
            icon: CampaignIcon,
            breadcrumbs: false
        },
        {
            id: 'prizes',
            title: 'Prizes',
            type: 'item',
            url: '/prizes/index',
            icon: PrizeIcon,
            breadcrumbs: false
        },
        {
            id: 'games',
            title: 'Games',
            type: 'item',
            url: '/games/index',
            icon: GameIcon,
            breadcrumbs: false
        },
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users/index',
            icon: UserIcon,
            breadcrumbs: false
        },
        {
            id: 'setting',
            title: 'Setting',
            type: 'item',
            url: '/setting',
            icon: SettingIcon,
            breadcrumbs: false
        }
    ]
};

const logout = {
    id: 'log',
    type: 'group',
    children: [
        {
            id: 'logout',
            title: 'Logout',
            type: 'item',
            url: '/auth/logout',
            icon: LogoutIcon,
            breadcrumbs: false
        }
    ]
};

const menuItems = {
    items: [menuItem]
};
const logoutItem = {
    items: [logout]
};

export { logoutItem, menuItems };
