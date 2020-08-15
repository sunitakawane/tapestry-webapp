import { loginApi } from "../../../api/authApi/loginApi";
import authConstants from "../../../constants/authConstants";

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
  return (dispatch) => {
    loginApi
      .login(email, password)
      .then((response) => {
        localStorage.setItem("user-login-info", JSON.stringify(response.data));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          // client received an error response (5xx, 4xx)
          // console.log("response-data", error.response.data[0].detail)
        } else if (error.request) {
          // client never received a response, or request never left
          console.log("request", error.request)
        } else {
          // anything else
        }    
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
