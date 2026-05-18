import axios from "axios";

const API = axios.create({
  baseURL: "https://ecmmerce-backend-qs4l.onrender.com/api"
});

API.interceptors.request.use((req)=>{

  const token = localStorage.getItem("token");

  if(token){
    req.headers.Authorization=`Bearer ${token}`;
  }

  return req;
});

export default API;