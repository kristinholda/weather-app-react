import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <small class="source">
            <a
              href="https://github.com/kristinholda/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Kristin Holda
          </small>
        </footer>
      </div>
    </div>
  );
}
