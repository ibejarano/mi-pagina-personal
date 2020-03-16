import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./header.css"

export default function Header(props) {
    let page = props.page
    return  (
      <header className="header">
        <AniLink fade to="/">
          <button className={page === "home" ? "button-active" : "button"}>
            Inicio
          </button>
        </AniLink>
        <AniLink fade to="/skills">
          <button className={page === "work" ? "button-active" : "button"}>
            Skills
          </button>
        </AniLink>
        <AniLink fade to="/work">
          <button className={page === "about" ? "button-active" : "button"}>
           Proyectos 
          </button>
        </AniLink>
      </header>
    )
}
