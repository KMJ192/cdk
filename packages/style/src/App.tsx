import Router from './Router/Router';
import RootLayout from './app/layout';
import { routerMap } from './routerMap';

function App() {
  return (
    <Router
      auth='common'
      routerMap={routerMap}
      wrongAccessPage='Wrong Access'
      notFoundPage='Not Found'
      layout={RootLayout}
    ></Router>
  );
}

export default App;
