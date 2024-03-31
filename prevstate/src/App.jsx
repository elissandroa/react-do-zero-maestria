import { useState } from "react";
import "./App.css";

function App() {
  function handleClickPlus() {
    setCount((prev) => prev + 1);
  }

  function handleClickMinus() {
    setCount((prev) => prev - 1);
  }

  function handleClickPlusFive() {
    setCount((prev) => prev + 5);
  }

  function handleReset() {
    setCount((prev) => prev * 0);
  }

  function handleShow() {
    setShow((prev) => (prev === true ? false : true));
    setButtonText((prev) => (prev === "Esconder" ? "Mostrar" : "Esconder"));
  }

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [buttonText, setButtonText] = useState("Esconder");
  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <div className="button-container">
        <div>
          <button onClick={handleClickPlus}>+</button>
        </div>
        <div>
          <button onClick={handleClickMinus}>-</button>
        </div>
        <div>
          <button onClick={handleClickPlusFive}>+5</button>
        </div>
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
      {show && <div className="quadrado"></div>}

      <div>
        <button onClick={handleShow}>{buttonText}</button>
      </div>
    </div>
  );
}

export default App;
