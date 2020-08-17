import axios from "axios";
import url from "../constants/url";

export const userApi = {
  getUser,
};

function getUser() {
  const userInfo = JSON.parse(localStorage.getItem("user-login-info"));

  return axios
    .get(url.BASE_API_URL + "user/", {
      headers: {
        Authorization: "Bearer " + userInfo.token,
        "Content-Type": "application/vnd.api+json",
      },
    })
    .then((response) => {
      console.log("yes");
      return response;
    });
}
