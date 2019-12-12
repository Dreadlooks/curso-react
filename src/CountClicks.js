import React, {useState, Fragment} from 'react';
import Header from './Header';

function CountClicks() {

    const [count, setContador] = useState(0);
  
    return(
        <Fragment>
        <Header/>
            <div className="container">
                <div className="row">
                    <div class="col s12 center">
                        <h3>Você clicou {count} vezes </h3>
                        <button  className="waves-effect waves-light btn" onClick={() => setContador(count + 1)}>Click</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CountClicks;