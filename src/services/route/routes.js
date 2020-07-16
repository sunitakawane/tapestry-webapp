import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';
import Test from '../../components/Test'

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
      {
        path: '/test',
        exact: true,
        strict: true,
        name: 'Home',
        component: Test,
      },
    ]
  }
];

export default routes;