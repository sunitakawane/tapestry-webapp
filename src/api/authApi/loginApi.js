import axios from "axios";

export const loginApi = {
  login,
  logout,
};

function login(email, password) {
  axios
    .post(
      `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/login`,
      {
        email: email,
        password: password,
      }
    )
    .then((response) => response.json())
    .then((currentUser) => {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      return currentUser;
    });
}

function logout() {
  axios
    .post(
      `https://tapestry-pooling-284109.ew.r.appspot.com/swagger/?format=openapi/auth/logout`
    )
    .then((currentUser) => {
      localStorage.removeItem("currentUser", JSON.stringify(currentUser));
    });
}
