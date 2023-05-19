import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import MobileNav from "./MobileNav"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
  }

  return (
    <div className="header">
      <div className="header-top">
        {" "}
        <h1 className="header-h1">
          <Link to="/">
            Movie<span className="finder-span">finder</span>
          </Link>
        </h1>
        <nav className="desktop-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "ds-nav-active" : "")}
              >
                Trending
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/popular"
                className={({ isActive }) => (isActive ? "ds-nav-active" : "")}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toprated"
                className={({ isActive }) => (isActive ? "ds-nav-active" : "")}
              >
                Top rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upcoming"
                className={({ isActive }) => (isActive ? "ds-nav-active" : "")}
              >
                Upcoming
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="hamburger" onClick={handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <MobileNav isActive={isActive} handleClick={handleClick} />
      </div>

      <form className="header-form">
        <input
          className="header-input"
          type="search"
          placeholder="Search"
        ></input>
        <button type="submit" className="btn submit-btn">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </form>
    </div>
  )
}
