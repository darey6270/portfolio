import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import FoodOrdering from "../assets/img/FoodOrdering.PNG";
import LandIS from "../assets/img/LandIS.PNG";
import quantbots from "../assets/img/quantbots.PNG";
import salvus from "../assets/img/salvus.PNG";
import socialmedia from "../assets/img/socialmedia.PNG";
import StaffExam from "../assets/img/StaffExam.PNG";
import multi_level from "../assets/img/muilt_level.PNG";
import cardtonic from "../assets/img/cardtonic.PNG";
import blockchain from "../assets/img/blockchain.PNG";
import nosh from "../assets/img/nosh.PNG";
import twitterclone from "../assets/img/twitterclone.PNG";
import airbnb from "../assets/img/airbnb.PNG";
import amazon from "../assets/img/amazon.PNG";
import hulu from "../assets/img/huluclone.PNG";
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
    {
      title: "Cardtonic Clone",
      description: "Technologies:Javascript,React,TailwindCSS,html and css",
      imgUrl: cardtonic,
      link:"https://cardtonic-clone-orcin.vercel.app/",
    },
    {
      title: "A Blockchain Aplication",
      description: "Technologies:ReactJS,Solidity,html and css",
      imgUrl:blockchain,
      link:"https://kryptov3rse.vercel.app/ ",
    },
    {
      title: "Nosh Clone",
      description: "Technologies:React,TailwindCSS,html and css",
      imgUrl: nosh,
      link:"https://nosh-clone.vercel.app/",
    },
    {
      title: "Twitter clone",
      description: "Technologies:React,NextJS,TypeScript,html and css",
      imgUrl:twitterclone,
      link:"https://twitter-clone-nu-ten.vercel.app/",
    },
    {
      title: "AirBnB Clone",
      description: "Technologies:React,html and css",
      imgUrl: airbnb,
      link:"https://airbnb-inky.vercel.app/"
    },
    {
      title: "Amazon Clone",
      description: "Technologies:Nodejs & expresjs,React,html and css",
      imgUrl:amazon,
      link:"https://amazon-nu-tan.vercel.app/"
    },
    {
      title: "Hulu Clone",
      description: "Technologies:Nodejs & expresjs,Angular,html and css",
      imgUrl:hulu,
      link:"https://huluclone-dun.vercel.app/"
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
