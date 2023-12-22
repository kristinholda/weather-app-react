import React from "react";

export default function WeatherForecast() {
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
