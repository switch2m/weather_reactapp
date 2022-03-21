import React, { useState } from 'react';
const api = {
  key: "41acf2297696af1a4c922b147c91c42c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });  
    }
  }
  
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className='body'>
      <div className="container">
          <div className="search-box">
            <input 
              type="text"
              className="search-input"
              placeholder="Enter the city name"
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search} 
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="list-info">
                <li className='text'>
                  Humidity{" "}
                  <span className='templist'>{Math.round(weather.main.humidity)} %</span>
                </li>
                <div className="underline"></div>
                <li className='text'>
                  Visibility{" "}
                  <span className='templist'>{Math.round(weather.visibility)} mi</span>
                </li>
                <div className="underline"></div>
                <li className='text'>
                  Wind speed
                  <span className='templist'>{Math.round(weather.wind.speed)}Km/h</span>
                </li>
              </div>    
            </div>
          </div>
          ) : ('')}
      </div>
      
    </div>
  );
}

export default App;
