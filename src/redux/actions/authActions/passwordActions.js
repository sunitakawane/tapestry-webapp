import { createBrowserHistory } from "history";
import { passwordApi } from "../../../api/authApi/passwordApi";
import authConstants from "../../../constants/authConstants";

const history = createBrowserHistory();

export const passwordActions = {
  resetPasswordRequested,
  setPasswordRequested,
  resetPassword,
  setPassword,
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

function resetPassword(email) {
  return (dispatch) => {
    passwordApi.resetPassword(email).then(
      (user) => {
        dispatch({
          type: authConstants.RESET_PASSWORD_SUCCESS,
          payload: user,
        });
        history.push("/set-password");
      },
      (error) => {
        dispatch({
          type: authConstants.RESET_PASSWORD_FAILURE,
          payload: error,
        });
      }
    );
  };
}

function setPassword(password1, password2) {
  return (dispatch) => {
    passwordApi.setPassword(password1, password2).then(
      (user) => {
        dispatch({
          type: authConstants.SET_PASSWORD_SUCCESS,
          payload: user,
        });
        history.push("/set-password");
      },
      (error) => {
        dispatch({
          type: authConstants.SET_PASSWORD_FAILURE,
          payload: error,
        });
      }
    );
  };
}
