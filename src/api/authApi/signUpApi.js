import axios from "axios";
import url from "../../constants/url";

export const signUpApi = {
  signUp,
};

function signUp(email, firstName, lastName, labName, labLocation) {
  return axios
    .post(url.BASE_API_URL + `auth/register/`, {
      email: email,
      first_name: firstName,
      last_name: lastName,
      lab: labName,
      city: labLocation,
    })
    .then((response) => {
      return response;
    });
}
