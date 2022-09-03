import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactInputPorExtenso from '../lib';

const App = () => {
  const [numero, setNumero] = useState('');
  return (
    <>
      <ReactInputPorExtenso
        tipoExtenso='monetario'
        onChange={numeroExtenso => setNumero(numeroExtenso)}
      />
      <p>
        <strong>Número por extenso: </strong>
        {numero}
      </p>
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
