import { letrasUsadasSchema } from "../../schemas/datosSchemas";

export const LetrasUsadas = (props) => {
  const { letrasUsadas } = props;
  return (
    <ul className="letras-usadas d-flex flex-wrap justify-content-center">
      {letrasUsadas.map((letraUsada) => (
        <li key={letraUsada} className="letra-usada">
          {letraUsada}
        </li>
      ))}
    </ul>
  );
};
LetrasUsadas.propTypes = letrasUsadasSchema;
