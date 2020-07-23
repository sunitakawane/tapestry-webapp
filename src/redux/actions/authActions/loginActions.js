import axios from "axios";
import { createBrowserHistory } from "history";
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
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/login`,
        {
          email: email,
          password: password,
        }
      )
      .then((response) => response.json())
      .then((currentUser) => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      })
      .then(
        (user) => {
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: user,
          });
          history.push("/onboarding");
        },
        (error) => {
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
    axios
      .post(
        `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/logout`
      )
      .then((currentUser) => {
        localStorage.removeItem("currentUser", JSON.stringify(currentUser));
      })
      .then(() => {
        dispatch({
          type: authConstants.LOGOUT,
        });
      });
  };
}