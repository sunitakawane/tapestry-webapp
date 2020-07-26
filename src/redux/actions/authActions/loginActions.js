import { createBrowserHistory } from "history";
import { loginApi } from "../../../api/authApi/loginApi";
import authConstants from "../../../constants/authConstants";

const history = createBrowserHistory();

export const loginActions = {
  loginRequested,
  login,
  logout,
};

function loginRequested() {
  console.log("login requested action");
  return {
    type: authConstants.LOGIN_REQUESTED,
  };
}

function login(email, password) {
  console.log("login action");
  return (dispatch) => {
    loginApi.login(email, password).then(
      (user) => {
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: user.data,
        });
        history.push("/onboarding");
      },
      (error) => {
        console.log("no");
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: error.toString(),
        });
      }
    );
  };
}

function logout() {
  return (dispatch) => {
    loginApi.logout().then(() => {
      dispatch({
        type: authConstants.LOGOUT,
      });
    });
  };
}
