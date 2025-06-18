import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill-section" id="skills">
      <div className="container">
        <div className="skills-wrapper">
          <h2>Skills I used on</h2>

          <div className="skills-grid">
            <div className="column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>XML</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Angular</li>
              </ul>
            </div>
            <div className="column">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python/Django</li>
                <li>PHP (Core/Laravel)</li>
                <li>.NET Framework</li>
                <li>ASP.NET</li>
                <li>Flask</li>
              </ul>
            </div>
            <div className="column">
              <h3>Database</h3>
              <ul>
                <li>MongoDB</li>
                <li>SQLite</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            className="skill-carousel"
            autoPlay
            autoPlaySpeed={3000}
          >
            <div className="item">
              <img src={meter1} alt="Web Developer" />
              <h5>Web Developer</h5>
            </div>
            <div className="item">
              <img src={meter2} alt="Data Analyst" />
              <h5>Data Analyst</h5>
            </div>
            <div className="item">
              <img src={meter3} alt="Data Scientist" />
              <h5>Data Scientist</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Frontend Developer" />
              <h5>Frontend Developer</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Backend Developer" />
              <h5>Backend Developer</h5>
            </div>
            <div className="item">
              <img src={meter1} alt="Mobile Developer" />
              <h5>Mobile Developer</h5>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
