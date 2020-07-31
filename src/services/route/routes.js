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
    ],
  },
];

export default routes;
