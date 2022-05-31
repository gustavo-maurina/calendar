import axios from "axios";

import { OPEN_WEATHER_API_KEY } from "../constants/apiKeys";

export const WEATHER_API = axios.create({
  baseURL: "http://api.openweathermap.org/",
  params: {
    appid: OPEN_WEATHER_API_KEY,
    units: "imperial",
  },
});
