import React, {Component} from 'react';
import Logo from '../logo.svg';

class Header extends Component{
    render(){
        return(
            <header className="App-header jumbotron">
                <img src={Logo} className="App-logo" alt="logo" />
                <p>
                    preguntele al {this.props.cargo}, {this.props.nombre}
                </p>
                <div>

                    {this.props.sesion?'Si':'No'}
                </div>
                <button>Estado:</button>
            </header>
        )
    }
}

export default Header;