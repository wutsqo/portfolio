import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"

const ProjectPage = () => {
  const projectList = {
    items: [
      {
        title: "Medisale",
        tools: ["Python", "Django", "Bootstrap"],
        url: "https://gitlab.com/wutsqo/tk2-ppw",
        desc: "E-commerce platform. My midterm group project.",
      },
      {
        title: "Personal Website",
        tools: ["NodeJS", "ReactJS", "Gatsby", "Bootstrap"],
        url: "https://github.com/wutsqo/portfolio",
        desc: "This website, handcrafted from scratch using Gatsby",
      },
      {
        title: "Kokorobot Line",
        tools: ["Python", "Flask"],
        url: "",
        desc: "A Multi purpose line bot",
      },
      {
        title: "Royatul Aliyah",
        tools: ["Python", "Django", "Bootstrap"],
        url: "https://royatulaliyah.wutsqo.me",
        desc: "Website Angkatan 6 SMAN 1 Sumatera Barat",
      },
      {
        title: "Board of Thoughts",
        tools: ["Python", "Django", "Bootstrap"],
        url: "https://notes.wutsqo.me",
        desc: "A Microblogging platform where I can share my thoughts",
      },
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
        url: "https://gitlab.com/wutsqo/ppwstory",
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
      {projectList.items.map(item => (
        <ProjectCard data={item} />
      ))}
    </Layout>
  )
}

export default ProjectPage
