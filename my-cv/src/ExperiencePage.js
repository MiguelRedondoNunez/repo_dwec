import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ExperiencePage = () => (
  <Container className="mt-4">
    <h2 className="section-title">Experiencia Académica</h2>
    <Row>
      <Col md={6} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Universidad ABC</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2015 - 2019</Card.Subtitle>
            <Card.Text>
              Grado en Ingeniería Informática. Participación en proyectos destacados y actividades extracurriculares.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Colegio XYZ</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2010 - 2015</Card.Subtitle>
            <Card.Text>
              Bachillerato en Ciencias. Graduado con honores.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <h2 className="section-title">Experiencia Laboral</h2>
    <Row>
      <Col md={6} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Empresa 123</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2020 - Presente</Card.Subtitle>
            <Card.Text>
              Desarrollador Full Stack. Trabajo en proyectos de alto impacto y colaboración con equipos multidisciplinarios.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>Empresa 456</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">2019 - 2020</Card.Subtitle>
            <Card.Text>
              Desarrollador Front-End. Implementación de interfaces de usuario modernas y responsivas.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ExperiencePage;
