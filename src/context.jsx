import { createContext, useContext, useState, useRef } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("")
  const [localQuery, setLocalQuery] = useState("")
  const [index, setIndex] = useState(0)
  const [markerItem, setMarkerItem] = useState("")
  const restorationRef = useRef(null)
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        localQuery,
        setLocalQuery,
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
