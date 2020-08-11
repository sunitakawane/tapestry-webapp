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

function city(country_id) {
  return axios
    .get(url.BASE_API_URL_SERVER + "city/" + country_id + "/")
    .then((response) => {
      return response;
    });
}
