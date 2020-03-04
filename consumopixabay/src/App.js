import React, { Component } from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'
import Paginas  from './components/Paginas'
import './App.css';


class App extends Component {
  //Definicion de estados
  state = {
    termino: "",
    cantidad: 1,
    imagenes: [],
    pagina: 1
  }

  BuscarDatos = (termino, cantidad) => {
    this.setState({
      termino: termino,
      cantidad: cantidad,
      pagina: 1
    }, () => {
      this.ConsultarAPI();
    })
  }

  ConsultarAPI = () => {
    const termino = this.state.termino
    const pagina = this.state.pagina
    const cantidad = this.state.cantidad
    const url = `https://pixabay.com/api/?key=15481773-fa5ff547d8009cb386503e59b&q=${termino}&per_page=${cantidad}&page=${pagina}`
    console.log(url)
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }

  PaginaAnterior = () => {
    if(this.state.pagina !== 1){
    this.setState({ pagina: this.state.pagina-1}, ()=>{this.ConsultarAPI()})}
  }
  PaginaSiguiente = () => {
    this.setState({ pagina: this.state.pagina+1 }, ()=>{this.ConsultarAPI()})
  }


  render() {
    return (
      < div className=" container-fluid  ">
        <header className="p-5 bg-dark container-fluid col-lg-6 col-md-12" >
          <h1 className="text-center text-white">Buscador PIXABAY</h1>
          {/*Componente Buscador*/}
          <Buscador className="container-fluid" BuscarDatos={this.BuscarDatos} />
        </header>
        <main className=" col">
          {/* Resultado State.props imagenes /paginas */}
          <Resultado imagenes={this.state.imagenes} />
        </main>
        <footer>
          <Paginas Pagina={this.state.pagina} Anterior={this.PaginaAnterior} Siguiente={this.PaginaSiguiente}/>
        </footer>
        {console.log(this.state.pagina)}
      </div>
    )
  }
}

export default App;
