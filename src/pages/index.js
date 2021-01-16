import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"
import { FaRegEnvelope, FaGithub } from "react-icons/fa"

export default function Home() {
  return (
    <Layout>
      <Container className="mt-5 pt-5">
        <Row style={{ height: "80vh" }}>
          <Col className="py-5">
            <Typer
              dataText={[
                "Hi There!    ",
                "!مرحبا    ",
                "Halo!    ",
                "こんにちは！    ",
              ]}
            ></Typer>
            <h1>I'm Muhammad Urwatil Wutsqo</h1>
            <p>
              Computer Science Student from Indonesia 🇮🇩 <br />
              Seems you just discovered my personal space on the internet.
              Enjoy!
            </p>
            <h2>
              <a
                href="https://github.com/wutsqo"
                target="_blank"
                style={{ color: "white" }}
              >
                <FaGithub></FaGithub>
              </a>
              &nbsp;&nbsp;
              <a
                href="mailto:mail@wutsqo.me"
                target="_blank"
                style={{ color: "white" }}
              >
                <FaRegEnvelope></FaRegEnvelope>
              </a>
            </h2>
          </Col>
        </Row>
      </Container>
    </Layout>
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
      <h1>
        <span>{this.state.text}</span>
        <span>&nbsp;</span>
      </h1>
    )
  }
}
