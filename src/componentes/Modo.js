import { useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

export const Modo = () => {
  const [theme, setTheme] = useTheme();
  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "dark" ? "" : "dark")),
    [setTheme]
  );
  return (
    <button
      type="button"
      className="btn boton-modo d-flex justify-content-center align-items-center"
      onClick={toggleTheme}
    >
      <span className="icono material-symbols-outlined">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};
