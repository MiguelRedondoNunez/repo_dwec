import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => (
  <footer className="bg-dark text-white mt-4 p-3 text-center">
    <Container>
      <Row>
        <Col>
          &copy; {new Date().getFullYear()} Mi CV. Todos los derechos reservados.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
