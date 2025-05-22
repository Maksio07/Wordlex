import { createContext, useState, useEffect } from 'react'

export const DarkModeContext = createContext({
	themeMode: '',
	setThemeHandler: () => {},
})

export default function DarkModeContextProvider({ children }) {
	const [themeMode, setThemeMode] = useState(() => {
		return localStorage.getItem('theme') || 'light'
	})

	function setThemeHandler(theme) {	
		setThemeMode(theme);
	}

	useEffect(() => {
		window.localStorage.setItem('theme', themeMode)
		document.documentElement.className = themeMode;
	}, [themeMode])

	const value = {
		themeMode,
        setThemeHandler
	}

	return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
}
