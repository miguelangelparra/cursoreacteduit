import React from 'react';
import Imagen from './Imagen';
import Paginas from './Paginas';

class Resultado extends React.Component {

    imagenes = this.props.imagenes

    render() {
        const imagenes = this.props.imagenes

        return (
            <div className=" container-fluid row mt-3">
                {imagenes.map((ima) => (<Imagen key={ima.id} imagen={ima} />))}
            </div >
        )
    }
}

export default Resultado 