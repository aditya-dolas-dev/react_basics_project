import React, { useState } from "react";
import "../style.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  const clear = () => setInputValue("");

  return (
    <form className="calculator" name="calc">
      <input
        type="text"
        className="value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <span className="num-clear" onClick={() => clear()}>
        c
      </span>

      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("*")} className="multiplication">
        *
      </span>

      <span onClick={() => display("4")}>4</span>

      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span onClick={() => display("/")} className="division">
        /
      </span>

      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("-")} className="subtraction">
        -
      </span>

      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>

      <span onClick={() => display("+")} className="addition">
        +
      </span>

      <span onClick={() => calculate()} className="num-equal">
        =
      </span>
    </form>
  );
};

export default Calculator;
