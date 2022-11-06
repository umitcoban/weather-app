import React, { useState } from "react";
import './App.css';
import SearchForm from "./components/SearchForm";
import LocalHour from "./components/LocalHour";
import CityHeader from "./components/CityHeader";
import WeatherStatus from "./components/WeatherStatus";
import Grow from '@mui/material/Grow';
import Zoom from '@mui/material/Zoom';
import LoadingScreen from "./components/LoadingScreen";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [cityName, setCityName] = useState("");

  const [weatherApiData, setWeatherApiData] = useState();

  const [loadedData, setLoadedData] = useState(false);

  const [weatherLogo, setWeatherLogo] = useState("");

  const [isError, setIsError] = useState(false);

  const getWeatherApiInfo = async (cityName) => {
    try {
      var weatherApiEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName.toLowerCase() + ',tr&appid=' + apiKey + '&units=metric&lang=tr';
      setLoadedData(false); // Set loading before sending API request
      var response = await fetch(weatherApiEndpoint);
      var data = await response.json().then((result) => {
        if (response.ok && response.status === 200 && response.statusText === 'OK' && response) {
          setWeatherApiData(result);
          setWeatherLogo("http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png");
          setTimeout(() => setLoadedData(true), 1500);
          setIsError(false);
          console.log(weatherApiData);
        } else {
          notify();
          setIsError(true);
          setLoadedData(false);
        }
      })
    } catch (error) {
      notify();
      setIsError(true);
    }
  }

  function handleCityName(name) {
    setCityName(name.toUpperCase());
    getWeatherApiInfo(name);
  }

  var notify = () => toast.error('Hata Lütfen Bilgileri Kontrol Ediniz!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  return (
    <Grow in={true} style={{ transitionDelay: '200ms' }}>
      <div className="App">
        <Zoom in={true} style={{ transitionDelay: '700ms' }} timeout={{ enter: 1000, exit: 1000 }}>
          <div className="main-content">
            <ToastContainer></ToastContainer>
            <SearchForm getCityName={handleCityName} />
            <LocalHour />
            {isError && notify}
            {loadedData && !isError ?
              <div>
                <CityHeader header={weatherApiData.name} showStat={loadedData} />
                <WeatherStatus main={weatherApiData.main.temp + " °C"} currentDegree={weatherApiData.weather[0].description.toUpperCase()} img={weatherLogo} 
                showStat={loadedData} weatherAltInfoTemp={weatherApiData.main} visibility={weatherApiData.visibility} wind={weatherApiData.wind} />
              </div>
              : cityName === '' || isError ? null : <LoadingScreen /> }
          </div>
        </Zoom>
      </div>
    </Grow>
  );
}

export default App;
