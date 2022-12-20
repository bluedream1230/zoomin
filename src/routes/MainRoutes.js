/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashbaordSingleReportView = Loadable(lazy(() => import('views/dashboard/SingleReport')));

//launch routing
const LaunchMainView = Loadable(lazy(() => import('views/launch')));
const LaunchGameView = Loadable(lazy(() => import('views/launch/games')));
const LaunchSummary = Loadable(lazy(() => import('views/launch/summary')));
const LaunchSubscriptionView = Loadable(lazy(() => import('views/launch/subscription')));

//performaces routing
const PerformaceView = Loadable(lazy(() => import('views/campaigns/Performance')));
const InformationView = Loadable(lazy(() => import('views/campaigns/Information')));

//Prizes routing
const PrizesList = Loadable(lazy(() => import('views/prizes')));
const ManagePrize = Loadable(lazy(() => import('views/prizes/Manage')));

//Games routing
const ManageGame = Loadable(lazy(() => import('views/games')));
const ImportGame = Loadable(lazy(() => import('views/games/import')));

//Users routing
const UsersList = Loadable(lazy(() => import('views/users')));

//Setting routing
const Setting = Loadable(lazy(() => import('views/setting')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                },
                {
                    path: 'single-report',
                    element: <DashbaordSingleReportView />
                }
            ]
        },
        {
            path: 'launch',
            children: [
                {
                    path: 'index',
                    element: <LaunchMainView />
                },
                {
                    path: 'games/index',
                    element: <LaunchGameView />
                },
                {
                    path: 'subscription/index',
                    element: <LaunchSubscriptionView />
                },
                {
                    path: 'summary/index',
                    element: <LaunchSummary />
                }
            ]
        },
        {
            path: 'campaigns',
            children: [
                {
                    path: 'performance',
                    element: <PerformaceView />
                },
                {
                    path: 'information/:id',
                    element: <InformationView />
                }
            ]
        },
        {
            path: 'prizes',
            children: [
                {
                    path: 'index',
                    element: <PrizesList />
                },
                {
                    path: 'manage',
                    element: <ManagePrize />
                }
            ]
        },
        {
            path: 'games',
            children: [
                {
                    path: 'index',
                    element: <ManageGame />
                },
                {
                    path: 'import',
                    element: <ImportGame />
                }
            ]
        },
        {
            path: 'users',
            children: [
                {
                    path: 'index',
                    element: <UsersList />
                }
            ]
        },
        {
            path: 'setting',
            element: <Setting />
        }
    ]
};

export default MainRoutes;
