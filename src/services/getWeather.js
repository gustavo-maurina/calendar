import { WEATHER_API } from "./api";

/**
 * Returns weather forecast for the next 5 days
 *
 * @param {String} city city to fetch weather forecast
 * @param {String} date day to start forecast search
 */
export async function getWeather(city, date) {
  try {
    const req = await WEATHER_API.get(`${city}/${date}`);
    return req.data;
  } catch (err) {
    console.log(err);
  }
}
