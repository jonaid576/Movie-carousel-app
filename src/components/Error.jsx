import React from "react"
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="error">
      <div className="error-content">
        {" "}
        <h1 className="error-h1">Page not found.</h1>
        <button className="back-to-home-btn">
          <Link to="/"> Go back to homepage.</Link>
        </button>
      </div>
    </div>
  )
}
