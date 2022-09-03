# React Input por Extenso

Componente React que retorna número por extenso

## Como instalar

Abaixo as formas de como instalar essa biblioteca utilizando o npm ou yarn:

```
npm install input-por-extenso-react
# ou
yarn add input-por-extenso-react
```

## Como usar

Uma forma básica de como utilizar o componente:

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactInputPorExtenso from "input-por-extenso-react";

const App = () => {
  const [numero, setNumero] = useState("");

  return (
    <>
      <ReactInputPorExtenso
        tipoExtenso="monetario"
        onChange={(numeroExtenso) => setNumero(numeroExtenso)}
      />
      <p>
        <strong>Número por extenso</strong>: {numero}
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

## Propriedades

Esse componente é uma abstração de um componente input do tipo numérico,
todas as propriedades de um input estão disponíveis.

| Propriedade | Valor inicial | Tipo   | Descrição                     |
| ----------- | ------------- | ------ | ----------------------------- |
| tipoExtenso | normal        | string | Formato de extensão do número |

<em>

Biblioteca desenvolvida durante [aula prática](https://www.youtube.com/watch?v=5zgrL9XGASM) da [Digital Innovation One](https://digitalinnovation.one/)

</em>
