import { Info } from "./componentes/Info/Info";
import { Input } from "./componentes/Input";
import { Munyeco } from "./componentes/Munyeco";
import { Palabra } from "./componentes/Palabra";
import { Modo } from "./componentes/Modo";

function App() {
  return (
    <main className="container-fluid">
      <div className="row">
        <Munyeco></Munyeco>
        <Palabra></Palabra>
        <Input></Input>
      </div>
      <Info></Info>
      <Modo></Modo>
    </main>
  );
}

export default App;
