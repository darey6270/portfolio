import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/twitter.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" />  */}
            <h3>Portfolio</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/adebiyi-damilare-5b9583235" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/adebiyi.damilare.9" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/adebiyi.d/" target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://twitter.com/AdebiyiDamila10/" target="_blank"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
