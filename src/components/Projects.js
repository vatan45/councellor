import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./Projectcard2";
import projImg1 from "../assets/images/img/baiscjac.jpg";
import projImg2 from "../assets/images/img/goldjac.jpg";
import projImg3 from "../assets/images/img/combo.jpg";
import colorSharp2 from "../assets/images/img/color-sharp2.png";










export const Projects = () => {

  const projects = [
    {
      title: "Basic",
      description: "Preference-list",
      imgUrl: projImg1,
      amount: "100"
    },
    {
      title: "Gold",
      description: "Preference-list + one to one live session from experts at iit's",
      imgUrl: projImg2,
      amount: "4900"
    },
    {
      title: "Diamond",
      description: "Preference-list + live session from your desired college ambassador+ hand-on choice filling+ one to one live session once in a week",
      imgUrl: projImg3,
      amount: "19900"
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
           
                <h2>Plans</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
                <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Jac</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Jossa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">combo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
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
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
