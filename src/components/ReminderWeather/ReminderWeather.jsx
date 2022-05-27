import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { getCoordinates } from "../../services/getCoordinates";
import { getWeather } from "../../services/getWeather";

export const ReminderWeather = ({ city, isWithinOneWeek }) => {
  const [error, setError] = useState(false);
  const [temperature, setTemperature] = useState();
  const formattedTemperature = () => Math.round(temperature) + " ºF";

  useEffect(() => {
    if (!temperature && isWithinOneWeek) fetchTemperature();

    async function fetchTemperature() {
      const { lat, lon, error } = await getCoordinates(city);
      if (error) return setError({ hasError: true, motive: "city" });

      const temperature = await getWeather(lat, lon);
      if (temperature.error)
        return setError({ hasError: true, motive: "weather" });

      setTemperature(temperature);
    }
  }, [city, temperature, isWithinOneWeek]);

  if (!isWithinOneWeek)
    return (
      <>Weather is only available for dates up to 7 days after current date</>
    );

  if (error.hasError) {
    if (error.motive === "city")
      return <>Couldn't find a location that matches "City" field</>;
    if (error.motive === "weather")
      return <>Couldn't find weather information</>;
  }

  return <>{temperature ? formattedTemperature() : "Retrieving weather..."}</>;
};

ReminderWeather.propTypes = {
  city: PropTypes.string.isRequired,
};
