import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search"></input>
        <div className="search-icon">
          <img src={search_icon} alt="serch icon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="wearcher-temp">240C</div>
      <div className="weather-location">London</div>
      <div className="data-contaner">
        <div className="element">
            <img src="" alt="" className="icon"/>
            <div className="data"></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
