// Importar React y ReactDom
import React from 'react';
import ReactDOM from 'react-dom';

// Crear componente React
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="nombre">
                Nombre:
            </label>
            <input id="nombre" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                Enviar
            </button>
        </div>
    );
};

/*
//se puede escribir asi...

const App = function() {
    return <div>Hi there!</div>;
};
*/

// Visualizar componente
ReactDOM.render(<App />, document.querySelector('#root'));
