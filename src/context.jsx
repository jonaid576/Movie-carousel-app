import { createContext, useContext, useState } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("")
  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
