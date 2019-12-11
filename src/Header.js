import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

const Header = () => {
        return(
            <nav>
            <div class="nav-wrapper light-blue lighten-2">
              <a href="/home" class="brand-logo">Curso React</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/authors">Autores</a></li>
                <li><a href="/books">Livros</a></li>
                <li><a href="/about">Sobre</a></li>
              </ul>
            </div>
          </nav>
        );
}

export default Header;