import React from 'react';
import PropTypes from 'prop-types';
import numero from 'numero-por-extenso';

const ReactInputPorExtenso = ({ tipoExtenso, onChange, ...props }) => {
  return (
    <input
      type="number"
      onChange={(event) => {
        const numeroPorExtenso = numero.porExtenso(event.target.value, numero.estilo[tipoExtenso]);
        onChange(numeroPorExtenso, event);
      }}
      {...props}
    />
  );
}

ReactInputPorExtenso.propTypes = {
  tipoExtenso: PropTypes.oneOf(['normal', 'monetario', 'porcentagem'])
};

ReactInputPorExtenso.defaultProps = {
  tipoExtenso: 'normal',
}

export default ReactInputPorExtenso;