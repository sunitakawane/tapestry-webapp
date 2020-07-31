import { createBrowserHistory } from "history";
import { passwordApi } from "../../../api/authApi/passwordApi";
import authConstants from "../../../constants/authConstants";

const history = createBrowserHistory();

export const passwordActions = {
  resetPasswordRequested,
  setPasswordRequested,
  changePasswordRequested,
  resetPassword,
  setPassword,
  changePassword,
};

function resetPasswordRequested() {
  return {
    type: authConstants.RESET_PASSWORD_REQUESTED,
  };
}

function setPasswordRequested() {
  return {
    type: authConstants.SET_PASSWORD_REQUESTED,
  };
}

function changePasswordRequested() {
  return {
    type: authConstants.CHANGE_PASSWORD_REQUESTED,
  };
}

function resetPassword(email) {
  return (dispatch) => {
    passwordApi
      .resetPassword(email)
      .then((response) => {
        dispatch({
          type: authConstants.RESET_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConstants.RESET_PASSWORD_FAILURE,
          payload: error,
        });
      });
  };
}

function setPassword(password1, password2, uid, token) {
  return (dispatch) => {
    passwordApi
      .setPassword(password1, password2, uid, token)
      .then((response) => {
        dispatch({
          type: authConstants.SET_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConstants.SET_PASSWORD_FAILURE,
          payload: error,
        });
      });
  };
}

function changePassword(oldPassword, password1, password2) {
  return (dispatch) => {
    passwordApi
      .setPassword(oldPassword, password1, password2)
      .then((response) => {
        dispatch({
          type: authConstants.CHANGE_PASSWORD_SUCCESS,
          payload: response.data,
        });
        history.push("/landing");
      })
      .catch((error) => {
        dispatch({
          type: authConstants.CHANGE_PASSWORD_FAILURE,
          payload: error,
        });
      });
  };
}
