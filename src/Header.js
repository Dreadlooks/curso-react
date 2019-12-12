import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import LinkWrapper from './LinkWrapper';

const Header = () => {
        return(
            <nav>
            <div className="nav-wrapper light-blue lighten-2">
              <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Curso React</LinkWrapper>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                <li><LinkWrapper to="/contador-de-cliques">Contador de cliques</LinkWrapper></li>
              </ul>
            </div>
          </nav>
        );
}

export default Header;