import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';
import Login from '../../views/Auth/Login';
import SignUp from '../../views/Auth/SignUp';
import RequestSent from '../../views/Auth/RequestSent';


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
        path: '/sign-up',
        exact: true,
        strict: true,
        name: 'singUp',
        component: SignUp,
      },
      {
        path: '/request-sent',
        exact: true,
        strict: true,
        name: 'requestSent',
        component: RequestSent,
      },
	
    ]
  }
];

export default routes;
