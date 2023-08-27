import React, { useState } from "react"
import MobileNav from "./MobileNav"
import { Link, NavLink } from "react-router-dom"
import { useGlobalContext } from "../context"
import logoImg from "../assets/film-slate.png"
// import Form from "./Form"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const { setQuery, setMarkerItem, setLocalQuery } = useGlobalContext()

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
        {/* logo */}
        <Link
          to="/"
          className="logo-wrapper"
          onClick={() => {
            setMarkerItem("")
            setLocalQuery("")
            setQuery("")
          }}
        >
          <img src={logoImg} alt="logo" className="logo-img" />
          <h1 className="header-h1">
            {" "}
            Movie<span className="finder-span">finder</span>
          </h1>
        </Link>
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
