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
    signUpApi.signUp(email, firstName, lastName, labName, labLocation).then(
      (user) => {
        dispatch({
          type: authConstants.SIGN_UP_SUCCESS,
          payload: user,
        });
      },
      (error) => {
        dispatch({
          type: authConstants.SIGN_UP_FAILURE,
          payload: error.toString(),
        });
      }
    );
  };
}
