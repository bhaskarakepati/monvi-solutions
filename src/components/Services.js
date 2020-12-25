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
      <section id="services">
        <Container>
          <Row>
            <Col>
              <h3 classname="text-center ml-20">Services</h3>
            </Col>
          </Row>
          <Row className="col-sm-12 col-xs-12 text-center">
            <Col className="col-md-6 col-sm-12 col-xs-12 col-lg-4 mb-3">
              <Card>
                <Card.Body className="bg-light">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      className="service-icon-image"
                      icon={faCity}
                      size="3x"
                    />
                  </div>
                  <Card.Title className="text-info">
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
            <Col className="col-md-6 col-sm-12 col-xs-12 col-lg-4 mb-3">
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
            <Col className="col-md-6 col-sm-12 col-xs-12 col-lg-4 mb-3">
              <Card>
                <Card.Body className="bg-warning">
                  <div className="service-icon">
                    <FontAwesomeIcon
                      className="service-icon-image"
                      icon={faChargingStation}
                      size="3x"
                    />
                  </div>
                  <Card.Title className="text-info">
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
