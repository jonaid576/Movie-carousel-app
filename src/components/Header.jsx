import React, { useState } from "react"
import MobileNav from "./MobileNav"
import { Link, NavLink } from "react-router-dom"
import Form from "./Form"
import { useGlobalContext } from "../context"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const { setQuery } = useGlobalContext()

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
  }

  const handleNavLinkClick = () => {
    setQuery("")
  }

  return (
    <div className="header">
      <div className="header-top">
        {" "}
        <h1 className="header-h1" onClick={() => setQuery("")}>
          <Link to="/">
            Movie<span className="finder-span">finder</span>
          </Link>
        </h1>
        <nav className="desktop-nav">
          <ul>
            <li onClick={handleNavLinkClick}>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "ds-nav-active" : "")}
              >
                Trending
              </NavLink>
            </li>
            <li onClick={handleNavLinkClick}>
              <NavLink
                to="/popular"
                className={({ isActive }) => (isActive ? "ds-nav-active" : "")}
              >
                Popular
              </NavLink>
            </li>
            <li onClick={handleNavLinkClick}>
              <NavLink
                to="/toprated"
                className={({ isActive }) => (isActive ? "ds-nav-active" : "")}
              >
                Top rated
              </NavLink>
            </li>
            <li onClick={handleNavLinkClick}>
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
        <MobileNav
          isActive={isActive}
          handleClick={handleClick}
          handleNavLinkClick={handleNavLinkClick}
        />
      </div>
    </div>
  )
}
