import React from "react"
import Head from "../components/head"
import Projects from "../components/projects"
import { Row } from "react-bootstrap"
import logo from "../images/logo.png"
import projectsStyles from "../styles/projects.module.scss"
import MyNavbar from "../components/navbar"
import MyFooter from "../components/footer"
import Header from "../components/header"
import layoutStyles from "../styles/layout.module.scss"
import ScrollTopArrow from "../components/scroll"
import { FaGitAlt, FaGlobe } from "react-icons/fa"

const ProjectPage = () => {
  return (
    <div>
      <ScrollTopArrow />
      <Head title="Projects" />
      <div className={layoutStyles.header}>
        <MyNavbar />
        <div className={layoutStyles.container} style={{ minHeight: "auto" }}>
          <Header data={{ headerTitle: "projects" }} />
        </div>
      </div>

      <div className="container" style={{ maxWidth: "900px" }}>
        <ol>
          {Projects.items.map(item => (
            <ProjectCard data={item} />
          ))}
        </ol>
      </div>
      <MyFooter />
    </div>
  )
}

const ProjectCard = props => {
  return (
    <div className={projectsStyles.card} data-sal="slide-up">
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

        <div className="col">
          <div className="py-2 px-0">
            <li>
              <h5>{props.data.title} </h5>
            </li>
            <div className="font-weight-light mb-2">
              {props.data.tools
                ? props.data.tools.map(item => {
                    return (
                      <span>
                        <kbd>{item}</kbd>&nbsp;
                      </span>
                    )
                  })
                : null}
            </div>

            <p>{props.data.desc}</p>
            <span className="font-weight-light" style={{ fontSize: "small" }}>
              {props.data.repoUrl ? (
                <span>
                  <FaGitAlt /> &nbsp;
                  <a
                    href={props.data.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.data.repoUrl}
                  </a>
                </span>
              ) : null}{" "}
              <br />
              {props.data.liveUrl ? (
                <span>
                  <FaGlobe /> &nbsp;
                  <a
                    href={props.data.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.data.liveUrl}
                  </a>
                </span>
              ) : null}
            </span>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default ProjectPage
