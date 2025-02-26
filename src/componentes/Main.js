import { Info } from "./Info/Info";
import { Input } from "./Input";
import { Munyeco } from "./Munyeco";
import { Palabra } from "./Palabra";
import { Modo } from "./Modo";
import { useTheme } from "../context/ThemeContext";
export const Main = (props) => {
  const [theme, setTheme] = useTheme(); // Accedemos al contexto
  return (
    <main
      className={`${theme === "dark" && "dark"} contenedor-app container-fluid`}
    >
      <div className="row">
        <Munyeco></Munyeco>
        <Palabra></Palabra>
        <Input></Input>
      </div>
      <Info></Info>
      <Modo></Modo>
    </main>
  );
};
