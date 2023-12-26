import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function search() {
    const apiKey = "4126dae244a02f134d2t0cdo0b2944b0";

    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-10">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Type a city"
                        id="city-input"
                        autoComplete="on"
                        onChange={handleCityChange}
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

            <WeatherInfo data={weatherData} />
            <WeatherForecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}
