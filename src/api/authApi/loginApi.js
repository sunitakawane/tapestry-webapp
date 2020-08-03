import axios from "axios";
import url from "../../constants/url";

export const loginApi = {
  login,
  logout,
};

function login(email, password) {
  return axios
    .post(url.BASE_API_URL + "auth/login/", {
      email: email,
      password: password,
    })
    .then((response) => {
      return response;
    });
}

function logout() {
  return axios.post(url.BASE_API_URL + "auth/logout").then((response) => {
    return response;
  });
}
