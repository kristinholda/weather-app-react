import React from "react";
import WeatherTemperature from "./WeatherTemperature";

import Humidity from "./humidity.svg";
import Wind from "./wind.svg";

export default function WeatherInfo(props) {
  return (
    <div className="row current">
      <div className="col-6 current-weather-temp">
        <WeatherTemperature celcius={props.data.temperature} />
      </div>

      <div className="col-3 current-weather-description">
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          id="weather-icon"
        />
        <h4 className="weather-desc" id="weather-description">
          {props.data.description}
        </h4>
      </div>

      <div className="col-3 weather-conditions">
        <ul id="weather-info">
          <li className="humidity">
            <img src={Humidity} alt="humidity-icon" className="icon" />{" "}
            Humidity: <span id="humidity-level"> {props.data.humidity}</span>%
          </li>
          <li className="wind">
            <img src={Wind} alt="wind-icon" className="icon" /> Wind:{" "}
            <span id="wind-speed"> {props.data.wind}</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
