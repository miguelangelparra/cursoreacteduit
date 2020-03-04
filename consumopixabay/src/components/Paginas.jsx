import React, { Component } from 'react'
import { Button } from '@material-ui/core'

const Paginas = (props) => {
    const anterior = props.Anterior
    const siguiente = props.Siguiente
    return (
        <div className="mt-5 text-center">
            <Button
                onClick={anterior}
                variant="contained"
                color="primary">
                &larr;Anterior</Button>
            <span className="text-warning ml-2">{props.Pagina}</span>
            <Button
                onClick={siguiente}
                variant="contained"
                color="primary"
                className="ml-2">
                Siguiente&rarr;</Button>
        </div>
    )
}
export default Paginas