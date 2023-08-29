import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import reactAdminDashboard from "../assets/img/react-admin-dashboard.png";
import adviceApp from "../assets/img/advice-generator-app.png";
import dropdownApp from "../assets/img/dropdown-navigation.png";
import expenseFormApp from "../assets/img/expense-form-app.png";
import resultSummaryComponent from "../assets/img/result-summary-component.png";
import firebaseCourse from "../assets/img/firebase-learning.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "React Admin DashBoard",
      description: "Design & Development",
      imgUrl: reactAdminDashboard,
      link: "https://react-admin-dashboard-lac.vercel.app/"
    },
    {
      title: "Advice App",
      description: "Design & Development",
      imgUrl: adviceApp,
      link: "https://advice-generator-app-master.vercel.app/"
    },
    {
      title: "Snap App",
      description: "Design & Development",
      imgUrl: dropdownApp,
      link: "https://frontend-mentor-dropdown-navigation.vercel.app/"
    },
    {
      title: "Expense Form App",
      description: "Design & Development",
      imgUrl: expenseFormApp,
      link: "https://shopping-app-seven-virid.vercel.app/"
    },
    {
      title: "Result Summary Component",
      description: "Design & Development",
      imgUrl: resultSummaryComponent,
      link: "https://result-summary-component-project-master.vercel.app/"
    },
    {
      title: "Firebase Practice App",
      description: "Design & Development",
      imgUrl: firebaseCourse,
      link: "https://fir-course-2b04b.web.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is a list of projects that I've been working on. I developed a React-Dashboard that has different dependencies like Formik and Yup which are used for form validation. I have a couple of other projects that taught me about APIs and promises in Javascript. I learned a lot from all these projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
