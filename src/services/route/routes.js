import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';
import Login from '../../views/LoginSetUp/Login';
import SignUp from '../../views/LoginSetUp/SignUp';
import RequestSent from '../../views/LoginSetUp/RequestSent';


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
        path: '/login',
        exact: true,
        strict: true,
        name: 'login',
        component: Login,
      },
      {
        path: '/signUp',
        exact: true,
        strict: true,
        name: 'singUp',
        component: SignUp,
      },
      {
        path: '/requestSent',
        exact: true,
        strict: true,
        name: 'requestSent',
        component: RequestSent,
      },
    ]
  }
];

export default routes;