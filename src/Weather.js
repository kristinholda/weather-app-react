import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import FeelsLike from "./feels-like.svg";
import Humidity from "./humidity.svg";
import Wind from "./wind.svg";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="row header">
              <div className="col-6">
                <h1 className="city" id="city">
                  {weatherData.city}
                </h1>
                <h2 className="date-hour" id="date-hour">
                  <FormattedDate date={weatherData.date} />
                </h2>
              </div>
              <div className="col-5">
                <form id="search-form">
                  <div className="row">
                    <div className="col-10">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Type a city"
                        id="city-input"
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="submit"
                        className="btn btn-outline-primary search-button"
                        value="Search"
                        id="search-button"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="row current">
              <div className="col-6 current-weather-temp">
                <h3 id="temperature">{weatherData.temperature}</h3>
                <ul>
                  <li className="weather-units" id="units">
                    °F | °C
                  </li>
                </ul>
              </div>

              <div className="col-3 current-weather-description">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="weather-icon"
                />
                <h4 className="weather-desc" id="weather-description">
                  {weatherData.description}
                </h4>
              </div>

              <div className="col-3 weather-conditions">
                <ul id="weather-info">
                  <li className="feels-like">
                    <img
                      src={FeelsLike}
                      alt="feels-like-icon"
                      className="icon"
                    />{" "}
                    Feels like:{" "}
                    <span id="feels-like"> {weatherData.feelsLike}</span>°
                  </li>
                  <li className="humidity">
                    <img src={Humidity} alt="humidity-icon" className="icon" />{" "}
                    Humidity:{" "}
                    <span id="humidity-level"> {weatherData.humidity}</span>%
                  </li>
                  <li className="wind">
                    <img src={Wind} alt="wind-icon" className="icon" /> Wind:{" "}
                    <span id="wind-speed"> {weatherData.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4126dae244a02f134d2t0cdo0b2944b0";

    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return <h1>Loading...</h1>;
  }
}
