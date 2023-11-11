import Router from './Router/Router';
import type { RouterMap } from './Router/types';

const routerMap: Array<RouterMap> = [
  {
    name: 'all',
    auth: 'common',
    path: '/',
    page: <div></div>,
  },
  {
    name: 'layout',
    auth: 'common',
    path: '/layout',
    page: <div></div>,
  },
  {
    name: 'components',
    auth: 'common',
    path: '/components',
    page: <div></div>,
  },
];

function App() {
  return (
    <Router
      auth='common'
      routerMap={routerMap}
      wrongAccessPage='Wrong Access'
      notFoundPage='Not Found'
    ></Router>
  );
}

export default App;
