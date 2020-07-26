import axios from "axios";
import baseApiUrl from "../../constants/baseApiUrl";

export const loginApi = {
  login,
  logout,
};

function login(email, password) {
  return () => {
    axios
      .post(baseApiUrl.BASE_URL + "/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
      });
  };
}

function logout() {
  return () => {
    axios.post(baseApiUrl.BASE_URL + "/auth/logout").then((response) => {
      localStorage.removeItem("user", JSON.stringify(response.data));
    });
  };
}
