import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects = [
    {
      title: "Development",
      description: "Design & Development",
      path: "/project/development",
      
    },
    {
      title: "Flutter",
      description: "Design & Development",
      path: "",
      
    },
    {
      title: "Iterative Design and Evaluation",
      description: "Design & Development",
      path: "",
      
    },
    
    {
      title: "Responsive Redesign",
      description: "Design & Development",
      path: "",
      
    },
   
  ];

  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Here are some things I've worked on,</h2>
                <p>I have been exploring computer science for 1 years. Here are some of my work.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">UI/UX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Computer Systems</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                       {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}>
                            </ProjectCard>
                          )
                        })
                       }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Loading...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Loading...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
