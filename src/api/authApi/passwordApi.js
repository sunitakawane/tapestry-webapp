import axios from "axios";
import url from "../../constants/url";

export const passwordApi = {
  resetPassword,
  setPassword,
  changePassword,
};

function resetPassword(email) {
  return axios
    .post(url.BASE_API_URL + `auth/password/reset/`, {
      email: email,
    })
    .then((response) => {
      return response;
    });
}

function setPassword(password1, password2, uid, token) {
  return axios
    .post(url.BASE_API_URL + `auth/password/reset/confirm`, {
      new_password1: password1,
      new_password2: password2,
      uid: uid,
      token: token,
    })
    .then((response) => {
      return response;
    });
}

function changePassword(password1, password2) {
  return axios
    .post(url.BASE_API_URL + `auth/password/change`, {
      new_password1: password1,
      new_password2: password2,
    })
    .then((response) => {
      return response;
    });
}
