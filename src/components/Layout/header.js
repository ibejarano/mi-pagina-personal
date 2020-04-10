import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import "./header.css"

function setLinkClass(page, current) {
  return page === current ? "page-active page-link" : "page-link"
}

export default function Header({ page }) {
  return (
    <header className="header">
      <AniLink fade to="/" className={setLinkClass(page, "home")}>
        <a>Inicio</a>
      </AniLink>
      <AniLink fade to="/skills" className={setLinkClass(page, "skills")}>
        <a>Skills</a>
      </AniLink>
      <AniLink fade to="/work" className={setLinkClass(page, "work")}>
        <a>Proyectos</a>
      </AniLink>
      <a
        className="page-link"
        href="https://boring-payne-8a91d7.netlify.com/"
        target="_blank"
      >
        Blog
      </a>
      <a
        className="page-link"
        href="#"
        target="_blank"
        style={{
          padding: "1em",
        }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="page-link"
        href="#"
        target="_blank"
        style={{
          padding: "1em",
        }}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className="page-link"
        href="#"
        target="_blank"
        style={{
          padding: "1em",
        }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </header>
  )
}
