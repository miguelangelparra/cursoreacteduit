import React, { Component } from "react";

var Links = [
  { nombre: "El CaraDeLibro", clase:"fa fa-facebook", link: "https://facebook.com" },
  { nombre: "El instagrama",clase:"fa fa-instagram", link: "https://instagram.com" },
  { nombre: "La Tabla", clase:"fa fa-whatsapp",link: "https://whatsapp.com" }
];

class Nav extends Component {
  render() {
    //renderiza el componente
    return (
      <ul className="menu">
        {Links.map(link => (
          <li>
            <a href={link.link}> {link.nombre}</a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Nav;
