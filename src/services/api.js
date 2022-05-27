import axios from "axios";

import { OPEN_WEATHER_API_KEY } from "../constants/apiKeys";

export const WEATHER_API = axios.create({
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
  params: {
    key: OPEN_WEATHER_API_KEY,
    days: 1,
    aqi: "no",
    alerts: "no",
  },
});
