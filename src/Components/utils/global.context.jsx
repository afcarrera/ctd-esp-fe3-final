import { createContext, useContext, useState, useMemo } from "react";


const ContextGlobal = createContext();
const initialState = { theme: "light", data: [] };

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => {
    return { theme, toggleTheme, data: initialState.data };
  }, [theme]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextProvider = () => {
  return useContext(ContextGlobal);
};
