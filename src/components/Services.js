import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChargingStation,
  faCoins,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <>
      <section id="services" className="bg-light">
        <Container>
          <Row>
            <Col>
              <h3 className="text-center my-4">Services</h3>
            </Col>
          </Row>
          <Row className="text-center">
            <Col xs={12} sm={6} md={4} className="mb-5">
              <Card>
                <Card.Body className="bg-secondary">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      className="service-icon-image"
                      icon={faCity}
                      size="3x"
                    />
                  </div>
                  <Card.Title className="text-light">
                    Functional testing
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-5">
              <Card>
                <Card.Body className="bg-info">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      className="service-icon-image"
                      icon={faCoins}
                      size="3x"
                    />
                  </div>
                  <Card.Title className="text-light">
                    Performance testing
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-5">
              <Card>
                <Card.Body className="bg-warning">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      className="service-icon-image"
                      icon={faChargingStation}
                      size="3x"
                    />
                  </div>
                  <Card.Title className="text-light">
                    Security testing
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
