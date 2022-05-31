import { WEATHER_API } from "./api";

/**
 * Returns weather forecast for given coordinates
 *
 * @param {Number} lat latitude
 * @param {Number} lon longitude
 */
export async function getWeather(lat, lon) {
  try {
    const req = await WEATHER_API.get(`/data/2.5/onecall`, {
      params: { lat, lon },
    });

    return req.data.daily[0].temp.day;
  } catch (err) {
    return { error: err };
  }
}
