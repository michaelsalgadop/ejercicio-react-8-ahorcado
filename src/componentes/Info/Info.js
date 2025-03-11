import { LetrasUsadas } from "./LetrasUsadas";
import { Mensaje } from "./Mensaje";
import { InfoSchema } from "../../schemas/datosSchemas";
export const Info = (props) => {
  const { letrasUsadas, finalPartida, mensajeError } = props;

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-8 form-group d-flex align-items-center justify-content-center">
          <LetrasUsadas letrasUsadas={letrasUsadas}></LetrasUsadas>
        </div>
      </div>
      <div className="row justify-content-center">
        <Mensaje
          finalPartida={finalPartida}
          mensajeError={mensajeError}
        ></Mensaje>
      </div>
    </>
  );
};
Info.propTypes = InfoSchema;
