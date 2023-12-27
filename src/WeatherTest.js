import React, { useState } from "react";
import axios from "axios";

export default function WeatherTest(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col-2 weather-forecast-col">
            <div>
              <div className="weather-forecast-date">{forecast[0].time}</div>
              <img
                src={forecast[0].condition.icon_url}
                alt={forecast[0].condition.description}
                width="42"
              />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">
                  {forecast[0].temperature.maximum}°
                </span>
                <span className="weather-forecast-temperature-min">
                  {forecast[0].temperature.minimum}°
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "4126dae244a02f134d2t0cdo0b2944b0";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
