import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  const apiKey = "4126dae244a02f134d2t0cdo0b2944b0";
  const city = props.city;
  const apiUrl = `https:/api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col-2 weather-forecast-col">
          <div className="weather-forecast-date">Tue</div>
          <img
            id="weather-icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            alt=""
            width="42"
          />
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature-max"> 37° </span>
            <span className="weather-forecast-temperature-min"> 32° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
