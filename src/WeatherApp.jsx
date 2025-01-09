import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    feelsLike: 24.84,
    temp: 25.04,
    tempMin: 34.89,
    tempMax: 20.22,
    humidity: 67,
    weather: "smoky",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div>
     <h2> WeatherWise</h2> 
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
