import { useState } from "react";
import "./styles.css";
const FirstComponent = () => {
  const user = {
    name: "João",
    idade: 25,
    sexo: "Masculino",
  };

  const [newColor, setNewColor] = useState("blue");

  const colors = ["blue", "yellow", "cyan", "red", "green"];
  const [pos, setPos] = useState(0);
  const handleClick = (e) => {
    console.log(e);
    if (pos <= 4) {
      setPos(pos + 1);
      setNewColor(colors[pos]);
      if (pos === 4) {
        setPos(0);
      }
    }
  };

  return (
    <div>
      <h1 onClick={handleClick} className={newColor}>
        Meu primeiro componente
      </h1>
      <p>Nome: {user.name} </p>
      {console.log(user)}
      <ul>
        {
          colors.map((item, index) => (
            <li key={index}>{item}</li>
          )) 
        }
      </ul>
    </div>
  );
};

export default FirstComponent;
