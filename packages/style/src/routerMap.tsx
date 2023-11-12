import RootApp from '@src/app/page';
import type { RouterMap } from './Router/types';
import LayoutPage from './app/layout/page';
import ComponentsPage from './app/components/page';

export const routerMap: Array<RouterMap> = [
  {
    name: 'index',
    auth: 'common',
    path: '/',
    page: <RootApp />,
  },
  {
    name: 'layout',
    auth: 'common',
    path: '/layout',
    page: <LayoutPage />,
  },
  {
    name: 'components',
    auth: 'common',
    path: '/components',
    page: <ComponentsPage />,
  },
];
