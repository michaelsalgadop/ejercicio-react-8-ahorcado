export const Palabra = (props) => {
  const { palabraAleatoria, letrasAcertadas } = props;
  return (
    <div className="col-12 d-flex justify-content-center align-items-center form-group">
      <ul className="casillas d-flex">
        {palabraAleatoria &&
          palabraAleatoria.split("").map((letra, indice) => {
            const posicionLetra = letrasAcertadas.find(
              (posicion) => posicion === indice
            );
            return (
              <li
                key={indice}
                className={`casilla ${posicionLetra >= 0 ? "show" : ""}`}
              >
                <span className="letra">{letra}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
