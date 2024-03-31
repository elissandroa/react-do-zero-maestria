/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  //Custom hook
  const { data: items, httpConfig: httpConfigRequest } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  //1 - Recuperar dados

  /*
  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);
*/

  //2 - add de dados



  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
  /*  const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]); */

    httpConfigRequest(product,"POST");
    setName("");
    setPrice("");
  };
  return (
    <div>
      <h1>Lista de produtos</h1>
      <table>
        <thead>
          <th>Descrição</th>
          <th>Preço</th>
        </thead>
        <tbody>
          {items &&
            items.map((product) => (
              <tr key={product.id}>
                <td id="td-name">{product.name}</td>
                <td id="td-number">{Number(product.price).toFixed(2)}</td>
                <td className="td-crud">
                  <button className="td-buttom-crud">Editar</button>
                </td>
                <td className="td-crud">
                  <button className="td-buttom-crud">Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <hr />
      <div className="add-prodct">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
