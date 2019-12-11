import React, {useState} from 'react';

function CountClicks() {

    const [count, setContador] = useState(0);
  
    return(
        <div>
            <p>Você clicou {count} vezes </p>
            <button onClick={() => setContador(count + 1)}>Click</button>
        </div>    
    );
}

export default CountClicks;