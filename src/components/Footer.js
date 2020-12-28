import React from "react";
import { Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      id="main-footer"
      className="px-2 py-2 bg-info text-white text-center"
    >
      <Container>
        <Row>
          <p className="lead">Copyright &copy; 2020 Monvi Solutions</p>
        </Row>
      </Container>
    </footer>
  );
};
