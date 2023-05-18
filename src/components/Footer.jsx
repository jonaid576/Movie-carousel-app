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
      </section>
    </div>
  )
}
