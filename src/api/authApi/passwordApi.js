import axios from "axios";
import baseApiUrl from "../../constants/baseApiUrl";

export const passwordApi = {
  resetPassword,
  setPassword,
};

function resetPassword(email) {
  return () => {
    axios
      .post(baseApiUrl.BASE_URL + `/auth/password/reset`, {
        email: email,
      })
      .then((response) => {
        console.log(response.data);
      });
  };
}

function setPassword(password1, password2) {
  return () => {
    axios
      .post(baseApiUrl.BASE_URL + `/auth/password/change`, {
        password1: password1,
        password2: password2,
      })
      .then((response) => {
        console.log(response.data);
      });
  };
}
