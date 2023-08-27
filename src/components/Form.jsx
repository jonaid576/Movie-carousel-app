import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useMemo } from "react"

const Form = () => {
  const { query, setQuery, localQuery, setLocalQuery } = useGlobalContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/searched-movies/${query.replace(/ /g, "-")}`)
  }

  const debounce = () => {
    let timeoutId
    return (e) => {
      setLocalQuery(e.target.value)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setQuery(e.target.value)
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }

  const optimizedDebounce = useMemo(() => debounce(), [])

  return (
    <section className="form-container">
      <form className="header-form" onSubmit={handleSubmit}>
        <input
          className="header-input"
          type="search"
          placeholder="Search"
          onChange={optimizedDebounce}
          value={localQuery}
          required
        />
        <button type="submit" className="btn submit-btn">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </form>
    </section>
  )
}
export default Form
