import { signUpApi } from "../../../api/authApi/signUpApi";
import authConstants from "../../../constants/authConstants";

export const signUpActions = {
  signUpRequested,
  signUp,
};

function signUpRequested() {
  return {
    type: authConstants.SIGN_UP_REQUESTED,
  };
}

function signUp(email, firstName, lastName, labName, labLocation) {
  return (dispatch) => {
    signUpApi
      .signUp(email, firstName, lastName, labName, labLocation)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: authConstants.SIGN_UP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: authConstants.SIGN_UP_FAILURE,
          payload: error.toString(),
        });
      });
  };
}
