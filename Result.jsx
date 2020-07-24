const Result = (props) => {
  const {
    err,
    city,
    date,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();

    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <React.Fragment>
        <h5>
          Weather forecast for <em>{city}</em>
        </h5>
        <p>Data from day and time: {date}</p>
        <p>Current temperature: {temp} &#176;C</p>
        <p>Sunrise: {sunriseTime}</p>
        <p>Sunset: {sunsetTime}</p>
        <p>Air pressure: {pressure} hPa</p>
        <p>Wind speed: {wind} m/s</p>
      </React.Fragment>
    );
  }

  return (
    <div className="result">
      {err ? `Sorry, I don't have any info about ${city} city` : content}
    </div>
  );
};
