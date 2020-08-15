import App from "../../App";
import ChangePassword from "../../views/Auth/ForgotPassword/ChangePassword";
import CompletedTests from "../../views/LandingPage/CompletedTests";
import Congratulations from "../../views/Auth/ForgotPassword/Congratulations";
import Login from "../../views/Auth/Login";
import Onboarding from "../../views/OnboardingPage";
import OngoingTests from "../../views/LandingPage/OngoingTests";
import PasswordLinkSent from "../../views/Auth/ForgotPassword/PasswordLinkSent";
import RequestSent from "../../views/Auth/RequestSent";
import ResetPassword from "../../views/Auth/ForgotPassword/ResetPassword";
import SetPassword from "../../views/Auth/SetPassword";
import SignUp from "../../views/Auth/SignUp";
import Wrapper from "../../bootstrap/Wrapper/Wrapper";
import url from "../../constants/url";
// import { useWindowDimensions } from "react-native";

const baseUrl = url['BASE_URL'];
const loginBaseUrl = `${baseUrl}login`;

if (localStorage.getItem("user") === undefined) {
  if (window.location.href !== loginBaseUrl) {
    window.location.href = loginBaseUrl;
  }
}

const routes = [
  {
    component: Wrapper,
    routes: [
      {
        path: "/",
        exact: true,
        strict: true,
        name: "home",
        component: App,
      },
      {
        path: "/login",
        exact: true,
        strict: true,
        name: "login",
        component: Login,
      },
      {
        path: "/sign-up",
        exact: true,
        strict: true,
        name: "signUp",
        component: SignUp,
      },
      {
        path: "/request-sent",
        exact: true,
        strict: true,
        name: "requestSent",
        component: RequestSent,
      },
      {
        path: "/reset-password",
        exact: true,
        strict: true,
        name: "resetPassword",
        component: ResetPassword,
      },
      {
        path: "/password-link-sent",
        exact: true,
        strict: true,
        name: "passwordLinkSent",
        component: PasswordLinkSent,
      },
      {
        path: "/reset/:uid/:token/",
        exact: true,
        strict: true,
        name: "SetPassword",
        component: SetPassword,
      },
      {
        path: "/change-password",
        exact: true,
        strict: true,
        name: "ChangePassword",
        component: ChangePassword,
      },
      {
        path: "/congratulations",
        exact: true,
        strict: true,
        name: "Congratulations",
        component: Congratulations,
      },
      {
        path: "/onboarding",
        exact: true,
        strict: true,
        name: "onboarding",
        component: Onboarding,
      },
      {
        path: "/ongoing-tests",
        exact: true,
        strict: true,
        name: "ongoingTests",
        component: OngoingTests,
      },
      {
        path: "/completed-tests",
        exact: true,
        strict: true,
        name: "completedTests",
        component: CompletedTests,
      },
    ],
  },
];

export default routes;
