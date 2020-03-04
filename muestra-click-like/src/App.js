import React, {Component} from 'react';
import './App.css';

//Importacion de Componentes
import Header from './components/Header'
import Nav from './components/Nav';
import Form from './components/Footer';
import Button from './components/Button'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      idusuario: 18,
      usuario: 'Cristian',
      cargo:'Instructor',
      login: true,
      clicks: 0
    }
  }

  render(){
    return (
      <div className="App">
        <Header
          sesion={this.state.login}
          cargo={this.state.cargo} 
          nombre={this.state.usuario}
        />
        <Button onClick={
          () => (this.setState(
            {clicks: this.state.clicks +  1}
          ))} estado={this.state.clicks}/>
        <button onClick={
          () => (this.setState(
            {login:!this.state.login}
          ))
        }>
          {this.state.login?'dale Like':'quitar Like'}
        </button>
        <p>Inicio sesion: {this.state.usuario}</p>
        <Nav />
        <Form Nombre="Ingrese su mail" 
              Envial="Mandar Mail"/>
      </div>
    )
  }
}

export default App;
