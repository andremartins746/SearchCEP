import React, { useState } from "react";
import axios from "axios"
import './App.css';
import Handlecep from "./components/handercep";
import Header from "./components/Header"

function App() {

  const [cep, setCep] = useState([])
  const [ValueCep, setValueCep] = useState(Number)




  function GetCep(newtext) {

    axios.get(`https://ws.apicep.com/cep/${newtext}.json`)
        .then(data => {
          setCep(data.data)
          
        })

        console.log("asss")
        
  }


 

  return (
    <div className="App">
      <Header title="Cep Search"/>
      <div className="input--all">
        <input placeholder="Digite o cep..." type="text" alt="input do CEP" name="cepInput" onChange={(texto => setValueCep(texto.target.value))}/>
        <button onClick={() => {GetCep(ValueCep)}}>Consultar</button>
      </div>
        <Handlecep address={cep.address} city={cep.city} code={cep.code} district={cep.district}/>
    </div>
  );
}

export default App;
 