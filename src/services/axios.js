import axios from "axios";
import url from "../constants/url";

// request interceptor
const reqInterceptor = axios.interceptors.request.use(
  function (config) {
    if (config.baseURL === url.BASE_API_URL) {
      config.timeout = 4000;
    } else {
      return config;
    }
    console.log(config);
    return config;
  },
  function (error) {
    // request error
    return Promise.reject(error);
  }
);

const resInterceptor = axios.interceptors.response.use(
  function (response) {
    // response with a status code 2xx
    if (response.status === 200 || response.status === 201) {
      router.replace("homepage");
    } else {
      alert("Unusual behaviour");
    }
    console.log(response);
    return response;
  },
  function (error) {
    const { status, data, config } = error.response;
    if (status == 400) {
      throw new Error(data[0].detail);
    } else if (status == 500) {
      throw new Error("Network Error");
    } else if (status === 404) {
      throw new Error(`${config.url} not found`);
    }

    // response outside the range of status code 2xx
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.request.eject(resInterceptor);
