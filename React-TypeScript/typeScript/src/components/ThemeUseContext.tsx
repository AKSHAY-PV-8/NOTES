import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderType = {
  children : React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({children} : ThemeContextProviderType) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
  