import React from "react"
import Head from "../components/head"
import Projects from "../components/projects"
import { Col, Row, Button } from "react-bootstrap"
import logo from "../images/logo.png"
import projectsStyles from "../styles/projects.module.scss"
import MyNavbar from "../components/navbar"
import Header from "../components/header"
import layoutStyles from "../styles/layout.module.scss"

const ProjectPage = () => {
  return (
    <div>
      <Head title="Projects" />
      <div className={layoutStyles.header}>
        <MyNavbar />
        <div className={layoutStyles.container} style={{ minHeight: "auto" }}>
          <Header data={{ headerTitle: "projects" }} />
        </div>
      </div>

      <div className="container" style={{ maxWidth: "900px" }}>
        {Projects.items.map(item => (
          <ProjectCard data={item} />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = props => {
  return (
    <div className={projectsStyles.card}>
      <Row>
        {props.data.image ? (
          <img
            className={["col-sm-11 col-lg-5", projectsStyles.img].join(" ")}
            src={props.data.image}
            alt={props.data.title}
          />
        ) : (
          <img
            className={["col-sm-11 col-lg-5", projectsStyles.img].join(" ")}
            src={logo}
            alt={props.data.title}
          />
        )}

        <div>
          <div className="p-3">
            <h5>{props.data.title} </h5>
            <p>{props.data.desc}</p>
            <a href={props.data.url} target="_blank" rel="noopener noreferrer">
              <Button size="sm">See Project</Button>
            </a>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default ProjectPage
