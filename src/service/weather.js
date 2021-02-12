import axios from "axios";

const API_KEY = "3daca7c5fff1442085c31533210702";

export const getWeatherInfo = (lat, lon) => {
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`;
  const res = axios(URL);
  return res;
};

export const getWeatherByIP = async () => {
  const URL_IP = "http://cors-anywhere.herokuapp.com/https://api.myip.com";
  const res = await axios(URL_IP);
  console.log(res.data);
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${res.data.ip}`;
  return axios(URL);
};
