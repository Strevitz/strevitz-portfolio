var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

var BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      currencyOptions = _useState2[0],
      setcurrencyOptions = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      fromCurrency = _useState4[0],
      setFromCurrency = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      toCurrency = _useState6[0],
      setToCurrency = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      exchangeRate = _useState8[0],
      setExchangeRate = _useState8[1];

  var _useState9 = useState(1),
      _useState10 = _slicedToArray(_useState9, 2),
      amount = _useState10[0],
      setAmount = _useState10[1];

  var _useState11 = useState(true),
      _useState12 = _slicedToArray(_useState11, 2),
      amountInFromCurrency = _useState12[0],
      setAmountInFromCurrency = _useState12[1];

  var toAmount = void 0,
      fromAmount = void 0;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(function () {
    fetch(BASE_URL).then(function (res) {
      return res.json();
    }).then(function (data) {
      var firstCurrency = Object.keys(data.rates)[19];
      setcurrencyOptions([data.base].concat(_toConsumableArray(Object.keys(data.rates))));
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.rates[firstCurrency]);
    });
  }, []);

  useEffect(function () {
    if (fromCurrency != null && toCurrency != null) {
      fetch(BASE_URL + "?base=" + fromCurrency + "&symbols=" + toCurrency).then(function (res) {
        return res.json();
      }).then(function (data) {
        return setExchangeRate(data.rates[toCurrency]);
      });
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

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h1",
      null,
      "Convert"
    ),
    React.createElement(CurrencyRow, {
      currencyOptions: currencyOptions,
      selectedCurrency: fromCurrency,
      onChangeCurrency: function onChangeCurrency(e) {
        return setFromCurrency(e.target.value);
      },
      onChangeAmount: handleFromAmountChange,
      amount: fromAmount
    }),
    React.createElement(
      "div",
      { className: "equals" },
      "="
    ),
    React.createElement(CurrencyRow, {
      currencyOptions: currencyOptions,
      selectedCurrency: toCurrency,
      onChangeCurrency: function onChangeCurrency(e) {
        return setToCurrency(e.target.value);
      },
      onChangeAmount: handleToAmountChange,
      amount: toAmount
    })
  );
}

export default App;