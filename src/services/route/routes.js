import Wrapper from "../../bootstrap/Wrapper/Wrapper";
import App from "../../App";
import Login from "../../views/Auth/Login";
import SignUp from "../../views/Auth/SignUp";
import RequestSent from "../../views/Auth/RequestSent";
import ResetPassword from "../../views/Auth/ForgotPassword/ResetPassword";
import PasswordLinkSent from "../../views/Auth/ForgotPassword/PasswordLinkSent";
import SetPassword from "../../views/Auth/SetPassword";
import ChangePassword from "../../views/Auth/ForgotPassword/ChangePassword";
import Congratulations from "../../views/Auth/ForgotPassword/Congratulations";
import Onboarding from "../../views/OnboardingPage";
import OngoingTests from "../../views/LandingPage/OngoingTests";
import CompletedTests from "../../views/LandingPage/CompletedTests";
import url from "../../constants/url";
// import { useWindowDimensions } from "react-native";

if(localStorage.getItem("user") == undefined)
{
  if(window.location.href !== url['BASE_URL']+'login')
      {
          window.location.href = url['BASE_URL']+'login'
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
        name: "Home",
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
        name: "singUp",
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
        path: "/ongoingtests",
        exact: true,
        strict: true,
        name: "ongoingTests",
        component: OngoingTests,
      },
      {
        path: "/completedtests",
        exact: true,
        strict: true,
        name: "completedTests",
        component: CompletedTests,
      },
    ],
  },
];

export default routes;
