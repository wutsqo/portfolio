import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import layoutStyles from "./layout.module.scss"
import { FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = props => {
  return (
    <Card
      className={[
        layoutStyles.projectCard,
        "py-2 px-3 my-2 mx-0 shadow-sm",
      ].join(" ")}
    >
      <Row>
        <Col>
          <a href={props.data.url} target="_blank" rel="noopener noreferrer">
            <h5>
              {props.data.title}{" "}
              <sup>
                <small>
                  {" "}
                  <FaExternalLinkAlt />
                </small>
              </sup>
            </h5>
          </a>
          <small>
            {props.data.tools.map(item => (
              <span>{item} &nbsp; </span>
            ))}
          </small>

          <p>{props.data.desc}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default ProjectCard
