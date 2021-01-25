import React from "react"
import Head from "../components/head"
import medisale from "../images/medisale.png"
import royah from "../images/royah.png"
import portfolio from "../images/portfolio.png"
import python from "../images/python.svg"
import backend from "../images/restframework.png"
import notes from "../images/notes.png"
import ppw from "../images/ppw.png"
import evaluasi from "../images/eval.png"
import library from "../images/library.png"
import imami from "../images/imami.png"
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

      <div className={projectsStyles.container}>
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
      <Row className="justify-content-center">
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

        <Col>
          <div className="p-3">
            <h5>{props.data.title} </h5>
            <p>{props.data.desc}</p>
            <a href={props.data.url} target="_blank" rel="noopener noreferrer">
              <Button size="sm">See Project</Button>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const Projects = {
  items: [
    {
      title: "Medisale",
      tools: ["Python", "Django", "Bootstrap"],
      url: "https://gitlab.com/wutsqo/tk2-ppw",
      desc: "Web design and programming group assignment.",
      image: medisale,
    },
    {
      title: "Portfolio-Frontend",
      tools: ["NodeJS", "ReactJS", "Gatsby", "Bootstrap"],
      url: "https://github.com/wutsqo/portfolio",
      desc: "This website's frontend. Handcrafted using React + Gatsby",
      image: portfolio,
    },
    {
      title: "Portfolio-Backend",
      tools: ["Django", "Rest Framework"],
      url: "https://github.com/wutsqo/portfolio-backend",
      desc: "This website's backend. Handcrafted using Django Rest Framework",
      image: backend,
    } /*
    {
      title: "Kokorobot Line",
      tools: ["Python", "Flask"],
      url: "",
      desc: "A Multi purpose line bot",
    },*/,
    {
      title: "Royatul Aliyah",
      tools: ["Python", "Django", "Bootstrap"],
      url: "https://royatulaliyah.wutsqo.me",
      desc: "Website Angkatan 6 SMAN 1 Sumatera Barat",
      image: royah,
    },

    {
      title: "Board of Thoughts",
      tools: ["Python", "Django", "Bootstrap"],
      url: "https://notes.wutsqo.me",
      desc:
        "A Microblogging platform where I can put my thoughts on the internet",
      image: notes,
    },
    {
      title: "LTMPT Scraper",
      tools: ["Python"],
      url: "https://github.com/wutsqo/jurusan-ltmpt",
      desc:
        "Web scraper untuk mengumpulkan data jurusan dan PTN di situs LTMPT",
      image: python,
    },
    {
      title: "PPW Story",
      tools: ["Python", "Django", "Bootstrap"],
      url: "https://gitlab.com/wutsqo/story-ppw",
      desc: "A Collection of my PPW Course Assigments",
      image: ppw,
    },
    {
      title: "Personal Library",
      tools: ["Python", "Django", "Bootstrap"],
      url: "https://lib.wutsqo.me",
      desc: "My Personal Library Website",
      image: library,
    },
    {
      title: "Evaluasi Wutsqo",
      tools: ["Python", "Django", "MaterialCSS"],
      url: "https://eval.wutsqo.me",
      desc: "A platform where people can send me anonymous messages",
      image: evaluasi,
    },
    {
      title: "IMAMI UI Website",
      tools: ["Python", "Django"],
      url: "https://gitlab.com/nugrahaa/imami-website",
      desc: "Ikatan Mahasiswa Minang Universitas Indonesia profile website",
      image: imami,
    },
  ],
}

export default ProjectPage
