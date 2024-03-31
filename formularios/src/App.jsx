import "./App.css";
import MyForm from "./components/Myform";

function App() {
  return (
    <div>
      <MyForm
        user={{
          name: "Marcelo",
          email: "marcelo@gmail.com",
          bio: "Marcelo é engrenheiro mecânico a mais de 30 anos",
          role:"user",
        }}
      />
    </div>
  );
}

export default App;
