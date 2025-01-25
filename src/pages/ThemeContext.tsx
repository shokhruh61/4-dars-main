import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ThemeContextProps {
  isDarkMode: boolean
  switchTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false)

  const switchTheme = () => {
    setDarkMode(currentMode => !currentMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (context === null) {
    throw new Error('useTheme should be used inside ThemeProvider')
  }
  return context
}
