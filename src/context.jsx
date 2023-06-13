import { createContext, useContext, useState, useRef } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("")
  const [index, setIndex] = useState(0)
  const restorationRef = useRef(null)
  const [markerItem, setMarkerItem] = useState("")
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        index,
        setIndex,
        restorationRef,
        markerItem,
        setMarkerItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
