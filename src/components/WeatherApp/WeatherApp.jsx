import React, { useEffect, useState } from "react";
import "./weather-app.css";

import search_icon from "../../assets/img/search.png";
import clear_icon from "../../assets/img/clear.png";
import cloud_icon from "../../assets/img/cloud.png";
import drizzle_icon from "../../assets/img/drizzle.png";
import rain_icon from "../../assets/img/rain.png";
import snow_icon from "../../assets/img/snow.png";
import wind_icon from "../../assets/img/wind.png";  
import humidity_icon from "../../assets/img/humidity.png";

const WeatherApp = () => {

  let api_key = "8a33760b60ab7dd8def2285694a9e4ec";

  const [wicon, setWicon] = useState(cloud_icon);
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [temprature, setTemprature] = useState();
  const [location, setLocation] = useState();
  const [input, setInput] = useState("");



  const search = async (input) =>{
    const element = document.getElementsByClassName("cityInput");
    if(input===""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=Metric&appid=${api_key}`;


    let response = await fetch(url);
    let data = await response.json();

    setHumidity(data.main.humidity);
    setWind(data.wind.speed)
    setTemprature(data.main.temp)
    setLocation(data.name);

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setWicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setWicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" || data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setWicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" || data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setWicon(rain_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setWicon(snow_icon);
    }
    else if(data.weather[0].icon==="50d" || data.weather[0].icon==="50n"){
      setWicon(humidity_icon);
    }
    else{
      setWicon(clear_icon)
    }

  }

  useEffect(() => {
    search("New Delhi")
  },[])

  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="cityInput"
          placeholder="search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <div className="search-icon" onClick={() => {
          search(input)
        }}>
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">{temprature}°C</div>
      <div className="weather-location">{location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
