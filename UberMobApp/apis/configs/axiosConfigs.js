
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.2.117:8000/api',
  headers: {'Authorization': 'Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWRiNjIzN2Q5ZTY5ZmQwNThhNWY2NiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODg1NTkwNTd9.W_BZoV6dV6dRwbxXpi4v8wREF_5CAa8Mp9DnliWRLcM'},
 },

);

const errorHandler = (error) => {
  const statusCode = error.response?.status;
  
  if (statusCode ) {
    console.log(statusCode,"statutus code ")
    const errorMessage = error.response?.data?.message || "An error occurred";
  
  }

  return Promise.reject(error);
};

api.interceptors.response.use(
  undefined,
  error => errorHandler(error)
);


