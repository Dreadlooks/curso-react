import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Authors from './Authors';
import Books from './Books';
import About from './About';
import CountClicks from './CountClicks';
import NotFound from './NotFound';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/autores" component={Authors} />
            <Route path="/livros" component={Books} />
            <Route path="/sobre" component={About} />
            <Route path="/contador-de-cliques" component={CountClicks} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
