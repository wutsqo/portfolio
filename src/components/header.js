import React from "react"

const Header = props => {
  return (
    <div className="text-center">
      {props.content ? <h2 className="pb-3 ">{props.content}</h2> : null}
    </div>
  )
}

export default Header
