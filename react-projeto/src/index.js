import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//cria a variavel root que vai guardar o elemento que tem o id root no html
//usa o metodo render do ReactDOM para renderizar na tela o que quisermos
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
