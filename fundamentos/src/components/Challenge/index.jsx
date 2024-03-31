import { useState } from "react";

export default function Challenge() {
  const a = 10;
  const b = 15;

  const [soma, setSoma] = useState('');

  function handleClick() {
    console.log(`A soma entre ${a} + ${b} é ${a + b}`)
    setSoma( a + b);
  }

     return (
    <div>
        <h1>A = {a} B = {b} | A + B = {soma} </h1>
                 <button onClick={handleClick}> Soma</button>
    </div>
  )
}
