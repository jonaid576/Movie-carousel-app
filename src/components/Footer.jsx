import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div className="footer">
      <section className="footer-wrapper">
        <div className="footer-content">
          <h4 className="footer-h4">
            Copyright © 2023. All rights are reserved
          </h4>
          <div className="footer-social-wrapper">
            <a href="https://github.com/chaser945" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="footer-social-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/junaid-iqbal-4764111b8/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer-social-icon"
              />
            </a>
          </div>
        </div>

        <small className="footer-p">Coded by Junaid Iqbal</small>
        <small className="attribution">
          <span>powered by</span>
          <span className="attribution-img">
            {" "}
            <img
              className="movie-db-logo"
              alt="attribution logo"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
            ></img>
          </span>
        </small>
      </section>
    </div>
  )
}
