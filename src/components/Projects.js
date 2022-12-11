import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import NavBar from './NavBar';
/************ Cite from youtuber: webdecoded https://www.youtube.com/@webdecoded ************/

export const Projects = () => {
  const projects = [
    {
      title: "Pick Cards!",
      description: "A simple interactive interface to select your favorite characters in Harry Potter. ",
      path: "/Projects/Development",
      
    },
    {
      title: "Iterative Design and Evaluation",
      description: "Go through the full process of mocking up a solution.",
      path: "/Projects/Iterative",
      
    },
    
    {
      title: "Responsive Redesign",
      description: "Identifing problem and redesign a website.",
      path: "/Projects/ResponsiveRedesign", 
    },
   
  ];

  const systems = [
    { 
      title: "WeensyOS",
      description: "Write OS kernel code for a small operating system.",
      path: "/Projects/WeensyOS",
    },
  ]

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
                    <Tab.Pane eventKey="second">
                      <Row>
                       {
                        systems.map((project, index) => {
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
