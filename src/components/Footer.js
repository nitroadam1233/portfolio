import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from '../assets/img/github-mark-white.svg';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span id="ab">AB</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" id="socials">
              <a href="https://www.linkedin.com/in/adam-breslin/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/nitroadam1233"><img src={github} alt="github" /></a>
              <a href="https://www.instagram.com/adamb4321/"><img src={navIcon3} alt="instagram" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
