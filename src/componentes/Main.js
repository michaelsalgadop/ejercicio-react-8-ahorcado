import { Info } from "./Info/Info";
import { Input } from "./Input";
import { Munyeco } from "./Munyeco";
import { Palabra } from "./Palabra";
import { Modo } from "./Modo";
import { useTheme } from "../context/ThemeContext";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
export const Main = () => {
  const [theme, setTheme] = useTheme(); // Accedemos al contexto
  const { loading, obtenerDatos } = useFetch();
  const [palabraAleatoria, setPalabraAleatoria] = useState(null);
  const [letras, setLetras] = useState({
    acertadas: [],
    falladas: 0,
    usadas: [],
  });
  const [mensajeError, setMensajeError] = useState("");
  const maxNumeroFallos = 11;
  const contieneLetra = async (letra) => {
    if (!palabraAleatoria) return;
    const letraUsada = letras.usadas.find((l) => l === letra);
    if (letraUsada) return;
    const resultado = await obtenerDatos(
      `https://palabras-api-uwlg.onrender.com/letras/${palabraAleatoria}/${letra}`
    );
    setMensajeError((prevMensajeError) =>
      resultado.error
        ? resultado.message
        : prevMensajeError === ""
        ? prevMensajeError
        : ""
    );

    setLetras((prevLetras) => ({
      ...prevLetras,
      acertadas: !resultado.error
        ? [...prevLetras.acertadas, ...resultado.posiciones]
        : prevLetras.acertadas,
      falladas: resultado.error ? prevLetras.falladas + 1 : prevLetras.falladas,
      usadas: [...prevLetras.usadas, letra], // Si quieres llevar un registro de todas las letras usadas
    }));
  };
  const comprobarFinalPartida = () => {
    const hasGanado =
      palabraAleatoria && letras.acertadas.length === palabraAleatoria.length;
    const hasPerdido = letras.falladas === maxNumeroFallos;
    return { victoria: hasGanado, derrota: hasPerdido };
  };
  const finalPartida = comprobarFinalPartida();
  const getDataURL = async (signal) => {
    const datos = await obtenerDatos(
      "https://palabras-api-uwlg.onrender.com/palabras.json",
      signal
    );

    /** Dentro de setPalabraAleatoria, invocamos una función que recibimos por parámetro el estado anterior(prevPalabra),
     * de palabraAleatoria. En el primer caso será null, en la segunda vuelta(ya sabemos que al hacer un set,
     * se vuelve a renderizar el componente) pillará la nueva palabra. Y ya en la segunda vuelta, al ya no ser null,
     * no se asignará una nueva palabra, evitando renders innecesarios.
     */
    setPalabraAleatoria((prevPalabra) => {
      const posicion = Math.floor(Math.random() * datos.palabras.lista.length);
      const nuevaPalabra = datos.palabras.lista[posicion];
      return prevPalabra === null ? nuevaPalabra : prevPalabra;
    });
  };
  useEffect(() => {
    /** Si el componente se desmonta(cambia de página, recarga, etc.) AbortController
     *  no solo evita actualizar el estado, sino que también cancela la petición,
     *  ahorrando recursos. Esto es util cuando:
     *  - Trabajamos con fetch o cualquier código asíncrono dentro de useEffect.
        - Queremos asegurarnos de que no actualizamos el estado de un componente desmontado.
        - Evitamos errores en situaciones donde la red es lenta y la API tarda en responder.*/
    const controller = new AbortController();
    const signal = controller.signal;
    getDataURL(signal);
    return controller.abort(); // Cancela la petición si el componente se desmonta
  }, []);
  return (
    <main
      className={`${theme === "dark" && "dark"} contenedor-app container-fluid`}
    >
      <div className="row">
        <Munyeco numeroFallos={letras.falladas}></Munyeco>
        {loading ? (
          <Loading></Loading>
        ) : (
          <Palabra
            palabraAleatoria={palabraAleatoria}
            letrasAcertadas={letras.acertadas}
          ></Palabra>
        )}
        <Input
          contieneLetra={contieneLetra}
          loading={loading}
          finalPartida={finalPartida.victoria || finalPartida.derrota}
        ></Input>
      </div>
      <Info
        letrasUsadas={letras.usadas}
        finalPartida={finalPartida}
        mensajeError={mensajeError}
      ></Info>
      <Modo></Modo>
    </main>
  );
};
