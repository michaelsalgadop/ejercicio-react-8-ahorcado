import { munyecoSchema } from "../schemas/datosSchemas";
export const Munyeco = (props) => {
  const { numeroFallos } = props;
  const partes = [
    {
      type: "line",
      x1: "16",
      y1: "80",
      x2: "32",
      y2: "80",
    },
    {
      type: "line",
      x1: "24",
      y1: "80",
      x2: "24",
      y2: "16",
    },
    {
      type: "line",
      x1: "21",
      y1: "16",
      x2: "60",
      y2: "16",
    },
    {
      type: "line",
      x1: "24",
      y1: "24",
      x2: "32",
      y2: "16",
    },
    {
      type: "line",
      x1: "56",
      y1: "16",
      x2: "56",
      y2: "28",
    },
    {
      type: "circle",
      cx: "56",
      cy: "34",
      r: "6",
      fill: "#ffa3ac",
    },
    {
      type: "line",
      x1: "56",
      y1: "40",
      x2: "56",
      y2: "56",
    },
    {
      type: "line",
      x1: "44",
      y1: "46",
      x2: "56",
      y2: "40",
    },
    {
      type: "line",
      x1: "68",
      y1: "46",
      x2: "56",
      y2: "40",
    },
    {
      type: "line",
      x1: "50",
      y1: "70",
      x2: "56",
      y2: "56",
    },
    {
      type: "line",
      x1: "62",
      y1: "70",
      x2: "56",
      y2: "56",
    },
  ];
  /** Renderiza hasta el numero de fallos, si son 3, renderiza en pantalla solo 3 partes del muñeco,
   *  gracias al slice. {...parte} introduce las demás propiedades del objeto parte (y2,x2,y1,x1,className,...)
   */
  return (
    <div className="munyeco-ahorcado col-12 d-flex justify-content-center align-items-center">
      <svg id="hangman" viewBox="0 0 96 96" width="300" height="300">
        {partes
          .slice(0, numeroFallos)
          .map((parte, index) =>
            parte.type === "circle" ? (
              <circle key={index} className={parte.className} {...parte} />
            ) : (
              <line key={index} className={parte.className} {...parte} />
            )
          )}
      </svg>
    </div>
  );
};
Munyeco.propTypes = munyecoSchema;
