import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaBootstrap, FaLightbulb, FaRocket, FaBrain, FaUserFriends, FaBullseye, FaProjectDiagram } from 'react-icons/fa';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    image: '/path/to/project1.jpg',
    link: 'https://github.com/tu_proyecto_1'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    image: '/path/to/project2.jpg',
    link: 'https://github.com/tu_proyecto_2'
  }
];

const skills = [
  { name: 'React', icon: <FaReact />, description: 'Desarrollo de interfaces de usuario con React.' },
  { name: 'Node.js', icon: <FaNodeJs />, description: 'Desarrollo de backend con Node.js y Express.' },
  { name: 'JavaScript', icon: <FaJs />, description: 'Lenguaje de programación para desarrollo web.' },
  { name: 'CSS', icon: <FaCss3Alt />, description: 'Estilos y diseño responsivo con CSS.' },
  { name: 'HTML', icon: <FaHtml5 />, description: 'Estructura y contenido de páginas web con HTML.' },
  { name: 'Bootstrap', icon: <FaBootstrap />, description: 'Diseño rápido y responsivo con Bootstrap.' }
];

const qualities = [
  { name: 'Creativo', icon: <FaLightbulb />, description: 'Capacidad de generar ideas innovadoras y creativas.' },
  { name: 'Proactivo', icon: <FaRocket />, description: 'Iniciativa para realizar tareas sin necesidad de supervisión.' },
  { name: 'Colaborador', icon: <FaUserFriends />, description: 'Habilidad para trabajar eficazmente en equipo.' },
  { name: 'Resolutivo', icon: <FaBrain />, description: 'Aptitud para resolver problemas de manera eficiente.' },
  { name: 'Curioso', icon: <FaBullseye />, description: 'Pasión por aprender y explorar nuevas áreas.' }
];

const LandingPage = () => (
  <Container className="mt-4">
    <Row className="text-center mb-5">
      <Col>
        <Image src="/path/to/your/photo.jpg" roundedCircle fluid />
        <h1 className="mt-3">Tu Nombre</h1>
        <p className="lead" style={{ fontSize: '1.8rem' }}>Desarrollador Full Stack apasionado por la creación de soluciones innovadoras y eficientes.</p>
        <div className="my-4">
          <a href="https://github.com/tu_perfil" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="mr-3" style={{ color: 'var(--text-color)' }} />
          </a>
          <a href="https://www.linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="mr-3" style={{ color: 'var(--text-color)' }} />
          </a>
        </div>
        <Button href="/path/to/your/cv.pdf" target="_blank" variant="light">Descargar CV</Button>
      </Col>
    </Row>

    <Row className="mb-5">
      <Col>
        <h2 className="section-title">Habilidades</h2>
        <div>
          {skills.map(skill => (
            <div key={skill.name} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: '2rem', marginRight: '1rem', color: 'var(--primary-color)' }}>
                  {skill.icon}
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>{skill.name}</h4>
                  <p style={{ margin: 0 }}>{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
      <Col>
        <h2 className="section-title">Cualidades</h2>
        <div>
          {qualities.map(quality => (
            <div key={quality.name} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ fontSize: '2rem', marginRight: '1rem', color: 'var(--primary-color)' }}>
                  {quality.icon}
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>{quality.name}</h4>
                  <p style={{ margin: 0 }}>{quality.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>

    <h2 className="section-title">Proyectos</h2>
    <Row className="mt-3">
      {projects.map((project, index) => (
        <Col md={6} key={index} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button href={project.link} target="_blank" variant="primary">
                Ver Proyecto <FaProjectDiagram />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default LandingPage;
