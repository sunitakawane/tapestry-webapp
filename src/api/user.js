import axios from "axios";
import url from "../constants/url";

export const userApi = {
  getUser,
};

function getUser() {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  console.log(userInfo.token, "token");

  return axios
    .get(url.BASE_API_URL + "user/" + userInfo.user.pk + "/" + userInfo.token + "/")
    .then((response) => {
      console.log("yes");
      return response;
    });
}
