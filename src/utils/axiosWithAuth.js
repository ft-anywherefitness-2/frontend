import axios from 'axios';

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
      baseURL: "https://frontend-iota.vercel.app/",
    headers: {
    //   "Content-Type": "application/json",
      Authorization: token
    }
  });
};


export default axiosWithAuth;