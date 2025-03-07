import { ThemeProvider } from "./context/ThemeContext";
import { Main } from "./componentes/Main";

function App() {
  return (
    <ThemeProvider initialTheme="">
      <Main></Main>
    </ThemeProvider>
  );
}

export default App;
