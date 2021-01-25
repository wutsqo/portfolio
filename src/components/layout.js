import React from "react"
import MyFooter from "./footer"
import MyNavbar from "./navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"
import Header from "./header"

const Layout = props => {
  return (
    <div>
      <div className={layoutStyles.header}>
        <MyNavbar />
        <div className={layoutStyles.container} style={{ minHeight: "auto" }}>
          <Header data={props} />
        </div>
      </div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{props.children}</div>
      </div>
      <div className={layoutStyles.footer}>
        <MyFooter />
      </div>
    </div>
  )
}

export default Layout
