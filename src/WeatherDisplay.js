const WeatherDisplay = ({
  cityName,
  countryName,
  weatherDescription,
  iconUrl,
}) => {
  return (
    <div>
      <h3>
        {cityName}, {countryName}
      </h3>
      <img src={iconUrl} alt={weatherDescription} />
      <p>{weatherDescription}</p>
    </div>
  );
};

export default WeatherDisplay;
