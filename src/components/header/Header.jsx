import React, { useEffect, useState } from 'react';
import './header.css';
import axios from 'axios';

function Header() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
       // url: 'https://api.openweathermap.org/data/2.5/weather?',
        params: {
          lon: '75.414001',
          lat: '11.86078',
          appid: import.meta.env.WEATHER_API_KEY // Replace with your OpenWeatherMap API key
        }
      };

      try {
        const response = await axios.request(options);
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

 //   fetchData();
  }, []);

  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header-data'>
        <h1>Kannur</h1>
        <h3></h3>
          {/* {weatherData && ( */}
            {/* <> */}
              {/* <p>Temperature: {weatherData.name}</p> */}
              {/* <p>Humidity: {weatherData.main.humidity}</p> */}
            {/* </> */}
          {/* )} */}

        </div>
        <div className='header-img'></div>
      </div>
    </div>
  );
}

export default Header;
