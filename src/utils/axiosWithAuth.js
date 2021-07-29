import axios from 'axios';

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
      baseURL: "https://frontend-36d746b4y-anywherefitness.vercel.app/",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};


export default axiosWithAuth;