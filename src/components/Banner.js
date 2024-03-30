import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full-Stack Developer", "UI/UX Designer","Data Analyst","Data Scientist","Mobile App Developer","Desktop App Developer","Tutor","Blockschain Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to Devcoder6270 Portfolio</span>
                <h6>{`Hi! I'm Adebiyi Damilare Isaac`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack Developer", "UI/UX Designer","Data Analyst","Data Scientist","Mobile App Developer","Desktop App Developer","Tutor","Blockschain Developer"]'><span className="wrap">{text}</span></span></h6>
                  <p>Over five years of experience as a Full-stack,AI developer,Data Scientist,Trainer,Data Analyst & Mobile developer.I design,build & manage your new | existing Ideas into a tech reality, langages good at Python,Javascript,PHP ,Java, CSharp.Committed to producing high-caliber code with cutting-edge solutions, 
                    and ready to pick up new skills. Keeping abreast with the most recent developments and industry best practices in the technology sector,
                     continuously contributing creative fixes and improvements to projects</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} >
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn  " : ""}>
                  <img src={headerImg} className="round"  alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
