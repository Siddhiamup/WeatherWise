import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "977142194ff606eabadfbc6447ade421";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(jsonResponse);
      console.log(result);
      return result;
    } catch (error) {
      throw err;
    }
  };
    let HandleChange = (evt) => {
      setCity(evt.target.value);
      if(error) setError(false);
    };
    let HandleSubmit = async (evt) => {
      try {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      } catch (err) {
        setError(err);
      }
    };

    return (
      <div className="SearchBox">
        <h4>Search for Weather</h4>
        <form onSubmit={HandleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={HandleChange}
          ></TextField>
          <br></br>
          <br></br>
          <Button variant="contained" type="submit">
            Search
          </Button>
          {error && <p style ={{color:"red"}}>No such place Exists</p>}
        </form>
      </div>
    );
  };
