import "./App.css";
// df3505eff7f543efaa973420232707
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">Weather App</header>
      </div>
      <div className="weather">
        <div>
          <input type="text" name="search"></input>
        </div>
        <div className="weather-box">
          <h2 className="city-name">Mangalore</h2>
          <div className="current-forecast">
            <div className="left-details">
              <div>Icon</div>
              <div>Icon Details</div>
            </div>
            <div className="right-details">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
          <div className="weather-predection">
            <div className="pred-list">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
