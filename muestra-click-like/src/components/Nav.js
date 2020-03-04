import React, { Component } from 'react';
var Links = [
    {   
        id:0,
        direccion:'https://facebook.com',
        clase:'fa fa-facebook',
        nombre:'Facebook'
    },
    {   
        id:1,
        direccion:'https://instagram.com',
        clase:'fa fa-instagram',
        nombre: 'Instagram'
    }, 
    {   
        id:2,
        direccion:'https://whatsapp.com',
        clase:'fa fa-whatsapp',
        nombre: 'Whatsapp'
    },
    {   
        id:3,
        direccion:'https://youtube.com',
        clase:'fa fa-youtube',
        nombre: 'YouTube'
    },
    {   
        id:4,
        direccion:'https://linkedin.com',
        clase:'fa fa-linkedin',
        nombre: 'LinkedIn'
    }
]

class Nav extends Component{
    render(){ 
     // Renderiza el Componente 
     return(
     <ul className="navbar navbar-dark bg-dark">
         {this.props.Nombre}
        {   
            Links.map((link) => (
                <Link 
                    key={link.id} 
                    Dir={link.direccion}
                    Clase={link.clase} 
                    RedSocial={link.nombre} />
            ))
        }
     </ul>   
     );
   }
 };

class Link extends Component{
    render(){
         return(
             <li>
                 <a 
                    className={this.props.Clase}
                    href={this.props.Dir}>
                    {this.props.RedSocial}</a>
             </li>
         )
     }
 }

 export default Nav;