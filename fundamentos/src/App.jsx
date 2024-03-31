import './App.css'
import Challenge from './components/Challenge'
import FirstComponent from './components/FirstComponent'
import Message from './components/Message'
import TesteProp from './components/TesteProp'


function App() {
  
  function testeMessage(){
    alert("Você clicou no elemento filho, e como sou o pai estou respondendo !");
  }

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
    <FirstComponent />
    <Challenge />
    <TesteProp name={"João"} idade={25} sexo={"Masculino"}/>
    <Message myFunction={testeMessage} />
    </div>

  )
}

export default App
