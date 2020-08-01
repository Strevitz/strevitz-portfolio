const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setcurrencyOptions] = React.useState([]);
  const [fromCurrency, setFromCurrency] = React.useState();
  const [toCurrency, setToCurrency] = React.useState();
  const [exchangeRate, setExchangeRate] = React.useState();
  const [amount, setAmount] = React.useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = React.useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  React.useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[19];
        setcurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  React.useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <React.Fragment>
      <h1>converter</h1>
      <h5>
        View accurate and reliable live mid-market exchange rates from the
        global currency markets.
      </h5>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value) || 0}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />

      <div className="equals">=</div>

      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value) || 0}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </React.Fragment>
  );
}
