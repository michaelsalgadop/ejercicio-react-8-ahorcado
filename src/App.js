function App() {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="munyeco-ahorcado col-12 d-flex justify-content-center align-items-center">
          <svg id="hangman" viewBox="0 0 96 96" width="300" height="300">
            <line
              className="stage stage11"
              x1="62"
              y1="70"
              x2="56"
              y2="56"
            ></line>
            <line
              className="stage stage10"
              x1="50"
              y1="70"
              x2="56"
              y2="56"
            ></line>
            <line
              className="stage stage9"
              x1="68"
              y1="46"
              x2="56"
              y2="40"
            ></line>
            <line
              className="stage stage8"
              x1="44"
              y1="46"
              x2="56"
              y2="40"
            ></line>
            <line
              className="stage stage7"
              x1="56"
              y1="40"
              x2="56"
              y2="56"
            ></line>
            <circle
              className="stage stage6"
              cx="56"
              cy="34"
              r="6"
              fill="#ffa3ac"
            ></circle>
            <line
              className="stage stage5"
              x1="56"
              y1="16"
              x2="56"
              y2="28"
            ></line>
            <line
              className="stage stage4"
              x1="24"
              y1="24"
              x2="32"
              y2="16"
            ></line>
            <line
              className="stage stage3"
              x1="21"
              y1="16"
              x2="60"
              y2="16"
            ></line>
            <line
              className="stage stage2"
              x1="24"
              y1="80"
              x2="24"
              y2="16"
            ></line>
            <line
              className="stage stage1"
              x1="16"
              y1="80"
              x2="32"
              y2="80"
            ></line>
          </svg>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center form-group">
          <ul className="casillas d-flex">
            <li className="casilla casilla-dummy">
              <span className="letra"></span>
            </li>
          </ul>
        </div>
        <div className="col-12 form-group d-flex align-items-center justify-content-center">
          <input
            type="text"
            name="letra"
            id="letra"
            className="input-letra text-center"
            placeholder="Letra..."
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 form-group d-flex align-items-center justify-content-center">
          <ul className="letras-usadas d-flex flex-wrap justify-content-center">
            <li className="letra-usada letra-usada-dummy"></li>
          </ul>
        </div>
        <div className="final-juego col-12 form-group text-center"></div>
      </div>
      <button
        type="button"
        className="btn boton-modo d-flex justify-content-center align-items-center"
      >
        <span className="icono material-symbols-outlined"> light_mode </span>
      </button>
    </main>
  );
}

export default App;
