import React, { useState } from "react";
import SunLogo from "../assets/images/sun.png";
import CloudyLogo from "../assets/images/cloudy.png";
import RainLogo from "../assets/images/rain.png";
import SnowLogo from "../assets/images/snow.png";
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';
import WindPowerIcon from '@mui/icons-material/WindPower';
import VisibilityIcon from '@mui/icons-material/Visibility';

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

    return <Fade onAnimationStart={setIsShowStat} in={isShowStat} style={{ transitionDelay: '1000ms' }} timeout={{ enter: 1000, exit: 1000 }}>
        <div className="weather-panel">
            <h1 className="weather-main">{props.main}</h1>
            <div className="weather-info">
                <img className="current-weather-logo" src={props.img} />
                <p className="degree"> {props.currentDegree}</p>
            </div>
            <br />
            <hr className="line"></hr>
            <Grid container direction="row">
                <Grid item xs={3}>
                    <ArrowUpwardIcon color="primary" fontSize="large" />
                    <p className="weather-alt-info">{props.weatherAltInfoTemp.temp_max} °C</p>
                </Grid>
                <Grid item xs={3}>
                    <ArrowDownwardIcon color="primary" fontSize="large" />
                    <p className="weather-alt-info">{props.weatherAltInfoTemp.temp_min} °C</p>
                </Grid>
                <Grid item xs={3}>
                    <OpacityIcon color="primary" fontSize="large" />
                    <p className="weather-alt-info">%{props.weatherAltInfoTemp.humidity}</p>
                </Grid>
                <Grid item xs={3}>
                    <CompressIcon color="primary" fontSize="large" />
                    <p className="weather-alt-info">{props.weatherAltInfoTemp.pressure} PA</p>
                </Grid>
                <Grid item xs={6}>
                    <WindPowerIcon color="primary" fontSize="large" />
                    <p className="weather-alt-info">{props.wind.speed} km/h</p>
                </Grid>
                <Grid item xs={6}>
                    <VisibilityIcon color="primary" fontSize="large" />
                    <p className="weather-alt-info">{props.visibility} m</p>
                </Grid>
            </Grid>
        </div>
    </Fade>
}

export default WeatherStatus;