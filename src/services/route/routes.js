import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';
import Test from '../../components/Test'
import Upload from '../../components/Upload'
import NewLab from '../../components/NewLab'

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
      {
      path: '/upload',
      exact: true,
      strict: true,
      name: 'Home',
      component: Upload,
      },
      {
        path: '/newlab',
        exact: true,
        strict: true,
        name: 'Home',
        component: NewLab,
      },
    ]
  }
];

export default routes;