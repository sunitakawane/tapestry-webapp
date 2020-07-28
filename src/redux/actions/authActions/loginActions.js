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
  return {
    type: authConstants.LOGIN_REQUESTED,
  };
}

function login(email, password) {
  console.log("action", email, password);
  return (dispatch) => {
    loginApi
      .login(email, password)
      .then((response) => {
        console.log("yesss", response);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: response.data,
        });
        // history.push("/onboarding");
      })
      .catch((error) => {
        console.log("noooo", error);
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: error.toString(),
        });
      });
  };
}

function logout() {
  return (dispatch) => {
    loginApi.logout().then((response) => {
      localStorage.removeItem("user", JSON.stringify(response.data));
      dispatch({
        type: authConstants.LOGOUT,
      });
    });
  };
}
