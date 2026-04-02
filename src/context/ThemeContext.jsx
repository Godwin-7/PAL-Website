import { createContext, useContext, useState, useEffect } from 'react'
const ThemeCtx = createContext()
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  useEffect(() => {
    document.body.className = isDark ? 'theme-dark' : 'theme-light'
  }, [isDark])
  return (
    <ThemeCtx.Provider value={{ isDark, toggle: () => setIsDark(p => !p) }}>
      {children}
    </ThemeCtx.Provider>
  )
}
export const useTheme = () => useContext(ThemeCtx)