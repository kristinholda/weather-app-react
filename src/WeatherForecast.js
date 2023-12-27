import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setForecastLoaded(true);
  }

  if (forecastLoaded) {
    console.log(forecast);
    return (
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2 weather-forecast-col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4126dae244a02f134d2t0cdo0b2944b0";
    const city = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
