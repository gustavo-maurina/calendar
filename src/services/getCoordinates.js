import { WEATHER_API } from "./api";

/**
 * Returns latitude and longitude for given location name
 *
 * @param {String} city city to fetch weather forecast
 */
export async function getCoordinates(city) {
  try {
    const req = await WEATHER_API.get(`geo/1.0/direct`, {
      params: {
        q: city,
      },
    });
    const { lat, lon } = req.data[0];

    return { lat, lon };
  } catch (err) {
    return { error: err };
  }
}
