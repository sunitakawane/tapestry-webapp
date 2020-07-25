import axios from "axios";

export const signUpApi = {
  signUp,
};

function signUp(email, firstName, lastName, labName, labLocation) {
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
      return currentUser;
    });
}
