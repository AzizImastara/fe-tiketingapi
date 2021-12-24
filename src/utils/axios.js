import axios from "axios";

const axiosApiIntance = axios.create({
  // baseURL: "http://localhost:3001/"
  baseURL: `${process.env.REACT_APP_URL_LOCAL}`
});

// Add a request interceptor
axiosApiIntance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // =================
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    // =================
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 403) {
      localStorage.clear();
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntance;
