import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import FoodOrdering from "../assets/img/FoodOrdering.PNG";
import LandIS from "../assets/img/LandIS.PNG";
import quantbots from "../assets/img/quantbots.PNG";
import salvus from "../assets/img/salvus.PNG";
import socialmedia from "../assets/img/socialmedia.PNG";
import StaffExam from "../assets/img/StaffExam.PNG";
import multi_level from "../assets/img/muilt_level.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Land Information System",
      description: "Technologies:Django,mysql,Javascript,html and css",
      imgUrl: LandIS,
      link:"http://darey62701.pythonanywhere.com/",
    },
    {
      title: "Multi-Level Intrusion Detection",
      description: "Technologies:Django,sqlite,Javascript,html and css",
      imgUrl:multi_level,
      link:"http://darey6270.pythonanywhere.com ",
    },
    {
      title: "Unique User Identification Across Social Media",
      description: "Technologies:Django,sqlite,React,html and css",
      imgUrl: socialmedia,
      link:"http://darey62702.pythonanywhere.com/",
    },
    {
      title: "Online Staff Examination Recruitment System",
      description: "Technologies:Django,sqlite,React,html and css",
      imgUrl:StaffExam,
      link:"http://darey62703.pythonanywhere.com/",
    },
    {
      title: "Food Ordering System",
      description: "Technologies:Nodejs,sqlite,React,html and cs",
      imgUrl: FoodOrdering,
      link:"http://darey62704.pythonanywhere.com/"
    },
    {
      title: "salvus.datacreds medical",
      description: "Technologies:Nodejs,sqlite,Angularjs,html and css",
      imgUrl:salvus,
      link:"https://salvus.datacreds.com/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={10}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
