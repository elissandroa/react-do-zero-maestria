import { useState } from "react";
import "./styles.css";

function MyForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [job, setJob] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && email !== "" && job !== "") {
      const user = {
        name: name,
        email: email,
        job: job,
      };
      console.log(user);
      setName("");
      setEmail("");
      setJob("");
    }
  };
  return (
    <>
      <h1>Formulário</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
            id="name"
            placeholder="Nome"
          />
        </div>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            onChange={(e) => setJob(e.target.value)}
            type="text"
            name="job"
            value={job}
            id="job"
            placeholder="Função"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </form>
    </>
  );
}

export default MyForm;
