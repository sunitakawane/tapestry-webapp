import axios from "axios";

export const passwordApi = {
  resetPassword,
  setPassword,
};

function resetPassword(email) {
  axios
    .post(
      `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/password/reset`,
      {
        email: email,
      }
    )
    .then((response) => response.json())
    .then((email) => {
      return email;
    });
}

function setPassword(password1, password2) {
  axios
    .post(
      `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/password/change`,
      {
        password1: password1,
        password2: password2,
      }
    )
    .then((response) => response.json())
    .then((message) => {
      return message;
    });
}
