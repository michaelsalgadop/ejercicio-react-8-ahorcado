export const Mensaje = (props) => {
  const { finalPartida } = props;
  return (
    <div
      className={`final-juego ${
        finalPartida.victoria
          ? "victoria"
          : finalPartida.derrota
          ? "derrota"
          : ""
      } col-12 form-group text-center`}
    >
      {finalPartida.victoria
        ? "HAS GANADO!"
        : finalPartida.derrota
        ? "HAS PERDIDO!"
        : ""}
    </div>
  );
};
