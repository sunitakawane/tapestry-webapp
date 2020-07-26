import axios from "axios";
import baseApiUrl from "../../constants/baseApiUrl";

export const signUpApi = {
  signUp,
};

function signUp(email, firstName, lastName, labName, labLocation) {
  return () => {
    axios
      .post(baseApiUrl.BASE_URL + `/auth/register`, {
        email: email,
        first_Name: firstName,
        last_Name: lastName,
        lab: labName,
        city: labLocation,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
      });
  };
}
