import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';

const routes = [
  {
    component: Wrapper,
    routes: [
      {
        path: '/',
        exact: true,
        strict: true,
        name: 'Home',
        component: App,
      },
    ]
  }
];

export default routes;