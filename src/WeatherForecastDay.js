import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);

    let dayDate = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayDate];
  }

  return (
    <div>
      <div className="weather-forecast-date">{day()}</div>
      <img
        id="weather-icon"
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        width="42"
      />
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">{maxTemp()}</span>
        <span className="weather-forecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
