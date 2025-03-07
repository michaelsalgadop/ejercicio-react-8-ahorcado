import { LetrasUsadas } from "./LetrasUsadas";
import { Mensaje } from "./Mensaje";

export const Info = (props) => {
  const { letrasUsadas, finalPartida } = props;

  return (
    <div className="row justify-content-center">
      <div className="col-8 form-group d-flex align-items-center justify-content-center">
        <LetrasUsadas letrasUsadas={letrasUsadas}></LetrasUsadas>
      </div>
      <Mensaje finalPartida={finalPartida}></Mensaje>
    </div>
  );
};
