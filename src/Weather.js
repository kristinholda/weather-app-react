import React from "react";
import "./Weather.css";
import FeelsLike from "./feels-like.svg";
import Humidity from "./humidity.svg";
import Location from "./location-light.svg";
import Wind from "./wind.svg";

export default function Weather() {
  let weatherData = {
    temperature: 37,

    description: "Broken Clouds",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    feels: 32,
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <h1>Weather App React</h1>
          <div className="row header">
            <div className="col-6">
              <h1 className="city" id="city">
                New Haven
              </h1>
              <h2 className="date-hour" id="date-hour">
                Tuesday November 28, 2023 | 13:23
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
                      autocomplete="off"
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
                src={weatherData.imgUrl}
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
                  <img src={FeelsLike} alt="feels-like-icon" className="icon" />{" "}
                  Feels like: <span id="feels-like">{weatherData.feels}</span>°
                </li>
                <li className="humidity">
                  <img src={Humidity} alt="humidity-icon" className="icon" />{" "}
                  Humidity:{" "}
                  <span id="humidity-level">{weatherData.humidity}</span>%
                </li>
                <li className="wind">
                  <img src={Wind} alt="wind-icon" className="icon" /> Wind:{" "}
                  <span id="wind-speed">{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
