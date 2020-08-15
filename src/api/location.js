import axios from "axios";
import url from "../constants/url";

export const locationApi = {
  country,
  city,
};

function country() {
  return axios.get(url.BASE_API_URL_SERVER + "country/").then((response) => {
    return response;
  });
}

function city() {
  return axios.get(url.BASE_API_URL_SERVER + "city/").then((response) => {
    return response;
  });
}
