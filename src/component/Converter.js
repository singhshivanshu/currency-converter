import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useHistory } from "react-router-dom";

function Converter() {
  const [currency, setCurrency] = useState(null);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const history = useHistory();

  // all the currencies to select
  const fetchCurrencyData = () => {
    axios({
      method: "GET",
      url: "https://fixer-fixer-currency-v1.p.rapidapi.com/symbols",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_FIXER_KEY,
        useQueryString: true,
      },
    })
      .then((response) => {
        setCurrency(response.data.symbols);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  // converting data structure of currency
  let options = [];
  currency &&
    Object.keys(currency).map((ele) => {
      let obj = {};
      obj.value = ele;
      obj.label = currency[ele];
      options.push(obj);
    });

  // to convert the currency
  const convertCurrency = (fromValue, toValue) => {
    axios({
      method: "GET",
      url: "https://fixer-fixer-currency-v1.p.rapidapi.com/convert",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "fixer-fixer-currency-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_FIXER_KEY,
        useQueryString: true,
      },
      params: {
        from: fromValue.value,
        to: toValue.value,
        amount: input,
      },
    })
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // swaping values

  const swapValue = () => {
    let temp = fromValue;
    setFromValue(toValue);
    setToValue(temp);
    convertCurrency(toValue, temp);
  };

  return (
    <>{token ? 
      <>
      <div className="main">
        <input
          className="item amount"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="number"
          placeholder="Amount"
        />

        <Select
          className="selector item"
          value={fromValue}
          onChange={(e) => setFromValue(e)}
          options={options}
          placeholder="From"
        />
        <button className="item swap btn" onClick={swapValue}>
          <i className="fas fa-exchange-alt fa-2x"></i>
        </button>

        <Select
          className="selector item"
          value={toValue}
          onChange={(e) => setToValue(e)}
          options={options}
          placeholder="To"
        />

        <button
          className="item convert btn"
          onClick={() => convertCurrency(fromValue, toValue)}
        >
          <i className="fas fa-arrow-alt-circle-right fa-2x"></i>
        </button>
      </div>
      <br />
      {result ? (
        <div className="result">
          <span className="from">{`${result.query.amount} ${result.query.from} =`}</span>
          <br />
          <span className="to">{`${result.result} `}</span>
          <span className="from">{result.query.to}</span>
        </div>
      ) : null}
        <br/>
        <br/>
        <br/>
      <div className="result">
        <button
          className="submit-btn"
          onClick={() => {
            localStorage.removeItem("token");
            setToken('')
            history.push("/login");
          }}
        >
          Logout
        </button>
      </div>
      
      </> : <h2 style={{textAlign: "center"}}>Please login</h2>
    }
    </>
  );
}

export default Converter;
