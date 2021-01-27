import { projectImages } from "../images/index"

const ProjectsData = {
  items: [
    {
      title: "Medisale",
      tools: ["Python", "Django", "Bootstrap"],
      liveUrl: "https://tk2ppw.herokuapp.com",
      repoUrl: "https://gitlab.com/wutsqo/tk2-ppw",
      desc:
        "Final group project (me, laila, vioren, yona) submission for Web Design and Programming courses at Faculty of Computer Science.",
      image: projectImages.medisale,
    },
    {
      title: "Portfolio-Frontend",
      tools: ["NodeJS", "ReactJS", "Gatsby", "Bootstrap"],
      repoUrl: "https://github.com/wutsqo/portfolio",
      liveUrl: "https://wutsqo.me",
      desc:
        "This exact website's frontend part. Handcrafted using Gatsby JS. Hosted on Netlify. Connected to backend part via REST API.",
      image: projectImages.portfolio,
    },
    {
      title: "Portfolio-Backend",
      tools: ["Django", "Rest Framework"],
      repoUrl: "https://github.com/wutsqo/portfolio-backend",
      liveUrl: "https://backend-keren.herokuapp.com",
      desc:
        "This website's backend part. Made using Django Rest Framework. Hosted on heroku. Currently used for storing reviews data.",
      image: projectImages.backend,
    } /*
    {
      title: "Kokorobot Line",
      tools: ["Python", "Flask"],
      liveUrl: "",
      desc: "A Multi purpose line bot",
    },*/,
    {
      title: "Royatul Aliyah Website",
      tools: ["Node.js", "Gatsby", "Tailwind CSS", "GraphQL"],
      liveUrl: "https://royatulaliyah.wutsqo.me",
      repoUrl: "https://github.com/wutsqo/royah",
      desc: "Website for Angkatan 6 SMAN 1 Sumatera Barat (Class of 2019).",
      image: projectImages.royah,
    },

    {
      title: "Board of Thoughts",
      tools: ["Python", "Django", "Bootstrap"],
      liveUrl: "https://notes.wutsqo.me",
      repoUrl: "https://github.com/wutsqo/thought-board",
      desc:
        "A Microblogging platform where I can put my random thoughts on the internet since I stopped using social media.",
      image: projectImages.notes,
    },
    {
      title: "LTMPT Scraper",
      tools: ["Python"],
      repoUrl: "https://github.com/wutsqo/jurusan-ltmpt",
      desc:
        "A web scraper that collects public university and their major data for Indonesia's public university entrance exam.",
      image: projectImages.python,
    },
    {
      title: "PPW Story",
      tools: ["Python", "Django", "Bootstrap"],
      repoUrl: "https://gitlab.com/wutsqo/story-ppw",
      liveUrl: "https://ppwstory.herokuapp.com",
      desc:
        "A Collection of my PPW (Web Design and Programming) Course weekly assigments with a total of 9 stories.",
      image: projectImages.ppw,
    },
    {
      title: "Personal Library",
      tools: ["Python", "Django", "Bootstrap"],
      liveUrl: "https://lib.wutsqo.me",
      repoUrl: "https://github.com/wutsqo/library",
      desc:
        "My Personal Library Website. Made using Django Framework and connected to Google Books API (soon to be changed to Goodreads API).",
      image: projectImages.library,
    },
    {
      title: "Evaluasi Wutsqo",
      tools: ["Python", "Django", "MaterialCSS"],
      liveUrl: "https://eval.wutsqo.me",
      repoUrl: "https://github.com/wutsqo/evaluasi",
      desc:
        "A platform where people can send me any feedbacks or messages anonymously.",
      image: projectImages.evaluasi,
    },
    {
      title: "IMAMI UI Website",
      tools: ["Python", "Django"],
      repoUrl: "https://gitlab.com/nugrahaa/imami-website",
      liveUrl: "https://imamiui.herokuapp.com",
      desc: "Ikatan Mahasiswa Minang Universitas Indonesia profile website.",
      image: projectImages.imami,
    },
  ],
}

export default ProjectsData
