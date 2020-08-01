const Form = (props) => {
  return (
    <form className="weather-form">
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="type your city"
      />
    </form>
  );
};
