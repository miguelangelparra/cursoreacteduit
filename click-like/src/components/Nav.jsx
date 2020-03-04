import React, { Component } from "react";

var Links = [
  {
    id: 0,
    nombre: "El CaraDeLibro",
    clase: "fa fa-facebook",
    link: "https://facebook.com"
  },
  {
    id: 1,
    nombre: "El instagrama",
    clase: "fa fa-instagram",
    link: "https://instagram.com"
  },
  {
    id: 2,
    nombre: "Que pasó? ",
    clase: "fa fa-whatsapp",
    link: "https://whatsapp.com"
  }
];

class Nav extends Component {
  render() {
    //renderiza el componente
    return (
      <ul>
        {Links.map(link => (
          <Link
            key={link.id}
            Url={link.link}
            RedSocial={link.nombre}
            Clase={link.clase}
          />
        ))}
      </ul>
    );
  }
}

class Link extends Component {
  render() {
    return (
      <li>
        <a className={this.props.clase} href={this.props.Url}>
          {this.props.RedSocial}
        </a>
      </li>
    );
  }
}

export default Nav;
