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
  console.log("login action 1");
  return (dispatch) => {
    console.log("login action 2");
    loginApi
      .login(email, password)
      .then((response) => {
        console.log("RES: ", response)
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: response.data,
        });
        history.push("/onboarding");
      })
      .catch((error) => {
        console.log("ERR: ", error)
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: error.toString(),
        });
      });
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
