import axios from "axios";
import authConstants from "../../../constants/authConstants";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const passwordActions = {
  resetPasswordRequested,
  resetPassword,
  //   changePassword,
  //   confirmPassword,
};

function resetPasswordRequested() {
  return {
    type: authConstants.RESET_PASSWORD_REQUESTED,
  };
}

function resetPassword(email) {
  return (dispatch) => {
    axios
      .post(
        `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/password/reset`,
        {
          email: email,
        }
      )
      .then((response) => response.json())
      .then(
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