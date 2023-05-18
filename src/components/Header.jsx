import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import MobileNav from "./MobileNav"

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
          Movie<span>finder</span>
        </h1>
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
