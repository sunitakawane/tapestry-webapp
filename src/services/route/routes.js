import Wrapper from '../../bootstrap/Wrapper/Wrapper';
import App from '../../App';
import Test from '../../components/Test'
import Upload from '../../components/Upload'
import NewLab from '../../components/NewLab'
import Login from '../../views/LoginSetup/Login';
import SignUp from '../../views/LoginSetup/SignUp';
import RequestSent from '../../views/LoginSetup/RequestSent';
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
        path: '/test',
        exact: true,
        strict: true,
        name: 'test',
        component: Test,
      },
      {
      path: '/upload',
      exact: true,
      strict: true,
      name: 'upload',
      component: Upload,
      },
      {
        path: '/newlab',
        exact: true,
        strict: true,
        name: 'newlab',
        component: NewLab,
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
  ]
}];
export default routes;