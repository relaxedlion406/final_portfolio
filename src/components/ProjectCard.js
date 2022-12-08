import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export const ProjectCard = ({ title, description, path}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-box">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <Link to={path} className='link'>Learn More</Link>
        </div>
      </div>
    </Col>
  )
}
