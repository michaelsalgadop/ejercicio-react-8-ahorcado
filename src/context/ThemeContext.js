import { useState, useContext, createContext } from "react";
const themeContext = createContext();
export const useTheme = () => useContext(themeContext);
export const ThemeProvider = ({ initialTheme = "", children }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <themeContext.Provider value={[theme, setTheme]}>
      {children} {/* Se pasan los componentes hijos */}
    </themeContext.Provider>
  );
};
