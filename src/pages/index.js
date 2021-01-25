import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaRegEnvelope, FaGithub, FaLine } from "react-icons/fa"
import Emoji from "../components/emoji"
import Head from "../components/head"
import Particles from "react-particles-js"
import MyNavbar from "../components/navbar"

export default function Home() {
  return (
    <div>
      <MyNavbar />
      <Head title="Homepage"></Head>
      <Container fluid className="center-screen h-100">
        <Particles
          className="h-100"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </Container>
      <Container className="center-screen text-center">
        <Row>
          <Col className="py-5 ">
            <Typer
              dataText={[
                "Hi There!    ",
                "! السلام عليكم    ",
                "Halo!    ",
                "こんにちは！    ",
              ]}
            ></Typer>
            <p>
              Computer Science Student from Indonesia{" "}
              <Emoji label="Indonesia" symbol="🇮🇩" />
              <br />
              Seems you just discovered my personal space on the internet.
              Enjoy!
            </p>
            <h2>
              <a
                href="https://github.com/wutsqo"
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              &nbsp;&nbsp;
              <a
                href="mailto:mail@wutsqo.me"
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaRegEnvelope />
              </a>
              &nbsp;&nbsp;
              <a
                href="http://line.me/ti/p/~wutsqoo"
                target="_blank"
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaLine />
              </a>
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

class Typer extends React.Component {
  static defaultProps = {
    heading: "",
    dataText: [],
  }

  constructor(props) {
    super(props)

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 300,
    }
  }

  componentDidMount() {
    this.handleType()
  }

  handleType = () => {
    const { dataText } = this.props
    const { isDeleting, loopNum, text, typingSpeed } = this.state
    const i = loopNum % dataText.length
    const fullText = dataText[i]

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150,
    })

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500)
    } else if (isDeleting && text === "") {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      })
    }

    setTimeout(this.handleType, typingSpeed)
  }

  render() {
    return (
      <div>
        <h2>
          <span>{this.state.text}</span>
          <span>&nbsp;</span>
        </h2>
        <h1>I'm Muhammad Urwatil Wutsqo</h1>
      </div>
    )
  }
}
