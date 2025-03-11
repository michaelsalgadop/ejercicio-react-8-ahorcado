import PropTypes from "prop-types";

export const InfoSchema = {
  letrasUsadas: PropTypes.array.isRequired,
  finalPartida: PropTypes.shape({
    victoria: PropTypes.bool,
    derrota: PropTypes.bool,
  }).isRequired,
  mensajeError: PropTypes.string.isRequired,
};

export const letrasUsadasSchema = {
  letrasUsadas: PropTypes.array.isRequired,
};

export const mensajeSchema = {
  finalPartida: PropTypes.shape({
    victoria: PropTypes.bool,
    derrota: PropTypes.bool,
  }).isRequired,
  mensajeError: PropTypes.string.isRequired,
};

export const inputSchema = {
  contieneLetra: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  finalPartida: PropTypes.bool.isRequired,
};

export const munyecoSchema = {
  numeroFallos: PropTypes.number.isRequired,
};

export const palabraSchema = {
  palabraAleatoria: PropTypes.string,
  letrasAcertadas: PropTypes.array.isRequired,
};
