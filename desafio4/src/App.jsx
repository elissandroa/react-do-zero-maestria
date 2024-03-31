import { useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";

const person = [
  { id: 1, name: "João", age: 17, job: "Analista" },
  { id: 2, name: "Maria", age: 32, job: "Gerente" },
  { id: 3, name: "Micaela", age: 28, job: "Detetive" },
];

function App() {
  const [back, setBack] = useState("backWhite");

  function handleClick() {
    setBack(back === "backWhite" ? "backAqua" : "backWhite");
  }

  return (
    <>
      <main className={back}>
        <UserDetails>
          <div>
            {person.map((item) => (
              <div key={item.id}>
                <p>
                  Nome: {item.name} - Idade: {item.age} - Profissão: {item.job}
                </p>
              </div>
            ))}
            {person.map((item) => (
              <p key={item.id}>
                {item.age >= 18
                  ? `${item.name} = Pode tirar carteira de habilitação`
                  : `${item.name} = Não pode tirar carteira de habilitação`}
              </p>
            ))}
          </div>
        </UserDetails>
      </main>
      <button onClick={handleClick}>Change Colors</button>
    </>
  );
}

export default App;
