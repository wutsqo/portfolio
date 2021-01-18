import React from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import layoutStyles from "./layout.module.scss"
import logo from "../images/logo.png"

const ProjectCard = props => {
  return (
    <Card
      className={[layoutStyles.projectCard, "p-0 my-2 mx-0 shadow-sm"].join(
        " "
      )}
    >
      <Row>
        <Col className="col-auto d-none d-md-block">
          {props.data.image ? (
            <img
              src={props.data.image}
              alt={props.data.title}
              className={layoutStyles.imgSquare}
            />
          ) : (
            <img
              src={logo}
              alt={props.data.title}
              className={layoutStyles.imgSquare}
            />
          )}
        </Col>
        <Col className="p-3">
          <h5>{props.data.title} </h5>

          {/*
          <span>
            {props.data.tools.map(item => (
              <small>
                <Button variant="outline-light" size="sm">
                  {item}
                </Button>
                &nbsp;
              </small>
            ))}
          </span>
            */}
          <p>{props.data.desc}</p>
          <a href={props.data.url} target="_blank" rel="noopener noreferrer">
            <Button size="sm">See Project</Button>
          </a>
        </Col>
      </Row>
    </Card>
  )
}

export default ProjectCard
