import React, { useState } from "react";
import SunLogo from "../assets/images/sun.png";
import CloudyLogo from "../assets/images/cloudy.png";
import RainLogo from "../assets/images/rain.png";
import SnowLogo from "../assets/images/snow.png";
import Fade from '@mui/material/Fade';


function WeatherStatus(props) {

    const [isShowStat, setIsShowStat] = useState(true);
    const [weatherLogo, setWeatherLogo] = useState(SunLogo);

    function setWeatherImage() {
        setWeatherLogo(getWeatherImage(props.img));
        setIsShowStat(props.showStat);
    }

    function getWeatherImage(imgName) {
        switch (imgName) {
            case "sun":
                return SunLogo;
            case "snow":
                return SnowLogo;
            case "cloudy":
                return CloudyLogo;
            case "rain":
                return RainLogo;
            default:
                return SunLogo;
        }
    }

    return <Fade onAnimationStart={setIsShowStat} in={isShowStat} style={{ transitionDelay: '1000ms' }} timeout={{enter:1000,exit:1000}}>
        <div className="weather-panel">
            <h1 className="weather-main">{props.main}</h1>
            <div className="weather-info">
                <img className="current-weather-logo" src={props.img} />
                <p className="degree"> {props.currentDegree}</p>
            </div>
        </div>
    </Fade>
}

export default WeatherStatus;