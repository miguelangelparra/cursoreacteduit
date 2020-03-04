import React from 'react'

class Buscador extends React.Component {
    BusquedaRef = React.createRef()
    CantidadRef =React.createRef()

    handleBuscador = (e) => {
        e.preventDefault()
        const termino = this.BusquedaRef.current.value
        const cantidad = this.CantidadRef.current.value

        this.props.BuscarDatos(termino,cantidad)
        // this.props.BuscarDatos(e.target.termino.value)
    }

    render() {
        return (
            <form  className="text-center" onSubmit={this.handleBuscador}>
                <input className="col-lg-6 col-md-12"
                    // name="termino"
                    ref={this.BusquedaRef}
                    type="text"
                    placeholder="¿Que deseas Buscar?" />
                    <select ref={this.CantidadRef}className="col-lg-2 col-md-12">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                <input className="btn btn-success col-lg-8 col-md-12  text-white " type="submit" value="Buscar" />
            </form>
        )
    }
}

export default Buscador