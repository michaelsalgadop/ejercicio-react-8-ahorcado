import { mensajeSchema } from "../../schemas/datosSchemas";

export const Mensaje = (props) => {
  const { finalPartida, mensajeError } = props;
  return (
    <div className="col-12 form-group text-center">
      <span
        className={`${
          mensajeError === "" ? "hide" : ""
        } mensaje-error color-secundario d-block`}
      >
        {mensajeError}
      </span>
      <span
        className={`final-juego ${
          finalPartida.victoria
            ? "victoria"
            : finalPartida.derrota
            ? "derrota"
            : ""
        } d-block`}
      >
        {finalPartida.victoria
          ? "HAS GANADO!"
          : finalPartida.derrota
          ? "HAS PERDIDO!"
          : ""}
      </span>
    </div>
  );
};
Mensaje.propTypes = mensajeSchema;
