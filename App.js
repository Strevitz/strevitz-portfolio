//Open Weather API Key
const APIKey = "090afe4c5614f135af4bd562af797d31";

class App extends React.Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  /*
  handleCitySubmit = (e) => {
    e.preventDefault();
    console.log("potwierdzony form");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Nie ma takiego miasta");
      })
      .then((res) => res.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: this.state.value,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: true,
          city: this.state.value,
        });
      });
  };
*/

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

      fetch(API)
        .then((res) => {
          if (res.ok) {
            return res;
          }
          throw Error("Nie ma takiego miasta");
        })
        .then((res) => res.json())
        .then((data) => {
          const time = new Date().toLocaleString();
          this.setState({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: this.state.value,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            err: true,
            city: this.state.value,
          });
        });

      this.setState({
        value: this.state.value,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}
