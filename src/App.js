import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchWeatherReport, fetchCities } from "./store/action";
import { debounce, throttle } from "lodash";

function App() {
  let dispatch = useDispatch();
  let selectedWeatherReport = useSelector(
    (state) => state?.selectedWeatherReport
  );
  let citiesList = useSelector((state) => state?.citiesList) || [];
  // const [searchResults, setSearchResults] = useState([]);
  // Debounced search function with a delay of 300ms
  const debouncedSearch = debounce((term) => {
    if (term) fetchData(term);
  }, 300);

  // Throttled search function with a limit of 1 request per second
  const throttledSearch = throttle((term) => {
    if (term) fetchData(term);
  }, 1000);

  const handleSearch = (event) => {
    const term = event.target.value;
    debouncedSearch(term);
    // throttledSearch(term);
  };

  const fetchData = (searchTerm) => {
    dispatch(fetchCities(searchTerm));
  };

  useEffect(() => {
    dispatch(fetchWeatherReport('Mumbai'));
    return () => {};
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <header className="App-header">Weather App</header>
      </div>
      <div className="weather">
        <div>
          {/* <form onSubmit={getCities}>
            <input type="text" name="search"></input>
            <button type="submit">{'->'}</button>
          </form> */}
          <input type="text" placeholder="Search" onChange={handleSearch} />
          <ul>
            {citiesList.map((item) => (
              <li key={item.id} onClick={() => dispatch(fetchWeatherReport(item.region))} className="search-result">{item.region} - {item.country}</li>
            ))}
          </ul>
        </div>
        <div className="weather-box">
          <h2 className="city-name">{selectedWeatherReport?.location?.name}</h2>
          <div className="city-details">
            <span>{selectedWeatherReport?.location?.region}</span>
            <span>{selectedWeatherReport?.location?.tz_id}</span>
          </div>
          <div className="current-forecast">
            <div className="left-details">
              <div>
                <img
                  src={selectedWeatherReport?.current?.condition?.icon}
                  alt={selectedWeatherReport?.current?.condition?.text}
                  width="60"
                  height="60"
                />
              </div>
              <div>{selectedWeatherReport?.current?.condition?.text}</div>
            </div>
            <div className="right-details">
              <div>Temp: {selectedWeatherReport?.current?.temp_c}</div>
              <div>Wind: {selectedWeatherReport?.current?.wind_kph}</div>
              <div>Humidity: {selectedWeatherReport?.current?.humidity}</div>
              <div>Precip: {selectedWeatherReport?.current?.precip_mm}</div>
            </div>
          </div>
          <div className="weather-predection">
            <div className="pred-list">
              {selectedWeatherReport?.forecast.forecastday.map((forecast) => {
                const dateStr = forecast?.date;
                const dateObj = new Date(dateStr);
                const options = {
                  day: "numeric",
                  weekday: "long",
                };

                const formattedDate = new Intl.DateTimeFormat(
                  "en-US",
                  options
                ).format(dateObj);
                return (
                  <div className="pred-items">
                    <div>{formattedDate || forecast?.date}</div>
                    <div>
                      <img
                        src={forecast?.day?.condition?.icon}
                        alt={forecast?.day?.condition?.text}
                        width="30"
                        height="30"
                      />
                    </div>
                    <div>{forecast?.day?.avgtemp_c}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
