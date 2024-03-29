import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={link} target="_blank">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5 className="title">{title}</h5>
          <span className="subtitle">{description}</span>
          <h6 className="title">Click to go live</h6>
        </div>
        </a>
      </div>
    </Col>
  )
}
