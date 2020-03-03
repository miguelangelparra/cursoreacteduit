import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Importaciones de Componentes
import Nav from "./components/Nav";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 0
    };
  }


sumarclick=()=>{
  this.setState({click:this.state.click +1 })
}


  render() {
    var cargo = " Instructor";
    let nombre = "Miguelangel";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Preguntale a: {cargo} - {nombre}
          </p>
          <Nav />
          <Form Nombre="Ingrese su nombre" Enviar="Enviar consulta" />
        </header>

        <p>{this.state.click}</p>
        <button onClick={()=>this.setState({click:this.state.click +1 })}> + </button>
      </div>
    );
  }
}
export default App;
