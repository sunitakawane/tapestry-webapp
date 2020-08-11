import { signUpApi } from "../../../api/authApi/signUpApi";
import { locationApi } from "../../../api/location";
import authConstants from "../../../constants/authConstants";

export const signUpActions = {
  signUpRequested,
  signUp,
  countryList,
};

function signUpRequested() {
  return {
    type: authConstants.SIGN_UP_REQUESTED,
  };
}

function signUp(email, firstName, lastName, labName) {
  let labLocation;
  // labLocation = "Mumbai";
  return (dispatch) => {
    signUpApi
      .signUp(email, firstName, lastName, labName, labLocation)
      .then((response) => {
        localStorage.setItem("register", JSON.stringify(response.data.results));
        dispatch({
          type: authConstants.SIGN_UP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: authConstants.SIGN_UP_FAILURE,
          payload: error.toString(),
        });
      });
  };
}

function countryList() {
  return (dispatch) => {
    locationApi
      .country()
      .then((response) => {
        localStorage.setItem("countries", JSON.stringify(response.data));
        dispatch({
          type: authConstants.LOCATION_FETCH_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };
}
