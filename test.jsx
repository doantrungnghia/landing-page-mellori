/* eslint-disable no-irregular-whitespace */
import React, { Component, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import logoIco from '_images/home/logo.svg'
import bannerImage from '_images/home/banner-1.svg'
import demoImage from '_images/home/banner-2.svg'
import discussionImage from '_images/home/banner-3.svg'
import materialImage from '_images/home/banner-5.svg'
import conversationImage from '_images/home/banner-4.svg'
import arrowIco from '_images/home/arrow-right.svg'
import starIco from '_images/home/star.svg'
import twitterIco from '_images/home/twitter.svg'
import fbIco from '_images/home/fb.svg'
import googleIco from '_images/home/google.svg'
import { initGA, logPageView } from '_utils/Analytics'
import styles from './Home.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <header className={styles.header}>
      <Navbar expand="md" light className={styles.navBar}>
        <Container className={styles.headerContainer}>
          <NavbarBrand href="/" className={styles.navBarBrand}>
            <img src={logoIco} alt="Mellori - Logo" title="Mellori logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className={styles.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className={styles.nav} navbar>
              <NavItem>
                <NavLink href="/" className={styles.navLink}>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" className={styles.navLink}>
                  Jobs
                </NavLink>
              </NavItem>
              <NavItem>
                <button className={styles.signInButton} type="button">
                  Sign In
                </button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

const EmailForm = () => {
  return (
    <form className={styles.emailForm}>
      <input type="text" placeholder="> enter your email" />
      <button type="button">Requese early access</button>
    </form>
  )
}

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Container>
        <Row className="align-items-center">
          <Col md={{ size: 6 }} className="mb-lg-0 mb-4">
            <h1 className={styles.bigTitle}>
              The learning management system that you&apos;ll enjoy using.
            </h1>
            <p className={styles.description}>
              Mellori helps to manage classes, design curriculums, students
              engagement monitoring, and communication. It&apos;s build for high
              productive teaching and learning.
            </p>
            <EmailForm />
          </Col>
          <Col md={{ size: 6 }} className="mt-lg-0 mt-4">
            <img
              src={bannerImage}
              className="img-fluid"
              alt="Mellori - Banner"
              title="Mellori banner"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Caption = ({ title, description }) => {
  return (
    <div className={styles.caption}>
      <span className={styles.captionSmallTitle}>CAPTION</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

const Demo = () => {
  return (
    <div className={styles.demo}>
      <Container>
        <Row>
          <Col>
            <img
              src={demoImage}
              className="img-fluid"
              alt="Mellori - Banner"
              title="Mellori banner"
            />
            <div className={styles.demoCaption}>
              <Caption
                title="Small title"
                description="Body placeholder for text paragraph.  A paragraph is a self-contained unit of text  dealing with a particular point or idea."
              />
            </div>
            <div className="text-center">
              <a href="/" className={styles.learnMoreLink}>
                Learn more
                <img src={arrowIco} alt="" className="ml-2" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Discussion = () => {
  return (
    <div className={styles.discussion}>
      <Container>
        <Row className="align-items-center">
          <Col md={{ size: 6 }} className="mb-lg-0 mb-4">
            <img
              src={discussionImage}
              className="img-fluid"
              alt="Mellori - Banner"
              title="Mellori banner"
            />
          </Col>
          <Col md={{ size: 5, offset: 1 }} className="mt-lg-0 mt-4">
            <h1 className={styles.title}>
              Big awesome <br />
              Discussion
            </h1>
            <p className={styles.description}>
              Body placeholder for text paragraph. A paragraph is a
              self-contained unit of text  dealing with a particular point or
              idea.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Material = () => {
  return (
    <div className={styles.material}>
      <Container>
        <Row className="align-items-center">
          <Col
            md={{ size: 4, order: 1 }}
            xs={{ size: 12, order: 2 }}
            className="mt-lg-0 mt-4"
          >
            <h1 className={styles.title}>
              Big awesome <br />
              Material
            </h1>
            <p className={styles.description}>
              Body placeholder for text paragraph. A paragraph is a
              self-contained unit of text  dealing with a particular point or
              idea.
            </p>
          </Col>
          <Col
            md={{ size: 7, offset: 1, order: 2 }}
            xs={{ size: 12, order: 1 }}
            className="mb-lg-0 mb-4"
          >
            <img
              src={materialImage}
              className="img-fluid"
              alt="Mellori - Banner"
              title="Mellori banner"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Conversation = () => {
  return (
    <div className={styles.conversation}>
      <Container>
        <Row className="align-items-center">
          <Col md={{ size: 7 }} className="mb-lg-0 mb-4">
            <img
              src={conversationImage}
              className="img-fluid"
              alt="Mellori - Banner"
              title="Mellori banner"
            />
          </Col>
          <Col md={{ size: 4, offset: 1 }} className="mt-lg-0 mt-4">
            <h1 className={styles.title}>
              Big awesome <br />
              Conversation
            </h1>
            <p className={styles.description}>
              Body placeholder for text paragraph.  A paragraph is a
              self-contained unit of text  dealing with a particular point or
              idea.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <Container>
        <Row className="align-items-center">
          <Col
            lg={{ size: 6, offset: 3 }}
            md={{ size: 8, offset: 2 }}
            className="mb-lg-0 mb-4"
          >
            <Caption
              title="Small title"
              description="Body placeholder for text paragraph,  a paragraph is a self-contained unit of text description."
            />
            <EmailForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Features = () => {
  return (
    <div className={styles.features}>
      <Container>
        <Row className="align-items-center">
          <Col md={{ size: 3 }} sm={{ size: 6 }} className="mb-lg-0 mb-4">
            <div className={styles.feature}>
              <img src={starIco} alt="" />
              <div className="mt-4">
                <h4 className={styles.title}>Small title</h4>
                <p className={styles.description}>
                  Body placeholder for text paragraph, a paragraph is a
                  self-contained unit of text description.
                </p>
              </div>
            </div>
          </Col>
          <Col md={{ size: 3 }} sm={{ size: 6 }} className="mb-lg-0 mb-4">
            <div className={styles.feature}>
              <img src={starIco} alt="" />
              <div className="mt-4">
                <h4 className={styles.title}>Small title</h4>
                <p className={styles.description}>
                  Body placeholder for text paragraph, a paragraph is a
                  self-contained unit of text description.
                </p>
              </div>
            </div>
          </Col>
          <Col md={{ size: 3 }} sm={{ size: 6 }} className="mb-sm-0 mb-4">
            <div className={styles.feature}>
              <img src={starIco} alt="" />
              <div className="mt-4">
                <h4 className={styles.title}>Small title</h4>
                <p className={styles.description}>
                  Body placeholder for text paragraph, a paragraph is a
                  self-contained unit of text description.
                </p>
              </div>
            </div>
          </Col>
          <Col md={{ size: 3 }} sm={{ size: 6 }}>
            <div className={styles.feature}>
              <img src={starIco} alt="" />
              <div className="mt-4">
                <h4 className={styles.title}>Small title</h4>
                <p className={styles.description}>
                  Body placeholder for text paragraph, a paragraph is a
                  self-contained unit of text description.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
            <ul className={styles.socialMediaList}>
              <li>
                <a href="/">
                  <img src={twitterIco} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={fbIco} alt="" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={googleIco} alt="" />
                </a>
              </li>
            </ul>
            <ul className={styles.footerLinks}>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
            </ul>
            <p className={styles.copyRight}>©Mellori Education, 2020</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

class Home extends Component {
  componentDidMount = () => {
    // Google Analytics
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <div className={styles.landingPage}>
        <Header />
        <Banner />
        <Demo />
        <Discussion />
        <Material />
        <Conversation />
        <Subscription />
        <Features />
        <Footer />
      </div>
    )
  }
}

export default Home
