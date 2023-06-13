import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useGlobalContext } from "../context"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const { query, setQuery } = useGlobalContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/searched-movies/${query.replace(/ /g, "-")}`)
  }

  return (
    <section className="form-container">
      <form className="header-form" onSubmit={handleSubmit}>
        <input
          className="header-input"
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
