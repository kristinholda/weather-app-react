import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnits("celcius");
  }

  function fahrenheit() {
    return Math.round((props.celcius * 9) / 5 + 32);
  }
  if (units === "celcius") {
    return (
      <div className="WeatherTemperature">
        <h3 id="temperature">{props.celcius}</h3>
        <span className="weather-units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h3 id="temperature">{fahrenheit()}</h3>
        <span className="weather-units">
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
