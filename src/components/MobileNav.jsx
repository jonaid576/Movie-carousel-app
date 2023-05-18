import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function MobileNav({ isActive, handleClick }) {
  return (
    <nav className={`mobile-nav ${isActive ? "is-active" : null}`}>
      <button className="cross-btn" onClick={handleClick}>
        <FontAwesomeIcon icon={faXmark} className="x-mark" />
      </button>
      <ul>
        <li onClick={handleClick}>
          <Link to="/">Trending</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/popular">Popular</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/top-rated">Top rated</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/upcoming">Upcoming</Link>
        </li>
      </ul>
    </nav>
  )
}
