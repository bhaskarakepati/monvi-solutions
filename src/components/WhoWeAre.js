import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const WhoWeAre = () => {
  return (
    <>
      <section id="whoweare">
        <Container>
          <Row>
            <Col>
              <h3 className="text-center my-4">What we offer</h3>
            </Col>
          </Row>
          <Row className="mt-50 text-center">
            <Col sm={12} md={6} className="text-center align-center">
              <img src="./images/agile.jpg" className="img-agile" alt="Agile" />
              <h5>
                We offer agile developement to make sure we meet the client
                requirements and deliver the quality product released to market
              </h5>
            </Col>
            <Col sm={12} md={6}>
              <img
                src="./images/ecommerce.jpg"
                className="img-ecommerce"
                size="1x"
                alt="Agile"
              />
              <h5>We offer End to End E-commerce developement</h5>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
