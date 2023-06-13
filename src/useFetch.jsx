import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url, query) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState("")

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios(url)
      console.log(response.data)
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error.response)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [query])

  return [loading, error, data]
}
export default useFetch
