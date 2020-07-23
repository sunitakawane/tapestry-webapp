import axios from "axios";
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
    axios
      .post(
        `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/register`,
        {
          email: email,
          first_Name: firstName,
          last_Name: lastName,
          lab: labName,
          city: labLocation,
        }
      )
      .then((response) => response.json())
      .then((currentUser) => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      })
      .then(
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
