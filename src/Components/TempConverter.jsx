import { useState } from "react";

function TempConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const formatValue = (value) => {
    if (value === "") return "";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return value;
    if (Number.isInteger(numValue)) {
      return numValue.toString();
    }
    return numValue.toFixed(2);
  };

  const handleCelsiusToFahrenheit = (value) => {
    setCelsius(value);

    if (value === "") {
      setFahrenheit("");
    } else {
      const newValue = parseFloat(value);
      if (!isNaN(newValue)) {
        const F = value * 1.8 + 32;
        setFahrenheit(F);
      }
    }
  };

  const handleFahrenheitToCelsius = (value) => {
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      const newValue = parseFloat(value);
      if (!isNaN(newValue)) {
        const C = (value - 32) / 1.8;
        setCelsius(C);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1>Temperature Converter</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <label htmlFor="celsius">Celsius</label>
        <input
          id="celsius"
          type="number"
          value={formatValue(celsius)}
          onChange={(event) => {
            handleCelsiusToFahrenheit(event.target.value);
          }}
          placeholder="0"
        />

        <label htmlFor="fahrenheit">Fahrenheit</label>
        <input
          id="fahrenheit"
          type="number"
          defaultValue={formatValue(fahrenheit)}
          onChange={(event) => {
            handleFahrenheitToCelsius(event.target.value);
          }}
          placeholder="32"
        />
      </div>
    </div>
  );
}

export default TempConverter;
