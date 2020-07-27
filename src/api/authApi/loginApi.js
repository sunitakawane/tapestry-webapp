import axios from "axios";
import baseApiUrl from "../../constants/baseApiUrl";

export const loginApi = {
  login,
  logout,
};

function login(email, password) {
  console.log("hello ji");
  return axios
    .post(baseApiUrl.BASE_URL + "auth/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      return response;
    });
}

function logout() {
  return axios.post(baseApiUrl.BASE_URL + "/auth/logout").then((response) => {
    return response;
  });
}
