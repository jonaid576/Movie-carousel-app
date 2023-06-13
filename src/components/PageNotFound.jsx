import React from "react"
import { Link } from "react-router-dom"
const PageNotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="back-to-home-btn">
        <Link to="/"> Go back to homepage.</Link>
      </button>
    </div>
  )
}

export default PageNotFound
