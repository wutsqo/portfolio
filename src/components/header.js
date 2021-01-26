import React from "react"

const Header = props => {
  return (
    <div className="my-3">
      {props.data.headerTitle ? (
        <div className="text-center">
          <h2 className="pb-3 pt-5">{props.data.headerTitle}</h2>
        </div>
      ) : null}
      {props.data.frontmatter ? (
        <div data-sal="slide-down">
          <h1 className="pt-5 mt-5">{props.data.frontmatter.title}</h1>
          <p>
            {props.data.frontmatter.date} &nbsp; • &nbsp;
            {props.data.timeToRead === 1 ? (
              <span>{props.data.timeToRead} min</span>
            ) : (
              <span>{props.data.timeToRead} mins</span>
            )}{" "}
            read
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default Header
