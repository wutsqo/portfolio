import React from "react"
import MyFooter from "./Footer"
import MyNavbar from "./Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/index.scss'

const Layout = props => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="mt-3 pt-5">
      {props.children}
      </div>
      
      <MyFooter></MyFooter>
    </div>
  )
}

export default Layout
