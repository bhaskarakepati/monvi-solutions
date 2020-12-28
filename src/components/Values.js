import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Values = () => {
  return (
    <>
      <section id="values" className="bg-light">
        <Container>
          <Row className="text-center py-4">
            <Col>
              <h4>Our Values</h4>
            </Col>
          </Row>
          <Row className="col-sm-12 text-center">
            <Col sm>
              <img
                src="./images/values.jpg"
                className="img-values"
                alt="Agile"
              />
              <h5>We work towards our goals with core values</h5>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
