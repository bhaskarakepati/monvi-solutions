import React from "react";
import { Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer id="main-footer" className="py-2 bg-info text-white text-center">
      <Container>
        <Row>
          <p className="lead text-center">
            Copyright &copy; 2020 Monvi Solutions
          </p>
        </Row>
      </Container>
    </footer>
  );
};
