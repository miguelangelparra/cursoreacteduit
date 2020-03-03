import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Importaciones de Componentes 
import Nav from './components/Nav'
import Form from  './components/Form'
import Footer from './components/Footer'

function App() {
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
        <Form />
      </header>
    </div>
  );
}
export default App;
