import React, {Component} from 'react';
import Button from './Button';

var Inputs = [
    {
        id:0,
        nombre: "name",
        texto: "Nombre",
        pHolder: "Ingrese su Nombre",
    },
    {
        id:1,
        nombre: "email",
        texto: "Correo",
        pHolder: "Ingrese su Correo",
    },
    {
        id:2,
        nombre: "tel",
        texto: "Telefono",
        pHolder: "Ingrese su Telefono",
    },
]

class Form extends Component{
    render(){
      return(
        <form action="algo.js" method="post">
           {Inputs.map((campo) => (
               <Input 
                    miNombre={campo.nombre}
                    Texto={campo.texto}
                    pHolder={campo.pHolder}
               />
                )
           )}
           <label>Consulta</label>
           <textarea></textarea>
           <div className="btn-group">
                <Button Valor="Aceptar" />
                <Button Valor="Cancelar"/>
            </div>
        </form>
      );
}}

class Input extends Component{
    render(){   
        return(
            <>
                <label for={this.props.miNombre}>
                    {this.props.Texto}
                </label>
                <input 
                    type={this.props.miNombre}
                    id={this.props.miNombre}
                    name={this.props.miNombre}
                    placeholder={this.props.pHolder}      
                />
            </>
        )
    }
}

export default Form;