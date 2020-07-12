import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';
/*import Login from '../../views/LoginSetup/Login';
import SignUp from '../../views/LoginSetup/SignUp';
import RequestSent from '../../views/LoginSetup/RequestSent';*/
import TestSamples from '../../views/LandingPage/TestSamples'
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
/*      {
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
      },*/
      {
          path: '/testsamples',
          exact: true,
          strict: true,
          name: 'testSamples',
          component: TestSamples,
      },
      {
          path: '/completedtests',
          exact: true,
          strict: true,
          name: 'completedTests',
          component: CompletedTests,
      },
  ]
}];
export default routes;