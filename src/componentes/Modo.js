import { useTheme } from "../context/ThemeContext";

export const Modo = (props) => {
  const [theme, setTheme] = useTheme();
  return (
    <button
      type="button"
      className="btn boton-modo d-flex justify-content-center align-items-center"
      onClick={() => setTheme(theme === "" ? "dark" : "")}
    >
      <span className="icono material-symbols-outlined">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};
