import React from "react"
import MyFooter from "./footer"
import MyNavbar from "./navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <MyNavbar></MyNavbar>
        {props.children}
      </div>
      <MyFooter></MyFooter>
    </div>
  )
}

export default Layout
