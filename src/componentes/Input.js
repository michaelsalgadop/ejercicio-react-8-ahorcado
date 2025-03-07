import { useRef } from "react";

export const Input = (props) => {
  const { contieneLetra, finalPartida } = props;
  const timer = useRef(null);
  const valorCorrecto = (valorIntroducido) =>
    /^[a-zA-Z]$/.test(valorIntroducido);
  const recogerLetra = (e) => {
    let valorIntroducido = e.target.value.charAt(0);
    if (valorCorrecto(valorIntroducido)) contieneLetra(valorIntroducido);
    // Limpiar timeout antes por si hay timeout anterior
    clearTimeout(timer.current);
    timer.current = setTimeout(() => (e.target.value = ""), 500);
  };
  return (
    <div className="col-12 form-group d-flex align-items-center justify-content-center">
      <input
        type="text"
        name="letra"
        id="letra"
        className="input-letra text-center"
        placeholder="Letra..."
        disabled={finalPartida}
        onInput={recogerLetra}
      />
    </div>
  );
};
