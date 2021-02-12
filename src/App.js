import "./App.css";
import React, { useState, useEffect } from "react";
import { getWeatherInfo, getWeatherByIP } from "./service/weather";
import WeatherDisplay from "./WeatherDisplay";
import Temp from "./componets/Temp";
import Spinner from "./componets/Spinner";

function App() {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [tempC, setTempC] = useState(0);
  const [tempF, setTempF] = useState(0);
  const [hasData, setHasData] = useState(false);
  const [color, setColor] = useState("#1687a7");

  useEffect(() => {
    switch (descriptionText) {
      case "Clear":
        setColor("#d3e0ea");
        break;
      case "Overcast":
        setColor("#f8a1d1");
        break;
      default:
        break;
    }
  }, [descriptionText]);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((pos) =>
    //   getWeatherInfo(pos.coords.latitude, pos.coords.longitude).then(
    //     (res) => {
    //       setHasData(true);
    //       setCityName(res.data.location.name);
    //       setCountryName(res.data.location.country);
    //       setIconUrl(res.data.current.condition.icon);
    //       setDescriptionText(res.data.current.condition.text);
    //       setTempC(res.data.current.temp_c);
    //       setTempF(res.data.current.temp_f);
    //     },
    //     (error) => console.error(error)
    //   )
    // );

    getWeatherByIP().then((res) => {
      setHasData(true);
      setCityName(res.data.location.name);
      setCountryName(res.data.location.country);
      setIconUrl(res.data.current.condition.icon);
      setDescriptionText(res.data.current.condition.text);
      setTempC(res.data.current.temp_c);
      setTempF(res.data.current.temp_f);
    });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="Data">
        {hasData ? (
          <>
            <WeatherDisplay
              cityName={cityName}
              countryName={countryName}
              weatherDescription={descriptionText}
              iconUrl={iconUrl}
            />
            <Temp tempC={tempC} tempF={tempF} />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default App;
