import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';
import Login from '../../views/Auth/Login';
import SignUp from '../../views/Auth/SignUp';
import RequestSent from '../../views/Auth/RequestSent';
import OngoingTests from '../../views/LandingPage/OngoingTests'
import CompletedTests from '../../views/LandingPage/CompletedTests';

const routes = [{
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
          path: '/signup',
          exact: true,
          strict: true,
          name: 'singUp',
          component: SignUp,
      },
      {
          path: '/requestsent',
          exact: true,
          strict: true,
          name: 'requestSent',
          component: RequestSent,
      },
      {
          path: '/ongoingtests',
          exact: true,
          strict: true,
          name: 'ongoingTests',
          component: OngoingTests,
      },
      {
          path: '/completedtests',
          exact: true,
          strict: true,
          name: 'completedTests',
          component: CompletedTests,
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