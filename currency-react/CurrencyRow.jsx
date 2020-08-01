function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;

  return (
    <React.Fragment>
      <input
        type="number"
        className="currency-input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className="currency-select"
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
}
