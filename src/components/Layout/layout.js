import React, { Component } from "react"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"
export default function Layout({children, page}) {
    return (
      <div >
        <Header page={page} />
        <div>{children}</div>
      </div>
    )
}

