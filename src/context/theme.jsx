import { createContext, useContext } from "react";

export let ThemeContext = createContext({
	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {},
});


export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
	return useContext(ThemeContext);
}
