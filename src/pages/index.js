import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaRegEnvelope, FaGithub, FaLine } from "react-icons/fa"
import Emoji from "../components/emoji"
import Particles from "react-particles-js"
import MyNavbar from "../components/navbar"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default function Home() {
  return (
    <div>
      <MyNavbar />
      <SEO title="Homepage" />
      <Container fluid className="center-screen h-100">
        <Particles className="h-100" params={particleParams} />
      </Container>
      <Container className="center-screen text-center">
        <Row>
          <Col className="py-5">
            <div data-sal="slide-up" data-sal-duration="1000">
              <h2 className="font-weight-light">
                <div className="sliderWrapper">
                  <div className="slider">
                    <div className="slider-text1">Hello There!</div>
                    <div className="slider-text2">こんにちは！</div>
                    <div className="slider-text3">Selamat Datang!</div>
                  </div>
                </div>
              </h2>
              <h1 className="font-weight-light mb-3">
                I'm Muhammad Urwatil Wutsqo
              </h1>
            </div>
            <div data-sal="slide-down" data-sal-duration="1000">
              <p>
                Computer Science Student from Indonesia{" "}
                <Emoji label="Indonesia" symbol="🇮🇩" />
                <br />
                Seems you just discovered my personal space on the internet.
                Enjoy! <br /> <br /> <Link to="/about">about</Link> •{" "}
                <Link to="/projects">projects</Link> •{" "}
                <Link to="/posts">blog</Link>
              </p>
              <h2>
                <a
                  href="https://github.com/wutsqo"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                >
                  <FaGithub className="grow" />
                </a>
                &nbsp;&nbsp;
                <a
                  href="mailto:mail@wutsqo.me"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                >
                  <FaRegEnvelope className="grow" />
                </a>
                &nbsp;&nbsp;
                <a
                  href="http://line.me/ti/p/~wutsqoo"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                >
                  <FaLine className="grow" />
                </a>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const particleParams = {
  autoPlay: true,
  background: {
    color: {
      value: "#0E141B",
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  backgroundMode: {
    enable: false,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 30,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 0,
    stages: [],
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: false,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      mode: "bounce",
    },
    color: {
      value: "#1b1e34",
      animation: {
        enable: false,
        speed: 1,
        sync: true,
      },
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: false,
      distance: 200,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#00ff00",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 2,
      warp: false,
    },
    move: {
      angle: {
        offset: 45,
        value: 90,
      },
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: "none",
      distance: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        maxSpeed: 50,
      },
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 8,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 8,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 0.5,
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 1,
        sync: false,
      },
    },
    reduceDuplicates: false,
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {
        polygon: {
          nb_sides: 6,
        },
        star: {
          nb_sides: 6,
        },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
        images: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
      },
      type: "polygon",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 40,
        maximumValue: 80,
      },
      value: 160,
      animation: {
        destroy: "none",
        enable: false,
        minimumValue: 40,
        speed: 5,
        startValue: "max",
        sync: false,
      },
    },
    stroke: {
      width: 0,
      color: {
        value: "#000",
        animation: {
          enable: false,
          speed: 1,
          sync: true,
        },
      },
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: false,
  themes: [],
}
