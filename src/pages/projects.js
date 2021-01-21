import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import medisale from "../images/medisale.png"
import royah from "../images/royatulaliyah.jpg"
import personalsite from "../images/personalsite.png"

const ProjectPage = () => {
  const projectList = {
    items: [
      {
        title: "Medisale",
        tools: ["Python", "Django", "Bootstrap"],
        url: "https://gitlab.com/wutsqo/tk2-ppw",
        desc: "E-commerce platform. My midterm group project.",
        image: medisale,
      },
      {
        title: "Porfolio-Frontend",
        tools: ["NodeJS", "ReactJS", "Gatsby", "Bootstrap"],
        url: "https://github.com/wutsqo/portfolio",
        desc: "This website's frontend. Handcrafted using React + Gatsby",
        image: personalsite,
      },
      {
        title: "Porfolio-Backend",
        tools: ["Django", "Rest Framework"],
        url: "https://github.com/wutsqo/portfolio-backend",
        desc: "This website's backend. Handcrafted using Django Rest Framework",
        image: personalsite,
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
      /*
      {
        title: "Board of Thoughts",
        tools: ["Python", "Django", "Bootstrap"],
        url: "https://notes.wutsqo.me",
        desc: "A Microblogging platform where I can share my thoughts",
      },*/
      {
        title: "LTMPT Scraper",
        tools: ["Python"],
        url: "https://github.com/wutsqo/jurusan-ltmpt",
        desc:
          "Web scraper untuk mengumpulkan data jurusan dan PTN di situs LTMPT",
      },
      {
        title: "PPW Story",
        tools: ["Python", "Django", "Bootstrap"],
        url: "https://gitlab.com/wutsqo/story-ppw",
        desc: "A Collection of my PPW Course Assigments",
      },
      {
        title: "Personal Library",
        tools: ["Python", "Django", "Bootstrap"],
        url: "https://lib.wutsqo.me",
        desc: "My Personal Library Website",
      },
      {
        title: "Evaluasi Wutsqo",
        tools: ["Python", "Django", "MaterialCSS"],
        url: "https://eval.wutsqo.me",
        desc: "A platform where people can send me anonymous messages",
      },
    ],
  }

  return (
    <Layout headerTitle="projects by me">
      <Head title="Projects" />
      {projectList.items.map(item => (
        <ProjectCard data={item} />
      ))}
    </Layout>
  )
}

export default ProjectPage
